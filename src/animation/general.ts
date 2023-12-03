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
