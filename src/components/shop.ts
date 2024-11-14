export const shop = () => {
  class Shop {
    private shopItems: HTMLElement[];

    constructor() {
      this.shopItems = [...document.querySelectorAll('.shop_item')].map(
        (item) => item as HTMLElement
      );
      this.setListeners();
    }

    private setListeners() {
      this.shopItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
          console.log('over');
        });
      });
    }
  }
};
export default shop;
