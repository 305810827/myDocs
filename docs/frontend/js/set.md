# Set 对象

**`Set`** 对象允许你存储任何类型的唯一值，无论是[原始值](javascript:if(confirm('https://developer.mozilla.org/en-US/docs/Glossary/커뮤니티  \n\n该文件无法用 Teleport Ultra 下载, 因为 它是一个域或路径外部被设置为它的启始地址的地址。  \n\n你想在服务器上打开它?'))window.location='https://developer.mozilla.org/en-US/docs/Glossary/커뮤니티')或者是对象引用。

## 语法

```
new Set([iterable]);
```

##### 参数

- iterable

  如果传递一个[可迭代对象](javascript:if(confirm('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of  \n\n该文件无法用 Teleport Ultra 下载, 因为 它是一个域或路径外部被设置为它的启始地址的地址。  \n\n你想在服务器上打开它?'))window.location='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of')，它的所有元素将被添加到新的 **Set**中。如果不指定此参数或其值为null，则新的 **Set**为空。

- 返回值一个新的Set对象。

## 简述

`Set`对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。

##### 值的相等

因为 Set 中的值总是唯一的，所以需要判断两个值是否相等。判断相等的算法与严格相等（===操作符）不同。具体来说，对于 Set ， +0 （+0 严格相等于-0）和-0是不同的值。尽管在最新的 ECMAScript 6规范中这点已被更改。从Gecko 29.0和 [recent nightly Chrome](javascript:if(confirm('https://code.google.com/p/v8/issues/mozbrowserloadstart  \n\n该文件无法用 Teleport Ultra 下载, 因为 它是一个域或路径外部被设置为它的启始地址的地址。  \n\n你想在服务器上打开它?'))window.location='https://code.google.com/p/v8/issues/mozbrowserloadstart')开始，Set 视 +0 和 -0 为相同的值。另外，`NaN`和`undefined`都可以被存储在Set 中， `NaN`之间被视为相同的值（尽管 NaN !== NaN）。

## 属性

- [`Set.prototype.size`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/size)

  返回 Set 对象中的值的个数

## 实例方法

- ### [`add(*value*)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/add)

  在`Set`对象尾部添加一个元素。返回该`Set`对象。

- ### [`clear()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)

  移除`Set`对象内的所有元素。

- ### [`delete(*value*)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)

  移除`Set`中与这个值相等的元素，返回`Set.prototype.has(value)`在这个操作前会返回的值（即如果该元素存在，返回`true`，否则返回`false`）。`Set.prototype.has(value)`在此后会返回`false`。

- ### [`entries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/entries)

  返回一个新的迭代器对象，该对象包含`Set`对象中的按插入顺序排列的所有元素的值的`[value, value]`数组。为了使这个方法和`Map`对象保持相似， 每个值的键和值相等。

- ### [`forEach()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)

  按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了`thisArg`参数，回调中的`this`会是这个参数。

- ### [`has(*value*)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/has)

  返回一个布尔值，表示该值在`Set`中存在与否。

- ### [`keys()` ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values)

  与**`values()`**方法相同，返回一个新的迭代器对象，该对象包含`Set`对象中的按插入顺序排列的所有元素的值。

- ### [`values()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/values)

  返回一个新的迭代器对象，该对象包含`Set`对象中的按插入顺序排列的所有元素的值。

- [`Set.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)

  返回一个新的迭代器对象，该对象包含`Set`对象中的按插入顺序排列的所有元素的值。

## 示例

### 使用`Set`对象

```
let mySet = new Set();
mySet.add(1);
// Set(1) {1}
mySet.add(5);
// Set(2) {1, 5}
mySet.add("some text");
// Set(3) {1, 5, "some text"}
mySet.has(1);
// true
mySet.has(3);
// false
mySet.has(5);
// true
mySet.has(Math.sqrt(25));
// true
mySet.has("Some Text".toLowerCase());
// true
mySet.size;
// 3
mySet.delete(5);
// true,  从set中移除5
mySet.has(5);
// false, 5已经被移除
mySet.size;
// 2, 我们刚刚移除了一个值
```

### 迭代Set

```
// 迭代整个set
// 按顺序输出：1, "some text"
for (let item of mySet) console.log(item);
// 按顺序输出：1, "some text"
for (let item of mySet.keys()) console.log(item);
// 按顺序输出：1, "some text"
for (let item of mySet.values()) console.log(item);
// 按顺序输出：1, "some text"
//(键与值相等)
for (let [key, value] of mySet.entries()) console.log(key);
// 转换Set为Array (with Array comprehensions)
var myArr = [v for (v of mySet)]; // [1, "some text"]
// 替代方案(with Array.from)
var myArr = Array.from(mySet); // [1, "some text"]
// 如果在HTML文档中工作，也可以：
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true
// Set和Array互换
mySet2 = new Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]
// 截取  
var intersection = new Set([x for (x of set1) if (set2.has(x))]);
// 用forEach迭代
mySet.forEach(function(value) {
  console.log(value);
});
// 1
// 2
// 3
// 4
```

### 与 `Array 的联系`

```
var myArray = ["value1", "value2", "value3"];
// 用Set构造器将Array转换为Set
var mySet = new Set(myArray);
mySet.has("value1"); // returns true
// 用...(展开操作符)操作符将Set转换为Array
console.log([...mySet]); // 与myArray完全一致
```