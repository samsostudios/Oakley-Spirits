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
          const targetImg = target.children[0] as HTMLElement;
          const targetVideo = target.querySelector('video') as HTMLVideoElement;

          targetVideo.paused ? targetVideo.play() : targetVideo.pause();
          this.hoverRevealIn(targetImg);

          // console.log('hover in', e.target);
        });
      });
      this.hoverElements.forEach((element) => {
        element.addEventListener('mouseout', (e) => {
          const target = e.target as HTMLElement;
          const targetImg = target.children[0] as HTMLElement;
          const targetVideo = target.querySelector('video') as HTMLVideoElement;

          // console.log('vid', target, targetVideo);
          targetVideo.pause();
          this.hoverRevealOut(targetImg);

          // console.log('hover out', e.target, targetImg);
        });
      });
    }

    private hoverRevealIn(element: HTMLElement) {
      const tl = gsap.timeline();
      tl.to(element, { opacity: 0 });
    }
    private hoverRevealOut(element: HTMLElement) {
      const tl = gsap.timeline();
      tl.to(element, { opacity: 1 });
    }
  }
  new HoverVideos();
};
export default hoverVideos;
