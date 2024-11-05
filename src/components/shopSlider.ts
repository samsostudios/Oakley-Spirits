import gsap from 'gsap';

export const shopSlider = () => {
  class ShopSlider {
    // private component: HTMLElement;
    private imageFeed: HTMLImageElement[];
    private bgImages: HTMLImageElement[];
    private previewWraps: HTMLImageElement[];
    private previewImages: HTMLImageElement[];
    private currentIndex: number;
    private rotationInterval: number;

    constructor() {
      this.imageFeed = [...document.querySelectorAll('.slider_data-img')].map(
        (item) => item as HTMLImageElement
      );
      this.bgImages = [...document.querySelectorAll('.shop_slider-img')].map(
        (item) => item as HTMLImageElement
      );
      this.previewWraps = [...document.querySelectorAll('.slider_preview-wrap')].map(
        (item) => item as HTMLImageElement
      );
      this.previewImages = [...document.querySelectorAll('.slider_preview-img')].map(
        (item) => item as HTMLImageElement
      );

      this.currentIndex = 0;

      console.log('images', this.bgImages);

      this.setupImages();
      this.controlSlider();
    }

    private setupImages() {
      for (let i = 0; i < this.imageFeed.length; i++) {
        const item = this.imageFeed[i];
        console.log('HERE', item);
        this.bgImages[i].src = item.src;
        // if(i ===  images)
        // this.previewImages[i].src = item.src;
      }
    }

    private controlSlider() {
      this.rotationInterval = setInterval(() => {
        const previousIndex = this.currentIndex;
        this.currentIndex = (this.currentIndex + 1) % this.bgImages.length;
        this.updateImages(previousIndex, this.currentIndex);
      }, 5000);
    }

    private updateImages(prevIndex: number, currentIndex: number) {
      gsap.to(this.bgImages[prevIndex], { opacity: 0, duration: 1 });
      gsap.to(this.bgImages[currentIndex], { opacity: 1, duration: 1 });

      //   gsap.to(this.previewImages[prevIndex], { opacity: 0, duration: 1 });
      //   gsap.to(this.previewImages[currentIndex], { opacity: 1, duration: 1 });
    }
  }

  new ShopSlider();
};
export default shopSlider;
