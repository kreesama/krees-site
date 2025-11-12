// Toggle header visibility on scroll (hide on scroll down, show on scroll up)
let lastScrollY = 0;
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  const currentY = window.pageYOffset || document.documentElement.scrollTop;
  if (currentY <= 0) {
    // At top: always show header
    header.classList.remove('hidden');
  }
  if (currentY > lastScrollY + 50) {
    // Scrolling down beyond 50px
    header.classList.add('hidden');
    lastScrollY = currentY;
  } else if (lastScrollY > currentY + 50) {
    // Scrolling up beyond 50px
    header.classList.remove('hidden');
    lastScrollY = currentY;
  }
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click', () => {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    // Change icon to bars
    document.getElementById('burger-icon').classList.remove('fa-times');
    document.getElementById('burger-icon').classList.add('fa-bars');
  } else {
    menu.classList.add('open');
    // Change icon to close (times)
    document.getElementById('burger-icon').classList.remove('fa-bars');
    document.getElementById('burger-icon').classList.add('fa-times');
  }
});

// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      // Only handle if target is an id on page (length > 1 means not just "#")
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        // Close mobile menu if open
        menu.classList.remove('open');
        document.getElementById('burger-icon').classList.remove('fa-times');
        document.getElementById('burger-icon').classList.add('fa-bars');
        // Smooth scroll to section
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
