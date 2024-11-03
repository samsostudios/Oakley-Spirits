import { gsap } from 'gsap';

export const mosaicScroll = () => {
  class MosaicScroll {
    private component: HTMLElement;
    private images: HTMLImageElement[];
    private tracks: HTMLElement[];
    private bgColors: string[];
    private textColors: string[];

    constructor() {
      this.component = document.querySelector('.mosaic_component') as HTMLElement;
      this.images = [...document.querySelectorAll('.mosaic_img')].map(
        (item) => item as HTMLImageElement
      );
      this.tracks = [...document.querySelectorAll('.mosaic_spacer')].map(
        (item) => item as HTMLElement
      );
      const bgBase = getComputedStyle(this.component).backgroundColor;
      this.bgColors = ['white', 'blue', 'brown'];
      this.textColors = ['var(--palette--gold)', 'var(--palette--ember)', 'var(--palette--blue)'];

      console.log('BG', bgBase);
      this.setScroller();
    }

    private setScroller() {
      console.log('scroller');

      for (let i = 0; i < this.tracks.length; i++) {
        const item = this.tracks[i];
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            markers: true,
            scrub: 1,
            immediateRender: false,
            toggleActions: 'play none reverse none',
          },
        });

        // tl.fromTo(this.images[i], { opacity: 0, y: '1rem' }, { opacity: 1, y: '0rem' });
        // tl.fromTo(this.component, { backgroundColor: this.bgColors[i] });
      }

      // this.tracks.forEach((i, item) => {
      //   const tl = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: item,
      //       start: 'top top',
      //       end: 'bottom bottom',
      //       markers: true,
      //     },
      //   });
      // });
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: this.component,
      //     start: 'top top',
      //     end: 'bottom bottom',
      //     markers: true,
      //   },
      // });
    }
  }
  new MosaicScroll();
};
export default mosaicScroll;
