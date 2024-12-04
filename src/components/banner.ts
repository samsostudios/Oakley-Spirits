import { gsap } from 'gsap';

export const banner = () => {
  class Banner {
    private bannerTrack: HTMLElement;

    constructor() {
      this.bannerTrack = document.querySelector('.banner_track') as HTMLElement;

      if (this.bannerTrack) this.setLiisteners();
    }

    private setLiisteners() {
      this.bannerMove();
      window.addEventListener('resize', () => {
        this.bannerMove();
      });
    }

    private bannerMove() {
      const movement = this.bannerTrack.clientWidth - window.innerWidth;
      const speed = 50;
      const dur = Math.abs(movement / speed);
      //   console.log('DUR!!!', dur);
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(this.bannerTrack, { duration: dur, x: -movement, ease: 'linear' });
    }
  }
  new Banner();
};
export default banner;
