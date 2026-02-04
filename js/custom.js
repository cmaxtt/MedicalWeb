// Medical Website Custom JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  // Initialize PureCounter
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  // Initialize GLightbox
  if (typeof GLightbox !== 'undefined') {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }

  // Sticky header behavior
  const header = document.getElementById('header');
  if (header) {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      // Hide/show header on scroll direction (optional)
      if (scrollTop > lastScrollTop && scrollTop > 200) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop;
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just '#'
      if (href === '#') return;
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile navbar if open
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.getElementById('navmenu');
        if (navbarToggler && navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    });
  });

  // Form validation for appointment and contact forms
  const appointmentForm = document.getElementById('appointment-form');
  const contactForm = document.getElementById('contact-form');
  
  function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
      // Reset previous error states
      input.classList.remove('is-invalid');
      
      if (!input.value.trim()) {
        input.classList.add('is-invalid');
        isValid = false;
      } else if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          input.classList.add('is-invalid');
          isValid = false;
        }
      } else if (input.type === 'tel') {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(input.value.trim())) {
          input.classList.add('is-invalid');
          isValid = false;
        }
      }
    });
    
    return isValid;
  }
  
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      if (!validateForm(this)) {
        e.preventDefault();
        // Show error message
        const errorAlert = this.querySelector('.alert-danger') || createErrorAlert(this);
        errorAlert.classList.remove('d-none');
      }
    });
  }
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      if (!validateForm(this)) {
        e.preventDefault();
        const errorAlert = this.querySelector('.alert-danger') || createErrorAlert(this);
        errorAlert.classList.remove('d-none');
      }
    });
  }
  
  function createErrorAlert(form) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger mt-3';
    alertDiv.innerHTML = '<strong>Error:</strong> Please fill in all required fields correctly.';
    form.appendChild(alertDiv);
    return alertDiv;
  }

  // Real-time form validation
  document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('blur', function() {
      if (this.hasAttribute('required') && !this.value.trim()) {
        this.classList.add('is-invalid');
      } else {
        this.classList.remove('is-invalid');
      }
    });
    
    // Clear error on input
    input.addEventListener('input', function() {
      if (this.classList.contains('is-invalid')) {
        this.classList.remove('is-invalid');
      }
    });
  });

  // Navbar active state based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNavLink);

  // FAQ accordion enhancement
  const faqItems = document.querySelectorAll('.accordion-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (header) {
      header.addEventListener('click', () => {
        // Add a small delay for smooth animation
        setTimeout(() => {
          item.classList.toggle('active');
        }, 10);
      });
    }
  });

  // Back to top button
  const backToTopButton = document.createElement('button');
  backToTopButton.id = 'back-to-top';
  backToTopButton.className = 'btn btn-primary rounded-circle';
  backToTopButton.innerHTML = '<i class="bi bi-chevron-up"></i>';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.zIndex = '1000';
  backToTopButton.style.display = 'none';
  backToTopButton.style.width = '50px';
  backToTopButton.style.height = '50px';
  backToTopButton.style.fontSize = '1.25rem';
  document.body.appendChild(backToTopButton);

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'flex';
      backToTopButton.style.alignItems = 'center';
      backToTopButton.style.justifyContent = 'center';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Initialize Bootstrap tooltips
  if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // Initialize Bootstrap popovers
  if (typeof bootstrap !== 'undefined' && bootstrap.Popover) {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function(popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  }

  console.log('Medical website JavaScript initialized successfully.');
});