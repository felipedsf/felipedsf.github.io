// ===================================
// Navigation
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = target.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// Active Navigation Link
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active');
    } else {
      navLink?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Scroll Animations (CSS-driven)
// ===================================
const animateElements = document.querySelectorAll('.animate-on-scroll');

const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      animateObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px'
});

animateElements.forEach(el => {
  animateObserver.observe(el);
});



// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name');

  // Create success message
  const successMessage = document.createElement('div');
  successMessage.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #2563EB, #4F46E5);
    color: #F8FAFC;
    padding: 2rem 3rem;
    border-radius: 16px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
    z-index: 10000;
    text-align: center;
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
    font-weight: 700;
    backdrop-filter: blur(16px);
    border: 1px solid rgba(248, 250, 252, 0.1);
  `;
  successMessage.innerHTML = `
    <p>✓ Message sent successfully!</p>
    <p style="font-family: 'Outfit', sans-serif; font-size: 0.875rem; font-weight: 400; margin-top: 0.5rem; opacity: 0.8;">Thank you for reaching out, ${name}!</p>
  `;

  document.body.appendChild(successMessage);

  // Reset form
  contactForm.reset();

  // Remove message after 3 seconds
  setTimeout(() => {
    successMessage.style.opacity = '0';
    successMessage.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    setTimeout(() => {
      document.body.removeChild(successMessage);
    }, 400);
  }, 3000);
});

// ===================================
// Console Easter Egg
// ===================================
console.log('%c> Hello, curious developer!', 'font-size: 18px; font-weight: bold; color: #2563EB; font-family: "Space Mono", monospace;');
console.log('%cIf you\'re reading this, we should probably talk! 😊', 'font-size: 13px; color: #94A3B8;');
console.log('%c> contact: felipedsf@gmail.com', 'font-size: 13px; color: #14B8A6; font-family: "Space Mono", monospace;');

// ===================================
// Performance Monitoring (Development)
// ===================================
if (window.performance && window.performance.timing) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`%c⚡ Page loaded in ${pageLoadTime}ms`, 'font-size: 12px; color: #64748B;');
    }, 0);
  });
}
