import React, { useState, useEffect, useRef } from "react";
import { BryntumGrid } from "@bryntum/grid-react";
import { DomHelper } from "@bryntum/grid/grid.umd";
import style from "./App.css";

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

const App = (props) => {
  const [readOnly, setReadOnly] = useState(true);
  const ref = useRef(null);
  const gridConfig = {
    // appendTo:'root',
    // width: 600,
    cellMenu: true,

    headerMenu: true,
    features: {
      rowReorder: {
        showGrip: true,
        listeners: {
          gridRowBeforeDropFinalize: async ({ context }) => {
            console.log("拖动成功", context);
          },
        },
      },
      // cellEdit: true,
      sort: true,
      filter: true,
      cellEdit: {
        triggerEvent: "cellclick",
        // finishCellEdit: async ({ context }) => {
        //   console.log("123");
        // },
      },
    },

    showDirty: true, // 展示脏数据
    readOnly,
    columns: [
      // start new
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

    data: dataGenerate(10),

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
  };

  useEffect(() => {
    // DomHelper.setTheme("classic-dark");
  }, []);
  
  return (
    <div className="{style.bryntumContainer}">
      <BryntumGrid ref={ref} {...gridConfig} />
    </div>
  );
};

export default App;
