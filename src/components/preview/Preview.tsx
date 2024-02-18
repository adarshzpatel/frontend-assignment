import Dropdown from "../layout/Dropdown";
import BeforeAfterView from "./BeforeAfterPreview";
import RadarAnimation from "./RadarAnimation";

const Preview = () => {
  const image =
    "https://images.unsplash.com/photo-1551672746-89991811c186?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex h-full gap-16 items-center p-8 ">
      <BeforeAfterView imgSrc={image} />
      <RadarAnimation />
      <div className="h-full flex-1 flex justify-end">
        <Dropdown
          triggerText="Select Item"
          options={["UI/UX Design", "Frontend", "Backend"]}
          triggerClassNames="bg-gray-900/50 focus:bg-gray-900 hover:bg-gray-900 rounded-lg w-80 flex text-white/60 hover:text-white focus:text-white focus:outline-none focus:ring  hover:ring ring-primary-500/75 py-3 px-6"
        />
      </div>
    </div>
  );
};

export default Preview;
