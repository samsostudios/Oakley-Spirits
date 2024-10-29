/* eslint-disable simple-import-sort/imports */
import { breakpoints } from '$utils/deviceInfo';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollScale = () => {
  class ScrollScale {
    private scaleParent: HTMLElement;
    private scaleElement: HTMLElement;
    private scaleFactor: number;

    constructor() {
      this.scaleParent = document.querySelector('.section_overview') as HTMLElement;
      this.scaleElement = document.querySelector('[data-scroll-scale]') as HTMLElement;
      this.scaleFactor = parseFloat(this.scaleElement.dataset.scrollScale as string);

      const bp = breakpoints();

      if (bp[0] !== 'desktop') this.scaleFactor -= 0.25;

      //   console.log('hh', bp, this.scaleFactor);

      this.setupScroller();
    }

    private setupScroller() {
      if (this.scaleElement) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: this.scaleParent,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
            // markers: true,
          },
        });

        tl.fromTo(this.scaleElement, { scale: this.scaleFactor }, { scale: 1 });
      }
    }
  }
  new ScrollScale();
};
export default scrollScale;
