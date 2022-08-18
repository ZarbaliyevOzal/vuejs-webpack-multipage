module.exports = {
  purge: [
    './src/*.html',
    './src/*.js',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '360px'
      },

      lineHeight: {
        11: '2.75rem'
      },

      colors: {
        orange: {
          50: '#f26100',
          100: '#cc5200'
        },
        yellow1: {
          50: '#fffb19',
          100: '#f5f200'
        }
      },

      backgroundImage: theme => ({
        'quick-search': "url(https://picsum.photos/1200/600)",
      }),

      zIndex: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
        1000: '1000',
        9999: '9999',
        99999: '99999',
        999999: '999999'
      },

      width: theme => ({
        '400px': '400px'
      }),

      boxShadow: {
        'dropdown': '0 0 4px 3px rgba(0,0,0,.15)',
        'card': '0 1px 2px 0 rgba(0,0,0,.5)'
      },

      padding: theme => ({
        '1/2': '50%',
        '3/4': '75%',
      })
    },
  },
  variants: {
    extend: {
      margin: ['hover'],
      padding: ['hover']
    },
  },
  plugins: [],
}
