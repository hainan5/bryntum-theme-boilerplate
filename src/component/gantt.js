import { CSSHelper, Gantt } from "@bryntum/gantt";
import {Component} from "react";
import "./gantt.css";

export default class GanntComp extends Component {
    componentDidMount() {
      const GanttInstance = new Gantt({
        appendTo : 'demo',
    
        rowHeight         : 80,
        height            : 200,
    
        startDate : new Date(2017, 0, 1),
        endDate   : new Date(2017, 0, 10),
    
        columns : [
            { type : 'name' }
        ],
    
        features : {
            projectLines : false
        },
    
        viewPreset : {
            base      : 'weekAndDayLetter',
            tickWidth : 50
        },
    
        tasks : [
            { id : 1, name : 'Write docs', startDate : '2017-01-02', endDate : '2017-01-06', leaf : true, percentDone : 50 }
        ],
    
        assignments : [
            { id : 1, event : 1, resource : 1 },
            { id : 2, event : 1, resource : 2 }
        ],
    
        resources : [
            { id : 1, name : 'Celia Johnsson' },
            { id : 2, name : 'Lee Brook' },
            { id : 3, name : 'Macy von Schnitzel' }
        ],
    
        taskRenderer({ taskRecord, renderData }) {
            return [
                {
                    html  : taskRecord.name,
                    style : 'margin-bottom : 0.5em'
                },
                ...taskRecord.resources.map(resource => ({
                    tag   : 'span',
                    style : 'display:inline-block;font-size:0.8em;padding:0.4em;background:rgba(0,0,0,0.1);border-radius:50%;margin-right:0.3em',
                    html  : resource.initials
                })
                )
            ];
        }
    });
    }
    render() {
      return <>
      <div id="demo"></div>
      </>
    }
  
}
