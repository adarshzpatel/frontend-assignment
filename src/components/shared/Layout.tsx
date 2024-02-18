import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ResizablePanels";
import ColorPicker from "./ColorPicker";


type Props = {
  leftPane: React.ReactNode;
  middlePane: React.ReactNode;
  rightPane: React.ReactNode;
  bottomPane: React.ReactNode;
};

const Layout = ({ leftPane, rightPane, bottomPane, middlePane }: Props) => {
  return (
    <div className="h-screen flex flex-col space-y-4 bg-primary-500 text-white p-4">
      <ColorPicker />
      <ResizablePanelGroup
        direction="vertical"
        className="bg-gray-900 rounded-xl p-4  "
      >
        <ResizablePanel defaultSize={66}>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={25} className="bg-gray-800 rounded-xl">
              {leftPane}
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50} className="bg-gray-800 rounded-xl">
              {middlePane}
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25} className="bg-gray-800 rounded-xl">
              {rightPane}
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={34} className="bg-gray-800 rounded-xl">
          {bottomPane}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Layout;
