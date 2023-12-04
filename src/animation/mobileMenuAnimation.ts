export const mobileMenuContainer = {
  from: {
    left: "-100%",
    overflow: "hidden",
  },
  to: {
    left: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
  exit: {
    left: "100%",
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
      when: "afterChildren",
    },
  },
};

export const mobileFadeRight = {
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
  exit: {
    opacity: 0,
    x: 100,
  },
};

export const mobileScale = {
  from: {
    scale: 0,
  },
  to: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    scale: 2,
    opacity: 0,
  },
};
