import { BillboardTypes } from "@/types/types";
import React from "react";
interface Props {
  data: BillboardTypes;
}

const Billboard = ({ data }:Props) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
        }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col items-center justify-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xs max-w-xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
