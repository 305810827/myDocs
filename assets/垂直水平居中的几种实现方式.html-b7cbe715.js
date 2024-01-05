import{_ as n,o as e,c as s,a}from"./app-53705635.js";const t={},i=a(`<h1 id="垂直水平居中的几种实现方式" tabindex="-1"><a class="header-anchor" href="#垂直水平居中的几种实现方式" aria-hidden="true">#</a> 垂直水平居中的几种实现方式</h1><h3 id="一、固定宽高" tabindex="-1"><a class="header-anchor" href="#一、固定宽高" aria-hidden="true">#</a> 一、固定宽高：</h3><p><strong>1、定位 + margin-top + margin-left</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  .box-container{
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
	    margin-top: -50px;    /* 高度的一半 */
	    margin-left: -100px;    /* 宽度的一半 */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置父元素的position为相对定位，子元素绝对定位，并在 top 和 left 方向上移动父元素50%的距离。</p><p>但这个时候，是子元素的上边框和左边框距离父元素150px，整体向右下角偏了一些，所以还需要再用 margin 调整至中心位置，数值分别是高度和宽度的一半。</p><p><strong>2、定位 + margin</strong></p><pre><code>.box-container{
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
</code></pre><p>同样是使用绝对定位，但四个方向的偏移量全都为0，之后设置 margin:auto 分配剩余空间，令元素的均匀拖拽至父元素的中心位置。</p><p><strong>1、transform 方案</strong></p><pre><code>.box-container{
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
</code></pre><p>在子元素上设置，transform: translate(-50%, -50%); 用于平面的2D转换，后面的百分比以自身的宽高为参考，定位后将元素的左上角置于父级中央，之后再用 transform 进行偏移，相当于上面设置的 margin-top 和 margin-left。</p><h3 id="二、未知宽高" tabindex="-1"><a class="header-anchor" href="#二、未知宽高" aria-hidden="true">#</a> 二、未知宽高</h3><p><strong>2、flexbox 方案</strong></p><pre><code>.box-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</code></pre><p>设置父元素为 flex 弹性盒模型，并在主轴和副轴上设置居中</p><p><strong>3、grid方案</strong></p><p>css网格布局</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wp</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[i];function r(p,l){return e(),s("div",null,o)}const d=n(t,[["render",r],["__file","垂直水平居中的几种实现方式.html.vue"]]);export{d as default};
