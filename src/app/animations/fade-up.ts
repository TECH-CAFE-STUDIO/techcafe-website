import gsap from 'gsap';

export const fadeUp = (
  element: string | Element,
  delay = 0
) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay,
    }
  );
};
