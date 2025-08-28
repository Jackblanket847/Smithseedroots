// Smith Seed Roots — minimal enhancements
window.handleSignup = (e) => {
  e.preventDefault();
  const form = e.target.closest('form');
  const email = form.querySelector('input[name="email"]').value;
  if (!email) return false;
  alert(`Thanks! We'll notify ${email} at launch.`);
  form.reset();
  return false;
};

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
