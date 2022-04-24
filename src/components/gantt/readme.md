###修改组件下某一类组件样式
#####方法1:使用辅助类CSSHelper 

this.criticalRule = CSSHelper.insertRule(`#${this.id} .b-sch-event.critical {background-color:${this.criticalColor}}`);

```
import { CSSHelper} from "@bryntum/gantt";
CSSHelper.insertRule(`.b-gantt-task {
    background-color: purple;
  }
  `);
```

#####方法2:样式覆盖
组件内的样式文件style.css文件
```
import "./gantt.css";
.b-gantt-task {
    background-color: purple;
}
```
