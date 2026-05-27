// Validates an admin password against the ADMIN_PASSWORD env var.
// Used by admin.html as a gate before showing the UI. Password is
// not hardcoded in client-side HTML — it lives on the server only.
// POST { password } -> 200 { ok:true } | 401 { error } | 503 { error }
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'POST only' });
  }
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return res.status(503).json({ error: 'Server not configured (ADMIN_PASSWORD missing)' });
  }
  const { password } = req.body || {};
  if (typeof password !== 'string' || !password) {
    return res.status(400).json({ error: 'Missing password' });
  }
  // Constant-time string compare to avoid timing leaks
  const a = password;
  const b = adminPassword;
  let mismatch = a.length === b.length ? 0 : 1;
  const len = Math.max(a.length, b.length);
  for (let i = 0; i < len; i++) {
    mismatch |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  if (mismatch === 0) return res.status(200).json({ ok: true });
  return res.status(401).json({ error: 'Invalid password' });
}
