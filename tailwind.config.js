/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        colorHeaderBtn : "#D5F3FE",
        colorHeadertxt : "#D5F3FE",
        colorHeaderBorder : "#66D3FA",
        colorQuestion : "#66D3FA",
      },
      width : {
        sizeHeader : 480
      },
      fontFamily : {
        title : "Lilita One"
      }
    }
  },
  plugins: []
};