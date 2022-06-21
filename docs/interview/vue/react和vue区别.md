1、vue封装了许多指令供用户使用，提高开发效率。react更注重"原生性",都是通过社区完成生态。

2、vue通过template更接近原生html的模板，结合指令方便开发，需要编译后渲染。react通过jsx更接近js的方式渲染生成html。

3、vue通过数据劫持来实现响应式数据。react通过setState修改数据，判断数据改变来刷新视图更新。

4、react的render函数是支持闭包特性的，所以我们import的组件在render中可以直接调用。而vue组件import

进来后，需要进行组件注册，才能在模版中使用。

组件注册：https://juejin.cn/post/6844903856103489544

