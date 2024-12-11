module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  root: true,
  settings: {
    'import/resolver': {
      typescript: './tsconfig.json',
      node: {
        paths: ['.'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
    react: { version: 'detect' },
  },
}
