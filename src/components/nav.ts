// eslint-disable-next-line simple-import-sort/imports
import lenis from '$utils/smoothScroll';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Create the GSAP custom ease
// CustomEase.create('customEasing', `M0,0 C${points.join(',')} 1,1`);
gsap.registerPlugin(CustomEase);

export const nav = () => {
  class Nav {
    private nav: HTMLElement;
    private navMain: HTMLElement;
    private hero: HTMLElement;
    private navSpacer: HTMLElement;
    private navLinks: HTMLElement[];
    private navBrand: HTMLElement;
    private navCart: HTMLElement;
    private menuButton: HTMLElement;
    private menuCloseButton: HTMLElement;
    private cartWrapper: HTMLElement;
    private cartButton: HTMLElement;
    private lastViewportHeight: number;
    private mobileMenuButton: HTMLElement;
    private storeHeight: number;
    private overlayActive: boolean;
    private menuActive: boolean;

    constructor() {
      this.nav = document.querySelector('.nav_component') as HTMLElement;
      this.navMain = document.querySelector('.w-nav-overlay') as HTMLElement;
      this.hero = document.querySelector('.section_hero') as HTMLElement;
      this.navSpacer = document.querySelector('.nav_sticky-spacer') as HTMLElement;
      this.navLinks = [...document.querySelectorAll('.nav_link')].map(
        (item) => item as HTMLElement
      );
      this.navBrand = document.querySelector('.brand_link') as HTMLElement;
      this.navCart = document.querySelector('.cart_button') as HTMLElement;
      this.menuButton = document.querySelector('.menu_button-text') as HTMLElement;
      this.menuCloseButton = document.querySelector('.menu_close-button') as HTMLElement;
      this.cartWrapper = document.querySelector('.cart_wrapper') as HTMLElement;
      this.cartButton = document.querySelector('.cart_button') as HTMLElement;
      this.mobileMenuButton = document.querySelector('.menu_button') as HTMLElement;
      this.lastViewportHeight = window.innerHeight;
      this.storeHeight = parseInt(getComputedStyle(this.navSpacer).height);
      this.overlayActive = false;
      this.menuActive = false;

      //   console.log('here', this.navHeight, this.nav);

      this.setListeners();
      // this.cartFix();
      this.scroller();
    }

    private setListeners() {
      this.mobileMenuButton.addEventListener('click', () => {
        this.menuActive = !this.menuActive;
        this.overlayActive = true;

        if (this.menuActive === true) {
          const getHeight = parseFloat(getComputedStyle(this.navSpacer).height);
          this.storeHeight = getHeight;
          this.navCollpase(getHeight);
          this.menuOpen();
        } else {
          console.log('expand');
          this.overlayActive = false;
          // lenis.start();
          this.navExpand();
          // this.menuClose();
        }
      });

      this.cartButton.addEventListener('click', () => {
        console.log('cart clicked');
        this.overlayActive = true;
        // lenis.stop();
        const getHeight = parseFloat(getComputedStyle(this.navSpacer).height);
        this.storeHeight = getHeight;
        this.navCollpase(getHeight);
      });

      this.cartWrapper.addEventListener('click', () => {
        console.log('close wrapper');
        this.overlayActive = false;
        // lenis.start();
        this.navExpand();
      });
    }

    private scroller() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.hero,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: true,
          markers: true,
          onLeave: () => {
            gsap.to(this.nav, {
              backgroundColor: 'rgba(251, 252, 255, 1)',
            });
            gsap.to([this.navLinks, this.navBrand, this.navCart, this.menuButton], {
              color: 'rgba(1, 4, 14, 1)',
            });
          },
          onEnterBack: () => {
            gsap.to(this.nav, { backgroundColor: 'transparent' });
            gsap.to([this.navLinks, this.navBrand, this.navCart, this.menuButton], {
              color: 'rgba(233, 236, 243, 1)',
            });
          },
        },
      });

      tl.to(this.navSpacer, {
        height: '0',
        ease: 'power1.out',
      });

      if (parseInt(getComputedStyle(this.navSpacer).height) > 0 && this.overlayActive === true) {
        // console.log('here');
        tl.to(this.nav, {
          top: '0',
          bottom: 'auto',
          ease: 'power2.out',
        });
      }
    }

    private navCollpase(height: number) {
      // console.log('open nav', this.navSpacer, height);
      lenis.stop();
      if (height > 0) gsap.to(this.navSpacer, { height: 0, ease: 'power2.out' });
    }

    private navExpand() {
      if (this.storeHeight > 0)
        gsap.to(this.navSpacer, {
          height: this.storeHeight,
          ease: 'power2.out',
          onComplete: () => {
            lenis.start();
          },
        });
    }

    private menuOpen() {
      const mobileMenu = document.querySelector('.section_mobile-menu');
      const tl = gsap.timeline();
      // tl.to(mobileMenu, { display: 'block', height: '100svh' });
    }
    private menuClose() {
      const mobileMenu = document.querySelector('.section_mobile-menu');
      const tl = gsap.timeline();
      tl.to(mobileMenu, { display: 'none', height: '0' });
    }
  }

  new Nav();
};
export default nav;
