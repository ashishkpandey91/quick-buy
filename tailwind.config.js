/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: { 
        "Poppins": ['Poppins', 'sans-serif'] 
    },
    colors: {
      'my-custom-color': '#F97316', // Define your custom color here
    },
    },
  },
  plugins: [],
}

