## **一、vue2响应式设计**

&emsp;&emsp;vue2利用Object.defineProperty来劫持data数据的getter和setter操作，遇到数组和对象必须循环遍历所有的域值才能劫持每一个属性 。

```javascript
Object.keys(data).forEach((prop) => {
    const dep = new Dep();
    Object.defineProperty(data, prop, {
        get () {
            dep.depend();
            return Reflect.get(data, prop);
        },
        set (newVal) {
            Reflect.set(data, prop, newVal);
            dep.notify();
        }
    });
});
```

缺点：1、 无法检测到对象属性的新增或删除 ，需要使用 set 等其他方法。

## 二、Proxy响应式

&emsp;&emsp;vue2响应式不能监听数组，局限于数组的push/pop/shift/unshift/splice/sort/reverse七个方法，vue2会封装这七种方法，使其可以被监听变化。

&emsp;&emsp;而更快的es6中的原生proxy就能解决这些问题，为什么vue3才使用 Proxy ，原因还是浏览器兼容所限。至今IE仍不支持Proxy，所以vue3还是为原始浏览器保留了Object.defineProperty的实现。

&emsp;&emsp;MDN ：Proxy`对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）

&emsp;&emsp;可以理解为在目标对象之前做一层拦截，外部所有的访问都必须通过这层拦截，通过这层拦截可以做很多事情，比如对数据进行过滤、修改或者收集信息之类。

```javascript
let obj = {
   a : 1
}
let proxyObj = new Proxy(obj,{
  get : function (target,prop) {
      return prop in target ? target[prop] : 0
  },
  set : function (target,prop,value) {
      target[prop] = 888;
  }
})
    
console.log(proxyObj.a);        // 1
console.log(proxyObj.b);        // 0
    
proxyObj.a = 666;
console.log(proxyObj.a)         // 888
```

&emsp;&emsp;Proxy构造函数的第一个参数是原始数据data；第二个参数是一个叫handler的处理器对象。Handler是一系列的代理方法集合，它的作用是拦截所有发生在data数据上的操作。这里的get()和set()是最常用的两个方法，分别代理访问和赋值两个操作。

```javascript
const list = [1, 2];

const observer = new Proxy(list, {
	set: function(obj, prop, value, receiver) {
        console.log(`prop: ${prop} is changed!`);
        return Reflect.set(...arguments);
	},
});

observer.push(3);
observer[3] = 4;
```

&emsp;&emsp;Proxy不需要各种hack技术就可以无压力监听数组变化；甚至有比hack更强大的功能——自动检测length。除此之外，Proxy还有多达13种拦截方式，包括construct、deleteProperty、apply等等操作；而且性能也远优于Object.defineProperty。

```javascript
let handler = {
get(target, key){
   if (target[key] === 'object' && target[key]!== null) {
     // 嵌套子对象也需要进行数据代理
     return new Proxy(target[key], hanlder)
   }
   collectDeps() // 收集依赖
   return Reflect.get(target, key)
},
set(target, key, value) {
   if (key === 'length') return true
   notifyRender() // 通知订阅者更新
   return Reflect.set(target, key, value);
}
}
let proxy = new Proxy(data, handler);
proxy.age = 18 // 支持新增属性
let proxy1 = new Proxy({arr: []}, handler);
proxy1.arr[0] = 'proxy' // 支持数组内容变化
```

&emsp;&emsp;Proxy代理目标对象，每个拦截方式与ES6提供的另一个apiReflect的13种静态方法一一对应。二者一般是配合使用的，在修改proxy代理对象时，一般也需要同步到代理的目标对象上，这个同步就是用Reflect对应方法来完成的。例如上面的Reflect.set(target, key, value)同步目标对象属性的修改。

## 三、 Proxy的13种拦截方式

| trap                             | 描述                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| handler.get                      | 获取对象的属性时拦截                                         |
| handler.set                      | 设置对象的属性时拦截                                         |
| handler.has                      | 拦截propName in proxy的操作，返回boolean                     |
| handler.apply                    | 拦截proxy实例作为函数调用的操作，proxy(args)、proxy.call(...)、proxy.apply(..) |
| handler.construct                | 拦截proxy作为构造函数调用的操作                              |
| handler.ownKeys                  | 拦截获取proxy实例属性的操作，包括Object.getOwnPropertyNames、Object.getOwnPropertySymbols、Object.keys、for...in |
| handler.deleteProperty           | 拦截delete proxy[propName]操作                               |
| handler.defineProperty           | 拦截Objecet.defineProperty                                   |
| handler.isExtensible             | 拦截Object.isExtensible操作                                  |
| handler.preventExtensions        | 拦截Object.preventExtensions操作                             |
| handler.getPrototypeOf           | 拦截Object.getPrototypeOf操作                                |
| handler.setPrototypeOf           | 拦截Object.setPrototypeOf操作                                |
| handler.getOwnPropertyDescriptor | 拦截Object.getOwnPropertyDescriptor操作                      |

## 四、Proxy的应用场景
1.  Vue3的数据响应
2.  获取属性对应的值，无该属性或者属性为空返回默认值
3.  实现数组负数索引的访问
4. 缓存
5. 隐藏属性
6. 只读视图

## 五、Proxy的缺点

&emsp;&emsp;大部分浏览器支持Proxy特性，但是一些浏览器或者其低版本不支持Proxy，其中IE、QQ浏览器、百度浏览器等完全不支持，因此Proxy有兼容性问题。也不能像ES6其他特性那样有对应的polyfill解决方案。  