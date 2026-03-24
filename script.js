// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

// Close nav when a link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// Contact form — Formspree AJAX submission with success state
const form       = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = form.querySelector('[type="submit"]');
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      form.hidden = true;
      successMsg.hidden = false;
    } else {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      alert('Something went wrong. Please try again or email us directly at info@go-ark.services.');
    }
  } catch {
    submitBtn.textContent = 'Send Message';
    submitBtn.disabled = false;
    alert('Something went wrong. Please try again or email us directly at info@go-ark.services.');
  }
});
