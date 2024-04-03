"use client";
import { productTypes } from "@/types/types";
import React, { MouseEventHandler } from "react";
import Currency from "./ui/Currency";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";

const Info = ({ data }: { data: productTypes }) => {
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        {data.name} | {data.category.name}
      </h1>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-2xl text-gray-900 bg-gray-200 py-1 px-2 rounded-xl">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size: </h3>
          <div>{data?.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color: </h3>
          <div
            className="h-6 w-6 border border-gray-600 rounded-full"
            style={{
              backgroundColor: `${data?.color.value}`,
            }}
          ></div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
          <Button
            onClick={onAddToCart}
            className={`flex items-center gap-x-2 rounded-full bg-black px-4 py-1.5 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75`}
          >
            Add to cart
            <ShoppingBag size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
