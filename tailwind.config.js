/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        colorHeaderBtn : "#D5F3FE",
        colorBgCard : "#D5F3FE",
        colorHeadertxt : "#D5F3FE",
        colorHeaderBorder : "#66D3FA",
        colorQuestion : "#66D3FA",
        colorExp : "#233831"
      },
      width : {
        sizeHeader : 480,
        widthText : 616,
        widthTextAbout : 1024,
        widthCard : 383,
        widthContentCard : 800
      },
      height : {
        heightImg : 474,
        heightCard : 664
      },
      fontFamily : {
        title : "Lilita One",
        text : "Inter"
      }
    }
  },
  plugins: []
};