"use client";

import React from "react";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

import { fadeUp } from "@/animation/general";

import { StaggerPageWrapper } from "@/animation/pageWrapperAnimation";

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
    <motion.div
      className={` pageWrapper flex flex-col duration-150 ${
        pathname.includes("about") ? " bg-forest" : "bg-building"
      } bg-fixed ${position === "right" && "items-end"} ${
        position === "left" && "items-start"
      } ${position === "center" && "items-center"}`}
    >
      <motion.div
        key={pathname}
        className={`${className} duration-150 z-10 ${
          pathname.includes("about")
            ? " bg-[#1a1a1a93] text-[#e0e0e0]"
            : "bg-[#f5f5f56e]"
        } pb-10 min-h-[90vh] md:mt-[10vh] mt-0 shadow-lg ${
          width === "narrow" && "w-full xl:w-10/12 lg:w-11/12 md:w-full "
        } ${width === "full" && "w-full "}`}
        variants={StaggerPageWrapper}
        initial="from"
        animate="to"
        exit="exit"
      >
        <NavigationBar />

        <motion.div variants={fadeUp} className=" flex justify-center ">
          <div className={` w-11/12 flex flex-col z-10 relative`}>
            <div className=" w-full">{children}</div>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </motion.div>
  );
}

export default PageWrapper;
