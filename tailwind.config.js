/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'lavender': {
          50: '#fff1f6',
          100: '#ffe4ef',
          200: '#ffc9df',
          300: '#ffa1c7',
          400: '#ff70a9',
          500: '#ff3d8b',
          600: '#ff1f6d',
          700: '#eb0054',
          800: '#c70048',
          900: '#a3003c'
        },
        'pink': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843'
        },
        'mint': {
          600: '#ff3d8b',
          700: '#ff1f6d',
          800: '#eb0054',
          900: '#c70048'
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        fadeInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
      },
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      });
    }
  ],
}

