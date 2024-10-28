/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'symbols': "url(./src/assets/images/background.svg)",
        
      },
      fontFamily: {
        jb: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        spin360twice: 'spin360twice 1s ease-in-out forwards',
        appearance: 'appearance 3s ease-in-out infinite',
        wheel: 'wheel 2s infinite'
      },
      keyframes: {
        spin360twice: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(720deg)' },
        },
        appearance: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        wheel: {
          'to': {
            opacity: 0,
            top: 60
          }
        }
      },
      
    },
    screens: {
      xxs: '310px',
      xs: '370px',
      sm: '450px',
      md: '576px',
      lg: '768px',
      xl: '992px',
      '2xl': '1370px',
      '3xl': '1630px',
      '4xl': '1795px',
    },
    container: {
      screens: {
        '2xl': '900px'
      }
    }
  },
  plugins: [],
}

