/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        oswald: ["Oswald", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
