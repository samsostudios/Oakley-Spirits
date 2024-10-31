import { queryElement } from '@finsweet/ts-utils';
import { gsap } from 'gsap';

export const verify = () => {
  class Verify {
    private section: HTMLElement;
    private form: HTMLElement;
    private inputs: HTMLInputElement[];
    private statusContainer: HTMLElement;
    private heroVideo: HTMLVideoElement;
    private background: HTMLElement;
    private transition: HTMLElement;
    private bgVideo: HTMLVideoElement;
    private transitionVideo: HTMLVideoElement;

    constructor() {
      this.section = document.querySelector('.secton_verify') as HTMLElement;
      this.form = document.querySelector('.verify_form') as HTMLFormElement;
      this.inputs = [...document.querySelectorAll('.verify_input')].map(
        (item) => item as HTMLInputElement
      );
      this.statusContainer = document.querySelector('.verify_status') as HTMLElement;
      this.background = document.querySelector('.vim_embed.is-abs.is-bg') as HTMLElement;
      this.transition = document.querySelector('.vim_embed.is-abs.is-transition') as HTMLElement;
      this.heroVideo = document.querySelector('#heroVideo') as HTMLVideoElement;
      this.bgVideo = document.querySelector('#verifyBG') as HTMLVideoElement;
      this.transitionVideo = document.querySelector('#verifyTransition') as HTMLVideoElement;

      if (this.bgVideo) this.bgVideo.play();

      this.setListeners();
    }

    private setListeners() {
      this.inputs.forEach((input, index) => {
        input.style.caretColor = 'var(--palette--white)';
        input.addEventListener('input', (event) => this.handleInput(event, index));
        input.addEventListener('keydown', (event) => this.handleBackspace(event, index));
      });

      this.form.addEventListener('submit', (e) => this.verifyAge(e));
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
        this.playSuccessAnimation();
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
    private playSuccessAnimation() {
      const tl = gsap.timeline({
        onComplete: () => {
          this.handleTransition();
        },
      });

      // const backgroundVideo = document.querySelector('#verifyBG') as HTMLVideoElement;
      // if (this.bgVideo) {
      //   console.log('BG', this.bgVideo);
      //   this.bgVideo.removeAttribute('loop');
      //   // this.bgVideo.currentTime = this.bgVideo.duration - 2;

      //   Add an event listener to stop the video at the last frame
      //   this.fastForwardOrRewind(this.bgVideo, this.bgVideo.duration / 2, 2, () => {
      //     // Play the video normally after fast-forwarding
      //     this.bgVideo.play();

      //     // Stop the video at the last frame once it finishes playing
      //     this.bgVideo.onended = () => {
      //       console.log('ended');
      //       this.bgVideo.currentTime = this.bgVideo.duration; // Set to the last frame
      //       this.bgVideo.pause(); // Stop at the last frame
      //       this.handleTransition();
      //     };
      //   });
      // }

      tl.to(this.inputs, {
        duration: 1.2,
        y: '-4rem',
        opacity: 0,
        stagger: 0.25,
        ease: 'expo.inOut',
      });
      tl.to(
        document.querySelector('.verify_wrap'),
        {
          duration: 1.2,
          opacity: 0,
          ease: 'expo.inOut',
        },
        '<0.2'
      );
    }

    private fastForwardOrRewind(
      video: HTMLVideoElement,
      targetTime: number,
      duration: number,
      onComplete: () => void
    ) {
      const startTime = video.currentTime;
      const frameRate = 60; // Desired frames per second for smooth animation
      const frames = duration * frameRate;
      const increment = (targetTime - startTime) / frames;

      function adjustTime() {
        // Check if we've reached or passed the target time based on direction
        if (
          (increment > 0 && video.currentTime < targetTime) ||
          (increment < 0 && video.currentTime > targetTime)
        ) {
          video.currentTime = Math.min(Math.max(video.currentTime + increment, 0), video.duration);
          requestAnimationFrame(adjustTime);
        } else {
          // Ensure the video ends precisely at the target time and call onComplete
          video.currentTime = targetTime;
          onComplete();
        }
      }

      adjustTime();
    }

    private handleTransition() {
      console.log('transition');
      const tl = gsap.timeline({
        // onComplete: () => {},
      });

      // tl.to(this.transition, { display: 'block', opacity: 1 });
      if (this.heroVideo) this.heroVideo.play();
      tl.to(this.section, { display: 'none', opacity: 0 }, '<');
    }
  }
  new Verify();
};
export default verify;
