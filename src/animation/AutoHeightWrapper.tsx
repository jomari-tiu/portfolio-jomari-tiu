import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AutoHeightWrapper({
  show,
  children,
}: {
  show: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(0);

  useEffect(() => {
    if (show && ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [show, children]);

  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height,
            opacity: 1,
            transition: {
              duration: 0.5,
              staggerChildren: 0.5,
              when: "beforeChildren",
            },
          }}
          exit={{
            height: 0,
            opacity: 0,
            transition: {
              duration: 0.5,
              staggerChildren: 0.5,
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div ref={ref}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
