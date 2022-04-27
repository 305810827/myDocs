首先map方法的几个概述
1、map传入一个fn参数，返回一个由原数组每个元素执行fn后返回值组成的新数组
2、map不改变原数组



模拟的map方法

```javascript
Array.prototype.myMap = function(fn) {
	let newArr = []
	for (let i = 0; i < this.length; i++) {
		let newValue = fn(this[i], i, this)
		newArr.push(newValue)
	}
  return newArr
}
```

