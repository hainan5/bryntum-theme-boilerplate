### 切换主题方式
##### 方法1:使用辅助函数DomHelper中setTheme(String themeName)

```
import { DomHelper} from "@bryntum/grid/grid.umd";
DomHelper.setTheme("material");
```

##### 方法2:替换引入主题文件链接
```
<link rel="stylesheet" href="%PUBLIC_URL%/themes/grid.classic.css" id="bryntum-theme">
动态引入
document.getElementById("bryntum-theme").setAttribute("href","path-to/grid.material.css");
```

##### 分别是用函数组件 、类组件 生成gantt组件，排除渲染方式对主题样式的影响