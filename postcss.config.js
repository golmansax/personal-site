function calcVerticalRhythm(vr, unit) {
  // Ghetto trick to avoid endless decimals
  // https://coderwall.com/p/rca5gq/javascript-painless-decimal-multiplication
  const rem = ((10 * LINE_HEIGHT_RATIO) * vr) / 10;

  switch (unit) {
    case 'rem': return `${rem}rem`;

    case 'px': return `${rem * 16}px`;

    default: throw new Error('Unit is invalid');
  }
}

module.exports = (config) => [
  require('stylelint')(),
  require('postcss-vertical-rhythm'),
  require('postcss-cssnext')({
    browsers: 'last 2 versions',
    features: {
      customProperties: {
        variables: {
          maxWidth: '60rem',
          colorPrimaryDark: '#005139',
          colorPrimary: '#198565',
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
  require('postcss-reporter')(),
  ...!config.production ? [
    require('postcss-browser-reporter')(),
  ] : [],
];
