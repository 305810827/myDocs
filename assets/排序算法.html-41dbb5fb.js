import{_ as n,o as s,c as a,a as t}from"./app-53705635.js";const p={},e=t(`<h2 id="一、冒泡排序" tabindex="-1"><a class="header-anchor" href="#一、冒泡排序" aria-hidden="true">#</a> 一、冒泡排序</h2><p><img src="https://www.runoob.com/wp-content/uploads/2019/03/bubbleSort.gif" alt="img"></p><p>代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> <span class="token function-variable function">sort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token operator">-</span>i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> tmp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> tmp
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> 
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、选择排序" tabindex="-1"><a class="header-anchor" href="#二、选择排序" aria-hidden="true">#</a> 二、选择排序</h2><p><img src="https://www.runoob.com/wp-content/uploads/2019/03/selectionSort.gif" alt="img"></p><p>代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> <span class="token function-variable function">sort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> minIndex
  <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    minIndex <span class="token operator">=</span> i
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minIndex <span class="token operator">=</span> j
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> tmp <span class="token operator">=</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> tmp 
  <span class="token punctuation">}</span> 
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、插入排序" tabindex="-1"><a class="header-anchor" href="#三、插入排序" aria-hidden="true">#</a> 三、插入排序</h2><p><img src="https://www.runoob.com/wp-content/uploads/2019/03/insertionSort.gif" alt="img"></p><p>代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> <span class="token function-variable function">sort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> j<span class="token operator">=</span>i
    <span class="token keyword">while</span><span class="token punctuation">(</span>j<span class="token operator">&gt;=</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       	<span class="token keyword">let</span> tmp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    		arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    		arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp 
      	j<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> 
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化：因为插入排序满足j&gt;=1 &amp;&amp; arr[j-1] &gt; arr[j]就要和前面的元素交换，可能需要多次交换才能到合适的位置，使刚交换一次的元素没多久，又需要继续交换。所有可以优化插入的次数，将满足arr[j-1] &gt; arr[j]条件的元素往后挪，直到比较到合适的位置，再执行插入操作，这样就只需要一次插入。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> <span class="token function-variable function">sort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   	<span class="token keyword">let</span> cur <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
      j<span class="token operator">--</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> cur
  <span class="token punctuation">}</span> 
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、希尔排序" tabindex="-1"><a class="header-anchor" href="#四、希尔排序" aria-hidden="true">#</a> 四、希尔排序</h3><p>排序算法本质上就是一个消除逆序对的过程。</p><p>对于随机数组，逆序对的数量是 O(n^2)级的，如果采用「交换相邻元素」的办法来消除逆序对，每次最多只能消除一组逆序对，因此必须执行 O(n^2) 级的交换次数，这就是为什么冒泡、插入、选择算法只能到 O(n^2) 级的原因。反过来说，基于交换元素的排序算法要想突破 O(n^2)级，必须通过一些比较，交换间隔比较远的元素，使得一次交换能消除一个以上的逆序对。</p><p>希尔排序算法就是通过这种方式，打破了在空间复杂度为 O(1)的情况下，时间复杂度为 O(n^2) 的魔咒，此后的快排、堆排等等算法也都是基于这样的思路实现的。</p><p><img src="https://www.runoob.com/wp-content/uploads/2019/03/Sorting_shellsort_anim.gif" alt="img"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sortArray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//希尔排序</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> gap <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> gap <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>gap<span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span>gap<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> gap<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> curNumber <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> preIndex <span class="token operator">=</span> i <span class="token operator">-</span> gap<span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>preIndex <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> curNumber <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>preIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                nums<span class="token punctuation">[</span>preIndex<span class="token operator">+</span>gap<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>preIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
                preIndex <span class="token operator">-=</span> gap<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            nums<span class="token punctuation">[</span>preIndex <span class="token operator">+</span> gap<span class="token punctuation">]</span> <span class="token operator">=</span> curNumber<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、堆排序" tabindex="-1"><a class="header-anchor" href="#五、堆排序" aria-hidden="true">#</a> 五、堆排序</h3><p><img src="https://assets.leetcode-cn.com/solution-static/912_fig2.gif" alt="img"></p><p><img src="https://assets.leetcode-cn.com/solution-static/912_fig3.gif" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [2,3,1,5,4,7,3]
const HeapSort = (arr) =&gt; {
	buildMaxHeap(arr)
	for (let i = arr.length - 1; i &gt; 0; i--) {
		swap(arr, 0, i)
		maxHeapify(arr, 0, i)
	}
	console.log(arr)
}
const buildMaxHeap = (arr) =&gt; {
	for (let i = (arr.length &gt;&gt; 1) - 1; i &gt;= 0; i--) {
		maxHeapify(arr, i, arr.length)
	}
}
const maxHeapify = (arr, i, heapSize) =&gt; {
	let l = (i &lt;&lt; 1) + 1
	let r = l + 1
	let maxIndex = i
	if (l &lt; heapSize &amp;&amp; arr[l] &lt; arr[maxIndex]) {
		maxIndex = l
	}
	if (r &lt; heapSize &amp;&amp; arr[r] &lt; arr[maxIndex]) {
		maxIndex = r
	}
	if (maxIndex !== i) {
		swap(arr, i, maxIndex)
		maxHeapify(arr, maxIndex, heapSize)
	}
}
const swap = (arr, index1, index2) =&gt; {
	[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}
HeapSort(arr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、快速排序" tabindex="-1"><a class="header-anchor" href="#六、快速排序" aria-hidden="true">#</a> 六、快速排序</h3><p><img src="https://images2017.cnblogs.com/blog/849589/201710/849589-20171015230936371-1413523412.gif" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [2,3,1,5,4,7,3]
const quickSort = (arr, left, right) =&gt; {
	if (left &gt; right) return
	let L = left
	let R = right
	let pivot = arr[left]
	
	while (L &lt; R) {
		while (L &lt; R &amp;&amp; pivot &lt;= arr[R]) R--
		if (L &lt; R) {
			arr[L] = arr[R]
		}
		while (L &lt; R &amp;&amp; arr[L] &lt;= pivot) L++
		if (L &lt; R) {
			arr[R] = arr[L]
		}
		if (L &gt;= R) {
			arr[L] = pivot
		}
	}
	
	quickSort(arr, left, R-1)
	quickSort(arr, R+1, right)
}
quickSort(arr, 0, arr.length - 1)
console.log(arr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="七、归并排序" tabindex="-1"><a class="header-anchor" href="#七、归并排序" aria-hidden="true">#</a> 七、归并排序</h3><p><img src="https://www.runoob.com/wp-content/uploads/2019/03/mergeSort.gif" alt="img"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">mergeSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> arr
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> middle <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> middle<span class="token punctuation">)</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>middle<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token function">mergeSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> right<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result

<span class="token punctuation">}</span>

result <span class="token operator">=</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","排序算法.html.vue"]]);export{r as default};
