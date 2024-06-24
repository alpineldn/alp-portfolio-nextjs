export const fadeInAndSlideUp = {
  initial: {
    opacity: 0,
    y: 70,
  },

  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },

  exit: {
    opacity: 0,
    y: 70,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};
