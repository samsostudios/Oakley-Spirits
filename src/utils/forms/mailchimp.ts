import { gsap } from 'gsap';

export async function submitMailchimp(form: HTMLFormElement, token: string): Promise<void> {
  const input = form.querySelector<HTMLInputElement>('input[data-name="Email"]');
  const submitBtn = form.querySelector<HTMLButtonElement>(
    'button[type="submit"]'
  ) as HTMLButtonElement;
  const email = input?.value.trim();

  if (!email || !isValidEmail(email)) {
    showError(form, 'Please enter a valid email');
    return;
  }

  submitBtn.setAttribute('disabled', 'true');
  submitBtn.value = 'Submitting...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, turnstileToken: token }),
    });
    const data = await response.json();

    if (!response.ok) {
      const err =
        data.error.title === 'Member Exists' ? 'You are already a member!' : data.error.detail;
      showError(form, err);
    } else {
      showSuccess(form);
    }
  } catch {
    showError(form, 'Network error. Please try again later.');
  } finally {
    submitBtn.removeAttribute('disabled');
    submitBtn.value = 'Submit';
  }
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showSuccess(form: HTMLFormElement) {
  const wrap = form.closest('.form_wrap') as HTMLElement;
  gsap.to(form, { display: 'none' });
  gsap.to(wrap.querySelector('.form_success'), { display: 'block' });
}

function showError(form: HTMLFormElement, msg: string) {
  const wrap = form.closest('.form_wrap') as HTMLElement;
  const errorEl = wrap.querySelector('.form_error') as HTMLElement;
  (errorEl.children[0] as HTMLElement).innerHTML = msg;
  gsap.to(errorEl, { display: 'block' });
}
