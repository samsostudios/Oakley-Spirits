/* eslint-disable simple-import-sort/imports */
import HeroVideo from '$components/heroVideo';
import { startSmoothScroll, stopSmoothScroll } from '$utils/smoothScroll';
import VerifyCookie from '$utils/verifyCookie';
import { gsap } from 'gsap';

export const verify = () => {
  class Verify {
    private section: HTMLElement;
    private form: HTMLFormElement;
    private statusContainer: HTMLElement;
    private verifyVideo: HTMLVideoElement;
    private verifyPlace: HTMLElement;
    private verifyLogo: HTMLElement;
    private videoInitialized = false;
    private windowLocation = window.location.pathname;
    private verifyProductType: string[];

    constructor() {
      this.section = document.querySelector('.section_verify') as HTMLElement;
      this.form = document.querySelector('.verify_form') as HTMLFormElement;
      this.statusContainer = document.querySelector('.verify_status') as HTMLElement;
      this.verifyVideo = document.querySelector('#verifyBG') as HTMLVideoElement;
      this.verifyPlace = document.querySelector('#verifyPlace') as HTMLElement;
      this.verifyLogo = document.querySelector('.brand_img.is-verify') as HTMLElement;

      this.verifyProductType = [...document.querySelectorAll('.verify_product-type')].map((item) =>
        (item as HTMLElement).innerHTML.trim()
      );

      const canBypass = this.verifyProductType.includes('Merch');
      if (!canBypass) this.init();
    }

    private init() {
      stopSmoothScroll();
      this.section.style.display = 'flex';

      if (this.verifyVideo) {
        this.verifyVideo.addEventListener('loadeddata', this.handleVideoReady);
        if (this.verifyVideo.readyState >= 3) this.handleVideoReady();
      }

      this.setListeners();
      this.verifyReveal();
    }

    private handleVideoReady = () => {
      if (this.videoInitialized) return;
      this.videoInitialized = true;

      this.verifyVideo?.play().catch(console.warn);
      gsap.set(this.verifyPlace, { zIndex: 1, display: 'none' });
    };

    private setListeners() {
      this.form.addEventListener('submit', (e) => this.handleVerify(e));
    }

    private handleVerify(event: Event) {
      event.preventDefault();
      event.stopPropagation();

      this.statusContainer.style.display = 'none';

      VerifyCookie.setVerificationStatus();
      this.successAnimation();

      console.log('Age gate bypassed via click');
    }

    private verifyReveal() {
      const tl = gsap.timeline();

      tl.fromTo(
        document.querySelector('.verify_wrap'),
        { y: '1rem', opacity: 0 },
        { duration: 1.2, y: '0rem', opacity: 1, ease: 'expo.out' }
      );

      tl.to(
        this.verifyLogo,
        {
          duration: 1,
          opacity: 1,
          ease: 'power3.out',
        },
        '<0.5'
      );
    }

    private successAnimation() {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      const tl = gsap.timeline();

      tl.to(document.querySelector('.verify_wrap'), {
        duration: 0.8,
        y: '-1rem',
        opacity: 0,
        ease: 'power3.inOut',
      });

      tl.to(
        this.section,
        {
          duration: 1,
          display: 'none',
          opacity: 0,
          ease: 'expo.inOut',
        },
        '<0.2'
      );

      if (this.windowLocation === '/') {
        setTimeout(() => {
          HeroVideo.homeReveal();
          startSmoothScroll();
        }, (tl.duration() / 2) * 1000);
      }
    }
  }

  new Verify();
};

export default verify;

export function hideVerifyComponent() {
  const section = document.querySelector('.section_verify') as HTMLElement;
  gsap.to(section, { display: 'none' });
}
