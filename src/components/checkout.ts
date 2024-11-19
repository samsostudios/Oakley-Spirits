import { gsap } from 'gsap';

export const checkout = () => {
  class Checkout {
    private checkoutWrap: HTMLElement;
    private dobInput: HTMLInputElement;
    private formSections: HTMLElement[];
    private verifyButton: HTMLElement;
    private errorWrap: HTMLElement;
    private minimumAge: number;

    constructor() {
      this.checkoutWrap = document.querySelector('.checkout_main') as HTMLInputElement;
      this.dobInput = document.querySelector('.form_input.is-dob') as HTMLInputElement;
      this.formSections = Array.from(
        document.querySelectorAll('.checkout_section'),
        (item) => item as HTMLElement
      );
      this.verifyButton = document.querySelector('#checkoutContinue') as HTMLElement;
      this.errorWrap = document.querySelector('.checkout_dob-error') as HTMLElement;
      this.minimumAge = 21; // Adjust the age requirement as needed

      this.init();
    }

    private init() {
      this.dobInput.type = 'date';
      gsap.set(this.checkoutWrap, { height: '10vh' });
      gsap.set(this.formSections, { display: 'none' });

      this.verifyButton.addEventListener('click', () => this.validateAge());
    }

    private handleDateInput() {
      if (this.dobInput.value.length === 10) {
        this.validateAge();
      }
    }

    private validateAge() {
      const dob = new Date(this.dobInput.value);
      if (this.isOfLegalAge(dob)) {
        this.revealForm();
      } else {
        this.dobInput.value = '';
        this.handleError();
      }
    }

    private isOfLegalAge(dob: Date): boolean {
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      const hasHadBirthdayThisYear =
        today.getMonth() > dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());

      return age > this.minimumAge || (age === this.minimumAge && hasHadBirthdayThisYear);
    }
    private revealForm() {
      const tl = gsap.timeline();
      tl.to(this.checkoutWrap, { height: '100%' });
      tl.to(this.errorWrap, { display: 'none', opacity: 0 });
      tl.fromTo(
        this.formSections,
        { opacity: 0, y: '4rem' },
        { duration: 1, opacity: 1, display: 'block', y: '0rem', stager: 0.2, ease: 'power3.out' }
      );
    }

    private handleError() {
      gsap.fromTo(
        this.errorWrap,
        { y: '2rem', opacity: 0 },
        { display: 'flex', y: '0rem', opacity: 1, ease: 'power3.out' }
      );
    }
  }

  new Checkout();
};

export default checkout;
