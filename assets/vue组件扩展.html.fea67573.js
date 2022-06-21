import{_ as n,e as i}from"./app.659fa32e.js";const e={},d=i(`<h1 id="vue\u4E2D\u5982\u4F55\u6269\u5C55\u4E00\u4E2A\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#vue\u4E2D\u5982\u4F55\u6269\u5C55\u4E00\u4E2A\u7EC4\u4EF6" aria-hidden="true">#</a> <strong>Vue\u4E2D\u5982\u4F55\u6269\u5C55\u4E00\u4E2A\u7EC4\u4EF6</strong></h1><p>mixins\u3001extends\u3001slots\u3001composition api</p><h5 id="_1\u3001mixins" tabindex="-1"><a class="header-anchor" href="#_1\u3001mixins" aria-hidden="true">#</a> 1\u3001mixins</h5><p>\u503C\u53EF\u4EE5\u662F\u4E00\u4E2A\u6DF7\u5408\u5BF9\u8C61\u6570\u7EC4,\u6DF7\u5408\u5B9E\u4F8B\u53EF\u4EE5\u5305\u542B\u9009\u9879,\u5C06\u5728extend\u5C06\u76F8\u540C\u7684\u9009\u9879\u5408\u5E76 mixins\u4EE3\u7801:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    var mixin={
    data:{mixinData:&#39;\u6211\u662Fmixin\u7684data&#39;},
    created:function(){
      console.log(&#39;\u8FD9\u662Fmixin\u7684created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;\u8FD9\u662Fmixin\u7684getSum\u91CC\u9762\u7684\u65B9\u6CD5&#39;);
      }
    }
  }

  var mixinTwo={
    data:{mixinData:&#39;\u6211\u662FmixinTwo\u7684data&#39;},
    created:function(){
      console.log(&#39;\u8FD9\u662FmixinTwo\u7684created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;\u8FD9\u662FmixinTwo\u7684getSum\u91CC\u9762\u7684\u65B9\u6CD5&#39;);
      }
    }
  } 

  var vm=new Vue({
    el:&#39;#app&#39;,
    data:{mixinData:&#39;\u6211\u662Fvue\u5B9E\u4F8B\u7684data&#39;},
    created:function(){
      console.log(&#39;\u8FD9\u662Fvue\u5B9E\u4F8B\u7684created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;\u8FD9\u662Fvue\u5B9E\u4F8B\u91CC\u9762getSum\u7684\u65B9\u6CD5&#39;);
      }
    },
    mixins:[mixin,mixinTwo]
  })
  
  //\u6253\u5370\u7ED3\u679C\u4E3A:
  \u8FD9\u662Fmixin\u7684created
  \u8FD9\u662FmixinTwo\u7684created
  \u8FD9\u662Fvue\u5B9E\u4F8B\u7684created
  \u8FD9\u662Fvue\u5B9E\u4F8B\u91CC\u9762getSum\u7684\u65B9\u6CD5
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u8BBA: 1.mixins\u6267\u884C\u7684\u987A\u5E8F\u4E3Amixins&gt;mixinTwo&gt;created(vue\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50); 2.\u9009\u9879\u4E2D\u6570\u636E\u5C5E\u6027\u5982data,methods,\u540E\u9762\u6267\u884C\u7684\u56DE\u8986\u76D6\u524D\u9762\u7684,\u800C\u751F\u547D\u5468\u671F\u94A9\u5B50\u90FD\u4F1A\u6267\u884C</p><h5 id="_2\u3001extends" tabindex="-1"><a class="header-anchor" href="#_2\u3001extends" aria-hidden="true">#</a> 2\u3001extends</h5><p>extends\u7528\u6CD5\u548Cmixins\u5F88\u76F8\u4F3C,\u53EA\u4E0D\u8FC7\u63A5\u6536\u7684\u53C2\u6570\u662F\u7B80\u5355\u7684\u9009\u9879\u5BF9\u8C61\u6216\u6784\u9020\u51FD\u6570,\u6240\u4EE5extends\u53EA\u80FD\u5355\u6B21\u6269\u5C55\u4E00\u4E2A\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var extend={
    data:{extendData:&#39;\u6211\u662Fextend\u7684data&#39;},
    created:function(){
      console.log(&#39;\u8FD9\u662Fextend\u7684created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;\u8FD9\u662Fextend\u7684getSum\u91CC\u9762\u7684\u65B9\u6CD5&#39;);
      }
    }
  }

  var mixin={
    data:{mixinData:&#39;\u6211\u662Fmixin\u7684data&#39;},
    created:function(){
      console.log(&#39;\u8FD9\u662Fmixin\u7684created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;\u8FD9\u662Fmixin\u7684getSum\u91CC\u9762\u7684\u65B9\u6CD5&#39;);
      }
    }
  }
  
    
  var vm=new Vue({
    el:&#39;#app&#39;,
    data:{mixinData:&#39;\u6211\u662Fvue\u5B9E\u4F8B\u7684data&#39;},
    created:function(){
      console.log(&#39;\u8FD9\u662Fvue\u5B9E\u4F8B\u7684created&#39;);
    },
    methods:{
      getSum:function(){
        console.log(&#39;\u8FD9\u662Fvue\u5B9E\u4F8B\u91CC\u9762getSum\u7684\u65B9\u6CD5&#39;);
      }
    },
    mixins:[mixin],
    extends:extend
  })
  
  //\u6253\u5370\u7ED3\u679C
  \u8FD9\u662Fextend\u7684created
  \u8FD9\u662Fmixin\u7684created
  \u8FD9\u662Fvue\u5B9E\u4F8B\u7684created
  \u8FD9\u662Fvue\u5B9E\u4F8B\u91CC\u9762getSum\u7684\u65B9\u6CD5
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u8BBA: 1.extends\u6267\u884C\u987A\u5E8F\u4E3A:extends&gt;mixins&gt;mixinTwo&gt;created 2.\u5B9A\u4E49\u7684\u5C5E\u6027\u8986\u76D6\u89C4\u5219\u548Cmixins\u4E00\u81F4</p>`,10);function s(l,v){return d}var c=n(e,[["render",s],["__file","vue\u7EC4\u4EF6\u6269\u5C55.html.vue"]]);export{c as default};
