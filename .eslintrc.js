module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-prettier'],
  parser: 'typescript-eslint-parser',
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  },
  plugins: ['typescript', 'prettier'],
  rules: {
    indent: [2, 2],
    'linebreak-style': [2, 'unix'],
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'no-unused-vars': 0,
    'no-undef': 0,
    'import/extensions': 0,
    'no-restricted-globals': 0,
    'react/jsx-filename-extension': [2, {
      extensions: ['.jsx', '.tsx']
    }],
    'no-console': 2,
    'import/prefer-default-export': 1,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: ['tests/**/*.js', 'tests/**/*.ts', '**/*.test.js', '**/*.test.ts', '**/*.test.jsx', '**/*.test.tsx']
    }],
    'import/no-unresolved': 2,
    'import/order': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js', '.jsx', '.ts', '.tsx'
        ]
      }
    },
  }
};