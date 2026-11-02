const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn?.addEventListener('click', () => {
  const opened = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(opened));
  menuBtn.innerHTML = opened ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));
