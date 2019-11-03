module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base'],
  settings: {
    'import/extensions': [".js", ".jsx", ".ts", ".tsx"],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts", ".tsx"]
    },
    'import/resolver': {
      'node': {
        'extensions': [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}
