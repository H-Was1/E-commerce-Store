"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";

const NavbarActions = () => {
  const [IsMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!IsMounted) return null;



  
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className={`flex items-center rounded-full bg-black px-4 py-1.5 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75`}
      >
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
