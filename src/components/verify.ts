/* eslint-disable simple-import-sort/imports */
// import { smoothScroll } from '$utils/smoothScroll';
import Preloader from '$components/preloader';
import lenis from '$utils/smoothScroll';
import VerifyCookie from '$utils/verifyCookie';
import { gsap } from 'gsap';

export const verify = () => {
  class Verify {
    private form: HTMLElement;
    private inputs: HTMLInputElement[];
    private statusContainer: HTMLElement;
    private verifyVideo: HTMLVideoElement;
    private verifyPlace: HTMLElement;
    private verifyLogo: HTMLElement;

    private transitionVideo: HTMLVideoElement;

    constructor() {
      this.form = document.querySelector('.verify_form') as HTMLFormElement;
      this.inputs = [...document.querySelectorAll('.verify_input-mask')].map(
        (item) => item as HTMLInputElement
      );
      this.statusContainer = document.querySelector('.verify_status') as HTMLElement;
      this.verifyVideo = document.querySelector('#verifyBG') as HTMLVideoElement;
      this.verifyPlace = document.querySelector('#verifyPlace') as HTMLElement;
      this.verifyLogo = document.querySelector('.brand_img.is-verify') as HTMLElement;
      this.transitionVideo = document.querySelector('#verifyTransition') as HTMLVideoElement;

      this.init();
    }

    private init() {
      lenis.stop();
      document.body.classList.add('lock-scroll');

      this.verifyVideo.addEventListener('canplay', () => {
        console.log('[Debug] Video is ready to play');
        this.handleVideoReady();
      });

      if (this.verifyVideo.readyState >= 3) {
        console.log('[Debug] Video was already loaded');

        this.handleVideoReady();
      }

      this.setListeners();
      this.verifyReveal();
    }

    private setListeners() {
      this.inputs.forEach((inputWrapper, index) => {
        const input = inputWrapper.querySelector('input') as HTMLInputElement;
        if (!input) return;

        input.style.caretColor = 'var(--palette--white)';
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
        input.addEventListener('keydown', (event) => this.handleBackspace(event, index));
      });

      this.form.addEventListener('submit', (e) => this.verifyAge(e));
    }

    private handleVideoReady() {
      this.verifyPlace.style.display = 'none';
      this.verifyVideo
        .play()
        .then(() => {
          console.log('🎥 video started playing');
        })
        .catch((e) => {
          console.warn('⛔️ Autoplay blocked:', e.name, e.message);
        });
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
        document.querySelector('.verify_wrap'),
        {
          y: '1rem',
          opacity: 0,
        },
        { duration: 1.2, y: '0rem', opacity: 1, ease: 'expo.inOut' },
        '<0.2'
      );
      tl.to(this.verifyLogo, { duration: 1, opacity: 1, ease: 'power3.out' }, '<0.5');
    }

    private handleInput(event: Event, index: number) {
      const target = event.target as HTMLInputElement;
      const { value } = target;

      // Restrict input to a single digit
      if (!/^\d$/.test(value)) {
        target.value = '';
        return;
      }

      if (value) {
        target.style.borderColor = 'var(--palette--white)';
        target.style.color = 'var(--palette--white)';
        target.style.opacity = '1';
      } else {
        target.style.borderColor = 'var(--palette--white)';
        target.style.color = 'var(--palette--white)';
        target.style.opacity = '0.5';
      }

      // Move to the next input if there is one
      const nextInputWrapper = this.inputs[index + 1]?.closest('.verify_input-mask');
      if (nextInputWrapper) {
        const nextInput = nextInputWrapper.querySelector('input') as HTMLInputElement;
        nextInput?.focus();
      }
    }

    private handleBackspace(event: KeyboardEvent, index: number) {
      const target = event.target as HTMLInputElement;

      if ((event.key === 'Backspace' || event.key === 'Delete') && !target.value) {
        const previousInputWrapper = this.inputs[index - 1]?.closest('.verify_input-mask');
        if (previousInputWrapper) {
          const previousInput = previousInputWrapper.querySelector('input') as HTMLInputElement;
          previousInput?.focus();
          previousInput.value = '';
        }
      }
    }

    private verifyAge(event: Event) {
      event.preventDefault();
      event.stopPropagation();

      // Collect values from the child input elements inside the wrappers
      const birthYear = Array.from(this.inputs)
        .map((wrapper) => {
          const input = wrapper.querySelector('input') as HTMLInputElement;
          return input ? input.value.trim() : '';
        })
        .join('');

      // Ensure the birth year is a valid 4-digit number
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

    private successAnimation() {
      const tl = gsap.timeline({
        onComplete: () => {
          console.log('verify complete');
          Preloader.heroReveal();
          // document.body.classList.remove('lock-scroll');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
      });

      tl.to(this.inputs, {
        duration: 1.2,
        y: '-4rem',
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
      });
      tl.to(
        document.querySelector('.verify_wrap'),
        {
          duration: 1.2,
          y: '-1rem',
          opacity: 0,
          ease: 'expo.inOut',
        },
        '<0.2'
      );
    }
  }
  new Verify();
};
export default verify;
