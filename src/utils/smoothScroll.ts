import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const smoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(90, -2 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 2,
    infinite: false,
  });

  // Animation frame loop to keep Lenis and ScrollTrigger in sync
  function raf(time: number) {
    lenis.raf(time);
    ScrollTrigger.update(); // Sync GSAP's ScrollTrigger with Lenis
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};
