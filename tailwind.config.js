/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '1100': '1100px',
        '550': '550px',
        '80': '80px',
        '24': '24rem',
        '13': '5rem',
      },
      height: {
        '128': '50rem'
      },
      width: {
        '3/10': '30%'
      }
    },
  },
  plugins: [],
}

