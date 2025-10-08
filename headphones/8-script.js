// Hamburger menu toggle (no frameworks)
(function () {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('primaryNav');

  if (!toggle || !nav) return;

  function openMenu() {
    nav.classList.add('open');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    nav.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function toggleMenu() {
    const isOpen = nav.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  }

  // Click the hamburger
  toggle.addEventListener('click', toggleMenu);

  // Close when clicking outside the menu (mobile only)
  document.addEventListener('click', (e) => {
    const within = nav.contains(e.target) || toggle.contains(e.target);
    if (!within && nav.classList.contains('open')) closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu();
  });

  // Optional: close when a nav link is tapped (better UX)
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', closeMenu)
  );
})();
