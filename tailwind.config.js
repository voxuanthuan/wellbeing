module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    keyframes: {
      'fade-in-up': {
        '0%': {
          transform: 'translateY(0)'
        },
        '20%': {
          transform: 'translateY(0)'
        },
        '50%': {
          transform: 'translateY(-36px)'
        },
        '80%': {
          transform: 'translateY(0)'

        },
        '90%': {
          transform: 'translateY(-10px)'
        },
        '100%': {
          transform: 'translateY(0)'
        }
      },
      'hide-and-up-2': {
        '0%': {
          opacity: '0',
        },
        '50%': {
          opacity: '0',
          transform: 'translateX(20px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
      'hide-and-up-3': {
        '0%': {
          opacity: '0',
        },
        '67%': {
          opacity: '0',
          transform: 'translateX(20px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
      //===================================================
      'left-to-right-0': {
        'from': {
          opacity: '0',
          transform: 'translateX(20px)'
        },
        'to': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
      'left-to-right-1': {
        '0%': {
          opacity: '0',
        },
        '50%': {
          opacity: '0',
          transform: 'translateX(20px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
      'left-to-right-2': {
        '0%': {
          opacity: '0',
        },
        '67%': {
          opacity: '0',
          transform: 'translateX(20px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
      'left-to-right-3': {
        '0%': {
          opacity: '0',
        },
        '75%': {
          opacity: '0',
          transform: 'translateX(20px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
      'left-to-right-4': {
        '0%': {
          opacity: '0',
        },
        '80%': {
          opacity: '0',
          transform: 'translateX(20px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
    },
    animation: {
      'fade-in-up': 'fade-in-up 0.5s ease-in',
      'hide-and-up-2': 'hide-and-up-2 1s ease-out',
      'hide-and-up-3': 'hide-and-up-3 1.6s ease-out',
      'left-to-right-0': 'left-to-right-0 0.5s ease-out',
      'left-to-right-1': 'left-to-right-1 1s ease-out',
      'left-to-right-2': 'left-to-right-2 1.5s ease-out',
      'left-to-right-3': 'left-to-right-3 2s ease-out',
      'left-to-right-4': 'left-to-right-4 2.5s ease-out',
    },
    maxWidth: {
      '35': '35px'
    },
    extend: {
      spacing: {
        'heightBody': 'calc(100vh - 64px)',
        'heightMinusWellBeing': 'calc(100% - 240px)',
        'submmitBetween': 'calc(50% - 55px)'
      },
      colors: {
        bvsTeal: '#30CDD7',
        bvsTealLight: '#B4EBF5',
        bvsPeach: '#FF3750',
        bvsOrange: '#F0B4A0',
        bvsBrightYellow: '#FFCB00',
        bvsDrakTeal: '#1E96A5',
        bvsWarmWhite: '#FAF5ED',
        bvsNavy: '#003255',
      },
      backgroundImage: theme => ({
        'keepLearning': "url('/background/keep-learning.png')",
        'give': "url('/background/give.png')",
        'introduction': "url('/background/introduction.png')",
        "takeNotice": "url('/background/take-notice.png')",
        "beActive": "url('/background/be-active.png')",
        "connect": "url('/background/connect.png')",
      }),
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif']
      },
    },

  },
  variants: {
    extend: {
      tableLayout: ['hover', 'focus'],
    },
  },
  plugins: [],
}
