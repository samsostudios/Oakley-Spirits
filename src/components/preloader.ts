// eslint-disable-next-line simple-import-sort/imports
import lenis from '$utils/smoothScroll';
import { gsap } from 'gsap';

class Preloader {
  public static heroReveal() {
    const verifySection = document.querySelector('.section_verify') as HTMLElement;
    const heroPlace = document.querySelector('#heroPlace') as HTMLElement;
    const heroVideo = document.querySelector('#heroVideo') as HTMLVideoElement;
    const nav = document.querySelector('.nav_component') as HTMLElement;

    const svgPaths = [...document.querySelectorAll('.oa_path')];
    const tl = gsap.timeline({
      onComplete: () => {
        console.log('preload complete');
        lenis.start();
      },
    });

    tl.set(heroPlace, { opacity: 0, display: 'none' });
    tl.to(verifySection, { duration: 1, display: 'none', opacity: 0, ease: 'power3.inOut' });
    tl.fromTo(
      svgPaths,
      { y: '4rem', opacity: 0 },
      {
        duration: 1,
        y: '0rem',
        opacity: 1,
        stagger: 0.2,
        ease: 'power1.out',
      }
    );
    tl.fromTo(
      nav,
      { opacity: 0, y: '1rem' },
      { duration: 1.2, y: '0rem', opacity: 1, ease: 'expo.inOut' },
      '<0.2'
    );
    if (heroVideo) heroVideo.play();
  }
}

export default Preloader;
