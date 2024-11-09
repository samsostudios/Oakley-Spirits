import lenis from '$utils/smoothScroll';

export const cart = () => {
  class Cart {
    private navComponent: HTMLElement;
    private cartButton: HTMLElement;
    private isOpen: boolean;

    constructor() {
      this.navComponent = document.querySelector('.nav_component') as HTMLElement;
      this.cartButton = document.querySelector('.cart_button') as HTMLElement;
      this.isOpen = false;

      this.setListener();
    }

    private setListener() {
      this.cartButton.addEventListener('click', () => {
        if (!this.isOpen) lenis.stop();
        else if (this.isOpen) lenis.start();
      });
    }
  }
  new Cart();
};
export default cart;
