// eslint-disable-next-line simple-import-sort/imports
import { getToken, initTurnstile } from '$utils/forms/turnstile';
import { submitMailchimp } from './forms/mailchimp';

class FormHandler {
  private forms: HTMLFormElement[];

  constructor() {
    this.forms = Array.from(document.querySelectorAll<HTMLFormElement>('form'));
    // console.log('FORMS', this.forms);

    this.setupTurnstileForms();
  }

  private setupTurnstileForms() {
    this.forms.forEach((form) => {
      if (form.classList.contains('verify_form')) {
        return;
      }
      if (form.classList.contains('w-commerce-commercecartform')) {
        return;
      }

      initTurnstile(form);
      this.setupListeners(form);
    });
  }

  private setupListeners(form: HTMLFormElement) {
    const isMailchimp = form.dataset.formType === 'mailchimp';

    form.addEventListener('submit', (e) => {
      const token = getToken();
      if (!token) {
        e.preventDefault();
        console.warn('Turnstile error');
        return;
      }

      if (isMailchimp) {
        e.preventDefault();
        this.handleMailchimp(form, token);
      }
    });
  }

  private handleMailchimp(form: HTMLFormElement, token: string) {
    // console.log('Mailchimp Submit');
    submitMailchimp(form, token);
  }
}

export const formHandler = () => new FormHandler();
export default formHandler;
