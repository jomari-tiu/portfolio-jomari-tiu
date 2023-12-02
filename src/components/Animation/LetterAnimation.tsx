import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import InviewContainer from "../InviewContainer";

type Props = {
  text: string;
  className?: string;
};

export default function LetterAnimation({ text, className }: Props) {
  const textArray = text.split("");
  return (
    <InviewContainer>
      <div className={`${className} items-center overflow-hidden space-x-2`}>
        <AnimatePresence mode="wait">
          {textArray.map((character, index) => (
            <motion.div
              key={index}
              variants={toDown}
              initial="initial"
              animate="animate"
              exit="exit"
              className=" inline-block  text-[5vw]"
              // whileInView='animate'
              // viewport={{
              //   once: true,
              // }}
              custom={index}
            >
              {character}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </InviewContainer>
  );
}

const toDown = {
  initial: (index: number) => ({
    y: "-100%",
    transition: {
      delay: (0.2 * index) / 2,
    },
  }),
  animate: (index: number) => ({
    y: 0,
    transition: {
      delay: (0.2 * index) / 2,
    },
  }),
  exit: (index: number) => ({
    y: "-100%",

    transition: {
      delay: (0.2 * index) / 2,
    },
  }),
};
