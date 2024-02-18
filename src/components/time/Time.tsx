import { useState } from "react";
import Clock from "./Clock";
import { BsArrowDown } from "react-icons/bs";
import CurrenTime from "./CurrenTime";

const Time = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [upperSlot, setUpperSlot] = useState<boolean>(true);
  const [lowerSlot, setLowerSlot] = useState<boolean>(false);

  const handleOnDropUpperSlot = (e: React.DragEvent) => {
    e.preventDefault();
    console.log("Dropped on upper slot");
    setIsDragging(false);
    setUpperSlot(true);
    setLowerSlot(false);
  };

  const handleOnDropLowerSlot = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    console.log("Dropped on lower slot");
    setLowerSlot(true);
    setUpperSlot(false);
  };

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative h-full  bg-image ">
      <div className="absolute flex flex-col justify-center items-center gap-8 inset-0 bg-gradient-to-t from-primary-600 via-primary-500/75 to-transparent z[-1]">
        <div className="flex flex-col h-full  justify-around items-centern">
          <div
            onDrop={handleOnDropUpperSlot}
            onDragOver={handleOnDragOver}
            className={` w-[120px] h-[120px] cursor-pointer flex items-center justify-center border border-white/50 rounded-full ${
              isDragging && "bg-white/30 border-white border"
            }`}
          >
            {upperSlot && (
              <Clock
                onDrag={() => setIsDragging(true)}
                onDragOver={handleOnDragOver}
              />
            )}
          </div>

          <CurrenTime />
          <div className="mx-auto">
            <BsArrowDown className="text-2xl" />
          </div>
          <div
            draggable
            onDrop={handleOnDropLowerSlot}
            onDragOver={handleOnDragOver}
            className={`w-[120px] h-[120px]  bg-white/10 flex items-center border border-white/50 jusify-center  rounded-full ${
              isDragging && "bg-white/30 border-white border"
            }`}
          >
            {lowerSlot && (
              <Clock
                onDrag={() => setIsDragging(true)}
                onDragOver={handleOnDragOver}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
