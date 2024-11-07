export const cart = () => {
  class Cart {
    private navComponent: HTMLElement;

    constructor() {
      this.navComponent = document.querySelector('.nav_compoennt') as HTMLElement;
    }
  }
  new Cart();
};
export default cart;
