/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'manrope': ['Manrope'],
    },
    extend: {
      colors: {
        "txt-color-1": '#212121',
        "txt-color-2": '#494949',
        "body-bg": '#F4F4F4',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

