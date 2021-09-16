module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 6
  },
  extends: ['prettier'],
  plugins: [],
  // add your custom rules here
  rules: {}
};
