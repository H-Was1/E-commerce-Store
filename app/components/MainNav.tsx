"use client";
import { CategoryTypes } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MainNavProps {
  data: CategoryTypes[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((route) => {
    return {
      href: `/category/${route.id}`,
      label: route.name,
      active: pathname === `/category/${route.id}`,
    };
  });
  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.label}
          className={`${
            route.active ? "text-gray-900" : "text-gray-500"
          } text-sm font-medium transition-colors hover:text-black`}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
