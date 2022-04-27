# call、apply、bind实现

### call的使用

需要传多个参数时，直接后面接着传参数

```
let people = {
    name: '鲁迅'
}
let peopleFn = function (str) {
    return `${str}${this.name}`
}
peopleFn('我叫')  // 我叫
peopleFn.call(people, '我叫') // 我叫鲁迅
```

### call的实现

```
let people = {
    name: '鲁迅'
}
let peopleFn = function (str) {
    return `${str}${this.name}`
}

Function.prototype.myCall = function(context){
		context = context || window
    let arg = [...arguments].slice(1)
    let fn = Symbol('fn')
    context[fn] = this
    let result = context[fn](arg)
		delete context[fn]
		return result
}

peopleFn('我叫')  // 我叫
peopleFn.myCall(people, '我叫') // 我叫鲁迅
```



### apply的使用

与call不同的是，使用数组实现传多个参数

```
peopleFn.apply(people, ['我叫', ',也叫周树人'])
```

### apply的实现

```
let people = {
    name: '鲁迅'
}
let peopleFn = function (str, endStr) {
    return `${str}${this.name}${endStr}`
}

Function.prototype.myApply = function(context, arg){
    if (!Array.isArray(arg)) throw new Error('参数必须为数组')
    context = context || window
    let fn = Symbol('fn')
    context[fn] = this
    let result = context[fn](...arg)
    delete context[fn]
    return result
}
peopleFn.myApply(people, ['我叫',',也叫周树人']) // 我叫鲁迅,也叫周树人
```



### bind的使用

跟call一样接受多个参数，单返回的是一个函数，不会立即执行，返回的函数可以继续传参执行，属于柯里化函数。

```
let people = {
    name: '鲁迅'
}
let peopleFn = function (first, second, third) {
    return `${this.name},${first},${second},${third}`
}


let fn = peopleFn.bind(people, '文学家', '思想家')
fn('革命家') // 鲁迅,文学家,思想家,革命家
```

### bind的实现

```
let people = {
    name: '鲁迅'
}
let peopleFn = function (first, second, third) {
    return `${this.name},${first},${second},${third}`
}

Function.prototype.myBind = function(context){
    context = context || window
    let fn = Symbol('fn')
    let arg = [...arguments].slice(1)
    context[fn] = this
    
    return function () {
         let arg1 = [...arguments]
         let result = context[fn](...arg, ...arg1)
         delete context[fn]
         return result
    }
}
let fn = peopleFn.myBind(people, '文学家', '思想家')
fn('革命家')

```

