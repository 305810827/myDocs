import{_ as i,o as n,c as e,a as s}from"./app-53705635.js";const l={},d=s(`<h3 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> <strong>观察者模式</strong></h3><p>观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，所有依赖它的对象 Observer 都会得到通知。</p><ul><li><p>一个目标者对象 Subject，拥有方法：添加 / 删除 / 通知 Observer；</p></li><li><p>多个观察者对象 Observer，拥有方法：接收 Subject 状态变更通知并处理；</p></li></ul><p>目标对象 Subject 状态变更时，通知所有 Observer。</p><p>代码实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Subject {
    constructor() {
        this.observers = []; //观察者列表
    }
    //添加
    add(observer) {
        this.observers[this.observers.length] = observer;
    }
    //删除
    remove(observer) {
        let idx = this.observers.findIndex(item =&gt; item === observer);
        idx &gt; -1 &amp;&amp; this.observers.splice(idx, 1);
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
        console.log(\`i am \${this.name}\`);
    }
}
//实例化目标者
let subject = new Subject();
//实例化两个观察者
let obs1 = new Observer(&#39;前端&#39;);
let obs2 = new Observer(&#39;后端&#39;);
//向目标者添加观察者
subject.add(obs1);
subject.add(obs2);
// 目标者通知更新
subject.notify();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优势：观察者被动接收更新，时间上解耦，实时接收目标者更新状态。</p><p>缺点：观察者模式并没有实现两个类的完全解耦，目标对象中还维护着观察者列表。从而引出来发布订阅模式，相比于观察者模式多了一个中间调度层，把两者的依赖关系维护起来，让两者完全解耦。</p><h3 id="发布订阅模式" tabindex="-1"><a class="header-anchor" href="#发布订阅模式" aria-hidden="true">#</a> 发布订阅模式</h3><p>发布订阅模式：基于一个事件（主题）通道，希望接收通知的对象 Subscriber 通过自定义事件订阅主题，被激活事件的对象 Publisher 通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。</p><p>发布订阅模式与观察者模式的不同，“第三者” （事件中心）出现。目标对象并不直接通知观察者，而是通过事件中心来派发通知。</p><p>代码实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//事件中心
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
            fnList &amp;&amp; (fnList.length = 0)
        } else {
            fnList.forEach((item, index) =&gt; {
                if (item === fn) fnList.splice(index, 1)
            })
        }
    }
}

let myPubSub = new pubSub()

// 订阅
myPubSub.subscribe(&#39;start&#39;, (a) =&gt; {
    console.log(&#39;start&#39;, a)
})
myPubSub.subscribe(&#39;start&#39;, (a) =&gt; {
    console.log(&#39;start1&#39;, a)
})
let end = (a) =&gt; {
    console.log(&#39;end&#39;, a)
}
myPubSub.subscribe(&#39;end&#39;, end)

//发布
myPubSub.publish(&#39;start&#39;, &#39;hello&#39;)
myPubSub.publish(&#39;end&#39;, &#39;hello&#39;)

//取消订阅
myPubSub.unSubscribe(&#39;start&#39;)
myPubSub.publish(&#39;start&#39;, &#39;hello&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模式的应用" tabindex="-1"><a class="header-anchor" href="#模式的应用" aria-hidden="true">#</a> 模式的应用</h3><p>1、 DOM 事件监听就是 “发布订阅模式” 的典型应用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//事件
let loginBtn = document.getElementById(&#39;#loginBtn&#39;);
//监听回调函数(指定事件)
function notifyClick(){
	console.log(&#39;我被点击了)
}
//添加事件监听
loginBtn.addEventListener(&#39;click&#39;, notifyClick);
//触发点击,事件中心派发指定事件
loginBtn.click();
//取消事件监听
loginBtn.removeEventlistener(&#39;click&#39;, notifyClick);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、jQuery 的 on 和 trigger，$.callback();</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 自定义事件，自定义回调
var callbacks = $.Callbacks() // 注意大小写
callbacks.add(function (info) {
	console.log(&#39;fn1&#39;, info)
})
callbacks.add(function (info) {
	console.log(&#39;fn2&#39;, info)
})
callbacks.add(function (info) {
	console.log(&#39;fn3&#39;, info)
})
//添加完后统一触发。
callbacks.fire(&#39;gogogo&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、Vue 的双向数据绑定</p><p>4、Vue 的父子组件通信 $on/$emit</p><p>5、promise</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var src = &#39;http://www.imooc.com/static/img/index/logo_new.png&#39;
var result = loadImg(src)
result.then(function (img) {
  console.log(&#39;success 1&#39;)
}, function () {    
  console.log(&#39;failed 1&#39;)
})
// then就是一个观察者，等待前一个处理完成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),v=[d];function a(r,c){return n(),e("div",null,v)}const b=i(l,[["render",a],["__file","js设计模式之观察者模式.html.vue"]]);export{b as default};
