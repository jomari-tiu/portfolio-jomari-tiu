export const titleStagger = {
  from: {
    width: 0,
    overflow: "hidden",
  },
  to: {
    width: 600,
    transition: {
      delay: 1,
      duration: 0.5,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

export const fadeUpTitle = {
  from: {
    opacity: 0,
    y: 50,
  },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
