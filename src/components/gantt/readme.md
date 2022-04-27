### 修改组件下某一类组件样式
##### 方法1:使用辅助类CSSHelper 详细见gantt.jsx

this.criticalRule = CSSHelper.insertRule(`#${this.id} .b-sch-event.critical {background-color:${this.criticalColor}}`);

```
import { CSSHelper} from "@bryntum/gantt";
CSSHelper.insertRule(`.b-gantt-task {
    background-color: purple;
  }
  `);
```

##### 方法2:样式覆盖
组件内的样式文件style.css文件 详细见gantt2.jsx
```
import "./gantt.css";
.b-gantt-task {
    background-color: purple;
}
```
##### 分别是用函数组件 、类组件 生成gantt组件，排除渲染方式对主题样式的影响