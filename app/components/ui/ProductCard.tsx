"use client";
import { productTypes } from "@/types/types";
import Image from "next/image";
import React, { MouseEventHandler, useEffect, useState } from "react";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/usePreview";
import PreviewModal from "../PreviewModal";
import useCart from "@/hooks/use-cart";

const ProductCard = ({ data }: { data: productTypes }) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();
  const [IsMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!IsMounted) return null;
  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images[0].url}
          alt="image"
          width={200}
          height={200}
          className="aspect-square object-cover rounded-md w-full"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute px-6 bottom-5 w-full">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              Icon={<Expand size={20} className="text-gray-600" />}
              onClick={onPreview}
            />
            <IconButton
              Icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="">
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-gray-500 text-sm">{data.category.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
