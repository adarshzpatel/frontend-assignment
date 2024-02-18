import React, { useEffect, useRef, useState } from "react";
import Portal from "../shared/Portal";
import { HiX } from "react-icons/hi";
import SparklesIcon from "./SparklesIcon";
import { AnimatePresence } from "framer-motion";
import {motion} from 'framer-motion'
const AskAiModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const Tabs = ({ tabs }: { tabs: { key: string; label: string }[] }) => {
    const [selected, setSelected] = useState<string>("react");

    return (
      <div className="bg-gray-800 rounded-lg text-sm p-1 flex gap-1 ">
        {tabs?.map((t) => (
          <button
            onClick={() => setSelected(t.key)}
            key={t.key}
            className={`${
              t.key === selected
                ? "bg-gray-900 text-white"
                : "text-white/60 hover:bg-gray-900/50 "
            } duration-200 ease-out   rounded-md p-2 px-4`}
          >
            {t.label}
          </button>
        ))}
      </div>
    );
  };
  const closeModal = () => {
    console.log("hi", isOpen);

    setIsOpen(false);
  };
  return (
    <>
      <div className=" ml-auto">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`p-3 rounded-full styled-btn duration-300 ease-out  hover:scale-110 active:scale-90 btn-gradient `}
        >
          {isOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <SparklesIcon className="h-6 w-6  fill-current" />
          )}
        </button>
      </div>
        <AnimatePresence>
      <Portal isOpen={isOpen}>
          <motion.div

           animate={{ opacity: [0,1], y: [-100,0],x:[150,0], scale: [0,1], rotate:[20,0] }}
           exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            transition={{duration:0.4,bounce:true,ease:'circInOut'}}
            ref={wrapperRef}
            className="z-50  origin-bottom space-y-2 shadow-xl border border-gray-700/50 shadow-gray-950/50  p-4 rounded-lg text-white bg-gray-900    bottom-[120px] max-w-lg w-full  right-16  absolute"
          >
            <div className="text-lg flex items-center gap-2">
              <SparklesIcon className="h-6 w-6 !text-amber-500 fill-current" />{" "}
              Ask Ai
            </div>
            <textarea
              rows={4}
              placeholder="Ask Ai to do something ...."
              className="w-full bg-gay-400 bg-gray-800 focus:outline-none focus:ring-1 ring-primary-400 rounded-lg p-4 text-sm"
            />
            <div className="flex items-center justify-between">
              <Tabs
                tabs={[
                  { key: "react", label: "React" },
                  { key: "vue", label: "Vue" },
                ]}
              />
              <button
                className="px-4 py-2 styled-btn  active:scale-95 active:brightness-95 hover:scale-105 duration-300 ease-out rounded-md"
                onClick={closeModal}
              >
                Generate
              </button>
            </div>
          </motion.div>
      </Portal>
        </AnimatePresence>
    </>
  );
};

export default AskAiModal;
