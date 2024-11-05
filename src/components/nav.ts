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
    private hero: HTMLElement;
    private navSpacer: HTMLElement;
    private navLinks: HTMLElement[];
    private navBrand: HTMLElement;
    private navCart: HTMLElement;
    private menuButton: HTMLElement;

    constructor() {
      this.nav = document.querySelector('.nav_component') as HTMLElement;
      this.hero = document.querySelector('.section_hero') as HTMLElement;
      this.navSpacer = document.querySelector('.nav_sticky-spacer') as HTMLElement;
      this.navLinks = [...document.querySelectorAll('.nav_link')].map(
        (item) => item as HTMLElement
      );
      this.navBrand = document.querySelector('.brand_link') as HTMLElement;
      this.navCart = document.querySelector('.cart_button') as HTMLElement;
      this.menuButton = document.querySelector('.menu_button-text') as HTMLElement;

      //   console.log('here', this.navHeight, this.nav);

      this.scroller();
    }

    private scroller() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.hero,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: true,
          //   markers: true,
          onLeave: () => {
            gsap.to(this.nav, {
              backgroundColor: 'rgba(251, 252, 255, 1)',
            });
            gsap.to([this.navLinks, this.navBrand, this.navCart, this.menuButton], {
              color: 'rgba(1, 4, 14, 1)',
            });
            // gsap.to(this.navBrand, { color: 'rgba(1, 4, 14, 1)' });
            // gsap.to(this.navCart, { color: 'rgba(1, 4, 14, 1)' });
          },
          onEnterBack: () => {
            gsap.to(this.nav, { backgroundColor: 'transparent' });
            gsap.to([this.navLinks, this.navBrand, this.navCart, this.menuButton], {
              color: 'rgba(233, 236, 243, 1)',
            });
            // gsap.to(this.navBrand, { color: 'rgba(233, 236, 243, 1)' });
            // gsap.to(this.navCart, { color: 'rgba(233, 236, 243, 1)' });
          },
        },
      });

      tl.to(this.navSpacer, {
        height: 0,
        ease: 'power1.out',
      });
      tl.to(
        this.nav,
        {
          height: 'auto',
          ease: 'power1.out',
        },
        '<'
      );
    }
  }

  new Nav();
};
export default nav;
