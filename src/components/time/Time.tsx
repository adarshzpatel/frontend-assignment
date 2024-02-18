import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { IoArrowDownCircleSharp } from "react-icons/io5";

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

  const Clock = () => {
    return (
      <div
        draggable
        onDrag={() => setIsDragging(true)}
        onDragOver={handleOnDragOver}
        className="h-40 w-40  bg-red-600 hover:cursor-grab rounded-full overflow-hidden pointer-events-auto"
      />
    );
  };
  return (
    <div className="relative h-full  bg-image ">
      <div className="absolute flex flex-col justify-center items-center gap-8 inset-0 bg-gradient-to-t from-primary-700 via-primary-500/75 to-transparent z[-1]">
        <div className="space-y-8">
          <div
            onDrop={handleOnDropUpperSlot}
            onDragOver={handleOnDragOver}
            className={`h-40 w-40 cursor-pointer flex items-center justify-center border border-white/50 rounded-full ${
              isDragging && "bg-white/30 border-white border"
            }`}
          >
            {upperSlot && <Clock />}
          </div>

          <div className="text-4xl text-center">
            {new Date().toLocaleTimeString().slice(3)}
          </div>
        </div>
          <IoArrowDownCircleSharp className="h-8 w-8" />
        <div>
          <div
            draggable
            onDrop={handleOnDropLowerSlot}
            onDragOver={handleOnDragOver}
            className={`h-40 w-40 bg-white/10 flex items-center border border-white/50 jusify-center  rounded-full ${
              isDragging && "bg-white/30 border-white border"
            }`}
          >
            {lowerSlot && <Clock />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
