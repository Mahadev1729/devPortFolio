export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const cardHover = {
  initial: { y: 0 },
  hover: { y: -10, scale: 1.04, transition: { type: "spring" } },
};

