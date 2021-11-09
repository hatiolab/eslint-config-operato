module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@open-wc', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
    'import/order': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
  },
}
