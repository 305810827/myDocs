import{_ as e,o as t,c as r,a as s}from"./app-53705635.js";const a={},c=s(`<p><strong>webstorm 批量正则使用import替换require</strong></p><p>- <code>Ctrl + R</code>：当前文件替换 - <code>Ctrl + Alt + R</code>：全局替换</p><p>![image-20240104100436988](../image/webstorm replace/image-20240104100436988.png)\`</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[const|var|let]+([\\s\\w\\{\\,\\}]+)[\\=\\s]+require\\(([\\w\\S]+).*?\\)

import$1from $2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),n=[c];function o(i,l){return t(),r("div",null,n)}const m=e(a,[["render",o],["__file","webstorm replace.html.vue"]]);export{m as default};
