/* eslint-disable simple-import-sort/imports */
import HeroVideo from '$components/heroVideo';
import { startSmoothScroll, stopSmoothScroll } from '$utils/smoothScroll';
import VerifyCookie from '$utils/verifyCookie';
import { gsap } from 'gsap';

export const verify = () => {
  class Verify {
    private section: HTMLElement;
    private form: HTMLElement;
    private inputs: HTMLInputElement[];
    private submitButton: HTMLButtonElement;
    private statusContainer: HTMLElement;
    private verifyVideo: HTMLVideoElement;
    private verifyPlace: HTMLElement;
    private verifyLogo: HTMLElement;
    private videoInitialized: boolean;
    private windowLocation: string;
    private verifyProductType: string[];
    private isVerifying: boolean;

    constructor() {
      this.section = document.querySelector('.section_verify') as HTMLElement;
      this.form = document.querySelector('.verify_form') as HTMLFormElement;
      this.inputs = [...document.querySelectorAll('.verify_input')] as HTMLInputElement[];
      this.submitButton = document.querySelector('.verify_submit') as HTMLButtonElement;
      this.statusContainer = document.querySelector('.verify_status') as HTMLElement;
      this.verifyVideo = document.querySelector('#verifyBG') as HTMLVideoElement;
      this.verifyPlace = document.querySelector('#verifyPlace') as HTMLElement;
      this.verifyLogo = document.querySelector('.verify_logo') as HTMLElement;
      this.videoInitialized = false;
      this.windowLocation = window.location.pathname;
      this.verifyProductType = [...document.querySelectorAll('.verify_product-type')].map((item) =>
        (item as HTMLElement).innerHTML.trim()
      );
      this.isVerifying = false;

      // console.log('!!', this.inputs);

      const canBypass = this.verifyProductType.includes('Merch');

      if (!canBypass) this.init();
    }

    private init() {
      stopSmoothScroll();
      // document.body.classList.add('lock-scroll');
      this.section.style.display = 'flex';

      if (this.verifyVideo) {
        this.verifyVideo.addEventListener('loadeddata', () => {
          // console.log('[Debug] Video is ready to play');
          this.handleVideoReady();
        });

        if (this.verifyVideo.readyState >= 3) {
          // console.log('[Debug] Video was already loaded');
          this.handleVideoReady();
        }
      }

      this.setListeners();
      this.verifyReveal();
    }

    private handleVideoReady = () => {
      if (this.videoInitialized) return;
      this.videoInitialized = true;

      if (this.verifyVideo.paused) this.verifyVideo.play().catch(console.warn);
      gsap.set(this.verifyPlace, { zIndex: 1, display: 'none' });
    };

    private setListeners() {
      this.inputs.forEach((input, index) => {
        if (!input) return;

        input.addEventListener('focus', () => {
          // Prevent scrolling when keyboard appears
          document.documentElement.style.overflow = 'hidden';
          document.body.style.overflow = 'hidden';
        });
        input.addEventListener('blur', () => {
          // Re-enable scrolling after input
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
        });

        input.addEventListener('input', (event) => this.handleInput(event, index));
        input.addEventListener('keydown', (event) => {
          this.handleBackspace(event, index);

          if (event.key === 'Enter' && index === this.inputs.length - 1) {
            event.preventDefault();
            this.verifyAge();
          }
        });
      });

      // Manual button trigger
      this.submitButton?.addEventListener('click', () => {
        this.verifyAge();
      });

      // Safety fallback in case native submit somehow fires
      this.form?.addEventListener(
        'submit',
        (event) => {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          this.verifyAge();
        },
        true
      );
    }

    private handleInput(event: Event, index: number) {
      const target = event.target as HTMLInputElement;
      const { value } = target;

      // Restrict input to a single digit
      if (!/^\d$/.test(value)) {
        target.value = '';
        return;
      }

      this.clearError();

      const nextInput = this.inputs[index + 1] as HTMLInputElement | undefined;

      if (nextInput) {
        nextInput?.focus();
        return;
      }

      window.setTimeout(() => {
        this.verifyAge();
      }, 150);
    }

    private handleBackspace(event: KeyboardEvent, index: number) {
      const target = event.target as HTMLInputElement;

      if (event.key === 'Backspace' || event.key === 'Delete') {
        this.clearError();
      }

      if ((event.key === 'Backspace' || event.key === 'Delete') && !target.value) {
        const previousInput = this.inputs[index - 1] as HTMLInputElement;
        if (previousInput) {
          previousInput?.focus();
          previousInput.value = '';
        }
      }
    }

    private verifyAge() {
      if (this.isVerifying) return;
      this.isVerifying = true;

      const birthYear = this.inputs
        .map((element) => {
          const value = element.value.trim();
          return value ? value : '';
        })
        .join('');

      if (birthYear.length !== 4 || !/^\d{4}$/.test(birthYear)) {
        this.displayError('Please enter a valid 4-digit birth year.');
        return;
      }

      const currentYear = new Date().getFullYear();
      const age = currentYear - parseInt(birthYear);

      if (age >= 21) {
        this.successAnimation();
        VerifyCookie.setVerificationStatus();
        console.log('Access granted');
      } else {
        this.displayError('Sorry, you must be at least 21 years old to access this site.');
        console.log('Access denied');
      }
    }

    private displayError(message: string) {
      const statusText = this.statusContainer.children[0] as HTMLParagraphElement;
      statusText.innerHTML = message;
      this.statusContainer.style.display = 'block';
    }

    private verifyReveal() {
      const tl = gsap.timeline();
      tl.fromTo(
        this.inputs,
        {
          y: '4rem',
          opacity: 0,
        },
        { duration: 1.2, y: '0rem', opacity: 1, stagger: 0.2, ease: 'power3.out' }
      );
      tl.fromTo(
        document.querySelector('.verify_header'),
        {
          y: '1rem',
          opacity: 0,
        },
        { duration: 1.2, y: '0rem', opacity: 1, ease: 'power3.out' },
        '<0.2'
      );
      tl.to(this.verifyLogo, { duration: 1, opacity: 1, ease: 'power3.out' }, '<0.5');
    }

    private successAnimation() {
      document.body.classList.remove('lock-scroll');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const tl = gsap.timeline();

      const baseDuration = 1;
      const staggerDuration = 0.2;
      const computeDuration = baseDuration + staggerDuration * (this.inputs.length - 1);

      tl.to(document.querySelector('.verify_header'), {
        duration: 1,
        // y: '-1rem',
        opacity: 0,
        ease: 'power3.inOut',
      });
      tl.to(
        this.inputs,
        {
          duration: baseDuration,
          // y: '-4rem',
          opacity: 0,
          stagger: staggerDuration,
          ease: 'power3.inOut',
        },
        '<0.2'
      );

      tl.to(this.section, {
        // delay: 0.2,
        duration: 1.2,
        display: 'none',
        opacity: 0,
        ease: 'power3.out',
      });

      if (this.windowLocation === '/') {
        setTimeout(() => {
          HeroVideo.homeReveal();
          startSmoothScroll();
        }, (tl.duration() / 2) * 1000);
      }
    }

    private clearError() {
      const statusText = this.statusContainer.children[0] as HTMLParagraphElement;

      statusText.innerHTML = '';

      this.statusContainer.style.display = 'none';
    }
  }
  new Verify();
};
export default verify;

export function hideVerifyComponent() {
  const section = document.querySelector('.section_verify') as HTMLElement;
  gsap.to(section, { display: 'none' });
}
