"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Footer from "./Layout.tsx/Footer";
import NavigationBar from "./Layout.tsx/Header/NavigationBar";

type Props = {
  children: React.ReactNode;
  className?: string;
  position: "right" | "center" | "left";
  width: "full" | "narrow";
};

function PageWrapper({ children, className, position, width }: Props) {
  const pathname = usePathname();
  return (
    <div
      className={` pageWrapper flex flex-col bg-body-bg bg-fixed ${
        position === "right" && "items-end"
      } ${position === "left" && "items-start"} ${
        position === "center" && "items-center"
      }`}
    >
      <div
        key={pathname}
        className={`${className} z-10 bg-[#f0f0f06e] pb-10 min-h-[90vh] md:mt-[10vh] mt-0 shadow-lg ${
          width === "narrow" && "w-full xl:w-10/12 lg:w-11/12 md:w-full "
        } ${width === "full" && "w-full "}`}
      >
        <NavigationBar />
        <div className=" flex justify-center">
          <div className={` w-11/12 flex flex-col z-10 relative`}>
            <div className=" w-full">{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
