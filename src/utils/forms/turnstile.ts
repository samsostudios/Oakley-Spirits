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

async function waitForTurnstile(timeoutMs = 10_000): Promise<void> {
  const startedAt = Date.now();

  while (typeof window.turnstile?.render !== 'function') {
    if (Date.now() - startedAt >= timeoutMs) {
      throw new Error('Turnstile did not load. Please refresh and try again.');
    }

    await new Promise<void>((resolve) => window.setTimeout(resolve, 100));
  }
}

export async function initTurnstile(form: HTMLFormElement): Promise<void> {
  const widget = form.querySelector<HTMLDivElement>('[data-mailchimp-turnstile]');

  if (!widget) return;

  await waitForTurnstile();

  window.turnstile.render(widget, {
    sitekey: SITEKEY,
    callback: (token: string) => {
      _token = token;
    },
    'expired-callback': () => {
      _token = null;
    },
    'error-callback': () => {
      _token = null;
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
