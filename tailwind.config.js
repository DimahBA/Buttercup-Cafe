/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green': '#CDD8B7',
        'beige': '#FFFBDD',
        'off-white': '#FFFCE4',
        'white': '#FFFDEF',
        'yellow': '#FFE06E',
        'orange': '#F7CFAF',
        'brown': "#DDBEA9",
        'dark-brown': '#6F4E37',
        'green-200': '#ADBA84',
        'blue-200': '#79C0CF',
        'blue': '#ACE3EB',
        'pink-200': '#D99DAE',
      },
      fontFamily: {
        'serif': ['Podkova', 'serif'],
      },
      fontWeight: {
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      keyframes: {
        'accelerated-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'pattern-move': {
          '0%': { 
            backgroundPosition: '0 0' 
          },
          '100%': { 
            backgroundPosition: '64px 64px' 
          }
        },
        'pattern-move-slow': {
          '0%': { 
            backgroundPosition: '0 0' 
          },
          '100%': { 
            backgroundPosition: '128px 128px' 
          }
        }
      },
      animation: {
        'accelerated-spin': 'accelerated-spin 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'linear-spin': 'accelerated-spin 2s linear infinite',
        'pattern-diagonal': 'pattern-move 4s linear infinite',
        'pattern-diagonal-slow': 'pattern-move-slow 8s linear infinite',
      },
      backgroundImage: {
        'pattern': "url(\"data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23ddbea9' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}