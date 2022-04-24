import GanttInstance from "./components/gantt/gantt";
import GridComp from "./components/grid/grid";
import './style.css';

const App = (props) => {
  return (
    <div className="bryntumContainer">
      {/* <div className="gridContainer">
        <GridComp />
      </div> */}
      <div className="ganttContainer">
        <GanttInstance />
      </div>
    </div>
  );
};

export default App;
