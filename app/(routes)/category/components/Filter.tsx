"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColorTypes, SizeTypes } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React from "react";

const Filter = ({
  data,
  valueKey,
  name,
}: {
  valueKey: string;
  name: string;
  data: (SizeTypes | ColorTypes)[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  //   ------------------- handlers --------------------------------
  const handleClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div
            key={filter.id}
            className={`flex items-center`}
            onClick={() => handleClick(filter.id)}
          >
            <Button
              variant="ghost"
              className={cn(
                "flex items-center gap-x-2 rounded-full text-black bg-white border border-gray-300 px-4 py-1.5",
                selectedValue === filter.id && "text-white bg-black"
              )}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
