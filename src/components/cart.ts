// eslint-disable-next-line simple-import-sort/imports
import { gsap } from 'gsap';

export const cart = () => {
  class Cart {
    private navSpacer: HTMLElement;
    private wrapper: HTMLElement;
    private cartButton: HTMLElement;
    private isOpen: boolean;
    private storeHeight: number;

    constructor() {
      this.navSpacer = document.querySelector('.nav_sticky-spacer') as HTMLElement;
      this.wrapper = document.querySelector('.cart_wrapper') as HTMLElement;
      this.cartButton = document.querySelector('.cart_button') as HTMLElement;

      this.isOpen = false;
      this.storeHeight = window.innerHeight;

      this.wrapper.style.transition = 'none';

      this.setListeners();
    }

    private setListeners() {
      this.cartButton.addEventListener('click', () => {
        const getHeight = parseFloat(getComputedStyle(this.navSpacer).height);
        this.storeHeight = getHeight;
        this.cartOpen(getHeight);

        this.isOpen = !this.isOpen;
      });

      this.wrapper.addEventListener('click', () => {
        this.cartClose();
      });
    }

    private cartOpen(height: number) {
      if (height > 0) gsap.to(this.navSpacer, { height: 0, ease: 'power2.out' });
    }

    private cartClose() {
      if (this.storeHeight > 0)
        gsap.to(this.navSpacer, { height: this.storeHeight, ease: 'power2.out' });
    }
  }
  new Cart();
};
export default cart;
