import { cn } from "@/lib/utils";
import { ImageTypes } from "@/types/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";

const GalleryTab = ({ image }: { image: ImageTypes }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover origin-center"
            ></Image>
          </span>
          <span
            className={cn(
              `absolute inset-0 rounded-md ring-2 ring-offset-2`,
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
