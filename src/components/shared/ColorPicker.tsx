import { useEffect, useState } from "react";
import { indigo } from "tailwindcss/colors";
import { HuePicker } from "react-color";

const DEFAULT_COLOR = indigo["600"];

const ColorPicker = () => {
  const [color, setColor] = useState<string>(DEFAULT_COLOR);

  useEffect(() => {
    console.log(color);
    document.documentElement.style.setProperty("--primary-color", color);
  }, [color]);

  return (
    <div className="flex gap-4">
      <div className="rounded-full bg-gray-900 p-3">
        <HuePicker
          color={color}
          onChange={(c) => setColor(c.hex ?? DEFAULT_COLOR)}
        />
      </div>
      <div className="rounded-full flex-1 items-center bg-gray-900 p-3 flex gap-1.5">
        <div className="w-full h-3 rounded-full bg-primary-50" />
        <div className="w-full h-3 rounded-full bg-primary-100" />
        <div className="w-full h-3 rounded-full bg-primary-200" />
        <div className="w-full h-3 rounded-full bg-primary-300" />
        <div className="w-full h-3 rounded-full bg-primary-400" />
        <div className="w-full h-3 rounded-full bg-primary-500" />
        <div className="w-full h-3 rounded-full bg-primary-600" />
        <div className="w-full h-3 rounded-full bg-primary-700" />
        <div className="w-full h-3 rounded-full bg-primary-800" />
        <div className="w-full h-3 rounded-full bg-primary-900" />
      </div>
    </div>
  );
};

export default ColorPicker;
