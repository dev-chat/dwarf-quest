module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0
  }
};
