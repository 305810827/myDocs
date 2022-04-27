webstorm 批量正则使用import替换require

![image-20210901165415773](/Users/xuyanjie/Library/Application Support/typora-user-images/image-20210901165415773.png)

`[const|var|let]+([\s\w\{\,\}]+)[\=\s]+require\(([\w\S]+).*?\)`

`import$1from $2`

