document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  header.style.opacity = currentScroll > lastScroll && currentScroll > 160 ? '0.48' : '1';
  lastScroll = currentScroll;
}, { passive: true });
