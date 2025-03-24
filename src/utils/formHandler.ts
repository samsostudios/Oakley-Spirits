import { gsap } from 'gsap';

export const formHandler = () => {
  class FormHandler {
    private form: HTMLFormElement;
    private formWrap: HTMLElement;
    private successElement: HTMLElement;
    private errorElement: HTMLElement;

    constructor() {
      this.form = document.querySelector('[data-mail-form]') as HTMLFormElement;
      this.formWrap = this.form.querySelector('.newsletter_form') as HTMLElement;
      this.successElement = this.form.querySelector('.newsletter_success') as HTMLElement;
      this.errorElement = this.form.querySelector('.form_message-error') as HTMLElement;

      // console.log('FORM', this.form);

      this.setListener();
      this.resetFormStatus();
    }

    private setListener() {
      this.form.addEventListener('submit', async (e: Event) => {
        // console.log('submit initiated');
        e.preventDefault();

        const input = document.querySelector('input[name=Email]') as HTMLInputElement;
        const email = input.value.trim();
        // console.log('INOUT', input, email);

        if (!email || !this.isValidEmail(email)) {
          this.showError('Please enter a valid email');
          // console.log('Code email check error');
          return;
        }

        const payload = { email };

        try {
          const response = await fetch(
            'https://oakley-backend-1c0qwuefg-samsos-projects-132b9b87.vercel.app/api/subscribe',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload),
            }
          );

          const data = await response.json();
          // console.log('DATA', data);

          if (!response.ok) {
            let err = data.error.detail;
            const errTitle = data.error.title;

            if (errTitle === 'Member Exists') {
              err = 'You are already a member!';
              this.errorElement.style.backgroundColor = '#F18A00';
            } else {
              this.errorElement.style.backgroundColor = '#751E03';
            }
            this.showError(err);
          } else {
            this.showSuccess();
          }
        } catch (error) {
          console.log('Network Error!!!', error);
          this.showError('Network error. Please try again later.');
        }
      });
    }

    private isValidEmail(email: string): boolean {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    private showSuccess() {
      this.resetFormStatus();
      const tl = gsap.timeline();
      tl.to(this.formWrap, { display: 'none' });
      tl.to(this.successElement, { display: 'block' });
    }

    private showError(msg: string) {
      const errorText = this.errorElement.children[0] as HTMLElement;
      errorText.innerHTML = msg;
      gsap.to(this.errorElement, { display: 'block' });
    }

    private resetFormStatus() {
      gsap.to(this.successElement, { display: 'none' });
      gsap.to(this.errorElement, { display: 'none' });
    }
  }

  new FormHandler();
};
export default formHandler;
