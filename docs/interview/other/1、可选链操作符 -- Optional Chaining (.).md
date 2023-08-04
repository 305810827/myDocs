### 1、可选链操作符 -- Optional Chaining (?.)

减少访问深层对象时判断属性存不存在的问题。

```javascript
a = {
  b: {
    c: {
      d: {
        e: 1
      }
    }
  }
}
// 必须检查属性是否存在于每个级别，以避免出现Cannot read property ‘’of undefiend 这种错误。
// 以前  
if(a && a.b && a.b.c && a.b.c.d) console.log(a.b.c.d.e)
// 现在
console.log(a?.b?.c?.d?.e)
```

可选链中的 ? 表示如果问号左边表达式有值, 就会继续查询问号后面的字段。根据上面可以看出，用可选链可以大量简化类似繁琐的前置校验操作，而且更安全。注意：?. 不能用来赋值.

### 2、空值合并运算符 -- Nullish Coalescing (??)

在取一个对象里面的属性，如果这个属性没有值，我们会这样给他一个默认值

```javascript
let a={
  b:1,
  d:0
}
console.log(a.b) // 1
//对象里面没有这个属性的时候，他一个默认值
console.log(a.c || 2) // 2
console.log(a.d || 2) // 2

//ES2020 的 ?? 空值合并操作符
console.log(a.d??2);  // 0
```

??是一个逻辑运算符。当左侧操作数为 null 或 undefined 时，其返回右侧的操作数。否则返回左侧的操作数。

?. 和 ?? 搭配使用

```javascript
let a={
  b: {
    c: 1
  }
}
console.log(a?.b?.d ?? 2) // 2
```

### 3、BigInt

关于js的浮点数的一个精度问题，典型问题： 0.1+0.2！= 0.3  

![img](https://img-blog.csdnimg.cn/20200908095159426.png)

JavaScript 中 Number 类型只能安全的表示-(2^53 -1)至 2^53 -1 范的值，即 Number.MIN_SAFE_INTEGER 至 Number.MAX_SAFE_INTEGER，超出这个范围的整数计算或者表示会丢失精度。

```javascript
//number最大值
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991
```

**ES2020 提供一种新的数据类型：BigInt。使用 BigInt有两种方式：**

**1、在整数字面量后面加n。**

```javascript
let bigIntNum1=9007199254740999n;
console.log(typeof bigIntNum1)//bigint
```

**2、使用 BigInt 函数。**  

```javascript
let bigIntNum2=BigInt(90071992547409999);
console.log(typeof bigIntNum2)//bigint

let BigNum=bigIntNum1+bigIntNum2;
console.log(BigNum.toString())//99079191802150999
```

注意:

1、BigInt 是一种新的数据原始（primitive）类型。注意标准数字与BigInt 数字不能混合使用。

```javascript
typeof 9007199254740993n; // -> 'bigint'
```

2、尽可能避免通过调用函数 BigInt 方式来实例化超大整型。因为参数的字面量实际也是 Number 类型的一次实例化，超出安全范围的数字，可能会引起精度丢失。 

### 4、动态导入 -- dynamic import

在项目中，可以配合async / await在需要时import动态导入依赖项，可以在初始化的时候不全部加载逻辑资源，只进行按需加载。

```javascript
// demo.js 导出模块:
export const sum=(num1,num2)=>num1+num2;

// main.js
let fun=async(num1,num2)=>{
  let model=await import('./demo.js');
  console.log(model.sum(num1,num2),"两个数的和")
}
fun(8,9)//17 "两个数的和"

或者
// main.js
import('./demo.js')
    .then(model => {
      console.log(model.sum(num1,num2),"两个数的和")
    })
    .catch(err => {
      console.log(err)
    });
});
```



### 5、globalThis

JavaScript 在不同的环境获取全局对象有不同的方式，NodeJS 中通过 global, Web 中通过 window, self 等，有些甚至通过 this 获取，但通过 this 是及其危险的，this 在 JavaScript 中异常复杂，它严重依赖当前的执行上下文，这些无疑增加了获取全局对象的复杂性。

- 全局变量 window：是一个经典的获取全局对象的方法。但是它在 Node.js 和 Web Workers 中并不能使用

- 全局变量 self：通常只在 Web Workers 和浏览器中生效。但是它不支持 Node.js。

- 全局变量 global：只在 Node.js 中生效


```javascript
// worker.js
console.log(globalThis === self) //true
// node.js
console.log(globalThis === global) //true
// 浏览器
console.log(globalThis === window) //true
```



### 6、Promise.allSettled

都知道 Promise.all 具有并发执行异步任务的能力。但它的最大问题就是如果其中某个任务出现异常(reject)，所有任务都会挂掉，Promise 直接进入 reject 状态。

使用Promise.allSettled，它会创建一个新的promise，在所有promise完成后返回一个包含每个promise结果的数组。

```javascript
let a= new Promise((resolve,reject)=>{
  //异步操作...
  resolve({ code: 200,msg:"请求成功"})
})
let b= new Promise((resolve,reject)=>{
  //异步操作...
  resolve({ code: 200,msg:"请求成功"})
})
let c= new Promise((resolve,reject)=>{
  //异步操作...
  reject({ code: 500,msg:"服务器出现异常"})
})

// 使用进行并发请求
// 1.Promise.all
Promise.all([a,b,c])
.then((res) => {
    // 只有 上面所有的请求都是 resolve (成功) 的时候才会进入此回调中
    console.log(res,"res")
}).catch((error) => {
    // 上面的请求中，只要有一个是reject (失败) 就会进入此回调
    console.log(error,"error")
})

// 2.Promise.allSettled
Promise.allSettled([a,b,c]).then((data=>{
  console.log(data,"data")
}))
// 返回的一个对象数组 ，每一个对象 {status: "fulfilled | rejected" value: { code: 500,msg:"请求成功"} }
```



### 7、String.prototype.matchAll

返回一个包含了所有匹配结果以及其捕获组的迭代器。

```javascript
const tweet = "#JavaScript is full of #surprises. Both good and bad ones #TIL";

for (h of tweet.matchAll(/(#\\w+)/g)) {
  console.log(h);
}
// ["#JavaScript", "#JavaScript", index: 0, input: "#JavaScript is full of #surprises. Both good and bad ones #TIL", groups: undefined]
// ["#surprises", "#surprises", index: 23, input: "#JavaScript is full of #surprises. Both good and bad ones #TIL", groups: undefined]
// ["#TIL", "#TIL", index: 58, input: "#JavaScript is full of #surprises. Both good and bad ones #TIL", groups: undefined]

// 或者使用解构运算符
const tags = [...tweet.matchAll(/(#\\w+)/g)]
const result = tags.map(match => match[1]);
result  // ["#JavaScript", "#surprises", "#TIL"]
```

### 8、for-in 的遍历顺序

​		该提议与在循环中迭代元素的顺序和语义有关。在提出这个之前，大多数JavaScript引擎已经应用了常识，所有主流浏览器都按照定义它们的顺序遍历对象的属性。但是，有些细微差别。这些主要涉及更高级的功能，例如代理。for..in循环语义从一开始就没有包含在JavaScript规范中，但是该提议可确保每个人在for..in工作方式上都具有一致的参考点。

### 9、import.meta

如果要从浏览器中运行的JavaScript模块导入相对路径，则可以让import.meta这样做：

```
// Will import cool-image relative to where this module is running.
const response = await fetch(new URL("../cool-image.jpg", import.meta.url));
```


此功能对开发第三方库的作者那可是非常有用了，因为他们不知道他们的代码将在什么地方以什么方式运行的。