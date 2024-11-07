import gsap from 'gsap';

export const shopSlider = () => {
  class ShopSlider {
    private imageFeed: HTMLImageElement[];
    private bgImages: HTMLImageElement[];
    private previewWraps: HTMLImageElement[];
    private previewImages: HTMLImageElement[];
    private pIndicators: HTMLImageElement[];
    private currentIndex: number;
    private rotationInterval: number;
    private labelCurrent: HTMLElement;
    private labelTotal: HTMLElement;

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
      this.pIndicators = [...document.querySelectorAll('.slider_preview-indicator')].map(
        (item) => item as HTMLImageElement
      );

      this.labelCurrent = document.querySelector(
        '.slider_i-text.is-shop.is-current'
      ) as HTMLElement;
      this.labelTotal = document.querySelector('.slider_i-text.is-shop.is-total') as HTMLElement;

      console.log(this.labelTotal);

      this.currentIndex = 0;
      this.rotationInterval = 5000;

      this.setupImages();
      this.startRotation();
    }

    private setupImages() {
      for (let i = 0; i < this.imageFeed.length; i++) {
        const item = this.imageFeed[i];
        this.bgImages[i].src = item.src;
        this.previewImages[i].src = item.src;
        if (i !== 0) {
          gsap.set(this.bgImages[i], { opacity: 0 });
        }

        this.labelTotal.textContent = this.formatNumber(this.bgImages.length);
      }
    }

    private startRotation() {
      this.updateIndicator(this.currentIndex);
      this.updateImages(this.bgImages.length - 1, this.currentIndex);
      this.setActivePreview(this.currentIndex);
      this.updateTextElements();

      setInterval(() => {
        const previousIndex = this.currentIndex;
        this.currentIndex = (this.currentIndex + 1) % this.bgImages.length;

        this.updateIndicator(this.currentIndex);
        this.updateImages(previousIndex, this.currentIndex);
        this.setActivePreview(this.currentIndex);
        this.updateTextElements();

        gsap.set(this.pIndicators[previousIndex], { x: '0%' });
      }, this.rotationInterval);
    }

    private updateImages(prevIndex: number, currentIndex: number) {
      gsap.to(this.bgImages[prevIndex], { opacity: 0, duration: 1 });
      gsap.to(this.bgImages[currentIndex], { opacity: 1, duration: 1 });
    }

    private updateIndicator(currentIndex: number) {
      gsap.fromTo(
        this.pIndicators[currentIndex],
        { x: '0%' },
        { duration: this.rotationInterval / 1000, x: '100%', ease: 'linear' }
      );
    }

    private setActivePreview(currentIndex: number) {
      this.previewWraps.forEach((wrap, index) => {
        if (index !== currentIndex) {
          wrap.classList.remove('is-active');
          gsap.to(wrap, { borderColor: 'transparent', duration: 0.5 });
        }
      });

      // Add 'is-active' to the current preview and animate it
      this.previewWraps[currentIndex].classList.add('is-active');
      gsap.to(this.previewWraps[currentIndex], { borderColor: 'currentColor', duration: 0.5 });
    }

    private updateTextElements() {
      // Update current slide number
      this.labelCurrent.textContent = this.formatNumber(this.currentIndex + 1);
    }

    private formatNumber(num: number): string {
      return num < 10 ? `0${num}` : `${num}`;
    }
  }

  new ShopSlider();
};
export default shopSlider;
