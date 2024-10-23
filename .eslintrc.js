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
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off', // Disable the rule globally
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
