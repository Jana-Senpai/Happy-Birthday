/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./kado/kado.html"],
  theme: {
    extend: {
      fontFamily: {
        josefin: "Josefin Sans",
        poppins: "Poppins",
      },
      colors: {
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
