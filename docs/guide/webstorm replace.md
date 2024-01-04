**webstorm 批量正则使用import替换require**

\- `Ctrl + R`：当前文件替换
\- `Ctrl + Alt + R`：全局替换

![image-20240104100436988](../image/webstorm replace/image-20240104100436988.png)`

```
[const|var|let]+([\s\w\{\,\}]+)[\=\s]+require\(([\w\S]+).*?\)

import$1from $2
```

