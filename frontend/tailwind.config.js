module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Tailwind pretražuje sve React datoteke za klase
  ],
  theme: {
    extend: {}, // Možeš ovdje dodavati prilagođene stilove ako treba
  },
  plugins: [], // Ako koristiš Tailwind dodatke, dodaj ih ovdje
}
