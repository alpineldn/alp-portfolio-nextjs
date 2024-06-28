export const smoothCurve = [0.76, 0, 0.24, 1];

export const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: smoothCurve },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export const fadeInAndSlideUp = {
  initial: {
    opacity: 0,
    y: 70,
  },

  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothCurve, delay: 0.2 },
  },

  exit: {
    opacity: 0,
    y: 70,
    transition: { duration: 0.8, ease: smoothCurve, delay: 0.2 },
  },
};
