import { smoothCurve } from '../anim';

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  enter: {
    top: 0,
    transition: { duration: 1, ease: smoothCurve },
  },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, ease: smoothCurve, delay: 0.2 },
  },
};
