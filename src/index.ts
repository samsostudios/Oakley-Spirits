import { loadComponent } from '$utils/loadComponent';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// Oakley ///');

  loadComponent('[data-hover-video]', () => import('$components/hoverVideos'));
});
