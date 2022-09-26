/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: 'jit',
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mm': '375px',
        'mb': '425px',
        'tb': '768px',
        'lt': '1024px',
        'ltl': '1440px',
        '4k': '2560px'
      },
      colors: {
        "gray1": "#171717",
        "gray2": "#212121",
        "gray3": "#4f4f4f",
        "gray4": "#828282",
        "gray5": "#f2f2f2",
        "green1": "#27AE60",
        "linear1from": "#FF745B",
        "linear1to": "#E3398B",
        "radial1from": "#7634AA",
        "radial1to": "#23884E",
        "radial2from": "#242424",
        "radial2to": "#23884E",
        "radial3from": "#1F8A4C",
        "radial3to": "#1D1F22",
        "gray2/70": "rgba(33,33,33,0.7)",
        "gray5/30": "rgba(242,242,242,0.3)"
      },
      fontFamily: {
        "work-sans": ["Work Sans", ...defaultTheme.fontFamily.sans],
        "dm-sans": ["DM Sans", ...defaultTheme.fontFamily.sans],
        "lato": ["Lato", ...defaultTheme.fontFamily.sans],
        "inter": ["Inter", ...defaultTheme.fontFamily.sans],
        "poppins": ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '1%': '1%',
        '2%': '2%',
        '3%': '3%',
        '4%': '4%',
        '5%': '5%',
        '6%': '6%',
        '7%': '7%',
        '8%': '8%',
        '9%': '9%',
        '10%': '10%',
      }
    },
  },
  plugins: [],
}