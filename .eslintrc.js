module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'prettier',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'no-console': 1,
    'no-use-before-define': 'off', // disabled due to error when importing React
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': 'off',
    'react/prop-types': [0, { ignore: 'children' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    describe: 'readonly',
    it: 'readonly',
    expect: 'readonly',
    jest: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
  },
};
