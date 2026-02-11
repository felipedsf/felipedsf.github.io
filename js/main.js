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
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow on scroll
  if (currentScroll > 50) {
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
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
// Skill Bar Animation
// ===================================
const skillBars = document.querySelectorAll('.skill-progress');

const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.style.width;
      entry.target.style.width = '0';
      setTimeout(() => {
        entry.target.style.width = width;
      }, 100);
      skillObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// ===================================
// Fade In Animation on Scroll
// ===================================
const fadeElements = document.querySelectorAll('.work-card, .timeline-item, .about-content');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(20px)';
      entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, 100);
      
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(element => {
  fadeObserver.observe(element);
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Here you would typically send the data to a server
  // For now, we'll just show a success message
  
  // Create success message
  const successMessage = document.createElement('div');
  successMessage.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #5b9bd5;
    color: white;
    padding: 2rem 3rem;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    z-index: 10000;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 600;
  `;
  successMessage.innerHTML = `
    <p>✓ Mensagem enviada com sucesso!</p>
    <p style="font-size: 0.875rem; font-weight: 400; margin-top: 0.5rem;">Obrigado pelo contato, ${name}!</p>
  `;
  
  document.body.appendChild(successMessage);
  
  // Reset form
  contactForm.reset();
  
  // Remove message after 3 seconds
  setTimeout(() => {
    successMessage.style.opacity = '0';
    successMessage.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(successMessage);
    }, 300);
  }, 3000);
});

// ===================================
// Typing Effect for Hero Subtitle (Optional Enhancement)
// ===================================
const heroSubtitle = document.querySelector('.hero-subtitle');
const subtitleText = heroSubtitle.textContent;
let charIndex = 0;

function typeEffect() {
  if (charIndex < subtitleText.length) {
    heroSubtitle.textContent = subtitleText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeEffect, 100);
  }
}

// Uncomment to enable typing effect
// heroSubtitle.textContent = '';
// setTimeout(typeEffect, 500);

// ===================================
// Lazy Loading Images
// ===================================
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Olá, desenvolvedor curioso!', 'font-size: 20px; font-weight: bold; color: #5b9bd5;');
console.log('%cSe você está lendo isso, talvez devêssemos conversar! 😊', 'font-size: 14px; color: #a0a0a0;');
console.log('%cEntre em contato: felipe@example.com', 'font-size: 14px; color: #5b9bd5;');

// ===================================
// Performance Monitoring (Development)
// ===================================
if (window.performance && window.performance.timing) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`⚡ Página carregada em ${pageLoadTime}ms`);
    }, 0);
  });
}
