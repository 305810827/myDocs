import{_ as n,e}from"./app.659fa32e.js";const i={},s=e(`<p>1\u3001\u8F93\u5165\u6570\u7EC4\u4E2D\u9664\u4E00\u4E2A\u6570\u5B57\u53EA\u51FA\u73B0\u4E00\u6B21\u4E4B\u5916\u5176\u4ED6\u6570\u5B57\u90FD\u51FA\u73B0\u4E24\u6B21\uFF0C\u8BF7\u627E\u51FA\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function FindNumsAppearOnce(arr) {
    let nums = new Map()
    for(const num of arr) {
        if (nums.has(num)) {
            let count = nums.get(num)
            nums.set(num, ++count)
        } else {
            nums.set(num, 1)
        }
    }
    for (const arr of nums) {
        if (arr[1] === 1) return arr[0]
    }
}
console.log(FindNumsAppearOnce([1,2,3,2,3,3,1,2,5]));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function r(d,l){return s}var u=n(i,[["render",r],["__file","\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57.html.vue"]]);export{u as default};
