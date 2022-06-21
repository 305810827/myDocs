1、状态管理策略

2、state保存公共状态值，实际是一个vue实例，将传过来的state值绑定在options的data中，实现响应式数据

3、mutation修改数据，actions通过调用mutation修改数据(不限于异步操作)

4、mutation为什么不能异步修改数据，因为会造成状态改变的不可追踪，所以需要规范同步便于调试追踪改变记录。

