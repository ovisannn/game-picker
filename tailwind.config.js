module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gpc:'#00ADB5',
        gpg:'#393E46',
        gpgd:'#222831',
        gpcl:'#AAD8D3',
        gpw:'#EEEEEE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
