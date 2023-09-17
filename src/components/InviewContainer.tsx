import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
};

export default function InviewContainer({ children }: Props) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return <motion.div ref={ref}>{inView && <>{children}</>}</motion.div>;
}
