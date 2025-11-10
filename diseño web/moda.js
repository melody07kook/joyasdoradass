// ===== Redirección de productos =====
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const link = item.getAttribute('data-link');
      if (link) window.open(link, '_blank');
    });
  });
});

// ===== Menú hamburguesa =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});