"use client";

import React from "react";
import { motion } from "framer-motion";

import { ButtonTransition } from "./Animation/Animation";

type props = {
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: props) {
  return (
    <>
      <button
        onClick={onClick}
        className="text-center py-2 bg-customRed text-white tracking-widest button-shadow z-10"
      >
        {children}
      </button>
    </>
  );
}

export default Button;
