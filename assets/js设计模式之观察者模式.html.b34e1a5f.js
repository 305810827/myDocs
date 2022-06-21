import{_ as i,e as n}from"./app.659fa32e.js";const e={},s=n(`<h3 id="\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> <strong>\u89C2\u5BDF\u8005\u6A21\u5F0F</strong></h3><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF1A\u5B9A\u4E49\u4E86\u5BF9\u8C61\u95F4\u4E00\u79CD\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5F53\u76EE\u6807\u5BF9\u8C61 Subject \u7684\u72B6\u6001\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u6240\u6709\u4F9D\u8D56\u5B83\u7684\u5BF9\u8C61 Observer \u90FD\u4F1A\u5F97\u5230\u901A\u77E5\u3002</p><ul><li><p>\u4E00\u4E2A\u76EE\u6807\u8005\u5BF9\u8C61 Subject\uFF0C\u62E5\u6709\u65B9\u6CD5\uFF1A\u6DFB\u52A0 / \u5220\u9664 / \u901A\u77E5 Observer\uFF1B</p></li><li><p>\u591A\u4E2A\u89C2\u5BDF\u8005\u5BF9\u8C61 Observer\uFF0C\u62E5\u6709\u65B9\u6CD5\uFF1A\u63A5\u6536 Subject \u72B6\u6001\u53D8\u66F4\u901A\u77E5\u5E76\u5904\u7406\uFF1B</p></li></ul><p>\u76EE\u6807\u5BF9\u8C61 Subject \u72B6\u6001\u53D8\u66F4\u65F6\uFF0C\u901A\u77E5\u6240\u6709 Observer\u3002</p><p>\u4EE3\u7801\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Subject {
    constructor() {
        this.observers = []; //\u89C2\u5BDF\u8005\u5217\u8868
    }
    //\u6DFB\u52A0
    add(observer) {
        this.observers[this.observers.length] = observer;
    }
    //\u5220\u9664
    remove(observer) {
        let idx = this.observers.findIndex(item =&gt; item === observer);
        idx &gt; -1 &amp;&amp; this.observers.splice(idx, 1);
    }
    //\u901A\u77E5
    notify() {
        for (let observer of this.observers) {
            observer.update();
        }
    }
}
//\u89C2\u5BDF\u8005\u7C7B
class Observer {
    constructor(name) {
        this.name = name;
    }
    // \u76EE\u6807\u5BF9\u8C61\u66F4\u65B0\u65F6\u89E6\u53D1\u7684\u56DE\u8C03
    update() {
        console.log(\`i am \${this.name}\`);
    }
}
//\u5B9E\u4F8B\u5316\u76EE\u6807\u8005
let subject = new Subject();
//\u5B9E\u4F8B\u5316\u4E24\u4E2A\u89C2\u5BDF\u8005
let obs1 = new Observer(&#39;\u524D\u7AEF&#39;);
let obs2 = new Observer(&#39;\u540E\u7AEF&#39;);
//\u5411\u76EE\u6807\u8005\u6DFB\u52A0\u89C2\u5BDF\u8005
subject.add(obs1);
subject.add(obs2);
// \u76EE\u6807\u8005\u901A\u77E5\u66F4\u65B0
subject.notify();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u52BF\uFF1A\u89C2\u5BDF\u8005\u88AB\u52A8\u63A5\u6536\u66F4\u65B0\uFF0C\u65F6\u95F4\u4E0A\u89E3\u8026\uFF0C\u5B9E\u65F6\u63A5\u6536\u76EE\u6807\u8005\u66F4\u65B0\u72B6\u6001\u3002</p><p>\u7F3A\u70B9\uFF1A\u89C2\u5BDF\u8005\u6A21\u5F0F\u5E76\u6CA1\u6709\u5B9E\u73B0\u4E24\u4E2A\u7C7B\u7684\u5B8C\u5168\u89E3\u8026\uFF0C\u76EE\u6807\u5BF9\u8C61\u4E2D\u8FD8\u7EF4\u62A4\u7740\u89C2\u5BDF\u8005\u5217\u8868\u3002\u4ECE\u800C\u5F15\u51FA\u6765\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF0C\u76F8\u6BD4\u4E8E\u89C2\u5BDF\u8005\u6A21\u5F0F\u591A\u4E86\u4E00\u4E2A\u4E2D\u95F4\u8C03\u5EA6\u5C42\uFF0C\u628A\u4E24\u8005\u7684\u4F9D\u8D56\u5173\u7CFB\u7EF4\u62A4\u8D77\u6765\uFF0C\u8BA9\u4E24\u8005\u5B8C\u5168\u89E3\u8026\u3002</p><h3 id="\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a> \u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</h3><p>\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF1A\u57FA\u4E8E\u4E00\u4E2A\u4E8B\u4EF6\uFF08\u4E3B\u9898\uFF09\u901A\u9053\uFF0C\u5E0C\u671B\u63A5\u6536\u901A\u77E5\u7684\u5BF9\u8C61 Subscriber \u901A\u8FC7\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u8BA2\u9605\u4E3B\u9898\uFF0C\u88AB\u6FC0\u6D3B\u4E8B\u4EF6\u7684\u5BF9\u8C61 Publisher \u901A\u8FC7\u53D1\u5E03\u4E3B\u9898\u4E8B\u4EF6\u7684\u65B9\u5F0F\u901A\u77E5\u5404\u4E2A\u8BA2\u9605\u8BE5\u4E3B\u9898\u7684 Subscriber \u5BF9\u8C61\u3002</p><p>\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u4E0E\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u4E0D\u540C\uFF0C\u201C\u7B2C\u4E09\u8005\u201D \uFF08\u4E8B\u4EF6\u4E2D\u5FC3\uFF09\u51FA\u73B0\u3002\u76EE\u6807\u5BF9\u8C61\u5E76\u4E0D\u76F4\u63A5\u901A\u77E5\u89C2\u5BDF\u8005\uFF0C\u800C\u662F\u901A\u8FC7\u4E8B\u4EF6\u4E2D\u5FC3\u6765\u6D3E\u53D1\u901A\u77E5\u3002</p><p>\u4EE3\u7801\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u4E8B\u4EF6\u4E2D\u5FC3
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

// \u8BA2\u9605
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

//\u53D1\u5E03
myPubSub.publish(&#39;start&#39;, &#39;hello&#39;)
myPubSub.publish(&#39;end&#39;, &#39;hello&#39;)

//\u53D6\u6D88\u8BA2\u9605
myPubSub.unSubscribe(&#39;start&#39;)
myPubSub.publish(&#39;start&#39;, &#39;hello&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6A21\u5F0F\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F\u7684\u5E94\u7528" aria-hidden="true">#</a> \u6A21\u5F0F\u7684\u5E94\u7528</h3><p>1\u3001 DOM \u4E8B\u4EF6\u76D1\u542C\u5C31\u662F \u201C\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u201D \u7684\u5178\u578B\u5E94\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u4E8B\u4EF6
let loginBtn = document.getElementById(&#39;#loginBtn&#39;);
//\u76D1\u542C\u56DE\u8C03\u51FD\u6570(\u6307\u5B9A\u4E8B\u4EF6)
function notifyClick(){
	console.log(&#39;\u6211\u88AB\u70B9\u51FB\u4E86)
}
//\u6DFB\u52A0\u4E8B\u4EF6\u76D1\u542C
loginBtn.addEventListener(&#39;click&#39;, notifyClick);
//\u89E6\u53D1\u70B9\u51FB,\u4E8B\u4EF6\u4E2D\u5FC3\u6D3E\u53D1\u6307\u5B9A\u4E8B\u4EF6
loginBtn.click();
//\u53D6\u6D88\u4E8B\u4EF6\u76D1\u542C
loginBtn.removeEventlistener(&#39;click&#39;, notifyClick);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001jQuery \u7684 on \u548C trigger\uFF0C$.callback();</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u81EA\u5B9A\u4E49\u56DE\u8C03
var callbacks = $.Callbacks() // \u6CE8\u610F\u5927\u5C0F\u5199
callbacks.add(function (info) {
	console.log(&#39;fn1&#39;, info)
})
callbacks.add(function (info) {
	console.log(&#39;fn2&#39;, info)
})
callbacks.add(function (info) {
	console.log(&#39;fn3&#39;, info)
})
//\u6DFB\u52A0\u5B8C\u540E\u7EDF\u4E00\u89E6\u53D1\u3002
callbacks.fire(&#39;gogogo&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001Vue \u7684\u53CC\u5411\u6570\u636E\u7ED1\u5B9A</p><p>4\u3001Vue \u7684\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1 $on/$emit</p><p>5\u3001promise</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var src = &#39;http://www.imooc.com/static/img/index/logo_new.png&#39;
var result = loadImg(src)
result.then(function (img) {
  console.log(&#39;success 1&#39;)
}, function () {    
  console.log(&#39;failed 1&#39;)
})
// then\u5C31\u662F\u4E00\u4E2A\u89C2\u5BDF\u8005\uFF0C\u7B49\u5F85\u524D\u4E00\u4E2A\u5904\u7406\u5B8C\u6210
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function l(d,v){return s}var a=i(e,[["render",l],["__file","js\u8BBE\u8BA1\u6A21\u5F0F\u4E4B\u89C2\u5BDF\u8005\u6A21\u5F0F.html.vue"]]);export{a as default};
