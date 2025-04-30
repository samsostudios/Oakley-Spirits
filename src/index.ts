// eslint-disable-next-line simple-import-sort/imports
import Preloader from '$components/preloader';
import { getWebflowEnv } from '$utils/editorCheck';
import { loadComponent } from '$utils/loadComponent';
import VerifyCookie from '$utils/verifyCookie';

// import { startRaffle, drawWinner } from './raffle/raffle';

// import { Raffle } from './raffle/raffle';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// Oakley ///');

  // window.addEventListener('click', (e) => {
  //   console.log(e.target);
  // });

  const env = getWebflowEnv();

  //Only load Verify on Production
  if (env === 'editor' || env === 'preview') {
    if (!VerifyCookie.isVerified()) {
      loadComponent('.verify_component', () => import('$components/verify'));
    } else {
      if (window.location.pathname === '/') Preloader.heroReveal();
    }
  }

  // if (windowLocation === '/') loadComponent('.nav_component', () => import('$components/nav'));

  loadComponent('.nav_component', () => import('$components/nav'));
  loadComponent('.transition_component', () => import('$components/pageTransition'));
  loadComponent('.cursor_component', () => import('$components/cursor'));
  loadComponent('[data-hover-video]', () => import('$components/hoverVideos'));
  loadComponent('.overview_component', () => import('$components/scrollScale'));
  loadComponent('.slider_component', () => import('$components/mediaSlider'));
  loadComponent('.mosaic_component', () => import('$components/mosaicScroll'));
  loadComponent('.shop-slider_component', () => import('$components/shopSlider'));
  loadComponent('.shop_component', () => import('$components/shop'));
  loadComponent('.product_component', () => import('$components/product'));
  loadComponent('.banner_component', () => import('$components/banner'));
  loadComponent('[data-mail-form]', () => import('$utils/formHandler'));
  // loadComponent('.checkout_component', () => import('$components/checkout'));

  // Raffle
  // const startButton = document.getElementById('start-raffle');
  // if (startButton) {
  //   startButton.addEventListener('click', async () => {
  //     console.log('🟢 Start Raffle button clicked!');
  //     await startRaffle();
  //   });
  // }
  // const raffleInstance = new Raffle();
  // setTimeout(() => {
  //   raffleInstance.startRaffle();
  // }, 2000);
});
