# **v-if和v-for哪个优先级更高？**

结论：

vue2输出的渲染函数是先执行循环，在看条件判断，如果将v-if和v-for写在一个标签内，哪怕只渲染列表中的一小部分，也要重新遍历整个列表，无形造成资源浪费。vue3中则相反，v-if优先级高于v-for，所以两者写在一个标签内，如果v-if使用了v-for循环出来的变量，则会有变量不存在的异常。



场景：

1、过滤列表中的项目。

2、避免渲染本应该被隐藏的列表。



解决：

1、通过compute返回过滤后的列表

2、外面包一层`template`分开v-for和v-if



源码：

vue2

![image-20220516151738376](/Users/xuyanjie/项目/gitRepository/个人/myDocs/docs/image/image-20220516151738376.png)

v2：https://github1s.com/vuejs/vue/blob/HEAD/src/compiler/codegen/index.js#L65-L66



vue3

![image-20220516151847559](/Users/xuyanjie/项目/gitRepository/个人/myDocs/docs/image/image-20220516151847559.png)

v3：https://github1s.com/vuejs/core/blob/HEAD/packages/compiler-core/src/codegen.ts#L586-L587

