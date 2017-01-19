module.exports = (config) => [
  require('stylelint')(),
  require('postcss-cssnext')({
    browsers: 'last 2 versions',
    features: {
      customMedia: {
        extensions: {
          '--phone-down': '(max-width: 767px)',
          '--tablet-up': '(min-width: 768px)',
          '--tablet-down': '(max-width: 991px)',
          '--desktop-up': '(min-width: 992px)',
        },
      },

      customProperties: {
        variables: {
          maxWidth: '50vr',

          // Colors
          colorPrimaryDark: '#005139',
          colorPrimary: '#198565',
          colorPrimaryLight: '#55AA90',
          colorSecondaryDark: '#22846C',
          colorSecondary: '#46BE77',
          colorNeutralDark: '#111',
          colorNeutral: '#8C8D91',
          colorNeutralLight: '#FBFCFC',
          colorText: '#555',
          colorInvertedText: 'rgb(251, 254, 253)',
        },
      },
    },
  }),
  require('postcss-lh')({ rhythmUnit: 'vr' }),
  require('postcss-reporter')(),
  ...!config.production ? [
    require('postcss-browser-reporter')(),
  ] : [],
];
