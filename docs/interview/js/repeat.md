实现重复函数repeat
1、利用数组的join方法

```
function repeat(basic, num){
	return (new Array(num + 1)).join(basic) 
}
```

2、递归方法

```
function repeat(basic, num){
	return num > 0 ? basic.concat(repeat(basic, --num)) : ''
}
```

