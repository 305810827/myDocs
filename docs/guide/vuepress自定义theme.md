# vuepress自定义theme

#### 一、首页添加备案号及链接至工信部首页。（工信部链接https://beian.miit.gov.cn/）

1、在.vuepress/theme/下创建一个index.js文件（目录自行创建）

<img src="../image/企业微信截图_6f0cda93-26bc-4390-9f3b-ec51fa30659a.png" alt="企业微信截图_6f0cda93-26bc-4390-9f3b-ec51fa30659a" style="zoom:50%;" />



```
module.exports = {
  extend: '@vuepress/theme-default'
}
```



2、在.vuepress/theme/components/创建一个Home.vue, 可以自定义vuepress的主页样式，也可以复制vuepress的默认样式进行修改，我修改了两处，让我在README.md配置footer时，可以写html标签。

<img src="/Applications/工作/前端项目/myDoc/my-docs/docs/image/企业微信截图_beb015dc-5115-43d6-a7c9-0d603de1a8be.png" alt="企业微信截图_beb015dc-5115-43d6-a7c9-0d603de1a8be" style="zoom:50%;" />

![企业微信截图_480cc86d-ddf8-4ad0-b094-61ec39a80e0a](/Applications/工作/前端项目/myDoc/my-docs/docs/image/企业微信截图_480cc86d-ddf8-4ad0-b094-61ec39a80e0a.png)



3、修改README.md 的footer

![企业微信截图_cad12bbb-287b-4ef3-b784-53b15e18ad27](/Applications/工作/前端项目/myDoc/my-docs/docs/image/企业微信截图_cad12bbb-287b-4ef3-b784-53b15e18ad27.png)

同样的方法可以修改其他默认的组件



4、如果组件有插槽，可以直接使用插槽

`.vuepress/theme/layouts/Layout.vue`

```
<template>
  <ParentLayout>
    <template #page-bottom>
      <div>My custom footer</div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',

  components: {
    ParentLayout
  }
}
</script>
```

![企业微信截图_e32774a6-0018-4524-8f96-d30f51224b55](/Applications/工作/前端项目/myDoc/my-docs/docs/image/企业微信截图_e32774a6-0018-4524-8f96-d30f51224b55.png)