# Vue的双向数据绑定

- Observer：观察者，这里的主要工作是递归地监听对象上的所有属性，在属性值改变的时候，触发相应的watcher。

- Watcher：订阅者，当监听的数据值修改时，执行响应的回调函数（Vue里面的更新模板内容）。

- Dep：订阅管理器，连接Observer和Watcher的桥梁，每一个Observer对应一个Dep，它内部维护一个数组，保存与该Observer相关的Watcher

```
/* 实现数据监听器（数据劫持）*/
	function Observer(obj, key, value) {
  		var dep = new Dep();
  		if (Object.prototype.toString.call(value) == '[object Object]') {
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
	<div id="app">
  		<input id="input" type="text" v-model="text">
  		<div id="text">输入的值为：{{text}}</div>
	</div>
	<script type="text/javascript">
  		var obj = {
    		text: 'hello world'
  		}
  		Object.keys(obj).forEach(function(key){
  	  		new Observer(obj, key, obj[key])
  		});
  		new Watcher(function(){
    		document.querySelector("#text").innerHTML = "输入的值为：" + obj.text;
  		})
 		 document.querySelector("#input").addEventListener('input', function(e) {
    		obj.text = e.target.value;
  		})
	</script>

```
