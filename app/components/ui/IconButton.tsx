import { Button } from "@/components/ui/button";
import React, { MouseEventHandler } from "react";

interface IconButton {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  Icon: React.ReactElement;
}

const IconButton = ({ Icon, onClick }: IconButton) => {
  return (
    <Button
      className={`rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition`}
    >
      {Icon}
    </Button>
  );
};

export default IconButton;
