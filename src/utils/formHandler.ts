import { gsap } from 'gsap';

export const formHandler = () => {
  class FormHandler {
    private form: HTMLFormElement;
    private successElement: HTMLElement;
    private errorElement: HTMLElement;

    constructor() {
      this.form = document.querySelector('[data-mail-form]') as HTMLFormElement;
      this.successElement = this.form.querySelector('.newsletter_success') as HTMLElement;
      this.errorElement = this.form.querySelector('.form_message-error') as HTMLElement;

      console.log('FORM', this.form);

      this.setListener();
      this.resetFormStatus();
    }

    private setListener() {
      this.form.addEventListener('submit', async (e: Event) => {
        console.log('submit initiated');
        e.preventDefault();

        const input = document.querySelector('input[name=Email]') as HTMLInputElement;
        const email = input.value.trim();
        // console.log('INOUT', input, email);

        if (!email || !this.isValidEmail(email)) {
          this.showError();
          console.log('FORM ERROR');
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
          console.log('DATA', data);

          if (!response.ok) {
            const err = data.error.detail;
            this.showError(err);
            console.log('API Error', err);
          }
        } catch (error) {
          console.log('API Error!!!', error);
        }
      });
    }

    private isValidEmail(email: string): boolean {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    private showSuccess() {
      gsap.to(this.successElement, { display: 'block' });
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
