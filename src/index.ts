import { loadComponent } from '$utils/loadComponent';
import { smoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// Oakley ///');

  smoothScroll();

  loadComponent('[data-hover-video]', () => import('$components/hoverVideos'));
  loadComponent('.overview_component', () => import('$components/scrollScale'));
  loadComponent('.slider_component', () => import('$components/mediaSlider'));
});
