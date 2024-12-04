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
    private menuButtonWrap: HTMLElement;
    private menuButton: HTMLElement;
    private cartWrapper: HTMLElement;
    private cartButton: HTMLElement;
    private storeHeight: number;
    private overlayActive: boolean;
    private menuActive: boolean;
    private menuLabel: HTMLElement;
    private closeLabel: HTMLElement;

    constructor() {
      // console.log('nav');
      this.nav = document.querySelector('.nav_component') as HTMLElement;
      this.navMain = document.querySelector('.w-nav-overlay') as HTMLElement;
      this.hero = document.querySelector('.section_hero') as HTMLElement;
      this.navSpacer = document.querySelector('.nav_sticky-spacer') as HTMLElement;
      this.navLinks = [...document.querySelectorAll('.nav_link')].map(
        (item) => item as HTMLElement
      );
      this.navBrand = document.querySelector('.brand_link') as HTMLElement;
      this.navCart = document.querySelector('.cart_button') as HTMLElement;
      this.menuButtonWrap = document.querySelector('.menu_button-wrap') as HTMLElement;
      this.menuButton = document.querySelector('.menu_button') as HTMLElement;
      this.cartWrapper = document.querySelector('.cart_wrapper') as HTMLElement;
      this.cartButton = document.querySelector('.cart_button') as HTMLElement;
      this.storeHeight = 0;
      if (this.navSpacer) this.storeHeight = parseInt(getComputedStyle(this.navSpacer).height);
      this.overlayActive = false;
      this.menuActive = false;

      this.menuLabel = this.menuButtonWrap.querySelector('.menu_button.is-open') as HTMLElement;
      this.closeLabel = this.menuButtonWrap.querySelector('.menu_button.is-close') as HTMLElement;

      gsap.set(this.closeLabel, { display: 'none' });

      this.setListeners();
      this.scroller();
    }

    private setListeners() {
      // MENU
      this.menuButtonWrap.addEventListener('click', () => {
        this.menuActive = !this.menuActive;
        this.overlayActive = true;

        if (this.menuActive === true) {
          const getHeight = parseFloat(getComputedStyle(this.navSpacer).height);
          this.storeHeight = getHeight;
          this.navCollpase(getHeight);
          this.menuOpen();
        } else {
          this.overlayActive = false;
          this.navExpand();
          this.menuClose();
        }
      });

      // CART
      this.cartButton.addEventListener('click', () => {
        this.overlayActive = true;
        const getHeight = parseFloat(getComputedStyle(this.navSpacer).height);
        this.storeHeight = getHeight;
        this.navCollpase(getHeight);
      });

      this.cartWrapper.addEventListener('click', () => {
        this.overlayActive = false;
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
          // markers: true,
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
        tl.to(this.nav, {
          top: '0',
          bottom: 'auto',
          ease: 'power2.out',
        });
      }
    }

    private navCollpase(height: number) {
      lenis.stop();
      if (height > 0)
        gsap.to(this.navSpacer, {
          height: 0,
          ease: 'expo.out',
        });
    }

    private navExpand() {
      if (this.storeHeight > 0) {
        gsap.to(this.navSpacer, {
          height: this.storeHeight,
          ease: 'expo.out',
          onComplete: () => {
            lenis.start();
          },
        });
      } else {
        lenis.start();
        console.log('scrolled out of hero');
      }
    }

    private menuOpen() {
      const mobileMenu = document.querySelector('.section_mobile-menu');
      const menuLinks = [...document.querySelectorAll('.mobile-menu_link')];
      const menuSocials = document.querySelector('.nav_socials');
      const menuBrand = document.querySelector('.menu_brand');

      this.toggleMenuLabel('close');

      const tl = gsap.timeline();
      tl.fromTo(
        mobileMenu,
        { display: 'none', y: '100vh', scale: 0.7 },
        { duration: 1.2, display: 'block', y: 0, scale: 1, ease: 'expo.out' }
      );
      tl.fromTo(
        menuBrand,
        { opacity: 0 },
        { duration: 1, opacity: 0.1, ease: 'power2.out' },
        '<.75'
      );
      tl.fromTo(
        menuLinks,
        { opacity: 0, y: '2rem' },
        { opacity: 1, y: '0rem', stagger: 0.2, ease: 'power2.inIOut' },
        '<'
      );
      tl.fromTo(
        menuSocials,
        { opacity: 0 },
        { duration: 1, opacity: 1, ease: 'power2.inOut' },
        '<.5'
      );
    }

    private menuClose() {
      const mobileMenu = document.querySelector('.section_mobile-menu');
      this.toggleMenuLabel('menu');

      const tl = gsap.timeline();
      tl.to(mobileMenu, { display: 'none', y: '100vh', scale: 0.75, ease: 'expo.out' });
    }

    private toggleMenuLabel(label: 'menu' | 'close') {
      if (label === 'close') {
        const tl = gsap.timeline();
        tl.fromTo(
          this.closeLabel,
          { y: '2rem', opacity: 0, display: 'none' },
          { delay: 0.4, y: 0, opacity: 1, display: 'block', ease: 'power2.out' }
        );
        tl.to(this.menuLabel, { y: '-2rem', opacity: 0 }, '<');
      } else {
        const tl = gsap.timeline();

        tl.to(this.closeLabel, { y: '2rem', opacity: 0, display: 'none', ease: 'power2.out' });
        tl.to(this.menuLabel, { y: '0rem', opacity: 1, display: 'block', ease: 'power2.out' }, '<');
      }
    }
  }

  new Nav();
};
export default nav;
