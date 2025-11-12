// Navigation: single-page section switching
const navLinks = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('.page-section');
let currentSection = 'home';

// Function to show a section by id and hide others
function showSection(sectionId) {
  sections.forEach(sec => {
    sec.style.display = (sec.id === sectionId) ? 'block' : 'none';
  });
  currentSection = sectionId;
}

// Initialize: hide all sections except home
showSection('home');

// Handle nav link clicks
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-section');
    if (target) {
      // Show target section
      showSection(target);
      // Update active link style
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      // If mobile menu was open, close it
      document.getElementById('nav-toggle').checked = false;
    }
  });
});

// Carousel auto-scroll on hover
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const leftArea = carousel.querySelector('.scroll-area.left');
  const rightArea = carousel.querySelector('.scroll-area.right');
  let scrollLeftInterval, scrollRightInterval;
  leftArea.addEventListener('mouseenter', () => {
    scrollLeftInterval = setInterval(() => {
      track.scrollBy({ left: -5, behavior: 'auto' });
    }, 20);
  });
  leftArea.addEventListener('mouseleave', () => {
    clearInterval(scrollLeftInterval);
  });
  rightArea.addEventListener('mouseenter', () => {
    scrollRightInterval = setInterval(() => {
      track.scrollBy({ left: 5, behavior: 'auto' });
    }, 20);
  });
  rightArea.addEventListener('mouseleave', () => {
    clearInterval(scrollRightInterval);
  });
});

// Language toggle
const frBtn = document.getElementById('fr-btn');
const enBtn = document.getElementById('en-btn');
frBtn.addEventListener('click', () => {
  document.body.classList.add('fr-active');
  document.body.classList.remove('en-active');
});
enBtn.addEventListener('click', () => {
  document.body.classList.add('en-active');
  document.body.classList.remove('fr-active');
});
