import { showError, submitMailchimp } from '$utils/forms/mailchimp';
import { getToken, initTurnstile } from '$utils/forms/turnstile';

class FormHandler {
  private forms: HTMLFormElement[];

  constructor() {
    this.forms = Array.from(
      document.querySelectorAll<HTMLFormElement>('form[data-form-type="mailchimp"]')
    );

    this.setupMailchimpForms();
  }

  private setupMailchimpForms() {
    this.forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        void this.handleMailchimp(form);
      });

      void initTurnstile(form).catch((error: unknown) => {
        this.showTurnstileError(form, error);
      });
    });
  }

  private async handleMailchimp(form: HTMLFormElement): Promise<void> {
    try {
      await initTurnstile(form);
    } catch (error) {
      this.showTurnstileError(form, error);
      return;
    }

    await submitMailchimp(form, getToken(form));
  }

  private showTurnstileError(form: HTMLFormElement, error: unknown): void {
    console.error('Turnstile initialization failed:', error);
    showError(form, 'Security check could not load. Please refresh and try again.');
  }
}

export const formHandler = () => new FormHandler();
export default formHandler;
