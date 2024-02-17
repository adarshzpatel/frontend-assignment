import React, { useState } from "react";
import TaskItem, { TaskItemProps } from "./TaskItem";

const TodaysTasks = () => {
  const [tasks, setTasks] = useState<TaskItemProps[]>([
    {
      id: "1",
      text: "Frontend",
      isChecked: false,
    },
    {
      id: "2",
      text: "Review the design",
      isChecked: false,
    },
    {
      id: "3",
      text: "Estimate the time",
      isChecked: false,
    },
    {
      id: "4",
      text: "Code UI",
      isChecked: false,
    },
    {
      id: "5",
      text: "Testing",
      isChecked: false,
    },
    {
      id: "6",
      text: "Submit",
      isChecked: false,
    },
  ]);

  const findAndSetChecked = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }

      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl">Today's Tasks</h2>
      <div className="mt-4 space-y-2 ">
        {tasks.map((it) => (
          <TaskItem
            key={`task-${it.id}`}
            id={it.id}
            text={it.text}
            isChecked={it.isChecked}
            onClick={() => findAndSetChecked(it.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodaysTasks;
