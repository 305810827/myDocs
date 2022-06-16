# js的浅拷贝和深拷贝

### js的数据类型

js有两种数据类型：基本数据类型和引用数据类型

基本数据类型：number、string、boolean、undefined、null、symbol

引用数据类型：Array、Function、Object 等

### 栈和堆

栈和堆都是内存中划分出来用来存储的区域。

**栈**是系统自动分配的内存空间，有结构，数据共享，每个区域按一定的次序存放(后进先出)，优点检索快，缺点存在栈中的数据大小与生存期必须是确定的。栈中主要存放基本类型的变量的值以及指向堆中的数组或者对象的地址。

**堆**是系统动态分配的内存空间，没有结构，数据可以任意存放，它是用户存放复杂数据类型(引用类型)的。

### 栈的数据共享

​		int a = 3; int b = 3；编译器先处理int a = 3；首先它会在栈中创建一个变量为a的引用，然后查找有没有字面值为3的地址，没找到，就开辟一个存放3这个字面值的地址，然后将a指向3的地址。接着处理int b = 3；在创建完b的引用变量后，由于在栈中已经有3这个字面值，便将b直接指向3的地址。这样，就出现了a与b同时均指向3的情况。

​		特别注意的是，这种字面值的引用与类对象的引用不同。假定两个类对象的引用同时指向一个对象，如果一个对象引用变量修改了这个对象的内部状态，那么另一个对象引用变量也即刻反映出这个变化。

​		相反，通过字面值的引用来修改其值，不会导致另一个指向此字面值的引用的值也跟着改变的情况。如上例，我们定义完a与 b的值后，再令a=4；那么，b不会等于4，还是等于3。在编译器内部，遇到a=4；时，它就会重新搜索栈中是否有4的字面值，如果没有，重新开辟地址存放4的值；如果已经有了，则直接将a指向这个地址。因此a值的改变不会影响到b的值。

### 基本数据类型值不可变

​		理解了上述的特性，就可以明白为什么基本数据类型的值不可变。例如先定义int a = 3；再令a = 4；这个a = 4其实并不是把栈中的字面值3改为4，只是修改a的引用，使其指向字面值为4的地址。

### 浅拷贝和深拷贝

浅拷贝和深拷贝的使用场景是在复杂数据类型里(引用类型)

####   浅拷贝

```
var object1 = {
    name："jie",
    age: 23
}
var object2 = object1;
object2.age = 100;

console.log(object1)  // { name:"jie",age:100 }
console.log(object2)  // { name:"jie",age:100 }

```

​		由此可见object2 = object1，只是将object1指向对象的地址赋给了object2，当object2 指向的对象的属性object2.age改变时，object1因为指向是同一个对象，所以object1.age也跟着改变

![img](https://img-blog.csdnimg.cn/20190803160301666.png)

所以引用类型不能通过赋值来拷贝副本，这时候就需要浅拷贝。

```javascript
var object1 = {
    name："jie",
    age: 23
}
var object2 = shallowClone(object1);

function shallowClone(object1){
    var object;
    for(var property in object1){
        //hasOwnProperty()函数用于指示一个对象自身(不包括原型链)是否具有指定名称的属性
        if(object1.hasOwnProperty(property)){
            object[property] = object1[property];
        }
    }
    return object;
}

object1.name = xyj;
object1.age = 100;

console.log(object1); //{ name:"xyj", 100 }
console.log(object2); //{ name:"jie", 23 }
```

​		浅拷贝得到的的 object2就是重新创建的新对象。但是浅拷贝只复制一层对象的属性，并不包括对象里面的为引用类型的数据。如果对象里面又有一个对象，用浅拷贝会怎么样?

```javascript
var object1 = {
    name："jie",
    age: 23,
    hobby: ["sing","jump","rap","basketball"]
}
var object2 = shallowClone(object1);

function shallowClone(object1){
    var object;
    for(var property in object1){
        //hasOwnProperty()函数用于指示一个对象自身(不包括原型链)是否具有指定名称的属性
        if(object1.hasOwnProperty(property)){
            object[property] = object1[property];
        }
    }
    return object;
}

object1.name = "xyj";
object1.age = 100;
object1.hobby[0] = "run"

console.log(object1); //{ name:"xyj", 100 hobby: ["run","jump","rap","basketball"]}
console.log(object2); //{ name:"jie", 23 hobby: ["run","jump","rap","basketball"]}
```

​		可以看到修改object1属性里的数组的值，object2的数据也跟着改变，实际上object1的属性hobby内存存放的就是一个指向数组的地址。这就是浅拷贝只复制一层对象的属性，那么这时就需要深拷贝，对对象以及对象的所有子对象进行拷贝。

####   深拷贝

深拷贝就是拷贝对象各个层级的属性，实现思路很简单递归上述浅拷贝，遍历所有属性进行赋值。

```javascript
var object1 = {
    name:"jie",
    age:23,
    hobby:["sing","jump","rap","basketball"]
}

function deepClone(object){
    var objClone = Array.isArray(object)?:[],{};
    //typeof判断null、对象、数组返回的都是object类型
    if(object && typeof object === "object"){
        for(property in object){
            if(object.hasOwnPorperty(property)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(object[property] && typeof object[property] ==="object"){
                    objClone[property] = deepClone(object[property]);
                }
                else{
                    objClone[property] = object[property];
                }
            }
        }    
    }
    return objClone;
}

var object2 = deepClone(object1);

object1.name = "xyj";
object1.age = 100
object1.hobby[0] = "run";

console.log(object1);//{ name:"xyj", 100 hobby: ["run","jump","rap","basketball"]}
console.log(object2);//{ name:"jie", 23 hobby: ["sing","jump","rap","basketball"]}
```

​		typeof判断null、对象、数组返回的都是object类型，null的类型是object，这是由于历史原因造成的。1995年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑null，只把它当作object的一种特殊值。后来null独立出来，作为一种单独的数据类型，为了兼容以前的代码，typeof null返回object就没法改变了。

​		除了递归，我们还可以借用JSON对象的parse和stringify实现深拷贝

```javascript
var object1 = {
    name:"jie",
    age:23,
    hobby:["sing","jump","rap","basketball"]
}

function deepClone(object){
    var objClone = JSON.stringify(object);
    objClone = JSON.parse(objClone);
    return objClone;
}

var object2 = deepClone(object1);

object1.name = "xyj";
object1.age = 100
object1.hobby[0] = "run";

console.log(object1);//{ name:"xyj", 100 hobby: ["run","jump","rap","basketball"]}
console.log(object2);//{ name:"jie", 23 hobby: ["sing","jump","rap","basketball"]}
```

