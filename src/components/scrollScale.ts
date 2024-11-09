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
    private endValues: string;

    constructor() {
      this.scaleParent = document.querySelector('.section_overview') as HTMLElement;
      this.scaleElement = document.querySelector('[data-scroll-scale]') as HTMLElement;
      this.scaleFactor = parseFloat(this.scaleElement.dataset.scrollScale as string);
      this.endValues = '120% bottom';

      const bp = breakpoints();

      console.log('BPPPPPP', this.scaleFactor);
      if (bp[0] !== 'desktop') {
        this.scaleFactor += 0.25;
        this.endValues = '100% bottom';
      }

      this.setupScroller();
    }

    private setupScroller() {
      if (this.scaleElement) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: this.scaleParent,
            start: 'top bottom',
            end: this.endValues,
            scrub: true,
            markers: true,
          },
        });

        tl.fromTo(this.scaleElement, { scale: this.scaleFactor }, { scale: 1, ease: 'linear' });
      }
    }
  }
  new ScrollScale();
};
export default scrollScale;
