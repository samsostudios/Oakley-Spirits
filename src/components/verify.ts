/* eslint-disable simple-import-sort/imports */
// import { smoothScroll } from '$utils/smoothScroll';
import Preloader from '$components/preloader';
import lenis from '$utils/smoothScroll';
import VerifyCookie from '$utils/verifyCookie';
import { gsap } from 'gsap';

export const verify = () => {
  class Verify {
    private body: HTMLElement;
    private section: HTMLElement;
    private form: HTMLElement;
    private inputs: HTMLInputElement[];
    private statusContainer: HTMLElement;
    private verifyVideo: HTMLVideoElement;
    private verifyPlace: HTMLElement;
    private heroVideo: HTMLVideoElement;
    private heroPlace: HTMLElement;
    private verifyLogo: HTMLElement;
    private background: HTMLElement;
    private transition: HTMLElement;

    private transitionVideo: HTMLVideoElement;

    constructor() {
      this.body = document.querySelector('body') as HTMLElement;
      this.section = document.querySelector('.section_verify') as HTMLElement;
      this.form = document.querySelector('.verify_form') as HTMLFormElement;
      this.inputs = [...document.querySelectorAll('.verify_input')].map(
        (item) => item as HTMLInputElement
      );
      this.statusContainer = document.querySelector('.verify_status') as HTMLElement;
      this.background = document.querySelector('.vim_embed.is-abs.is-bg') as HTMLElement;
      this.transition = document.querySelector('.vim_embed.is-abs.is-transition') as HTMLElement;
      this.verifyVideo = document.querySelector('#verifyBG') as HTMLVideoElement;
      this.verifyPlace = document.querySelector('#verifyPlace') as HTMLElement;
      this.heroVideo = document.querySelector('#heroVideo') as HTMLVideoElement;
      this.heroPlace = document.querySelector('#heroPlace') as HTMLElement;
      this.verifyLogo = document.querySelector('.brand_img.is-verify') as HTMLElement;

      this.transitionVideo = document.querySelector('#verifyTransition') as HTMLVideoElement;

      console.log('VERIFY');

      this.init();
    }

    private init() {
      lenis.stop();

      console.log('VERIFY INIT', this.verifyVideo);

      this.verifyPlace.style.display = 'none';
      this.verifyVideo.play();
      this.setListeners();
      this.verifyReveal();

      // this.verifyVideo.addEventListener('loadeddata', () => {
      //   console.log('video loaded');
      //   this.verifyPlace.style.display = 'none';
      //   this.verifyVideo.play();
      //   this.setListeners();
      //   this.verifyReveal();
      // });
    }

    private setListeners() {
      this.inputs.forEach((input, index) => {
        input.style.caretColor = 'var(--palette--white)';
        input.addEventListener('input', (event) => this.handleInput(event, index));
        input.addEventListener('keydown', (event) => this.handleBackspace(event, index));
      });

      this.form.addEventListener('submit', (e) => this.verifyAge(e));
    }

    private verifyReveal() {
      console.log('verify reveal');
      const tl = gsap.timeline();
      tl.to(this.verifyLogo, { duration: 1, opacity: 1, ease: 'power3.out' });
      tl.fromTo(
        this.inputs,
        {
          y: '4rem',
          opacity: 0,
        },
        { duration: 1.2, y: '0rem', opacity: 1, stagger: 0.2, ease: 'power3.out' }
      ),
        '< ';
      tl.fromTo(
        document.querySelector('.verify_wrap'),
        {
          y: '1rem',
          opacity: 0,
        },
        { duration: 1.2, y: '0rem', opacity: 1, ease: 'expo.inOut' },
        '<0.2'
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
      const nextInput = this.inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }

    private handleBackspace(event: KeyboardEvent, index: number) {
      const target = event.target as HTMLInputElement;

      if ((event.key === 'Backspace' || event.key === 'Delete') && !target.value) {
        const previousInput = this.inputs[index - 1];
        if (previousInput) {
          previousInput.focus();
          previousInput.value = '';
        }
      }
    }

    private verifyAge(event: Event) {
      event.preventDefault();
      const birthYear = Array.from(this.inputs)
        .map((input) => input.value)
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

    private successAnimation() {
      const tl = gsap.timeline({
        onComplete: () => {
          Preloader.heroReveal();
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
