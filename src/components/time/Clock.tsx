import React, { useEffect, useState } from "react";

type Props = {
  onDrag: () => void;
  onDragOver: (e: React.DragEvent) => void;
};

const Clock = ({ onDrag, onDragOver }: Props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDegree = seconds * 6;
  const minuteDegree = minutes * 6 + seconds / 10;
  const hourDegree = hours * 30 + minutes / 2;

  return (
    <div
      onDrag={onDrag}
      onDragOver={onDragOver}
      draggable
      className="relative  w-[120px] h-[120px] shadow bg-white rounded-full rotate-180"
    >
      <div className="h-3 w-px bg-gray-400 absolute left-[50%] bottom-2" />
      <div className="h-3 w-px bg-gray-400 absolute left-[50%] top-2" />
      <div className="h-px w-3 bg-gray-400 absolute top-[50%] left-2" />
      <div className="h-px w-3 bg-gray-400 absolute top-[50%] right-2" />
      {/* Hour hand */}
      <div
        className="absolute rounded-full bg-black w-[3px] h-[32px]  top-[51%] left-[50%] origin-top "
        style={{
          transform: `rotate(${hourDegree}deg)`,
        }}
      ></div>
      {/* Minute hand */}
      <div
        className="absolute bg-black rounded-full w-[2px] h-[40px]  origin-top  top-[50%] left-[50%]  "
        style={{
          transform: `rotate(${minuteDegree}deg)`,

        }}
      ></div>
      {/* Second hand */}
      <div
        className="absolute bg-primary-600 rounded-full w-px h-[40px] top-[20px] transform  left-[50%] origin-top"
        style={{
          transform: `rotate(${secondDegree}deg)`,
          transformOrigin: "50% 100%",
        }}
      ></div>

      <div className="absolute w-2 h-2 border-white bg-primary-600 rounded-full top-[50%] left-[50%] -translate-x-1 -translate-y-1"></div>
    </div>
  );
};

export default Clock;
