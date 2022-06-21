### 一、两者区别

区别一：

`data`不需要用户（开发者）传值，自身维护

`props`需要用户（开发者）传值

区别二：

1、data上的数据都是可读可写的，

2、props上的数据只可以读的，无法重新赋值



### 二、props为什么不能修改

因为Vue是[单向数据流](https://so.csdn.net/so/search?q=单向数据流&spm=1001.2101.3001.7020)，为了保证数据的单向流动，便于对数据的追踪，出现了错误可以更加迅速的定位到错误发生的位置。

```
所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。
额外的，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。
```



### 三、Vue是如何监控props属性被子组件修改并给出警告的

在组件 initProps 方法的时候，会对props进行defineReactive操作，传入的第四个参数是自定义的set函数，该函数会在触发props的set方法时执行，当props修改了，就会运行这里传入的第四个参数，然后进行判断，如果不是root根组件，并且不是更新子组件，那么说明更新的是props，所以会警告。

```javascript
if (process.env.NODE_ENV !== 'production') {
  var hyphenatedKey = hyphenate(key);
  if (isReservedAttribute(hyphenatedKey) ||
      config.isReservedAttr(hyphenatedKey)) {
    warn(
      ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
      vm
    );
  }
  defineReactive$$1(props, key, value, function () {
    if (!isRoot && !isUpdatingChildComponent) {
      warn(
        "Avoid mutating a prop directly since the value will be " +
        "overwritten whenever the parent component re-renders. " +
        "Instead, use a data or computed property based on the prop's " +
        "value. Prop being mutated: \"" + key + "\"",
        vm
      );
    }
  });
}
```

需要注意，当从子组件修改的prop属于基础类型时会触发提示。 这种情况下，你是无法修改父组件的数据源的， 因为基础类型赋值时是值拷贝。 当修改引用类型的属性时不会触发提示，并且会修改父组件数据源的数据。