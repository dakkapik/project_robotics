// eslint-disable-next-line no-undef
module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'error',
      'react/display-name': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }]
    },
    globals: {
      process: true
    }
  };
  