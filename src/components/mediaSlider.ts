import { gsap } from 'gsap';

export const mediaSlider = () => {
  class MediaSlider {
    private sliderTrack: HTMLElement;
    private sliderImages: HTMLElement[];
    private nextButton: HTMLElement;
    private prevButton: HTMLElement;
    private curIndex: number;
    private currentOffset: number;
    private pagePadding: number;
    private imageSpacing: number;

    constructor() {
      this.sliderTrack = document.querySelector('.slider_track') as HTMLElement;
      this.sliderImages = [...document.querySelectorAll('.slider_image')].map(
        (item) => item as HTMLElement
      );
      this.nextButton = document.querySelector('.button.is-icon.slider-next') as HTMLElement;
      this.prevButton = document.querySelector('.button.is-icon.slider-prev') as HTMLElement;
      this.curIndex = 0;
      this.currentOffset = 0;
      this.pagePadding = 16;
      this.imageSpacing = 16;
      //   this.pagePadding = getComputedStyle(padElement).padding;

      this.setInitialOffset();
      this.setListeners();
    }

    private setInitialOffset() {
      // Initialize the offset with the page padding
      this.currentOffset = 1;
    }

    private setListeners() {
      this.nextButton.addEventListener('click', () => this.advance());
      this.prevButton.addEventListener('click', () => this.regress());
    }

    private advance() {
      if (this.curIndex < this.sliderImages.length - 1) {
        this.currentOffset += this.sliderImages[this.curIndex].offsetWidth + this.imageSpacing;
        this.curIndex += 1;
        this.updateSliderPosition();
      }
    }

    private regress() {
      if (this.curIndex > 0) {
        // Move to the previous image and update offset
        this.curIndex -= 1;
        this.currentOffset -= this.sliderImages[this.curIndex].offsetWidth;
        this.updateSliderPosition();
      }
    }

    private updateSliderPosition() {
      gsap.to(this.sliderTrack, {
        x: -this.currentOffset,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }
  new MediaSlider();
};
export default mediaSlider;
