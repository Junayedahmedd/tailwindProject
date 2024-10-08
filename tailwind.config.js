/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px'
    },
    container:{
      center:true,
      padding:'1rem'
    },
    extend: {
    fontFamily: {
      roboto:"'Roboto', sans-serif",
      poopins:"'Poppins', sans-serif"
    },
    colors:{
      'primary' : '#FD3D57'
    }
    },
  },
  plugins: [],
}

  // fontFamily: "Roboto", sans-serif",
      // fontFamily:"Poppins", sans-serif";