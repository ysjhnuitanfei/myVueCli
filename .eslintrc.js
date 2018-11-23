// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    //不要求使用 === 和 !==
    'eqeqeq': 0,
    //警告在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 1,
    // 不要求箭头函数的参数使用圆括号
    'arrow-parens': 0,
    // 不强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 0,
    //警告出现未使用过的变量
    "no-unused-vars": 1,
    // 禁止在非生成环境出现 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
