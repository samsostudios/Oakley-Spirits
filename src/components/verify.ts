import { gsap } from 'gsap';

export const verify = () => {
  class Verify {
    private form: HTMLElement;
    private inputs: HTMLInputElement[];
    private statusContainer: HTMLElement;

    constructor() {
      this.form = document.querySelector('.verify_form') as HTMLFormElement;
      this.inputs = [...document.querySelectorAll('.verify_input')].map(
        (item) => item as HTMLInputElement
      );
      this.statusContainer = document.querySelector('.verify_status') as HTMLElement;

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
      const tl = gsap.timeline();

      // Stagger each input to move upward and out
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
      //   this.inputs.forEach((input, index) => {
      //     timeline.to(input, {
      //       y: -50,
      //       opacity: 0,
      //       duration: 0.5,
      //       delay: index * 0.1, // Stagger animation
      //       ease: 'power2.out',
      //     });
      //   });

      // Once inputs are animated out, trigger the video play
      //   timeline.add(() => {
      //     this.transitionVideo.play();
      //   });

      // Hide video after it plays once
      //   this.transitionVideo.onended = () => {
      //     gsap.to(this.transitionVideo, { opacity: 0, duration: 0.5, ease: 'power2.out' });
      //   };
    }
  }
  new Verify();
};
export default verify;
