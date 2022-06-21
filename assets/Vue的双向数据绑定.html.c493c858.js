import{_ as e,e as i}from"./app.659fa32e.js";var n="/assets/image-20220530202908723.4e0009fe.png";const t={},s=i(`<h1 id="vue\u7684\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#vue\u7684\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" aria-hidden="true">#</a> Vue\u7684\u53CC\u5411\u6570\u636E\u7ED1\u5B9A</h1><ul><li><p>Observer\uFF1A\u89C2\u5BDF\u8005\uFF0C\u8FD9\u91CC\u7684\u4E3B\u8981\u5DE5\u4F5C\u662F\u9012\u5F52\u5730\u76D1\u542C\u5BF9\u8C61\u4E0A\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u5728\u5C5E\u6027\u503C\u6539\u53D8\u7684\u65F6\u5019\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684watcher\u3002</p></li><li><p>Watcher\uFF1A\u8BA2\u9605\u8005\uFF0C\u5F53\u76D1\u542C\u7684\u6570\u636E\u503C\u4FEE\u6539\u65F6\uFF0C\u6267\u884C\u54CD\u5E94\u7684\u56DE\u8C03\u51FD\u6570\uFF08Vue\u91CC\u9762\u7684\u66F4\u65B0\u6A21\u677F\u5185\u5BB9\uFF09\u3002</p></li><li><p>Dep\uFF1A\u8BA2\u9605\u7BA1\u7406\u5668\uFF0C\u8FDE\u63A5Observer\u548CWatcher\u7684\u6865\u6881\uFF0C\u6BCF\u4E00\u4E2AObserver\u5BF9\u5E94\u4E00\u4E2ADep\uFF0C\u5B83\u5185\u90E8\u7EF4\u62A4\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4FDD\u5B58\u4E0E\u8BE5Observer\u76F8\u5173\u7684Watcher</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* \u5B9E\u73B0\u6570\u636E\u76D1\u542C\u5668\uFF08\u6570\u636E\u52AB\u6301\uFF09*/
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
	
	// \u8BA2\u9605\u5668
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

	// \u89C2\u5BDF\u8005
   function Watcher(fn) {
 	 	this.update = function() {
    		Dep.target = this;
    		fn();
    		Dep.target = null;
  		}
  		this.update();
	}

	// \u8FDE\u63A5\u5668
	&lt;div id=&quot;app&quot;&gt;
  		&lt;input id=&quot;input&quot; type=&quot;text&quot; v-model=&quot;text&quot;&gt;
  		&lt;div id=&quot;text&quot;&gt;\u8F93\u5165\u7684\u503C\u4E3A\uFF1A{{text}}&lt;/div&gt;
	&lt;/div&gt;
	&lt;script type=&quot;text/javascript&quot;&gt;
  		var obj = {
    		text: &#39;hello world&#39;
  		}
  		Object.keys(obj).forEach(function(key){
  	  		new Observer(obj, key, obj[key])
  		});
  		new Watcher(function(){
    		document.querySelector(&quot;#text&quot;).innerHTML = &quot;\u8F93\u5165\u7684\u503C\u4E3A\uFF1A&quot; + obj.text;
  		})
 		 document.querySelector(&quot;#input&quot;).addEventListener(&#39;input&#39;, function(e) {
    		obj.text = e.target.value;
  		})
	&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+n+'" alt="image-20220530202908723"></p>',4);function l(d,v){return s}var u=e(t,[["render",l],["__file","Vue\u7684\u53CC\u5411\u6570\u636E\u7ED1\u5B9A.html.vue"]]);export{u as default};
