import React, { useState } from "react";
import Checkbox from "../shared/Checkbox";



const TodaysTasks = () => {
  const [checked,setChecked] = useState<Set<string>>(new Set());

  const tasks = [
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
  ]

      const toggleCheck = (id: string) => {
        if (checked.has(id)) {
          checked.delete(id);
        } else {
          checked.add(id);
        }
        setChecked(new Set(checked));
      }


  return (
    <div className="p-8">
      <h2 className="text-2xl">Today's Tasks</h2>
      <div className="mt-4 space-y-2 ">
        {tasks.map((it) => (
          <Checkbox key={`todo-${it.id}`} label={it.text} checked={checked.has(it.id)}  onChange={()=>toggleCheck(it.id)}/>
        ))}
      </div>
    </div>
  );
};

export default TodaysTasks;
