/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        card: "16px",
        profile: "24px"
      },
      colors: {
        walletBg: "#000000",
        walletCard: "#111111"
      }
    }
  },
  plugins: []
}
