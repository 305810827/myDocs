import{_ as e,o as n,c as i,a as t}from"./app-53705635.js";const s="/assets/image-20220530202908723-4e0009fe.png",l={},d=t(`<h1 id="vue的双向数据绑定" tabindex="-1"><a class="header-anchor" href="#vue的双向数据绑定" aria-hidden="true">#</a> Vue的双向数据绑定</h1><ul><li><p>Observer：观察者，这里的主要工作是递归地监听对象上的所有属性，在属性值改变的时候，触发相应的watcher。</p></li><li><p>Watcher：订阅者，当监听的数据值修改时，执行响应的回调函数（Vue里面的更新模板内容）。</p></li><li><p>Dep：订阅管理器，连接Observer和Watcher的桥梁，每一个Observer对应一个Dep，它内部维护一个数组，保存与该Observer相关的Watcher</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 实现数据监听器（数据劫持）*/
	function Observer(obj, key, value) {
  		var dep = new Dep();
  		if (Object.prototype.toString.call(value) == &#39;[object Object]&#39;) {
   		    Object.keys(value).forEach(function(key) {
      		new Observer(value, key, value[key])
    	 })
  	 };

  	Object.defineProperty(obj, key, {
   		 enumerable: true,
   		 configurable: true,
    	  get: function() {
     		 if (Dep.target) {
        	 dep.addSub(Dep.target);
      	     };
      	     return value;
          },
    	set: function(newVal) {
      		value = newVal;
      		dep.notify();
    		}
  		})
	}
	
	// 订阅器
	function Dep() {
  		this.subs = [];
  		this.addSub = function (watcher) {
    		this.subs.push(watcher);
  		}

  		this.notify = function() {
    		this.subs.forEach(function(watcher) {
    			watcher.update();
    		});
  		}
	}

	// 观察者
   function Watcher(fn) {
 	 	this.update = function() {
    		Dep.target = this;
    		fn();
    		Dep.target = null;
  		}
  		this.update();
	}

	// 连接器
	&lt;div id=&quot;app&quot;&gt;
  		&lt;input id=&quot;input&quot; type=&quot;text&quot; v-model=&quot;text&quot;&gt;
  		&lt;div id=&quot;text&quot;&gt;输入的值为：{{text}}&lt;/div&gt;
	&lt;/div&gt;
	&lt;script type=&quot;text/javascript&quot;&gt;
  		var obj = {
    		text: &#39;hello world&#39;
  		}
  		Object.keys(obj).forEach(function(key){
  	  		new Observer(obj, key, obj[key])
  		});
  		new Watcher(function(){
    		document.querySelector(&quot;#text&quot;).innerHTML = &quot;输入的值为：&quot; + obj.text;
  		})
 		 document.querySelector(&quot;#input&quot;).addEventListener(&#39;input&#39;, function(e) {
    		obj.text = e.target.value;
  		})
	&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+s+'" alt="image-20220530202908723"></p>',4),v=[d];function u(r,a){return n(),i("div",null,v)}const b=e(l,[["render",u],["__file","Vue的双向数据绑定.html.vue"]]);export{b as default};
