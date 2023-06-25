module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    semi: [2, 'always'],
    'react/no-unescaped-entities': 0,
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
  },
};
