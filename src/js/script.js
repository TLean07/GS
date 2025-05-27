const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
ham.addEventListener('click', () => menu.classList.toggle('open'));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 80;
    if (scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
});

new Swiper('.swiper-container', {
  loop: true,
  speed: 800,
  autoplay: { delay: 5000 },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

new Typed('#typed', {
  strings: ['Monitoramento em tempo real', 'Alertas antecipados', 'Proteção à comunidade'],
  typeSpeed: 50, backSpeed: 25, loop: true
});

document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.className = btn.dataset.theme;
  });
});

AOS.init({ duration: 700, once: true });
