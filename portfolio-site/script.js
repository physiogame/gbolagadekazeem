const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
const navLinks = [...document.querySelectorAll('.nav-menu a')];
const backTop = document.querySelector('.back-top');
const sections = [...document.querySelectorAll('main section[id]')];

function closeMenu() {
  menu.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
}

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
});

navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

function updatePageState() {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 20);
  backTop.classList.toggle('visible', y > 650);
  let current = 'home';
  sections.forEach(section => { if (y >= section.offsetTop - 150) current = section.id; });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}

window.addEventListener('scroll', updatePageState, { passive: true });
window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
updatePageState();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
}
