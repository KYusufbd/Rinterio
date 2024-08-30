/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'manrope': ['Manrope'],
    },
    
    fontSize: {
      base: ['16px', '24px'],
      "4.5xl" : ['40px', 'auto'],
      'xl' : ['20px', 'auto'],
      "2xl" : ['24px', 'auto'],
      "3xl": ['32px', 'auto'],
    },

    fontWeight: {
      medium: '500',
      bold: '700',
      extrabold: '800'

    },

    extend: {
      colors: {
        "primary": '#abef5f',
        "primary-50": '#abef5f80',
        "primary-20": '#abef5f33',
        "txt-color-1": '#212121',
        "txt-color-2": '#494949',
        "txt-color-3": '#737373',
        "txt-color-4": '#1C1C1C',
        "body-bg": '#F4F4F4',
        "bg-2": '#E7C1D3',
        "bg-3": '#EFDA6E',
        "bg-4": '#A4DAC3',
        "bg-5": '#77AAEA',
        "border-color": '#e9e9e9',
      },

      maxWidth: {
        "page-width": "69rem"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

