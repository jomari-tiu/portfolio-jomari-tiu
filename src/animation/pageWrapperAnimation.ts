export const StaggerPageWrapper = {
  from: {
    scale: 0,
    overflow: "hidden",
  },
  to: {
    overflow: "visible",
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 1,
      when: "beforeChildren",
    },
  },
};
