import React from "react";
import { motion } from "framer-motion";

import InviewContainer from "../InviewContainer";
import { ButtonTransition, FadeRight, StaggerLetter } from "./Animation";

type Props = {
  text: string;
  className?: string;
};

export default function LetterAnimation({ text, className }: Props) {
  const ProjectTextarr = text.split("");
  return (
    <InviewContainer>
      <h1 className={`${className}`}>
        <motion.div
          variants={StaggerLetter}
          initial="initial"
          animate="animate"
          className=" space-x-5"
        >
          {ProjectTextarr.map((charracter, index) => (
            <Letter key={index} variant={ButtonTransition}>
              {charracter}
            </Letter>
          ))}
        </motion.div>
      </h1>
    </InviewContainer>
  );
}
const Letter = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: any;
}) => {
  return <motion.span variants={variant}>{children}</motion.span>;
};
