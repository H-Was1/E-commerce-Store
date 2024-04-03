import { Button } from "@/components/ui/button";
import React, { MouseEventHandler } from "react";

interface IconButton {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  Icon: React.ReactElement;
  className?: string;
}

const IconButton = ({ Icon, onClick, className }: IconButton) => {
  return (
    <Button
      className={`rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition ${className}`}
      onClick={onClick}
    >
      {Icon}
    </Button>
  );
};

export default IconButton;
