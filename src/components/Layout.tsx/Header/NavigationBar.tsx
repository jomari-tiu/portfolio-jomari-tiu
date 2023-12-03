"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSlackHash } from "react-icons/fa";
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

  return (
    <motion.div
      variants={fadeDown}
      className="sticky w-full top-0 flex justify-center py-2 z-40"
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
        <h3 className=" tracking-widest rotate-180">TRMJ</h3>
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
                <FaSlackHash className=" text-lg mr-1 group-hover:rotate-45 duration-150" />
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
                        : "bg-[#dd0000]"
                    }  z-10 flex justify-center items-center`}
                  >
                    <FaSlackHash className=" text-2xl mr-1 rotate-45" />
                    {item.title}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        {showMenu && <MobileMenu setShowMenu={setShowMenu} menu={menu} />}
      </nav>
    </motion.div>
  );
}

export default NavigationBar;
