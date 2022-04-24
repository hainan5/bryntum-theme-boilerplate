// import GridComp from "./components/grid/grid";

// import GanttInstance from "./components/gantt/gantt";
import GridComp2 from "./components/grid/grid2";
// import GanntComp2 from "./components/gantt/gantt2";

import './style.css';

const App = (props) => {
  return (
    <div className="bryntumContainer">

      {/* <div className="gridContainer">
        <GridComp />
      </div> */}

      <div className="gridContainer">
        <GridComp2 />
      </div>

      {/* <div className="ganttContainer">
        <GanttInstance />
      </div> */}

      {/* <div className="ganttContainer">
        <GanntComp2 />
      </div> */}
    </div>
  );
};

export default App;
