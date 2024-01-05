import{_ as n,o as e,c as s,a as i}from"./app-53705635.js";const l={},d=i(`<p>1、输入数组中除一个数字只出现一次之外其他数字都出现两次，请找出只出现一次的数字。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function FindNumsAppearOnce(arr) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function a(c,u){return e(),s("div",null,r)}const m=n(l,[["render",a],["__file","只出现一次的数字.html.vue"]]);export{m as default};
