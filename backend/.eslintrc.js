module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  plugins: ['@typescript-eslint']
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
  }
}
