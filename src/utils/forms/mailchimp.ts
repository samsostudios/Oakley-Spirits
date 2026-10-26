// eslint-disable-next-line simple-import-sort/imports
import { resetWidget } from '$utils/forms/turnstile';
import { gsap } from 'gsap';

const pendingForms = new WeakSet<HTMLFormElement>();

export async function submitMailchimp(form: HTMLFormElement, token: string | null): Promise<void> {
  if (pendingForms.has(form)) return;

  const input = form.querySelector<HTMLInputElement>('input[data-name="Email"]');
  const submitBtn = form.querySelector<HTMLInputElement | HTMLButtonElement>('[type="submit"]');

  clearError(form);

  const email = input?.value.trim();
  if (!email || !isValidEmail(email)) {
    showError(form, 'Please enter a valid email');
    return;
  }
  if (!token) {
    showError(form, 'Please complete the security check and try again.');
    return;
  }

  pendingForms.add(form);
  const originalLabel =
    submitBtn instanceof HTMLInputElement ? submitBtn.value : submitBtn?.textContent;
  if (submitBtn) {
    submitBtn.disabled = true;
    setButtonLabel(submitBtn, submitBtn.dataset.wait || 'Submitting...');
  }

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, turnstileToken: token }),
    });
    const raw: unknown = await response.json().catch(() => null);

    if (!response.ok) {
      showError(form, getResponseError(raw));
    } else {
      showSuccess(form);
    }
  } catch {
    showError(form, 'Network error. Please try again later.');
  } finally {
    pendingForms.delete(form);
    if (submitBtn) {
      submitBtn.disabled = false;
      setButtonLabel(submitBtn, originalLabel || 'Submit');
    }
    try {
      resetWidget(form);
    } catch (error) {
      console.error('Turnstile reset failed:', error);
    }
  }
}

function setButtonLabel(button: HTMLInputElement | HTMLButtonElement, label: string): void {
  if (button instanceof HTMLInputElement) button.value = label;
  else button.textContent = label;
}

function getResponseError(raw: unknown): string {
  const data =
    raw && typeof raw === 'object'
      ? (raw as {
          message?: unknown;
          error?: { title?: unknown; detail?: unknown };
        })
      : null;

  if (data?.error?.title === 'Member Exists') return 'You are already a member!';
  if (data?.message === 'Bot check failed' || data?.message === 'Missing security token') {
    return 'Security verification failed. Please try again.';
  }
  if (typeof data?.error?.detail === 'string') return data.error.detail;
  if (typeof data?.message === 'string') return data.message;
  return 'Submission failed. Please try again.';
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showSuccess(form: HTMLFormElement): void {
  const wrap = form.closest('.form_wrap');
  const successEl = wrap?.querySelector('.form_success');
  if (!successEl) return;

  gsap.to(form, { display: 'none' });
  gsap.to(successEl, { display: 'block' });
}

export function showError(form: HTMLFormElement, msg: string): void {
  const errorEl = form.closest('.form_wrap')?.querySelector<HTMLElement>('.form_error');
  if (!errorEl) return;

  const messageEl = getErrorMessageElement(errorEl);
  if (messageEl) messageEl.textContent = msg;
  gsap.to(errorEl, { display: 'block' });
}

function clearError(form: HTMLFormElement): void {
  const errorEl = form.closest('.form_wrap')?.querySelector<HTMLElement>('.form_error');
  if (!errorEl) return;

  gsap.set(errorEl, { display: 'none' });
  const messageEl = getErrorMessageElement(errorEl);
  if (messageEl) messageEl.textContent = '';
}

function getErrorMessageElement(errorEl: HTMLElement): HTMLElement | null {
  return (
    errorEl.querySelector<HTMLElement>('[data-error-text], .form_error-text strong') ??
    errorEl.querySelector<HTMLElement>('.form_error-text')
  );
}
