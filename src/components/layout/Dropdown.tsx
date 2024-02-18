import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { cn } from "../utils";

interface DropdownProps {
  options: string[];
  triggerText: string;
  triggerClassNames?: string;
  defaultSelected?:Set<string>
}

const Dropdown = ({
  options,
  triggerText,
  triggerClassNames,
  defaultSelected
}: DropdownProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(defaultSelected ?? new Set());
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    setSelected((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(option)) {
        newSelected.delete(option);
      } else {
        newSelected.add(option);
      }
      return newSelected;
    });
  };

  const handleClickAll = () => {
    setSelected((prevSelected) => {
      if (prevSelected.size === options.length) {
        return new Set();
      } else {
        const remainingOptions = options.filter(
          (option) => !prevSelected.has(option)
        );
        const newSelected = new Set(prevSelected);
        remainingOptions.forEach((option) => newSelected.add(option));
        return newSelected;
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        className={cn(
          "flex items-center justify-between gap-2",
          triggerClassNames
        )}
        onClick={() => setIsFocused((prev) => !prev)}
        tabIndex={0}
      >
        {triggerText}{" "}
        <span>
          <BiChevronDown className="h-8 w-8" />
        </span>
      </button>
      {isFocused && (
        <ul className="min-w-max absolute space-y-1 bg-gray-900 w-full mt-2 rounded-lg border border-gray-700/50  shadow-xl shadow-gray-950/50 p-2 ">
          <li
            onClick={handleClickAll}
            className="px-3 cursor-pointer py-1 hover:gap-4 duration-200 ease-out hover:bg-gray-800 rounded-lg flex items-center  gap-2  "
          >
            <span className={`h-4 w-4 flex items-center justify-center rounded bg-primary-500`}>{options.length === selected.size ? "-" : "+"}</span>
            All
          </li>
          {options.map((option) => (
            <li
              key={option}
              className="px-3 cursor-pointer flex hover:gap-4 duration-200 ease-out items-center gap-2 py-1 hover:bg-gray-800 rounded-lg"
              onClick={() => handleOptionClick(option)}
            >
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={selected.has(option)}
                className="h-4 w-4"
              />{" "}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
