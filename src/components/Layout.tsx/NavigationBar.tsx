"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaSlackHash } from "react-icons/fa";

import { NavigationBarTransition, fadeUp } from "../Animation/Animation";

const menu = [
  {
    title: "HOME",
    url: "/",
  },
  {
    title: "CONTACT & ABOUT",
    url: "/contact-&-about",
  },
  {
    title: "PROJECTS",
    url: "/projects",
  },
  {
    title: "EXPIRIENCES",
    url: "/expiriences",
  },
];

function NavigationBar() {
  const pathname = usePathname();

  const elementRef = useRef<any>(null);

  const [isOnScroll, setOnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setOnScroll(true) : setOnScroll(false);
    });
  });

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className="sticky w-full top-0 flex justify-center py-5 z-20"
    >
      <nav
        className={`${
          isOnScroll && "bg-white px-10 rounded-full shadow-lg"
        } w-11/12 flex items-center justify-between text-primary `}
      >
        <h3
          className={` ${
            isOnScroll ? "rotate-0" : "rotate-180"
          } font-bold tracking-widest`}
        >
          JOMARI
        </h3>
        <ul className=" flex flex-wrap space-x-5">
          {menu.map((item, index) => (
            <li key={index}>
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
      </nav>
    </motion.div>
  );
}

export default NavigationBar;
