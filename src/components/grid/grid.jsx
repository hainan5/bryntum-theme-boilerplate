import { DomHelper ,Grid} from "@bryntum/grid/grid.umd";
import {Component} from "react";
import "./grid.css";

export default class GridComp extends Component {
    componentDidMount() {
        const dataGenerate = (number) => {
            const data = [];
            const names = [
              "Dom Taylor",
              "John Adams",
              "Maxim Gagarin",
              "Linda Johansson",
              "Mike Thomas",
            ];
            const city = ["Paris", "Dubai", "Los Angeles", "New York", "Moscow"];
            const ages = [24, 28, 32, 34, 36];
            for (let i = 0; i < number; i++) {
              data.push({
                id: i + 1,
                name: names[i % 5],
                city: city[i % 5],
                age: ages[i % 5],
              });
            }
            return data;
          };

          let grid = new Grid({
            appendTo : 'GridComp',
            showDirty: true,
            autoHeight : true,
        
            data : dataGenerate(10),
        
            columns : [
                { type: "rownumber", width: 100, align: "center" },
                { field: "name", text: "Name", flex: 1 },
                { field: "city", text: "City", flex: 1 },
                {
                  type: "number",
                  field: "age",
                  text: "Age",
                  flex: 1,
                  htmlEncode: false,
                  renderer: ({ value }) => {
                    return `<i class="b-fa ${
                      value < 30 ? "b-fa-child" : "b-fa-male"
                    }"></i>`;
                  },
                },
              ],
              tbar: [
                {
                  type: "buttonGroup",
                  items: [
                    {
                      ref: "material",
                      text: "material",
                      onClick: ({ source }) => {
                        DomHelper.setTheme("material");
                        // document.getElementById("bryntum-theme").setAttribute("href","http://localhost:3000/themes/grid.material.css");
                      },
                      cls: "b-raised",
                    },
                    {
                      ref: "classic-dark",
                      text: "classic-dark",
                      onClick: ({ source }) => {
                        DomHelper.setTheme("classic-dark");
                        // document.getElementById("bryntum-theme").setAttribute("href","http://localhost:3000/themes/grid.classic-dark.css");
                      },
                    },
                    {
                      ref: "classic-light",
                      text: "classic-light",
                      onClick: ({ source }) => {
                        DomHelper.setTheme("classic-light");
                        // document.getElementById("bryntum-theme").setAttribute("href","http://localhost:3000/themes/grid.classic-light.css");
                      },
                      cls: "b-raised",
                    },
                    {
                      ref: "classic",
                      text: "classic",
                      onClick: ({ source }) => {
                        DomHelper.setTheme("classic");
                        // document.getElementById("bryntum-theme").setAttribute("href","http://localhost:3000/themes/grid.classic.css");
                      },
                    },
                    {
                      ref: "custom",
                      text: "custom",
                      onClick: ({ source }) => {
                        DomHelper.setTheme("custom");
                        // document.getElementById("bryntum-theme").setAttribute("href","http://localhost:3000/themes/grid.custom.css");
                      },
                      cls: "b-raised",
                    },
                  ],
                },
              ],
        });
    }
    render() {
      return <>
      <div id="GridComp"></div>
      </>
    }
  
}