/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'manrope': ['Manrope'],
    },
    fontSize: {
      base: ['16px', '24px'],
      "3xl": "32px",
    },
    extend: {
      colors: {
        "primary": '#abef5f',
        "primary-50": '#abef5f80',
        "txt-color-1": '#212121',
        "txt-color-2": '#494949',
        "txt-color-3": '#737373',
        "txt-color-4": '#1C1C1C',
        "body-bg": '#F4F4F4',
      },

      maxWidth: {
        "page-width": "73rem"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

