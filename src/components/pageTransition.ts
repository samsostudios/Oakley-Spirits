import { gsap } from 'gsap';

export const pageTransition = () => {
  class PageTransition {
    private links: HTMLAnchorElement[];
    private filteredLinks: HTMLAnchorElement[];
    private transitionElement: HTMLElement;
    private transitionWrap: HTMLElement;
    private transitionLogos: HTMLElement[];

    constructor() {
      this.transitionElement = document.querySelector('.transition_component') as HTMLElement;
      this.transitionWrap = document.querySelector('.transition_fill') as HTMLElement;
      this.links = [...document.querySelectorAll('a')].map((item) => item as HTMLAnchorElement);
      this.filteredLinks = this.links.filter((link: HTMLAnchorElement) => {
        const temp = new URL(link.href, window.location.origin); // Create a URL object from the anchor's href
        return (
          temp.hostname === window.location.host &&
          !temp.href.includes('#') &&
          link.target !== '_blank'
        );
      });
      this.transitionLogos = [...document.querySelectorAll('.preload_path')].map(
        (item) => item as HTMLElement
      );

      // console.log('links', this.filteredLinks);

      this.setListeners();
      this.checkPage();
    }

    private checkPage() {
      const windowLocation = window.location.pathname;

      if (windowLocation === '/') {
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(this.transitionElement, { opacity: 1 });
          },
        });
        tl.to(this.transitionElement, { duration: 0.5, opacity: 0, display: 'none' });
      } else {
        this.animateOut();
      }
    }

    private setListeners() {
      this.filteredLinks.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const destination = item.href;
          this.animateIn(destination);
        });
      });

      // On Back Button
      window.onpageshow = function (event) {
        if (event.persisted) {
          window.location.reload();
        }
      };
    }

    private animateOut() {
      const tl = gsap.timeline({
        onComplete: () => {
          // Reenable Scrolling
          gsap.set('html', { height: 'auto' });
          gsap.set('body', { overflow: 'auto' });
        },
      });

      tl.to(this.transitionLogos, {
        duration: 0.3,
        opacity: 0,
        y: '-100%',
        ease: 'circ.out',
        stagger: 0.08,
      });
      tl.to(
        this.transitionWrap,
        { duration: 1, scale: 0.6, opacity: 1, y: '-100%', ease: 'power2.inOut' },
        '<'
      );
      tl.to(this.transitionElement, {
        display: 'none',
      });
    }

    private animateIn(link: string) {
      const tl = gsap.timeline({
        onComplete: () => {
          window.location.href = link;
        },
      });

      tl.set(this.transitionElement, {
        display: 'block',
      });
      tl.fromTo(
        this.transitionWrap,
        { scale: 0.6, opacity: 0, y: '100%' },
        { duration: 1, scale: 1, opacity: 1, y: '0%', ease: 'power2.inOut' }
      );
      tl.fromTo(
        this.transitionLogos,
        { y: '100%', opacity: 0 },
        { duration: 0.3, opacity: 1, y: '0%', ease: 'circ.out', stagger: 0.08 },
        '<.5'
      );
    }
  }

  new PageTransition();
};
export default pageTransition;
