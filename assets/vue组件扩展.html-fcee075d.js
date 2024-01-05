import{_ as n,o as i,c as e,a as d}from"./app-53705635.js";const s={},l=d(`<h1 id="vue中如何扩展一个组件" tabindex="-1"><a class="header-anchor" href="#vue中如何扩展一个组件" aria-hidden="true">#</a> <strong>Vue中如何扩展一个组件</strong></h1><p>mixins、extends、slots、composition api</p><h5 id="_1、mixins" tabindex="-1"><a class="header-anchor" href="#_1、mixins" aria-hidden="true">#</a> 1、mixins</h5><p>值可以是一个混合对象数组,混合实例可以包含选项,将在extend将相同的选项合并 mixins代码:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var mixin={
    data:{mixinData:&#39;我是mixin的data&#39;},
    created:function(){
      console.log(&#39;这是mixin的created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;这是mixin的getSum里面的方法&#39;);
      }
    }
  }

  var mixinTwo={
    data:{mixinData:&#39;我是mixinTwo的data&#39;},
    created:function(){
      console.log(&#39;这是mixinTwo的created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;这是mixinTwo的getSum里面的方法&#39;);
      }
    }
  } 

  var vm=new Vue({
    el:&#39;#app&#39;,
    data:{mixinData:&#39;我是vue实例的data&#39;},
    created:function(){
      console.log(&#39;这是vue实例的created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;这是vue实例里面getSum的方法&#39;);
      }
    },
    mixins:[mixin,mixinTwo]
  })
  
  //打印结果为:
  这是mixin的created
  这是mixinTwo的created
  这是vue实例的created
  这是vue实例里面getSum的方法
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论: 1.mixins执行的顺序为mixins&gt;mixinTwo&gt;created(vue实例的生命周期钩子); 2.选项中数据属性如data,methods,后面执行的回覆盖前面的,而生命周期钩子都会执行</p><h5 id="_2、extends" tabindex="-1"><a class="header-anchor" href="#_2、extends" aria-hidden="true">#</a> 2、extends</h5><p>extends用法和mixins很相似,只不过接收的参数是简单的选项对象或构造函数,所以extends只能单次扩展一个组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var extend={
    data:{extendData:&#39;我是extend的data&#39;},
    created:function(){
      console.log(&#39;这是extend的created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;这是extend的getSum里面的方法&#39;);
      }
    }
  }

  var mixin={
    data:{mixinData:&#39;我是mixin的data&#39;},
    created:function(){
      console.log(&#39;这是mixin的created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;这是mixin的getSum里面的方法&#39;);
      }
    }
  }
  
    
  var vm=new Vue({
    el:&#39;#app&#39;,
    data:{mixinData:&#39;我是vue实例的data&#39;},
    created:function(){
      console.log(&#39;这是vue实例的created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;这是vue实例里面getSum的方法&#39;);
      }
    },
    mixins:[mixin],
    extends:extend
  })
  
  //打印结果
  这是extend的created
  这是mixin的created
  这是vue实例的created
  这是vue实例里面getSum的方法
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论: 1.extends执行顺序为:extends&gt;mixins&gt;mixinTwo&gt;created 2.定义的属性覆盖规则和mixins一致</p>`,10),a=[l];function v(c,m){return i(),e("div",null,a)}const u=n(s,[["render",v],["__file","vue组件扩展.html.vue"]]);export{u as default};
