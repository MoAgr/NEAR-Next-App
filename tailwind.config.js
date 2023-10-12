/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans'],
      },
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        // Add custom colors here
      },
      textColor: {
        red: '#e74c3c',    // Custom red color
        green: '#27ae60', // Custom green color
        purple:'#702963' // Custom purple color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
