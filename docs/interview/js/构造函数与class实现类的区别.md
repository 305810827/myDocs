## 构造函数与class实现类的区别

首先聊聊ES6 class定义的类和用构造函数new出来的类的一些不同之处

- class声明提升
- class声明内部会启用严格模式
- class的所有方法都是不可枚举的
- class的所有方法都没有原型对象prototype
- class定义的类不能被当做函数调用

## ES6的class 关键字的实现原理

```javascript
/**
  *ES6的类
  **/
class Parent{
    
    constructor(a){
        this.a = a;
    }

    print(){
        console.log('parent')
    }

}
---------------------------------------Babel 2 ES5------------------------------------------------------
/**
  *ES5来实现ES6的类
  **/
var Parent = /*#__PURE__*/function (a) {
  function Parent() {
    _classCallCheck(this, Parent);
    this.a = a;
  }

  _createClass(Parent, [{
    key: "print",
    value: function print() {
      console.log('parent');
    }
  }]);

  return Parent;
}();
```