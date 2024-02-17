import React from "react";

export type TaskItemProps = {
  id: string;
  text: string;
  isChecked: boolean;
  onClick?: () => void;
};

const TaskItem = ({ onClick, id, text, isChecked }: TaskItemProps) => {
  return (
    <label onClick={onClick} htmlFor={id} className="flex items-center gap-2">
      <input
        id={id}
        checked={isChecked}
        type="checkbox"
        onClick={onClick}
        className="appearance-none h-5 w-5 checked:bg-primary-500 line-through checked:border-primary-500 rounded-md border"
      />
      <span className={`${isChecked && 'text-primary-500 '}`}>{text}</span>
    </label>
  );
};

export default TaskItem;
