# 基本配置

### eslintrc.js

```
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // 自定义规则，可根据团队规范和个人偏好进行配置
    'no-console': 'off', // 允许使用 console
    'no-debugger': 'off', // 允许使用 debugger
    'vue/html-indent': ['error', 2], // html 缩进两个空格
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3, // 单行最多三个属性
        multiline: {
          max: 1, // 多行只能有一个属性
          allowFirstLine: false, // 允许第一个属性在同一行
        },
      },
    ],
  },
};
```

更多参考：https://eslint.org/docs/latest/use/configure/rules

### prettierrc.js

```
module.exports = {
  semi: true,    // 末尾分号
  trailingComma: 'all',  // 多行逗号分隔有尾逗号
  singleQuote: true,    // 单引号
  printWidth: 120,     // 换行长度
  tabWidth: 2,         // 缩进空格数
};
```

更多参考https://prettier.io/docs/en/configuration.html