import{_ as n,e}from"./app.659fa32e.js";const s={},a=e(`<h1 id="\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D\u7684\u51E0\u79CD\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D\u7684\u51E0\u79CD\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> \u5782\u76F4\u6C34\u5E73\u5C45\u4E2D\u7684\u51E0\u79CD\u5B9E\u73B0\u65B9\u5F0F</h1><h3 id="\u4E00\u3001\u56FA\u5B9A\u5BBD\u9AD8" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u56FA\u5B9A\u5BBD\u9AD8" aria-hidden="true">#</a> \u4E00\u3001\u56FA\u5B9A\u5BBD\u9AD8\uFF1A</h3><p><strong>1\u3001\u5B9A\u4F4D + margin-top + margin-left</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  .box-container{
	    position: relative;
      width: 300px;
	    height: 300px;
	}
	.box-container .box {
	    width: 200px; 
	    height: 100px;
	    position: absolute; 
	    left: 50%; 
	    top: 50%;
	    margin-top: -50px;    /* \u9AD8\u5EA6\u7684\u4E00\u534A */
	    margin-left: -100px;    /* \u5BBD\u5EA6\u7684\u4E00\u534A */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u7236\u5143\u7D20\u7684position\u4E3A\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u5B50\u5143\u7D20\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5E76\u5728 top \u548C left \u65B9\u5411\u4E0A\u79FB\u52A8\u7236\u5143\u7D2050%\u7684\u8DDD\u79BB\u3002</p><p>\u4F46\u8FD9\u4E2A\u65F6\u5019\uFF0C\u662F\u5B50\u5143\u7D20\u7684\u4E0A\u8FB9\u6846\u548C\u5DE6\u8FB9\u6846\u8DDD\u79BB\u7236\u5143\u7D20150px\uFF0C\u6574\u4F53\u5411\u53F3\u4E0B\u89D2\u504F\u4E86\u4E00\u4E9B\uFF0C\u6240\u4EE5\u8FD8\u9700\u8981\u518D\u7528 margin \u8C03\u6574\u81F3\u4E2D\u5FC3\u4F4D\u7F6E\uFF0C\u6570\u503C\u5206\u522B\u662F\u9AD8\u5EA6\u548C\u5BBD\u5EA6\u7684\u4E00\u534A\u3002</p><p><strong>2\u3001\u5B9A\u4F4D + margin</strong></p><pre><code>.box-container{
    position: relative;
    width: 300px;
	  height: 300px;
}
.box {
    width: 100px;
    height: 100px;
    position: absolute; 
    left: 0; 
    top: 0; 
    right: 0; 
    bottom: 0;
    margin: auto;
}
</code></pre><p>\u540C\u6837\u662F\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u4F46\u56DB\u4E2A\u65B9\u5411\u7684\u504F\u79FB\u91CF\u5168\u90FD\u4E3A0\uFF0C\u4E4B\u540E\u8BBE\u7F6E margin:auto \u5206\u914D\u5269\u4F59\u7A7A\u95F4\uFF0C\u4EE4\u5143\u7D20\u7684\u5747\u5300\u62D6\u62FD\u81F3\u7236\u5143\u7D20\u7684\u4E2D\u5FC3\u4F4D\u7F6E\u3002</p><p><strong>1\u3001transform \u65B9\u6848</strong></p><pre><code>.box-container{
    position: relative;
    width: 300px;
	  height: 300px;
}
.box {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50%; 
    top: 50%;
    transform: translate(-50%, -50%);    
}
</code></pre><p>\u5728\u5B50\u5143\u7D20\u4E0A\u8BBE\u7F6E\uFF0Ctransform: translate(-50%, -50%); \u7528\u4E8E\u5E73\u9762\u76842D\u8F6C\u6362\uFF0C\u540E\u9762\u7684\u767E\u5206\u6BD4\u4EE5\u81EA\u8EAB\u7684\u5BBD\u9AD8\u4E3A\u53C2\u8003\uFF0C\u5B9A\u4F4D\u540E\u5C06\u5143\u7D20\u7684\u5DE6\u4E0A\u89D2\u7F6E\u4E8E\u7236\u7EA7\u4E2D\u592E\uFF0C\u4E4B\u540E\u518D\u7528 transform \u8FDB\u884C\u504F\u79FB\uFF0C\u76F8\u5F53\u4E8E\u4E0A\u9762\u8BBE\u7F6E\u7684 margin-top \u548C margin-left\u3002</p><h3 id="\u4E8C\u3001\u672A\u77E5\u5BBD\u9AD8" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u672A\u77E5\u5BBD\u9AD8" aria-hidden="true">#</a> \u4E8C\u3001\u672A\u77E5\u5BBD\u9AD8</h3><p><strong>2\u3001flexbox \u65B9\u6848</strong></p><pre><code>.box-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</code></pre><p>\u8BBE\u7F6E\u7236\u5143\u7D20\u4E3A flex \u5F39\u6027\u76D2\u6A21\u578B\uFF0C\u5E76\u5728\u4E3B\u8F74\u548C\u526F\u8F74\u4E0A\u8BBE\u7F6E\u5C45\u4E2D</p><p><strong>3\u3001grid\u65B9\u6848</strong></p><p>css\u7F51\u683C\u5E03\u5C40</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.wp</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function i(t,r){return a}var o=n(s,[["render",i],["__file","\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D\u7684\u51E0\u79CD\u5B9E\u73B0\u65B9\u5F0F.html.vue"]]);export{o as default};
