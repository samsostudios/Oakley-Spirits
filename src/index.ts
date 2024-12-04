import Preloader from '$components/preloader';
import { loadComponent } from '$utils/loadComponent';
import VerifyCookie from '$utils/verifyCookie';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// Oakley ///');

  window.addEventListener('click', (e) => {
    console.log(e.target);
  });

  if (!VerifyCookie.isVerified()) {
    loadComponent('.verify_component', () => import('$components/verify'));
  } else {
    if (window.location.pathname === '/') Preloader.heroReveal();
  }

  // if (windowLocation === '/') loadComponent('.nav_component', () => import('$components/nav'));

  loadComponent('.nav_component', () => import('$components/nav'));
  loadComponent('.cursor_component', () => import('$components/cursor'));
  loadComponent('[data-hover-video]', () => import('$components/hoverVideos'));
  loadComponent('.overview_component', () => import('$components/scrollScale'));
  loadComponent('.slider_component', () => import('$components/mediaSlider'));
  loadComponent('.mosaic_component', () => import('$components/mosaicScroll'));
  loadComponent('.shop-slider_component', () => import('$components/shopSlider'));
  loadComponent('.shop_component', () => import('$components/shop'));
  loadComponent('.product_component', () => import('$components/product'));
  loadComponent('.banner_component', () => import('$components/banner'));
  // loadComponent('.checkout_component', () => import('$components/checkout'));
});
