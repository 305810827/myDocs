1、object.defineProperty、reflect.defineProperty

object.defineProperty遇到无法定义的属性时，直接保存，需要套一层try catch。reflect.defineProperty不会报错，会返回false。

reflect.defineProperty第三个参数是目标对象，可以改变this的指向。

2、Proxy 只能够拦截对一个对象的基本操作，不能拦截对一个对象的复合操作

```
const obj = {
    name: 'coboy',
    fn() {
        console.log(this.name, this === p)
    }
}

const p = new Proxy(obj, {
    get(target, key, receiver) {
        return Reflect.get(target, key)
    }
})

p.fn() // 打印 'coboy', true
```

Proxy 只能够拦截对一个对象的基本操作，不能拦截对一个对象的复合操作。调用对象下的方法就是典型的非基本操作，如上面的：p.fn() 实际上调用一个对象下的方法，是由两个基本语义组成的。第一个基本语义是 get，即先通过 get 操作得到 p.fn 属性。第二个基本语义是函数调用，即通过 get 得到 p.fn 的值后再调用它。p 是代理对象，而函数中的 this 是谁调用它，它就指向谁，所以此时 fn 中的 this 就指向了代理对象 p。由于 Proxy 不能拦截对一个对象的复合操作，所以 p.fn() 执行这一动作是无法捕捉的。