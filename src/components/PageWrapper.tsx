"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiTwotonePhone, AiOutlineLinkedin } from "react-icons/ai";
import { BsMailbox } from "react-icons/bs";

import { GrFacebook } from "react-icons/gr";

import { PageTransition } from "./Animation/Animation";
import NavigationBar from "./Layout.tsx/NavigationBar";

type Props = {
  children: React.ReactNode;
  className: string;
  position: "right" | "center" | "left";
};

function PageWrapper({ children, className, position }: Props) {
  const pathname = usePathname();
  return (
    <div
      className={` pageWrapper flex flex-col bg-body-bg bg-fixed ${
        position === "right" && "items-end"
      } ${position === "left" && "items-start"} ${
        position === "center" && "items-center"
      }`}
    >
      <motion.div
        variants={PageTransition}
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        className={
          className + " bg-[#f0f0f06e] pb-10 min-h-[90vh] mt-[10vh] shadow-lg"
        }
      >
        <NavigationBar />
        <div className=" flex justify-center">
          <div className={` w-11/12 flex flex-col z-10 relative`}>
            <div className=" w-full">{children}</div>
          </div>
        </div>
      </motion.div>
      <footer className=" w-full flex justify-center py-10">
        <ul className=" w-11/12 grid grid-cols-5">
          <li className=" col-span-3">
            <h1 className=" font-bold tracking-widest">
              LETS WORK TOGETHER FOR YOUR NEXT PROJECTS
            </h1>
          </li>
          <li>
            <h3 className=" tracking-wider mb-5">Contact</h3>
            <ul className=" space-y-3">
              <li className=" flex items-center space-x-2">
                <GrFacebook /> <Link href="">Tiu Jmri</Link>
              </li>
              <li className=" flex items-center space-x-2">
                <BsMailbox />
                <Link href="">jomtiu16@gmail.com</Link>
              </li>
              <li className=" flex items-center space-x-2">
                <AiTwotonePhone />
                <Link href="">09515532773</Link>
              </li>
              <li className=" flex items-center space-x-2">
                <AiOutlineLinkedin />
                <Link href="">jomari-tiu</Link>
              </li>
            </ul>
          </li>
          <li></li>
        </ul>
      </footer>
    </div>
  );
}

export default PageWrapper;
