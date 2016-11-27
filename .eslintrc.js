module.exports = {
  extends: 'golmansax',
  rules: {
    'global-require': 0,
    'import/no-dynamic-require': 1,
    'max-len': [2, 100],
    'no-process-env': 1,
    'no-underscore-dangle': [2, { allow: ['__INITIAL_STATE__'] }],
    'prefer-reflect': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [2, { extensions: ['js'] }],
    'react/sort-prop-types': 0,
  },
};
