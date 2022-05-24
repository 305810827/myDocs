# **Vue组件之间通信方式有哪些**

#### 一、父子组件通讯

1、props，emit

父组件可以通过props给子组件传递变量。子组件可以通过emit派发自定义事件，使父组件可以获得事件函数传递过来的形参。

2、$parent、$children、ref

父组件可以通过$children获取子组件，从而获取子组件的属性和方法。vue3已不支持$children，但是父组件还可以通过$refs来获取子组件实例来获取子组件的属性和方法。而子组件也可以通过$parent来获取父组件的属性和方法。



#### 二、兄弟组件通讯

1、$parent、$root

通过父组件桥接传值通讯。

2、eventbus

vue2可以通过构造一个vue实例对象，通过调用vue.$emit派发事件，$on监听事件来实现兄弟组件的通讯，$off解除事件绑定。但是在vue3中废弃了$on方法，推荐使用第三方库mitt

3、vuex



#### 三、跨层级组件通讯

1、provide、inject

这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。

`provide `

- 一个对象或返回一个对象的函数。该对象包含可注入其子孙的属性。在该对象中你可以使用 ES2015 Symbols 作为 key，但是只在原生支持 Symbol 和 Reflect.ownKeys 的环境下可工作。

`inject` 

- 一个字符串数组
- 一个对象

2、$attrs

包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (`class` 和 `style` 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (`class` 和 `style` 除外)，并且可以通过 `v-bind="$attrs"` 传入内部组件——在创建高级别的组件时非常有用。

3、eventbus

4、vuex



#### 四、另外

1、slot

2、mixin