module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react-native/no-inline-styles': 'off',
        'react/no-unstable-nested-components': 'off',
      },
    },
  ],
};
