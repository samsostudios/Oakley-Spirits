import Preloader from '$components/preloader';
import { loadComponent } from '$utils/loadComponent';
import lenis from '$utils/smoothScroll';
import VerifyCookie from '$utils/verifyCookie';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// Oakley ///');

  window.addEventListener('click', (e) => {
    console.log(e.target);
  });

  // smoothScroll();
  // lenis.stop();
  if (!VerifyCookie.isVerified()) {
    console.log('no verified cookie found...');
    console.log('load verify module');
    loadComponent('.verify_component', () => import('$components/verify'));
  } else {
    console.log('verificatoin found...');
    console.log('load site');
    if (window.location.pathname === '/') Preloader.heroReveal();
  }

  // loadComponent('.verify_component', () => import('$components/verify'));
  loadComponent('.cursor_component', () => import('$components/cursor'));
  loadComponent('.nav_component', () => import('$components/nav'));
  loadComponent('[data-hover-video]', () => import('$components/hoverVideos'));
  loadComponent('.overview_component', () => import('$components/scrollScale'));
  loadComponent('.slider_component', () => import('$components/mediaSlider'));
  loadComponent('.mosaic_component', () => import('$components/mosaicScroll'));
  loadComponent('.shop-slider_component', () => import('$components/shopSlider'));
  loadComponent('.checkout_component', () => import('$components/checkout'));
  loadComponent('.shop_component', () => import('$components/shop'));
  // loadComponent('.cart_component', () => import('$components/cart'));
});
