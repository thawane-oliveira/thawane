/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      height: {
        '1/10': '10%'
      },
      width: {
        '3/10': '29%',
        '1/10': '12%',
        'x': '45%',
        '15': '15%'
      },
      colors: {
        'newpink': '#f4acb7',
        'lavender': '#9966CC',
        'test': '#E7E1FF'
      },
      screens: {
        'xsm': '360px',
        'hsm': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        // 'xl': '1200px',
        // 'print': {'raw': 'print'}
      },
    },
  },
  plugins: [require("daisyui")],
}

