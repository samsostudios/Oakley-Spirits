// eslint-disable-next-line simple-import-sort/imports
import lenis from '$utils/smoothScroll';
import { gsap } from 'gsap';

export const cart = () => {
  class Cart {
    private navComponent: HTMLElement;
    private navSpacer: HTMLElement;
    private wrapper: HTMLElement;
    private cartButton: HTMLElement;
    private isOpen: boolean;
    private storeHeight: number;

    constructor() {
      this.navComponent = document.querySelector('.nav_component') as HTMLElement;
      this.navSpacer = document.querySelector('.nav_sticky-spacer') as HTMLElement;
      this.wrapper = document.querySelector('.cart_wrapper') as HTMLElement;
      this.cartButton = document.querySelector('.cart_button') as HTMLElement;

      this.isOpen = false;
      this.storeHeight = window.innerHeight;

      const cartPane = this.wrapper.children[0];

      this.wrapper.style.transition = 'none';
      console.log('HERE', this.wrapper, cartPane);

      this.setListeners();
    }

    private setListeners() {
      this.cartButton.addEventListener('click', () => {
        // if (!this.isOpen) lenis.stop();
        // else if (this.isOpen) lenis.start();
        const getHeight = parseFloat(getComputedStyle(this.navSpacer).height);
        this.storeHeight = getHeight;
        this.cartOpen(getHeight);
        // if (!this.isOpen) {
        // }

        this.isOpen = !this.isOpen;
      });

      this.wrapper.addEventListener('click', () => {
        console.log('close wrapper');
        this.cartClose();
      });
    }

    private cartOpen(height: number) {
      // const navHeight = parseFloat(getComputedStyle(this.navSpacer).height);
      if (height > 0) gsap.to(this.navSpacer, { height: 0, ease: 'power2.out' });

      console.log('open nav', this.navSpacer, height);
    }

    private cartClose() {
      if (this.storeHeight > 0)
        gsap.to(this.navSpacer, { height: this.storeHeight, ease: 'power2.out' });
      // console.log('close nav', this.navSpacer, navHeight);
    }
  }
  new Cart();
};
export default cart;
