"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaSlackHash } from "react-icons/fa";

import { TiThMenuOutline } from "react-icons/ti";

import { FadeRight, NavigationBarTransition } from "../../Animation/Animation";
import LetterAnimation from "../../Animation/LetterAnimation";
import MobileMenu from "./MobileMenu";

const menu = [
  {
    title: "HOME",
    url: "/home",
  },
  {
    title: "ABOUT",
    url: "/about",
  },
  {
    title: "PROJECTS",
    url: "/projects",
  },
];

function NavigationBar() {
  const pathname = usePathname();

  const [isOnScroll, setOnScroll] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    });
  });

  return (
    <div className="sticky w-full top-0 flex justify-center py-5 z-40">
      <nav
        className={`${
          isOnScroll && "bg-white px-5 rounded-sm shadow-sm"
        } w-11/12 md:py-4 flex items-center justify-between text-primary relative `}
      >
        <h3 className=" tracking-widest rotate-180">TRMJ</h3>
        <aside className=" md:hidden inline-block">
          <TiThMenuOutline onClick={() => setShowMenu(true)} />
        </aside>
        <ul className=" hidden md:flex flex-wrap space-x-5">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className={` flex items-center text-[.7rem] py-3 relative px-5 ${
                  pathname.includes(item.url) && "text-white"
                }`}
              >
                <FaSlackHash className=" text-lg mr-1" />
                {item.title}
                {pathname.includes(item.url) && (
                  <motion.span
                    layoutId="navigation-menu"
                    variants={NavigationBarTransition}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`absolute bottom-0 left-0 w-full h-full ${
                      isOnScroll ? "bg-black" : "bg-[#dd0000]"
                    }  z-10 flex justify-center items-center`}
                  >
                    <FaSlackHash className=" text-lg mr-1" />
                    {item.title}
                  </motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        {showMenu && <MobileMenu setShowMenu={setShowMenu} menu={menu} />}
      </nav>
    </div>
  );
}

export default NavigationBar;
