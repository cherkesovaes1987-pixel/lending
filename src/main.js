document.querySelectorAll('.request-form input, .request-form textarea').forEach((field) => {
  field.addEventListener('focus', () => field.closest('label')?.classList.add('is-focused'));
  field.addEventListener('blur', () => field.closest('label')?.classList.remove('is-focused'));
});
