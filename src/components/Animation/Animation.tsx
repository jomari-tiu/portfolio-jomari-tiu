export const NavigationBarTransition = {
  initial: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0%)",
    left: 0,
  },
  animate: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0%)",
    transition: {
      duration: 1,
    },
  },
};

export const PageTransition = {
  initial: {
    opacity: 0,
    left: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

export const fadeUp = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.5,
    },
  },
};

export const StaggerContainer = {
  initial: {
    width: 0,
    opacity: 0,
    overflow: "hidden",
  },
  animate: {
    overflow: "visible",
    width: "100%",
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export const StaggerLetter = {
  initial: {
    width: 0,
  },
  animate: {
    overflow: "visible",
    width: "100%",
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export const FadeRight = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: -500,
    transition: {
      duration: 0.5,
    },
  },
};

export const ButtonTransition = {
  initial: {
    clipPath: "polygon(47% 0, 47% 0, 48% 100%, 48% 100%)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 10% 100%)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    clipPath: "polygon(47% 0, 47% 0, 48% 100%, 48% 100%)",
  },
};
