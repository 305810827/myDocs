import{_ as t,o as e,c as l,a as d}from"./app-53705635.js";const r="/assets/image-20220516154947575-74f604b5.png",a="/assets/image-20220516154927071-78bcd094.png",n={},s=d('<h1 id="简述-vue-的生命周期以及每个阶段做的事" tabindex="-1"><a class="header-anchor" href="#简述-vue-的生命周期以及每个阶段做的事" aria-hidden="true">#</a> <strong>简述 Vue 的生命周期以及每个阶段做的事</strong></h1><p>1、概念：vue实例被创建的过程中会经过一系列的初始化步骤，比如数据观测、模版编译、挂载实例到dom，以及数据变化时更新dom，可以提供用户自定义代码在期间某些阶段执行的回调函数就是生命周期钩子函数。</p><p>2、创建前后、载入前后、更新前后、销毁前后</p><table><thead><tr><th style="text-align:left;">生命周期v2</th><th style="text-align:left;">生命周期v3</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">beforeCreate</td><td style="text-align:left;">beforeCreate</td><td style="text-align:left;">组件实例被创建之初</td></tr><tr><td style="text-align:left;">created</td><td style="text-align:left;">created</td><td style="text-align:left;">组件实例已经完全创建</td></tr><tr><td style="text-align:left;">beforeMount</td><td style="text-align:left;">beforeMount</td><td style="text-align:left;">组件挂载之前</td></tr><tr><td style="text-align:left;">mounted</td><td style="text-align:left;">mounted</td><td style="text-align:left;">组件挂载到实例上去之后</td></tr><tr><td style="text-align:left;">beforeUpdate</td><td style="text-align:left;">beforeUpdate</td><td style="text-align:left;">组件数据发生变化，更新之前</td></tr><tr><td style="text-align:left;">updated</td><td style="text-align:left;">updated</td><td style="text-align:left;">数据数据更新之后</td></tr><tr><td style="text-align:left;">beforeDestroy</td><td style="text-align:left;"><strong>beforeUnmount</strong></td><td style="text-align:left;">组件实例销毁之前</td></tr><tr><td style="text-align:left;">destroyed</td><td style="text-align:left;"><strong>unmounted</strong></td><td style="text-align:left;">组件实例销毁之后</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">生命周期v2</th><th style="text-align:left;">生命周期v3</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">activated</td><td style="text-align:left;">activated</td><td style="text-align:left;">keep-alive 缓存的组件激活时</td></tr><tr><td style="text-align:left;">deactivated</td><td style="text-align:left;">deactivated</td><td style="text-align:left;">keep-alive 缓存的组件停用时调用</td></tr><tr><td style="text-align:left;">errorCaptured</td><td style="text-align:left;">errorCaptured</td><td style="text-align:left;">捕获一个来自子孙组件的错误时被调用</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;"><strong>renderTracked</strong></td><td style="text-align:left;">调试钩子，响应式依赖被收集时调用</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;"><strong>renderTriggered</strong></td><td style="text-align:left;">调试钩子，响应式依赖被触发时调用</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;"><strong>serverPrefetch</strong></td><td style="text-align:left;">ssr only，组件实例在服务器上被渲染前调用</td></tr></tbody></table><p>3、结合实践：</p><p><strong>beforeCreate</strong>：通常用于插件开发中执行一些初始化任务，$store</p><p><strong>created</strong>：组件初始化完毕，可以访问各种数据，获取接口数据等</p><p><strong>mounted</strong>：dom已创建，可用于获取访问数据和dom元素；访问子组件等。</p><p><strong>beforeUpdate</strong>：此时<code>view</code>层还未更新，可用于获取更新前各种状态</p><p><strong>updated</strong>：完成<code>view</code>层的更新，更新后，所有状态已是最新</p><p><strong>beforeunmount</strong>：实例被销毁前调用，可用于一些定时器或订阅的取消</p><p><strong>unmounted</strong>：销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器</p><h3 id="可能的追问" tabindex="-1"><a class="header-anchor" href="#可能的追问" aria-hidden="true">#</a> 可能的追问</h3><ol><li>setup和created谁先执行？</li><li>setup中为什么没有beforeCreate和created？</li></ol><p>v2</p><p><img src="'+r+'" alt="image-20220516154947575"></p><p>V3</p><p><img src="'+a+'" alt="image-20220516154927071"></p>',19),o=[s];function i(g,f){return e(),l("div",null,o)}const x=t(n,[["render",i],["__file","vue生命周期.html.vue"]]);export{x as default};
