你好，我在参考 徐鹏跃 大佬的文章后整理的《[V8 Promise 源码全面解读](https://link.zhihu.com/?target=https%3A//juejin.cn/post/7055202073511460895)》中在末尾充分的描述了上述代码的执行过程，有兴趣可以看看。

为了方便描述，将上面的代码转化为下面这样

```js
let p1 = Promise.resolve()
let p2 = p1.then(() => {
    console.log(0);
    let p3 = Promise.resolve(4)
    return p3;
})
let p4 = p2.then((res) => {
    console.log(res)
})

let p5 = Promise.resolve()
let p6 = p5.then(() => {
    console.log(1);
})
let p7 = p6.then(() => {
    console.log(2);
})
let p8 = p7.then(() => {
    console.log(3);
})
let p9 = p8.then(() => {
    console.log(5);
})
let p10 = p9.then(() => {
    console.log(6);
})
```

 1、先执行所有的同步代码，执行过程如下面的注释

```js
let p1 = Promise.resolve()
// 1. p1 的状态为 fulfilled

let p2 = p1.then(() => {
    console.log(0);
    let p3 = Promise.resolve(4)
    return p3;
})
// 2. 因为 p1 的状态已经是 fulfilled，所以调用 then 后立即将 onFulfilled 放入 microtask 队列
// 此时 microtask 只有p1的 onFulfilled： [p1.onFulfilled]

let p4 = p2.then((res) => {
    console.log(res)
})
// 3. p2的状态还是 pending，所以调用 then 后是为 p2 收集依赖，
// 此时 p2 的 reactions 如下
/*{
    onFulfilled: (res) => {console.log(res)},
    onRejected: undefined
}*/


let p5 = Promise.resolve()
// 4. p5 的状态为 fulfilled

let p6 = p5.then(() => {
    console.log(1);
})
// 5. 同第2步，将 onFulfilled 加入 microtask 队列
// 此时 microtask 是： [p1.onFulfilled, p5.onFulfilled]

let p7 = p6.then(() => {
    console.log(2);
})
// 6. 同第3步，是给 p6 添加 reactions

let p8 = p7.then(() => {
    console.log(3);
})
// 7. 同上，是给 p7 添加 reactions

let p9 = p8.then(() => {
    console.log(5);
})
// 8. 同上，是给 p8 添加 reactions

let p10 = p9.then(() => {
    console.log(6);
})
// 9. 同上，是给 p9 添加 reactions
```

 当同步代码执行完成后，microtask 队列只有 

 [p1.onFulfilled, p5.onFulfilled]  



2、然后取出 p1.onFulfilled 来执行，此时输出 `0`，但是发现 p1.onFulfilled 返回值的 p3 是一个 Promise 对象。所以会执行 ResolvePromise 的 Enqueue 代码块，里面会调用 NewPromiseResolveThenableJobTask 产生一个微任务，这个微任务的要做的事情就是调用 p3 的then方法，然后在其处理函数执行时调用p2的resolve函数，翻译成js大致就是下面这样  

```js
let promiseResolveThenableJobTask = () => {
    p3.then((value) => { 
        ReslovePromise(p2, value) 
    })
}
```

 然后将其加入 microtask 队列， 这时 microtask 队列就变成了 : 

```
[p5.onFulfilled, promiseResolveThenableJobTask]
```



  3、继续取出 p5.onFulfilled 执行，此时输出 `1`，因为 p5.onFulfilled 返回值是 undefined，所以就将 undefined 作为 p6 的值，然后将 p6 的状态变为 fulfilled。  因为 p6 的状态被改变，所以它的 reactions 也会加入 microtask 队列，这时 microtask 队列就变成这样： `[promiseResolveThenableJobTask，p6.onFulfilled]` 



4、同样是取 promiseResolveThenableJobTask 执行，因为 promiseResolveThenableJobTask 的内容是下面这样  

```js
let promiseResolveThenableJobTask = () => {
    p3.then((value) => { 
        ReslovePromise(p2, value) // ReslovePromise 的作用上面有介绍
    })
}
```

 所以执行 promiseResolveThenableJobTask 时就相当于执行了 `p3.then((value) => {ReslovePromise(p2, value)})` 因为 p3 的状态是 fulfilled ，所以会将其 onFulfilled 加入 microtask 队列（参数就是未来 p2 的值 4，也是现在p3的值，所以说其作用就是将p3的value同步给p2），这时 microtask 队列就变成这样： 

```
[p6.onFulfilled，p3.onFulfilled]
```



5、同样是取 p6.onFulfilled 执行，然后输出 2 并将其返回值 undefined 设置为 p7 的值，并将 p7 变为 fulfilled 状态，所以 p7 的 reactions 也会加入 microtask 队列，这时 microtask 队列就变成这样： 

```
[p3.onFulfilled，p7.onFulfilled]
```



6、p3.onFulfilled 出队执行，p3.onFulfilled 是 `(value) => {ReslovePromise(p2, value)}`, 参数 value 是 4，所以此时就执行 ReslovePromise(p2, 4),这就相当于调用了 p2 的 resolve。  所以此时 p2 的 值变为 4， 状态为变 fulfilled，然后将其 reactions 挨个加入 microtask 队列，这时 microtask 队列就变成这样： 

```
[p7.onFulfilled，p2.onFulfilled]
```



   7、p7.onFulfilled 出队列执行，输出 3，p8 状态变为 fulfille，值变为 undefined，然后 p8.onFulfilled 加入队列

```
[p2.onFulfilled，p8.onFulfilled]
```



  8、p2.onFulfilled 出队列执行，输出 4，因为 p2 没有被在此调用 then 方法，所以就没有产生下一个 Promise 对象以及需要放入 microtask 队列的处理函数，所以也就没有后序了。  

```
[p8.onFulfilled]
```





https://www.zhihu.com/question/453677175
https://juejin.cn/post/6953452438300917790