# try catch 能捕获到哪些 JS 异常

js线程执行进入了try catch，并在try catch未执行完前，抛出的异常都可以被捕获。

未定义变量

```
try {
	a.b
} catch(e) {
	console.log(e)
}
```

js线程执行进入了try catch，发现a未定义，所以报错，此时满足条件，异常能被捕获。



# 抛出的异常未能捕获的情况

1、语法错误

```javascript
try {
	.
} catch(e) {
	console.log(e)
}
```

console.log(.)属于语法错误，在语法检查阶段就报错了，此时js线程执行还未进入try catch就抛出了异常。



2、异步任务

```
try{
  setTimeout(()=>{
     console.log(a.b); 
  }, 100)
}catch(e){
  console.log('error',e);
}
Uncaught ReferenceError: a is not defined
```

try catch执行完毕之后，才开始执行setTimeout里的函数，异常不能被捕获



3、在 try catch 外执行

```text
try{
   function d(){a.b;}
}catch(e){
   console.log("error",e);
}
d();
Uncaught ReferenceError: a is not defined
```

方法定义在 try catch 代码块里面，但是执行方法在 try catch 外，在执行 d 方法的时候报错，此时 try catch 已经执行完成，111 都已经被执行了，故而无法捕捉异常。



4、promise

promise调用then和catch方法，内部报错被try catch了，报错不再上抛，所以在promise上try catch是无效的，无法捕获内部异常

```
try{
    new Promise(function (resolve, reject) {
        a.b;
    }).then(v=>{
        console.log(v);
    });
}catch(e){
    console.log('error',e);
}
// output
Uncaught (in promise) ReferenceError: a is not defined
```

正确：

```
try{
    await new Promise(function (resolve, reject) {
        a.b;
    }).then(v=>{
        console.log(v);
    });;
}catch(e){
    console.log('error',e);
}
```

```
try{
    new Promise(function (resolve, reject) {
        a.b;
    }).then(v=>{
        console.log(v);
    }).catch(e => {
        console.log(e,'error')
    });
}catch(e){
    console.log('error',e);
}v
```



https://zhuanlan.zhihu.com/p/142932660

