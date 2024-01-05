import{_ as e,o as n,c as s,a as i}from"./app-53705635.js";const l={},v=i(`<p>实现一个观察者类Observer，具有on、emit、remove方法。WeakMap用于生成键值对的集合，与Map不同的是，WeakMap只接受对象作为键名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const events = (() =&gt; {
    let _message = new WeakMap()
    class event {
        constructor () {
            console.log(_message, &#39;_message&#39;)
            _message.set(this, {})
        }
        on (type, fn) {
            let message = _message.get(this)
            if (!message[type]) {
                message[type] = [fn]
            } else {
                message[type].push(fn)
            }
        }

        emit (type, arg) {
            let message = _message.get(this)
            if (!message[type]) return
            message[type].forEach(item =&gt; item.call(this, {arg: arg}))
        }

        remove (type, fn) {
            let Message = _message.get(this)[type]
            if (Message instanceof Array) {
              for(let i = Message.length - 1; i &gt;= 0; i--) {
                 Message[i] === fn &amp;&amp; Message.splice(i, 1)
              }
            }
        }
    }
    return event
})()

function fn(name){
	console.log(name)
}

let event = new events()
event.on(&#39;test&#39;,fn)
event.emit(&#39;test&#39;, &#39;xuyanjie&#39;)
event.remove(&#39;test&#39;, fn)
event.emit(&#39;test&#39;, &#39;xuyanjie&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[v];function d(t,m){return n(),s("div",null,a)}const c=e(l,[["render",d],["__file","event bus.html.vue"]]);export{c as default};
