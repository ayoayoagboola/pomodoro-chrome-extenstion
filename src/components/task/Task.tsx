import { useState } from "react";
import { Button } from "../ui/button";

interface TaskProps {
  task: string;
  deleteTask: (index: number) => void;
  index: number;
}

const Task = ({ task, deleteTask, index }: TaskProps) => {
  const [isDone, setIsDone] = useState<boolean>();

  const toggleCompletion = () => {
    setIsDone(!isDone);
  };

  return (
    <div className={`${isDone ? "opacity-50" : ""} flex items-center justify-between w-full p-3 border border-b-4 border-primary-900 rounded-3xl`}>
      <div className="flex items-center justify-center gap-2">
        <Button onClick={toggleCompletion}>
          {isDone ? "Done" : "Incomplete"}
        </Button>
        <p
          className={`${
            isDone ? "line-through" : ""
          } font-medium text-sm text-primary-800`}
        >
          {task}
        </p>
      </div>
      <div>
        <Button onClick={() => deleteTask(index)}>dump</Button>
      </div>
    </div>
  );
};

export default Task;
