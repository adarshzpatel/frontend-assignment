import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdHeight } from "react-icons/md";
import Portal from "./Portal";

interface DropdownProps {
  options: string[];
  triggerText: string;
  triggerClassNames?: string;
  defaultSelected?: Set<string>;
  chevronIcon?: React.ReactNode;
}

const Dropdown = ({
  options,
  triggerText,
  triggerClassNames,
  defaultSelected,
  chevronIcon,
}: DropdownProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Set<string>>(
    defaultSelected ?? new Set()
  );

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
        {triggerText} {chevronIcon && <span>{chevronIcon}</span>}
      </button>
      <AnimatePresence>
        {isFocused && (
          <motion.ul
            animate={{ opacity: [0, 1], scale: [0, 1] }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="min-w-max z-50 absolute origin-top space-y-1 bg-gray-900 w-full mt-2 rounded-lg border border-gray-700/50  shadow-xl shadow-gray-950/50 p-2 "
          >
            <li
              onClick={handleClickAll}
              className="px-3 cursor-pointer py-1 hover:gap-4 duration-200 ease-out hover:bg-gray-800 rounded-lg flex items-center  gap-2  "
            >
              <span
                className={`h-4 w-4 flex items-center justify-center rounded bg-primary-500`}
              >
                {options.length === selected.size ? <FiMinus /> : <FiPlus />}
              </span>
              All
            </li>
            {options.map((option) => (
              <li
                key={option}
                className="px-3 cursor-pointer flex hover:gap-3 duration-200 ease-out items-center gap-2 py-1 hover:bg-gray-800 rounded-lg"
                onClick={() => handleOptionClick(option)}
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    className="opacity-0 absolute h-4 w-4 "
                    checked={selected.has(option)}
                    onChange={() => handleOptionClick(option)}
                  />
                  <div
                    className={`${
                      selected.has(option)
                        ? "bg-primary-500 border-0"
                        : "bg-white"
                    }   duration-300 ease-out rounded border  w-4 h-4 flex flex-shrink-0 justify-center items-center mr-1focus-within:ring ring-primary-400`}
                  >
                    {selected.has(option) && (
                      <svg
                        className="fill-current w-3 h-3 text-white pointer-events-none"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    )}
                  </div>
                </div>
                  {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
