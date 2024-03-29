### 一、用法

接受一个回调函数作为参数，并将该函数延迟到Dom更新后执行。

```javascript
this.$nextTick(() => {
	console.log('延迟执行函数')
}) 
```

主要解决单一事件更新后需要立即操作dom的场景

### 二、原理

1、vue通过异步队列的方式来控制DOM更新和nextTick回调的先后执行。DOM的更新可能是本次事件循环的最后进行或者是下一次事件循环当中。

2、microtask因为优先特性，能保证队列中的微任务在一次事件循环完前被执行完毕。

3、当监听到数据发生变化时不会立即更新DOM，而是开启一个任务列表，并缓存同一个事件循环中发生的所有的数据变更，好处是将多次数据更新合并成一次，减少更新DOM的次数。

4、将传入的回调函数包装成异步方法延迟其执行顺序，至于封装为微任务还是宏任务取决于环境。