### 一、定义

​		this是js中的关键字，是一个指针，总是指向调用它的对象，一般是函数被调用时才发生的绑定，没有明确的调用对象的时候，则默认绑定全局对象。

### 二、默认绑定

1、当函数没有明确的调用对象时，自己作为独立函数调用时，this默认指向全局变量（浏览器下是window，node下是global）

```javascript
var a = 1;
function independent(){
   console.log(this)     // window对象
   console.log(this.a);  // 1
}
independent();           //独立函数调用
```

2、再看下面变形的例子，虽然independent1定义在函数里，但是它没有明确的调用对象，所以仍然是默认绑定全局对象。独立函数调用，无论它的位置在哪里，它的行为表现，都和直接在全局环境中调用无异

```javascript
var a = 1;
function independent(){
    console.log(this.a);      // 1
 
    function independent1(){  
        console.log(this.a);  // 1
    }
    independent1();      //独立函数调用
}
independent();
```

3、自调用函数也是一样的

```javascript
var a = 1
(function self() {
    console.log(this);   // window对象
    console.log(this.a); // 1
})();
```

### 三、隐式绑定

1、当函数作为对象的方法被调用时，this指向调用的该函数的对象。

```javascript
var obj = {
  a: 1,
  func: function () {
   console.log(this.a)
  }
}
obj.func(); // 输出1
```

2、函数在哪里定义都不重要，this一般都是在函数调用时才发生绑定，上下的代码效果完全一样。

```javascript
function func() {
   console.log(this.a)
}
var obj = {
  a: 1,
  func: func
}
obj.func(); // 输出1
```

3、看完了this的**默认绑定**和**隐性绑定**， 知道了**this总是指向调用它的对象后，**再看下面的例子就一目了然。

```javascript
var a = 1;
var obj = {
    a:2,
    f1:function independent(){
        console.log(this.a);     // 2   
        function independent1(){
            console.log(this.a); // 1
        }
        independent1();     //独立函数调用
    }
}
obj.f1();
// obj调用了f1函数，f1函数是independent赋给它的，所以f1里面的this指向的是obj，而independent1是在independent里面定义并独立调用，所以independent里的this指向的是window
```

4、在隐式绑定中，如果函数调用位置是在一串对象属性链中，this绑定的是离func最近调用它的对象。

```javascript
var obj = {
    a: 1,
    obj2: {
        a: 2,
        obj3: {
            a:3,
            func: function () {
                console.log(this.a) 
            }
        }
    }
}
obj.obj2.obj3.func(); // 输出3
```

5、再来看最后一个例子，和上面1、2的代码相差无几，结果却不一样了。

```javascript
var a = 1;
var obj = {
    a:2,
    f1:function independent(){
        console.log(this.a);    
    }
}
var f2 = obj.f1;
f2(); // 1
// 这就是隐式绑定会出现的this丢失。上面我提到过this是动态绑定的，一般在函数调用的时候发生绑定，而上述的obj只是个中间桥梁，把f1方法赋给了f2，所以f2和obj对象没有关系，保存只是independent函数，而在f2()进行独立函数调用后，相当于是independent独立函数调用， 从而可知 independent此时的this不是obj，而是window。
```

6、再上面的例子变一下型，还能看出this会不会丢失吗？

```javascript
var a = 1;
var obj = {
    a:2,
    f1:function independent(){
        console.log(this.a);    
    }
}
function f2(func){
    func();
}
f2(obj.f1); // 1 
// obj同样也只是将f1作为f2的参数传入并存在形参func中，然后func直接调用，this指向的仍然是window，输出的a就是1。
```

### 四、显式绑定

​		this的显式绑定就可以解决上述隐式绑定this丢失的问题，显式绑定就是使用call、apply和bind方法将this绑定到你指定的参数对象上。

1、call：函数实例的call方法，可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。call的第一个参数就是this所要指向的那个对象，后面的参数则是函数调用时所需的参数列表(fn.call(obj,data1,data2...,datan))。

```javascript

var a = 1;
var obj = {
    a:2,
    f1:function independent(a,b){
        console.log(a,b)
        console.log(this.a);    
    }
}
var f2 = obj.f1;
f2(4,5);          //4 5 1
f2.call(obj,4,5); //4 5 2
```

2、apply：apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数 (fn.apply(obj,[data1,data2...,datan]))。

```javascript
var a = 1;
var obj = {
    a:2,
    f1:function independent(a,b){
        console.log(a,b)
        console.log(this.a);    
    }
}
var f2 = obj.f1;
f2(4,5);          //4 5 1
f2.apply(obj,[4,5]); //4 5 2
```

3、bind：bind方法用于将函数体内的this绑定到某个对象，bind不执行函数，只返回一个可供执行的函数 。

```javascript
var a = 1;
var obj = {
    a:2,
    f1:function independent(a,b){
        console.log(a,b)
        console.log(this.a);    
    }
}
var f2 = obj.f1;
f2(4,5);          //4 5 1
var f3 = f2.bind(obj,4,5); 
f3()              //4 5 2
```

### 五、使用构造函数时，this的绑定

1、当一个函数用作构造函数时（使用new关键字），它的this被绑定到正在构造的新对象。

```javascript
function People() {
    this.name = '无名'
}
var p1 = new People();
console.log(p1.name)  // 无名
```

2、虽然构造器返回的默认值是this所指的那个对象，但它仍可以手动返回其他的对象（**如果返回值不是一个对象，则返回this对象**）。 

```javascript
function People() {
    this.name = '无名'
    return '小许'       //返回的不是对象
}
var p1 = new People();
console.log(p1.name)   //无名

function People() {
    this.name = '无名'
    return {name:'小许'}  //返回的是对象，
}
var p1 = new People();
console.log(p1.name)   //小许
```

### 六、DOM事件处理函数，this的绑定

当函数被用作事件处理函数时，它的this指向触发事件的元素

```javascript
<button id ="btn">触发点击事件</button>
 
var btn =  document.getElementById('btn');
btn.onclick = function () {
    console.log(this); // btn
}
```

### 七、箭头函数，this的绑定

1、我们一直在讲this一般是函数被调用时才发生的绑定。但是在箭头函数中，它的this是被设置为封闭的词法环境的，换句话说，箭头函数中的this取决于该函数被创建时的环境，不是在执行过程中绑定的。

```javascript
var a = 100;
var obj = {
  a: 1,
  func: () => {
   console.log(this.a)
  }
}
obj.func(); // 输出100
```

2、我们使用显式绑定bind方法也无法将this绑定到obj对象上，因为箭头函数的this是在定义时就绑定的。

```javascript
var a = 100;
var obj = {
  a: 1,
  func: () => {
   console.log(this.a)
  }
}
obj.func.bind(obj)();  //输出100
```

3、我们在函数内定义一个箭头函数，此时this绑定的就是当前函数。

```javascript
var a = 100;
function independent(){
    this.a = 1
    var independent1 = ()=>{console.log(this.a);}
    independent1();      //独立函数调用
}
independent();  //输出1
```

### 八、定时器函数，this的绑定

延时函数内部的回调函数的this指向全局对象window

```javascript
setInterval(function () {
    console.log(this); // window
}, 1000);

function Person() {
    this.name = '无名';
    setTimeout(function () {
        console.log(this);
    }, 3000);
}
var p = new Person(); //3秒后返回 window 对象
```


