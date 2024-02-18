import { ResizablePanel, ResizablePanelGroup } from "../layout/ResizablePanels";
import { PanelResizeHandle as ResizeHandlePrimitive } from "react-resizable-panels";

const BeforeAfterView = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="relative rounded-lg flex-1  overflow-hidden h-full">
      <img
        src={imgSrc}
        alt="thumbnail"
        className="object-cover w-full h-full aspect-video "
      />
      <ResizablePanelGroup
        direction="horizontal"
        className="absolute inset-0 rounded-lg overflow-hidden"
      >
        <ResizablePanel
          defaultSize={50}
          className="bg-primary-500/50  rounded-l-lg backdrop-brightness-75  backdrop-saturate-150 backdrop-contrast-150 w-[110%]"
        />
        <ResizeHandlePrimitive className="w-2 flex flex-col justify-center relative -left-0.5">
          <div className="w-1 h-8 bg-white rounded-full"></div>
        </ResizeHandlePrimitive>
        <ResizablePanel defaultSize={50} className="" />
      </ResizablePanelGroup>
    </div>
  );
};

export default BeforeAfterView;
