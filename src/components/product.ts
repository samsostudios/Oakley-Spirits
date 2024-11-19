import gsap from 'gsap';

export const productSlider = () => {
  class ProductSlider {
    private previews: NodeListOf<HTMLElement>;
    private sliderImages: NodeListOf<HTMLImageElement>;
    private activeIndex: number;

    constructor() {
      this.previews = document.querySelectorAll('.p-slider_preview-item');
      this.sliderImages = document.querySelectorAll('.p-slider_img');
      this.activeIndex = 0;

      this.init();
    }

    private init() {
      if (this.previews.length !== this.sliderImages.length) {
        console.error('Mismatch in number of preview and slider images.');
        return;
      }

      this.sliderImages.forEach((img, index) => {
        gsap.set(img, { opacity: index === this.activeIndex ? 1 : 0 });
      });

      this.previews.forEach((preview, index) => {
        if (index === this.activeIndex) {
          preview.classList.add('is-active');
        } else {
          preview.classList.remove('is-active');
        }

        preview.addEventListener('click', () => this.handlePreviewClick(index));
      });
    }

    private handlePreviewClick(index: number) {
      if (index === this.activeIndex) return;

      const currentImage = this.sliderImages[this.activeIndex];
      const nextImage = this.sliderImages[index];
      const currentPreview = this.previews[this.activeIndex];
      const nextPreview = this.previews[index];

      const tl = gsap.timeline();
      tl.to(currentImage, { opacity: 0, duration: 0.5, ease: 'power1.out' });
      tl.to(nextImage, { opacity: 1, duration: 0.5, ease: 'power1.in' }, '<');

      currentPreview.classList.remove('is-active');
      nextPreview.classList.add('is-active');

      this.activeIndex = index;
    }
  }

  new ProductSlider();
};

export default productSlider;
