module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-prettier'],
  parser: 'typescript-eslint-parser',
  parserOptions: {
    sourceType: "module"
  },
  plugins: ['typescript', 'prettier'],
  rules: {
    indent: [2, 2],
    'linebreak-style': [2, 'unix'],
    quotes: [2, 'single'],
    semi: [2, 'always'],
  },
};