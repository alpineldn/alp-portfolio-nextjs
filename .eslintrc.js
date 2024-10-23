module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'next',
    'prettier', // This should be here
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // Disable the no-unused-vars rule globally
    '@typescript-eslint/no-empty-object-type': 'off', // Disable the no-empty-object-type rule
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
