module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:jsx-a11y/recommended', // Accessibility rules
    'prettier', // Prettier config (for disabling incompatible ESLint rules)
  ],
  plugins: [
    '@typescript-eslint', // TypeScript plugin
    'react', // React plugin
    'react-hooks', // React hooks plugin
    'jsx-a11y', // Accessibility plugin
  ],
  rules: {
    // Add your custom ESLint rules here
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
