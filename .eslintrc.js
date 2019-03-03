module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'compat'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.resolve.config.js',
      },
    },
    polyfills: ['fetch', 'promises'],
  },
  rules: {
    'prettier/prettier': 2,
    'compat/compat': 2,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'import/prefer-default-export': 0,
  },
  overrides: [
    {
      files: 'gatsby-*.js',
      env: {
        node: true,
        browser: false,
      },
      rules: {
        'compat/compat': 0,
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        'no-console': 0,
      },
    },
  ],
};
