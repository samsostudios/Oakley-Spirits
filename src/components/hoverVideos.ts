import { gsap } from 'gsap';

export const hoverVideos = () => {
  class HoverVideos {
    private hoverElements: HTMLElement[];

    constructor() {
      this.hoverElements = [...document.querySelectorAll('[data-hover-video]')].map(
        (item) => item as HTMLElement
      );

      // console.log(this.hoverElements);

      this.initVideos();
      this.setListeners();
    }

    private initVideos() {
      this.hoverElements.forEach((element) => {
        const video = element.querySelector('video') as HTMLVideoElement;
        video.pause();
        // console.log('vid', video);
      });
    }

    private setListeners() {
      this.hoverElements.forEach((element) => {
        element.addEventListener('mouseenter', (e) => {
          const target = e.target as HTMLElement;

          this.hoverRevealIn(target);

          // console.log('hover in', e.target);
        });
      });
      this.hoverElements.forEach((element) => {
        element.addEventListener('mouseout', (e) => {
          const target = e.target as HTMLElement;

          // console.log('vid', target, targetVideo);

          this.hoverRevealOut(target);

          // console.log('hover out', e.target, targetImg);
        });
      });
    }

    private hoverRevealIn(element: HTMLElement) {
      const image = element.children[0] as HTMLElement;
      const video = element.querySelector('video') as HTMLVideoElement;
      const hoverElements = [...element.querySelectorAll('.hover_frame-element')].map(
        (item) => item as HTMLElement
      );

      console.log(hoverElements);

      video.paused ? video.play() : video.pause();

      const tl = gsap.timeline();
      tl.to(image, { opacity: 0 });
      tl.fromTo(
        hoverElements,
        { opacity: 0, y: '2rem' },
        { duration: 1, opacity: 1, y: '0rem', stagger: 0.2, ease: 'power2.out' },
        '<'
      );
    }
    private hoverRevealOut(element: HTMLElement) {
      const image = element.children[0] as HTMLElement;
      const video = element.querySelector('video') as HTMLVideoElement;
      const hoverElements = [...element.querySelectorAll('.hover_frame-element')].map(
        (item) => item as HTMLElement
      );

      video.pause();

      const tl = gsap.timeline();
      tl.to(image, { opacity: 1 });
      tl.to(
        hoverElements,
        {
          duration: 0.5,
          opacity: 0,
          ease: 'power4.inOut',
        },
        '<'
      );
    }
  }
  new HoverVideos();
};
export default hoverVideos;
