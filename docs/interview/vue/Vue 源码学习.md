Vue 源码学习

1、vue使用flow作为javascript的静态类型检查工具

2、vue构建使用了rollup，rollup只打包js文件，对其他静态文件不处理，所有资源放同一个地方，一次性加载，会剔除未使用的代码。相对于webpack（会打包其它css、图片、字体的静态文件）更轻量，能输出更小的文件。

3、new Vue发生了什么

执行了init方法-option的合并、init方法（生命周期、事件、render、state对dataproxy处理、响应式处理）

```javascript
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```

4、vue实例挂载

$mount的实现，分为compiler和render渲染view，compiler版本对el处理为dom，尝试获取render函数，template编译为render函数，添加watcher，用updateComponent方法渲染出view。

