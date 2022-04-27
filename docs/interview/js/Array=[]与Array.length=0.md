# Array=[]与Array.length=0的区别

1、Array = []，在内存中创建一个新数组，将数组的引用赋给了变量，原数组值不改变。

```
let foo = [1,2,3]
let foo1 = foo
foo = []
console.log(foo, foo1) // [] [1,2,3]
```

2、Array.length = 0，修改数组本身，没有创建新的数组，改变了原数组的值

```
let foo = [1,2,3]
let foo1 = foo
foo.length = 0
console.log(foo, foo1) // [] []
```

