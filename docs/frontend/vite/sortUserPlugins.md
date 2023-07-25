## 插件顺序[#](https://cn.vitejs.dev/guide/api-plugin.html#plugin-ordering)

一个 Vite 插件可以额外指定一个 `enforce` 属性（类似于 webpack 加载器）来调整它的应用顺序。`enforce` 的值可以是`pre` 或 `post`。解析后的插件将按照以下顺序排列：

- Alias
- 带有 `enforce: 'pre'` 的用户插件
- Vite 核心插件
- 没有 enforce 值的用户插件
- Vite 构建用的插件
- 带有 `enforce: 'post'` 的用户插件
- Vite 后置构建插件（最小化，manifest，报告）



![image](https://camo.githubusercontent.com/3e033daefc73e91165c2bfdc3a6df7b416355bafb7eb2e162c1dfb2237adbb16/687474703a2f2f736861646f77732d6d616c6c2e6f73732d636e2d7368656e7a68656e2e616c6979756e63732e636f6d2f696d616765732f6173736574732f636f6d6d6f6e332f586e6970323032322d30322d32335f31332d32332d32342e6a7067)