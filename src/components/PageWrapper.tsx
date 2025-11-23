"use client";

import React from "react";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

import { fadeUp } from "@/animation/general";

import { StaggerPageWrapper } from "@/animation/pageWrapperAnimation";

import Footer from "./Layout.tsx/Footer";
import NavigationBar from "./Layout.tsx/Header/NavigationBar";

const WIDTH = {
  full: "w-full",
  medium: "w-full xl:w-10/12 lg:w-11/12 md:w-full",
  narrow: "w-full xl:w-8/12 lg:w-10/12 md:w-full",
} as const;

const POSITION = {
  right: "items-end",
  center: "items-center",
  left: "items-start",
} as const;

type Props = {
  children: React.ReactNode;
  className?: string;
  position: keyof typeof POSITION;
  width: keyof typeof WIDTH;
};

function PageWrapper({ children, className, position, width }: Props) {
  const pathname = usePathname();
  return (
    <motion.div
      className={`border border-red-500 flex flex-col duration-150 bg-building bg-fixed ${POSITION[position]}`}
    >
      <motion.div
        key={pathname}
        className={`${className} duration-150 z-10 bg-white pb-10 min-h-[90vh] md:mt-[10vh] mt-0 shadow-lg ${WIDTH[width]}`}
        variants={StaggerPageWrapper}
        initial="from"
        animate="to"
        exit="exit"
      >
        <NavigationBar />
        <motion.div variants={fadeUp} className=" flex justify-center ">
          <div className="w-fullflex flex-col z-10 relative">
            <div className=" w-full">{children}</div>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </motion.div>
  );
}

export default PageWrapper;
