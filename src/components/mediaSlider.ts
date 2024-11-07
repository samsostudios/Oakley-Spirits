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
    private labelCurrent: HTMLElement;
    private labelTotal: HTMLElement;

    constructor() {
      this.sliderTrack = document.querySelector('.slider_track') as HTMLElement;
      this.sliderImages = [...document.querySelectorAll('.slider_image')].map(
        (item) => item as HTMLElement
      );
      this.nextButton = document.querySelector('.button.is-icon.slider-next') as HTMLElement;
      this.prevButton = document.querySelector('.button.is-icon.slider-prev') as HTMLElement;

      this.labelCurrent = document.querySelector('.slider_i-text.is-current') as HTMLElement;
      this.labelTotal = document.querySelector('.slider_i-text.is-total') as HTMLElement;

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
      this.updateTextElements();
      this.labelTotal.textContent = this.formatNumber(this.sliderImages.length);
    }

    private setListeners() {
      this.nextButton.addEventListener('click', () => this.advance());
      this.prevButton.addEventListener('click', () => this.regress());
      window.addEventListener(
        'resize',
        this.debounce(() => this.resizeHandler(), 200)
      );
    }

    private advance() {
      if (this.curIndex < this.sliderImages.length - 1) {
        this.currentOffset += this.sliderImages[this.curIndex].offsetWidth + this.imageSpacing;
        this.curIndex += 1;
        this.updateTextElements();
        this.updateSliderPosition();
      }
    }

    private regress() {
      if (this.curIndex > 0) {
        this.curIndex -= 1;
        this.currentOffset -= this.sliderImages[this.curIndex].offsetWidth + this.imageSpacing;
        this.updateTextElements();
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

    private updateTextElements() {
      // Update current slide number
      this.labelCurrent.textContent = this.formatNumber(this.curIndex + 1);
    }

    private formatNumber(num: number): string {
      return num < 10 ? `0${num}` : `${num}`;
    }

    private resizeHandler() {
      // Reset the current offset and re-calculate based on the current index
      this.currentOffset = 0;
      for (let i = 0; i < this.curIndex; i++) {
        this.currentOffset += this.sliderImages[i].offsetWidth + this.imageSpacing;
      }
      this.updateSliderPosition();
    }

    // Utility function to debounce the resize event
    private debounce(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
      let timeout: number | undefined;
      return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => func(...args), wait);
      };
    }
  }
  new MediaSlider();
};
export default mediaSlider;
