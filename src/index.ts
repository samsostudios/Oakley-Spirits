import Preloader from '$components/preloader';
import { loadComponent } from '$utils/loadComponent';
import VerifyCookie from '$utils/verifyCookie';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// Oakley ///');

  // window.addEventListener('click', (e) => {
  //   console.log(e.target);
  // });

  if (!VerifyCookie.isVerified()) {
    loadComponent('.verify_component', () => import('$components/verify'));
  } else {
    if (window.location.pathname === '/') Preloader.heroReveal();
  }

  loadComponent('.cursor_component', () => import('$components/cursor'));
  loadComponent('.nav_component', () => import('$components/nav'));
  loadComponent('[data-hover-video]', () => import('$components/hoverVideos'));
  loadComponent('.overview_component', () => import('$components/scrollScale'));
  loadComponent('.slider_component', () => import('$components/mediaSlider'));
  loadComponent('.mosaic_component', () => import('$components/mosaicScroll'));
  loadComponent('.shop-slider_component', () => import('$components/shopSlider'));
  loadComponent('.checkout_component', () => import('$components/checkout'));
  loadComponent('.shop_component', () => import('$components/shop'));
  loadComponent('.product_component', () => import('$components/product'));
});
