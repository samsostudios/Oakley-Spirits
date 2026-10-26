declare global {
  interface Window {
    turnstile: {
      reset: (widgetId: string) => void;
      render: (container: string | HTMLElement, params: object) => string;
      remove: (widgetId: string) => void;
    };
    onTurnstileSuccess: (token: string) => void;
  }
}
const SITEKEY = '0x4AAAAAADI7sqWWJ5PSmnBH';

const widgets = new WeakMap<HTMLFormElement, { id: string; token: string | null }>();
const pendingWidgets = new WeakMap<HTMLFormElement, Promise<void>>();

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
  if (widgets.has(form)) return;

  const pending = pendingWidgets.get(form);
  if (pending) return pending;

  const attempt = (async () => {
    const widget = form.querySelector<HTMLDivElement>('[data-mailchimp-turnstile]');
    if (!widget) throw new Error('Turnstile container is missing.');

    await waitForTurnstile();

    const state = { id: '', token: null as string | null };

    state.id = window.turnstile.render(widget, {
      sitekey: SITEKEY,
      callback: (token: string) => {
        state.token = token;
      },
      'expired-callback': () => {
        state.token = null;
      },
      'error-callback': () => {
        state.token = null;
      },
    });
    widgets.set(form, state);
  })();

  pendingWidgets.set(form, attempt);
  try {
    await attempt;
  } finally {
    pendingWidgets.delete(form);
  }
}

export function getToken(form: HTMLFormElement): string | null {
  return widgets.get(form)?.token ?? null;
}

export function resetWidget(form: HTMLFormElement): void {
  const state = widgets.get(form);
  if (!state) return;

  state.token = null;
  window.turnstile?.reset(state.id);
}
