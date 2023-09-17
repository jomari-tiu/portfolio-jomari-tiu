import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaSlackHash } from "react-icons/fa";

import { NavigationBarTransition } from "../Animation/Animation";

export const LinkMenu = ({ item, pathname }: any) => {
  return (
    <li>
      <Link
        href={item.url}
        className={` flex items-center text-[.7rem] py-3 relative px-5 ${
          pathname === item.url && "text-white"
        }`}
      >
        <FaSlackHash className=" text-lg mr-1" />
        {item.title}
        {pathname === item.url && (
          <motion.span
            layoutId="underline"
            variants={NavigationBarTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute bottom-0 left-0 w-full h-full bg-[#dd0000]  z-10 flex justify-center items-center"
          >
            <FaSlackHash className=" text-lg mr-1" />
            {item.title}
          </motion.span>
        )}
      </Link>
    </li>
  );
};
