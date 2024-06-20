module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier',
      'prettier/@typescript-eslint',
      'prettier/react'
    ],
    plugins: ['@typescript-eslint'],
    rules: {
      // your custom rules
    },
  };
  