import{_ as e,e as n}from"./app.659fa32e.js";const i={},s=n(`<p>\u5B9E\u73B0\u4E00\u4E2A\u89C2\u5BDF\u8005\u7C7BObserver\uFF0C\u5177\u6709on\u3001emit\u3001remove\u65B9\u6CD5\u3002WeakMap\u7528\u4E8E\u751F\u6210\u952E\u503C\u5BF9\u7684\u96C6\u5408\uFF0C\u4E0EMap\u4E0D\u540C\u7684\u662F\uFF0CWeakMap\u53EA\u63A5\u53D7\u5BF9\u8C61\u4F5C\u4E3A\u952E\u540D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const events = (() =&gt; {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function l(v,a){return s}var t=e(i,[["render",l],["__file","event bus.html.vue"]]);export{t as default};
