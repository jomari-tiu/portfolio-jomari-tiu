import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaSlackHash } from "react-icons/fa";

import {
  mobileFadeRight,
  mobileMenuContainer,
  mobileScale,
} from "@/animation/mobileMenuAnimation";

type props = {
  setShowMenu: Function;
  menu: {
    title: string;
    url: string;
  }[];
};

const MobileMenu = ({ setShowMenu, menu }: props) => {
  const pathname = usePathname();
  return (
    <motion.ul
      key={"mobile-menu"}
      variants={mobileMenuContainer}
      initial="from"
      animate="to"
      exit="exit"
      className="md:hidden flex flex-col justify-center fixed top-0 w-full h-full bg-primary left-0 text-white"
    >
      <motion.li variants={mobileScale} className=" absolute top-5 right-5">
        <AiOutlineCloseCircle
          className=" text-[2rem] text-white"
          onClick={() => setShowMenu(false)}
        />
      </motion.li>
      {menu.map((item: any, index: number) => (
        <motion.li variants={mobileFadeRight} key={index}>
          <Link
            href={item.url}
            className={` flex items-center  px-5 py-3  text-[2rem] ${
              pathname.includes(item.url) && " bg-white text-customRed"
            }`}
          >
            <FaSlackHash className="mr-1" />
            {item.title}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MobileMenu;
