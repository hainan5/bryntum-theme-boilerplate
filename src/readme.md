###修改全局某一类组件样式
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
全局入口样式文件style.css
```
import "./gantt.css";
.b-gantt-task {
    background-color: purple;
}
```
