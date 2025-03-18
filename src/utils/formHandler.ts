import { gsap } from 'gsap';

export const formHandler = () => {
  class FormHandler {
    private form: HTMLFormElement;

    constructor() {
      this.form = document.querySelector('form') as HTMLFormElement;

      console.log('FORM', this.form);

      this.setListener();
    }

    private setListener() {
      this.form.addEventListener('submit', (e) => {
        console.log('form submitted');
        const traget = e.target;
        e.preventDefault();
      });
    }
  }

  new FormHandler();
};
export default formHandler;
