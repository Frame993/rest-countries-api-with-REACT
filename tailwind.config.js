/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // extend: {
    colors: {
      "background": "var(--background)",
      "card-background": "var(--card-background)",
      "text": "var(--text)",
      "text-secundary-text":"var(--text-secundary-text)",
    },
    // },
  },
  plugins: [],
};
