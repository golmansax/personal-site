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
          '--desktop-down': '(max-width: 1199px)',
          '--large-desktop-up': '(min-width: 1200px)',
        },
      },

      customProperties: {
        variables: {
          // This should be slightly smaller than the large-desktop, or else we lose
          // padding at 1200px
          widthMax: '1152px', // 48vr
          widthMaxNarrow: '864px', // 36vr

          radiusDefault: '2px',

          // Colors
          colorPrimaryDark: '#001833',
          colorPrimary: '#001C3C', // Prussian
          colorPrimaryLight: '#003b80',
          colorSecondaryDark: '#c70023',
          colorSecondary: '#EA0029', // Ruby
          colorNeutralDark: '#111',
          colorNeutral: '#8C8D91',
          colorNeutralLight: '#FBFCFC',
          colorText: '#001C3C', // Prussian
          colorLightText: '#888',
          colorInvertedText: '#F2F2F2', // Titanium
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
