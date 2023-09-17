"use client";

import React from "react";
import { motion } from "framer-motion";

import { ButtonTransition } from "./Animation/Animation";

type props = {
  children: React.ReactNode;
  onClick: () => void;
  inStagger?: boolean;
};

function Button({ children, onClick, inStagger }: props) {
  return (
    <>
      {inStagger ? (
        <motion.button
          variants={ButtonTransition}
          onClick={onClick}
          className="px-10 py-2 bg-customRed text-white tracking-widest"
        >
          {children}
        </motion.button>
      ) : (
        <motion.button
          variants={ButtonTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onClick}
          className="px-10 py-2 bg-customRed text-white tracking-widest"
          whileTap={{ scale: 0.9 }}
        >
          {children}
        </motion.button>
      )}
    </>
  );
}

export default Button;
