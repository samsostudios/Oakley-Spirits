import Preloader from '$components/preloader';
import { loadComponent } from '$utils/loadComponent';
import VerifyCookie from '$utils/verifyCookie';

// import { smoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// Oakley ///');

  // smoothScroll();
  if (!VerifyCookie.isVerified()) {
    console.log('no verified cookie found...');
    console.log('load verify module');
    loadComponent('.verify_component', () => import('$components/verify'));
    // loadVerificationModule();
  } else {
    console.log('verificatoin found...');
    console.log('load site');
    Preloader.heroReveal();
  }

  // loadComponent('.verify_component', () => import('$components/verify'));
  loadComponent('[data-hover-video]', () => import('$components/hoverVideos'));
  loadComponent('.overview_component', () => import('$components/scrollScale'));
  loadComponent('.slider_component', () => import('$components/mediaSlider'));
  loadComponent('.mosaic_component', () => import('$components/mosaicScroll'));
});
