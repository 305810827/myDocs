### **观察者模式**

观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，所有依赖它的对象 Observer 都会得到通知。 

- 一个目标者对象 Subject，拥有方法：添加 / 删除 / 通知 Observer；

- 多个观察者对象 Observer，拥有方法：接收 Subject 状态变更通知并处理；

 目标对象 Subject 状态变更时，通知所有 Observer。 

代码实现：

```
class Subject {
    constructor() {
        this.observers = []; //观察者列表
    }
    //添加
    add(observer) {
        this.observers[this.observers.length] = observer;
    }
    //删除
    remove(observer) {
        let idx = this.observers.findIndex(item => item === observer);
        idx > -1 && this.observers.splice(idx, 1);
    }
    //通知
    notify() {
        for (let observer of this.observers) {
            observer.update();
        }
    }
}
//观察者类
class Observer {
    constructor(name) {
        this.name = name;
    }
    // 目标对象更新时触发的回调
    update() {
        console.log(`i am ${this.name}`);
    }
}
//实例化目标者
let subject = new Subject();
//实例化两个观察者
let obs1 = new Observer('前端');
let obs2 = new Observer('后端');
//向目标者添加观察者
subject.add(obs1);
subject.add(obs2);
// 目标者通知更新
subject.notify();
```

优势：观察者被动接收更新，时间上解耦，实时接收目标者更新状态。

缺点：观察者模式并没有实现两个类的完全解耦，目标对象中还维护着观察者列表。从而引出来发布订阅模式，相比于观察者模式多了一个中间调度层，把两者的依赖关系维护起来，让两者完全解耦。



### 发布订阅模式

发布订阅模式：基于一个事件（主题）通道，希望接收通知的对象 Subscriber 通过自定义事件订阅主题，被激活事件的对象 Publisher 通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。

发布订阅模式与观察者模式的不同，“第三者” （事件中心）出现。目标对象并不直接通知观察者，而是通过事件中心来派发通知。

代码实现：

```
//事件中心
class pubSub {
    constructor(){
        this.list = {}
    }

    subscribe (key, fn) {
        if (!this.list[key]) {
            this.list[key] = [fn]
        } else {
            this.list[key].push(fn)
        }
    }

    publish (key) {
        for (let item of this.list[key]) {
            item(...[...arguments].splice(1))
        }
    }
    unSubscribe (key, fn) {
        let fnList = this.list[key]
        if (!fnList) return
        if (!fn) {
            fnList && (fnList.length = 0)
        } else {
            fnList.forEach((item, index) => {
                if (item === fn) fnList.splice(index, 1)
            })
        }
    }
}

let myPubSub = new pubSub()

// 订阅
myPubSub.subscribe('start', (a) => {
    console.log('start', a)
})
myPubSub.subscribe('start', (a) => {
    console.log('start1', a)
})
let end = (a) => {
    console.log('end', a)
}
myPubSub.subscribe('end', end)

//发布
myPubSub.publish('start', 'hello')
myPubSub.publish('end', 'hello')

//取消订阅
myPubSub.unSubscribe('start')
myPubSub.publish('start', 'hello')
```

### 模式的应用

1、 DOM  事件监听就是 “发布订阅模式” 的典型应用： 

```
//事件
let loginBtn = document.getElementById('#loginBtn');
//监听回调函数(指定事件)
function notifyClick(){
	console.log('我被点击了)
}
//添加事件监听
loginBtn.addEventListener('click', notifyClick);
//触发点击,事件中心派发指定事件
loginBtn.click();
//取消事件监听
loginBtn.removeEventlistener('click', notifyClick);
```

2、jQuery 的 on 和 trigger，$.callback();

```
// 自定义事件，自定义回调
var callbacks = $.Callbacks() // 注意大小写
callbacks.add(function (info) {
	console.log('fn1', info)
})
callbacks.add(function (info) {
	console.log('fn2', info)
})
callbacks.add(function (info) {
	console.log('fn3', info)
})
//添加完后统一触发。
callbacks.fire('gogogo')
```

3、Vue 的双向数据绑定

4、Vue 的父子组件通信 $on/$emit

5、promise

```
var src = 'http://www.imooc.com/static/img/index/logo_new.png'
var result = loadImg(src)
result.then(function (img) {
  console.log('success 1')
}, function () {    
  console.log('failed 1')
})
// then就是一个观察者，等待前一个处理完成
```

