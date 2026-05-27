// Vercel Serverless Function: коммитит cards.json в GitHub от имени админки.
// Защита — простой пароль (сравнение с переменной окружения ADMIN_PASSWORD).
// GitHub-токен хранится на сервере (GITHUB_TOKEN env var) и НЕ передаётся в
// браузер — пользователь админки знает только пароль.
//
// Vercel env vars (Settings → Environment Variables):
//   GITHUB_TOKEN     — Personal Access Token с Contents: Read+Write на vzh
//   ADMIN_PASSWORD   — любой пароль для админки
//
// Эндпоинт: POST /api/save-cards
// Body: { "password": "...", "data": <cards.json object> }
// Response: { "ok": true, "sha": "<commit sha>" } | { "error": "..." }

const REPO_OWNER = 'fargustv-cmyk';
const REPO_NAME  = 'vzh';
const FILE_PATH  = 'cards.json';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const adminPassword = process.env.ADMIN_PASSWORD;
  const githubToken   = process.env.GITHUB_TOKEN;

  if (!adminPassword || !githubToken) {
    return res.status(503).json({
      error: 'Server not configured. Set ADMIN_PASSWORD and GITHUB_TOKEN in Vercel env vars.'
    });
  }

  const { password, data } = req.body || {};

  if (!password || password !== adminPassword) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  if (!data || typeof data !== 'object' || !data.profile || !Array.isArray(data.projects)) {
    return res.status(400).json({ error: 'Invalid data shape (expected { profile, projects, ... })' });
  }

  const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
  const ghHeaders = {
    'Authorization': `Bearer ${githubToken}`,
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'vzh-admin'
  };

  try {
    // 1. Get current SHA
    const getRes = await fetch(apiUrl, { headers: ghHeaders });
    if (!getRes.ok) {
      const txt = await getRes.text();
      return res.status(500).json({ error: `GET cards.json failed: ${getRes.status} ${txt.slice(0, 200)}` });
    }
    const meta = await getRes.json();
    const sha = meta.sha;

    // 2. Base64-encode JSON
    const jsonText = JSON.stringify(data, null, 2);
    const content = Buffer.from(jsonText, 'utf-8').toString('base64');

    // 3. PUT new content
    const putRes = await fetch(apiUrl, {
      method: 'PUT',
      headers: { ...ghHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'admin: update cards.json',
        content: content,
        sha: sha
      })
    });
    if (!putRes.ok) {
      const txt = await putRes.text();
      return res.status(500).json({ error: `PUT failed: ${putRes.status} ${txt.slice(0, 200)}` });
    }
    const result = await putRes.json();

    return res.status(200).json({ ok: true, sha: result.commit.sha });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected: ' + String(e.message || e) });
  }
}
