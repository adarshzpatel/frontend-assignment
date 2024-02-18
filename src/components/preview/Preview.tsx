import { HiChevronDown } from "react-icons/hi";
import Dropdown from "../shared/Dropdown";
import AskAiModal from "./AskAiModal";
import BeforeAfterView from "./BeforeAfterPreview";
import RadarAnimation from "./RadarAnimation";
import { FiChevronDown } from "react-icons/fi";

const Preview = () => {
  const image =
    "https://images.unsplash.com/photo-1551672746-89991811c186?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="relative flex h-full gap-16 items-center p-8  ">
      <BeforeAfterView imgSrc={image} />
      <RadarAnimation />
      <div className="h-full flex-1 flex justify-end">
        <div className="flex flex-col justify-between">
          <Dropdown
            triggerText="Select Item"
            options={["UI/UX Design", "Frontend", "Backend"]}
            chevronIcon={<FiChevronDown className="h-6 w-6"/>}
            triggerClassNames="bg-gray-900/50 border-t border-gray-700/50 ring-1 ring-gray-950/50 focus:bg-gray-900 hover:bg-gray-900 duration-300 rounded-lg w-80 flex text-white/60 hover:text-white focus:text-white focus:outline-none focus:ring-1  hover:ring hover:ring-primary-400  py-3 px-6"
          />
        <AskAiModal />
        </div>
      </div>
    </div>
  );
};

export default Preview;
