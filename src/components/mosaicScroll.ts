import { gsap } from 'gsap';

export const mosaicScroll = () => {
  class MosaicScroll {
    private component: HTMLElement;
    private images: HTMLImageElement[];
    private svgBG: HTMLElement;
    private svgLayers: SVGPathElement[];
    private tracks: HTMLElement[];
    private bgColors: string[];
    private textColors: string[];

    constructor() {
      this.component = document.querySelector('.mosaic_component') as HTMLElement;
      this.svgBG = document.querySelector('.mosaic_svg') as HTMLElement;
      this.images = [...document.querySelectorAll('.mosaic_img')].map(
        (item) => item as HTMLImageElement
      );
      this.svgLayers = [...document.querySelectorAll('.mosaic_svg-group')].map(
        (item) => item as SVGPathElement
      );
      this.tracks = [...document.querySelectorAll('.mosaic_spacer')].map(
        (item) => item as HTMLElement
      );
      const bgBase = getComputedStyle(this.component).backgroundColor;

      // console.log(this.svgLayers);

      this.bgColors = [
        'rgba(251, 252, 255, 1)',
        'rgba(233, 236, 243, 1)',
        'rgba(5, 27, 107, 1)',
        'rgba(117, 30, 3, 1)',
      ];
      this.textColors = [
        'rgba(241, 138, 0, 1)',
        'rgba(241, 138, 0, 1)',
        'rgba(117, 30, 3, 1)',
        'rgba(5, 27, 107, 1)',
      ];

      this.revealSection();
      this.setScroller();
    }

    private setScroller() {
      for (let i = 0; i < this.tracks.length - 1; i++) {
        const item = this.tracks[i];

        // console.log('TT', this.images[i]);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top center',
            end: '90% bottom',
            scrub: true,
            onUpdate: (self) => this.updateBackgroundTransition(self.progress, i),
            markers: true,
          },
        });

        tl.fromTo(
          this.images[i],
          { opacity: 0, y: '4rem', rotateX: '-8deg' },
          { opacity: 1, y: '0rem', rotateX: '0deg', ease: 'linear' }
        );
      }
    }

    private updateBackgroundTransition(progress: number, index: number) {
      if (index >= 0 && index < this.bgColors.length - 1) {
        const nextColor = this.bgColors[index + 1];
        const currentColor = this.bgColors[index];
        const nextText = this.textColors[index + 1];
        const currentText = this.textColors[index];

        gsap.to(this.component, {
          backgroundColor: gsap.utils.interpolate(currentColor, nextColor, progress),
          overwrite: true,
          duration: 0,
        });
        gsap.to(this.svgBG, {
          color: gsap.utils.interpolate(currentText, nextText, progress),
          overwrite: true,
          duration: 0,
          ease: 'linear',
        });
      }
    }

    private revealSection() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.component,
          start: 'top 80%',
          end: 'top 80%',
          // markers: true,
          toggleActions: 'play none reverse none',
        },
      });

      tl.fromTo(
        this.svgLayers,
        { opacity: 0, y: '2rem' },
        { duration: 1.2, opacity: 1, y: '0rem', stagger: 0.2, ease: 'power3.out' }
      );
    }
  }
  new MosaicScroll();
};
export default mosaicScroll;
