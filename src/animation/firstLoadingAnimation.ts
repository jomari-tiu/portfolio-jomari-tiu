export const StaggerContainer = {
  from: {
    scale: 0,
    overflow: "hidden",
  },
  to: {
    overflow: "visible",
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
export const color = {
  from: {
    color: "white",
  },
  to: {
    color: "black",
    transition: {
      delay: 0.8,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const Appear = {
  from: {
    width: 0,
    opacity: 0,
  },
  to: {
    width: "auto",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
