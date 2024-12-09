import withMT from "@material-tailwind/react/utils/withMT";


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'zcool': ['"ZCOOL KuaiLe"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        // Add other font families as needed
      },
      backgroundImage: {
        'landingBg': "url('/App_background.jpg')",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
  ],
}

