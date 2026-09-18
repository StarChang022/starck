// STARCK Research — Main JS

(function () {
  'use strict';

  // Hamburger menu toggle
  var hamburger = document.getElementById('hamburger');
  var navOverlay = document.getElementById('navOverlay');

  if (hamburger && navOverlay) {
    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.classList.toggle('open');
      navOverlay.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navOverlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Mark current page as active in nav
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .nav-overlay a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Floating Go Top button
  var goTopBtn = document.getElementById('goTopBtn');
  if (goTopBtn) {
    goTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

})();
