### Javascript 作用域分类

**「全局作用域」**

每个执行环境只有一个全局作用域，浏览器是 `window`，node.js 为 `global`

```
window.x = 1;
global.x = 1;
```

**「函数作用域」**

每一个函数会单独创建函数作用域

```
function fn() {
  let x = 1;
}
```

**「块级作用域」**

ES6 中增加块级作用域，在 `{}` 中以 `let、const` 声明的变量存在块级作用域

```
{
  let x = 1;
}
```

**「中间作用域」**

ES6 中增加中间作用域，在 **「函数」**且**「函数存在默认值」**时，函数的默认值即为中间作用域

请注意这个作用域，标准里并不含该作用域。如果想详细地了解该作用域，请点击[ES6: Default values of parameters](http://dmitrysoshnikov.com/ecmascript/es6-notes-default-values-of-parameters/#conditional-intermediate-scope-for-parameters 'ES6: Default values of parameters' "ES6: Default values of parameters")

```
function fn(x = 1) {
  console.log(x); // 1，如果 x 无默认值，则是 undefined
  var x = 2; // 不要用let、const去试哈，由于TDZ关系，会报错
  console.log(x); // 2
}
```



### 作用域嵌套

当开始寻找变量时，从自身作用域开始，逐级向上查找，直到全局作用域

```
window.x = 1;

function p() {
  function c() {
    x = 3;
  }
}
```



### 作用域提升

上面提到了在 Javascript 执行前，存在编译过程（预解析），在此过程中会解析**「函数声明」**、**「变量声明」**。

对于变量声明来说，是将 *定义声明* 和 *赋值声明* 分开的

```
var a = 1;

// 可以翻页为
var a; // 定义声明
a = 1; // 赋值声明
```

**「优先顺序」**：函数声明提升**「优先于」**变量声明

```
console.log(fn); // Function
function fn(params) {}
var fn = 2;
```



### TDZ

**「TDZ（Time Dead Zone）」** 在 ES6 中，对 `let、const` 声明时，TDZ 使无法在 `let、const` 赋值语句前访问该变量。



### 闭包

**「闭包」** 函数可以记住、并访问原作用域，即使不在原作用域运行（在非原作用域的地方，但可以访问原作用域变量的功能）

```
function p() {
  const a = 1;
  return function c() {
    console.log(a);
  };
}

const c = p();
c(); // 此时c处于全局作用域，但任然可以访问变量a

// [[Scopes]]; 可以打印下 p.prototype，里面存在 [[ Scopes ]] 属性，可以查看作用域
```

#### IIFE（立即调用函数表达式）

IIFE (**Immediately Invoked Function Expression**)，对于自执行函数，按照闭包的定义，其实 IIFE 严格来说不属于闭包，*因为在 IIFE 函数中，并**「不是在当前作用域以外的地方执行的」***

```
(function () {
  let x = 1;
})(); // 它就是在当前作用域执行的，而不是在外部作用域执行的
```

https://juejin.cn/post/6844904206109769736