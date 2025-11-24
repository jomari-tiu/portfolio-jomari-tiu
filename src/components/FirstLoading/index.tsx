import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Appear,
  StaggerContainer,
  color,
} from "@/animation/firstLoadingAnimation";

const FirstLoading = () => {
  const addName = "omari";
  const arrayName = addName.split("");
  return (
    <AnimatePresence mode="wait">
      <div className="w-full h-screen flex justify-center items-center">
        <div className={"logo"}>
          <motion.h1
            variants={StaggerContainer}
            initial="from"
            animate="to"
            exit="exit"
            className="h-[150px] w-[150px] flex justify-center items-baseline bg-black text-black rounded-full text-[104px]"
          >
            <motion.div variants={color}>J</motion.div>
            {arrayName.map((item, i) => (
              <LetterAnimate key={i} variantName={Appear}>
                {item}
              </LetterAnimate>
            ))}
          </motion.h1>
        </div>
      </div>
    </AnimatePresence>
  );
};

const LetterAnimate = ({
  children,
  variantName,
}: {
  children: React.ReactNode;
  variantName: any;
}) => {
  return (
    <motion.span variants={variantName} className="text-accent origin-left">
      {children}
    </motion.span>
  );
};

export default FirstLoading;
