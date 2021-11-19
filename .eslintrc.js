module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // require语句在vue.config.js中报错，设置让eslint通过
    '@typescript-eslint/no-var-requires': 'off',
    // 允许any类型通过检测
    '@typescript-eslint/no-explicit-any': 'off',
    // 允许函数通过自动推断确定返回值类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
