import { useState } from "react";
import "./App.css";
import TaskList from "./components/task/TaskList";
import Timer from "./components/timer/Timer";
import HideTaskButton from "./components/task/HideTaskButton";

function App() {
  const [isHidden, setIsHidden] = useState<boolean>(
    JSON.parse(localStorage.getItem("isHidden") || "true")
  );

  const handleVisibilityChange = (hidden: boolean) => {
    setIsHidden(hidden);
  };

  return (
    <>
      <div className="flex flex-col w-full items-start justify-center">
        <div className="flex w-full items-center justify-center gap-3">
          <div>
            <img src={"/icon2.png"} className="w-20 h-20" alt="pomodoro logo" />
          </div>
          <div>
            <h1 className="font-extrabold text-primary-800">pomodoro</h1>
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center gap-4">
          <Timer />
          <HideTaskButton onVisibilityChange={handleVisibilityChange} />
          <TaskList isHidden={isHidden} />
        </div>
      </div>
    </>
  );
}

export default App;
