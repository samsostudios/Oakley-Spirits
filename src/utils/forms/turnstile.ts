declare global {
  interface Window {
    turnstile: {
      reset: () => void;
      render: (container: string | HTMLElement, params: object) => string;
      remove: (widgetId: string) => void;
    };
    onTurnstileSuccess: (token: string) => void;
  }
}
const SITEKEY = '0x4AAAAAADI7sqWWJ5PSmnBH';

let _token: string | null = null;

export function initTurnstile(form: HTMLFormElement): void {
  const widget = form.querySelector<HTMLInputElement>('.cf-turnstile');
  // console.log('init turnstile', form, widget);
  if (!widget) return;

  window.turnstile.render(widget, {
    sitekey: SITEKEY,
    callback: (token: string) => {
      // console.log('TURNSTILE READY', token);
      _token = token;
    },
  });
}

export function getToken(): string | null {
  return _token;
}

export function resetWidget(): void {
  _token = null;
  if (window.turnstile) window.turnstile.reset();
}
