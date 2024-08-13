/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        Righteous:['Righteous'],
        Roboto:['Roboto']
      },
      colors:{
        primary:'#3b82f680',
        lemon:'#00FF66',
        skyBlue:'#CBE4E8',
        
      },
      fontSize:{
        
        xSmall:'6px',
        small:'10px'

      },
      
      screens:{
        'more_md':'800',
        'xsmall':'450px'
      }
    },
  },
  plugins: [],
}

