import { useEffect, useState } from "react";
import Task from "./Task";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface TaskListProps {
  isHidden: boolean;
}

const TaskList = ({ isHidden }: TaskListProps) => {
  const currentTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  const [tasks, setTasks] = useState<string[]>(currentTasks);
  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  return (
    <div
      className={`${
        isHidden ? "hidden" : "visible"
      } flex flex-col items-center justify-center w-full gap-4`}
    >
      <div className="flex w-full items-center justify-between gap-4 px-3">
        <Button onClick={addTask} variant={"outline"}>
          + Add task
        </Button>
        <Input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center gap-2">
        {tasks.map((task, index) => (
          <Task key={index} task={task} deleteTask={deleteTask} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
