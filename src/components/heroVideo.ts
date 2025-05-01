// eslint-disable-next-line simple-import-sort/imports
import { gsap } from 'gsap';

class HeroVideo {
  public static homeReveal() {
    const heroPlace = document.querySelector('#heroPlace') as HTMLElement;
    const heroVideo = document.querySelector('#heroVideo') as HTMLVideoElement;
    const nav = document.querySelector('.nav_component') as HTMLElement;
    const svgPaths = [...document.querySelectorAll('.oa_path')];
    const banner = document.querySelector('.banner_component') as HTMLElement;

    let videoInitialized = false;
    const handleVideoReady = () => {
      if (videoInitialized) return;
      videoInitialized = true;

      if (heroVideo.paused) heroVideo.play().catch(console.warn);
      gsap.set(heroPlace, { zIndex: 1, display: 'none' });
    };

    heroVideo.addEventListener('loadeddata', () => {
      // console.log('[HERO] Video data loaded');
      handleVideoReady();
    });

    if (heroVideo.readyState >= 3) {
      // console.log('[HERO] Video was already loaded');
      handleVideoReady();
    }

    gsap.set(heroPlace, { zIndex: 4 });

    const tl = gsap.timeline();
    if (banner)
      tl.fromTo(
        banner,
        { opacity: 0, y: '-3rem', height: 0 },
        { duration: 2, opacity: 1, y: '0rem', height: '3rem', ease: 'power3.out' },
        '<'
      );
    tl.fromTo(
      svgPaths,
      { y: '4rem', opacity: 0 },
      {
        duration: 1,
        y: '0rem',
        opacity: 1,
        stagger: 0.2,
        ease: 'power1.out',
      },
      '<'
    );
    tl.fromTo(
      nav,
      { opacity: 0, y: '1rem' },
      { duration: 1.2, y: '0rem', opacity: 1, ease: 'expo.inOut' },
      '<0.2'
    );
  }
}

export default HeroVideo;
