// eslint-disable-next-line simple-import-sort/imports
import { getWebflowEnv } from './editorCheck';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export function initSmoothScroll() {
  const env = getWebflowEnv();

  if (env === 'editor') {
    console.log('[SmoothScroll] Editor detected — disabling Lenis.');
    disableScrollStyles();
    return;
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(90, -2 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time: number) {
    if (!lenis) return;
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export function lenisInstance() {
  return lenis;
}

export function destroySmoothScroll() {
  if (!lenis) return;

  lenis.stop();
  lenis.destroy();
  lenis = null;

  disableScrollStyles();
}

function disableScrollStyles() {
  document.documentElement.style.scrollBehavior = 'auto';
  document.body.style.overflow = '';
}

export function stopSmoothScroll() {
  lenis?.stop();
}

export function startSmoothScroll() {
  lenis?.start();
}
