import React from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

const Portal = ({ children, isOpen }: Props) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="absolute inset-0 ">{children}</div>,
    document.getElementById("overlays") ?? document.body
  );
};

export default Portal;
