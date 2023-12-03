export const heroStaggerContainer = {
  from: {
    scale: 0,
    overflow: "hidden",
  },
  to: {
    overflow: "visible",
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

export const fadeRight = {
  from: {
    opacity: 0,
    x: -50,
  },
  to: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const fadeDown = {
  from: {
    opacity: 0,
    y: -50,
  },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const fadeUp = {
  from: {
    opacity: 0,
    y: 50,
  },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
