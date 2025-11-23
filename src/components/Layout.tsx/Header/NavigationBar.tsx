"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiThMenuOutline } from "react-icons/ti";

import { fadeDown } from "@/animation/general";

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

  const scrollUpHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.aside
        animate={{ x: [0, 100, 0] }}
        drag
        dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
        className=" group fixed w-12 text-3xl bottom-5 right-5 aspect-square flex justify-center cursor-pointer hover:bg-secondary duration-150 items-center rounded-full shadow-lg bg-primary text-white z-50"
        onClick={scrollUpHandler}
      >
        <span className={`${isOnScroll && "rotate-180"} duration-150 `}>S</span>
      </motion.aside>

      <motion.div
        variants={fadeDown}
        className=" w-full flex justify-center py-2 z-40"
      >
        <nav
          className={`${
            isOnScroll &&
            `${
              pathname.includes("/about")
                ? "bg-black text-white"
                : "bg-white text-black"
            } px-5 rounded-sm shadow-sm`
          } duration-150 w-11/12 flex items-center rounded-lg justify-between text-primary relative `}
        >
          <h3 className=" tracking-widest rotate-180">JOM</h3>
          <aside className=" md:hidden inline-block">
            <TiThMenuOutline onClick={() => setShowMenu(true)} />
          </aside>
          <ul className=" hidden md:flex flex-wrap space-x-5">
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className={` group flex items-center duration-150 text-[.7rem] py-3 relative px-5 ${
                    pathname.includes(item.url) && "text-white"
                  }`}
                >
                  {item.title}
                  {pathname.includes(item.url) && (
                    <span
                      className={` duration-200 absolute bottom-0 left-0 w-full h-full ${
                        isOnScroll
                          ? `${
                              pathname.includes("/about")
                                ? "bg-white text-black"
                                : "bg-black text-white"
                            }`
                          : "bg-accent"
                      }  z-10 flex justify-center items-center`}
                    >
                      {item.title}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <AnimatePresence mode="wait">
            {showMenu && <MobileMenu setShowMenu={setShowMenu} menu={menu} />}
          </AnimatePresence>
        </nav>
      </motion.div>
    </>
  );
}

export default NavigationBar;
