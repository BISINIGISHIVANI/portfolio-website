// Portfolio data
const portfolioData = {
  "name": "Shivani Bisinigi",
  "title": "Frontend Developer",
  "experience": "2 years",
  "tagline": "Crafting digital experiences with modern web technologies",
  "about": "Passionate Frontend Developer with 1.5 years of experience building responsive, user-centric web applications. Specialized in React, JavaScript, and modern CSS frameworks. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  "skills": [
    {"name": "React.js", "level": 85, "category": "Frontend"},
    {"name": "JavaScript", "level": 90, "category": "Programming"},
    {"name": "TypeScript", "level": 75, "category": "Programming"},
    {"name": "NextJS", "level": 75, "category": "Frontend"},
    {"name": "Blitz.js", "level": 70, "category": "Frontend"},
    {"name": "TailwindCSS", "level": 80, "category": "Styling"},
    {"name": "Gluestack UI", "level": 80, "category": "Styling"},
    {"name": "HTML5", "level": 95, "category": "Markup"},
    {"name": "CSS3", "level": 90, "category": "Styling"},
    {"name": "Git", "level": 85, "category": "Tools"},
    {"name": "GitHub", "level": 85, "category": "Tools"},
    {"name": "Responsive Design", "level": 90, "category": "Design"},
    {"name": "UI/UX Design", "level": 70, "category": "Design"}
  ],
  "experience": [
    {
      "title": "Frontend Developer (Freelancer)",
      "company": "Remote · Various Clients",
      "duration": "April 2025 – Present",
      "description": "Delivering custom ReactJS and Next.js web solutions for 5+ diverse clients while implementing responsive design and building reusable component libraries.",
      "technologies": ["React", "Next.js", "JavaScript", "Responsive Design", "Cross-browser Compatibility"]
    },
    
    {
      "title": "Frontend Developer",
      "company": "Real One · Bangalore, India",
      "duration": "March 2024 – March 2025",
      "description": "Developed and maintained responsive web applications using ReactJS and Next.js in Agile teams while establishing coding standards and collaborating with cross-functional teams.",
      "technologies": ["React", "Next.js", "JavaScript", "Agile", "Code Reviews"]
    },
    {
      "title": "Frontend Developer Intern",
      "company": "TIF Labs (RoboCraze) · Bangalore, India",
      "duration": "September 2023 – January 2024",
      "description": "Resolved frontend bugs and developed responsive web interfaces using HTML5, CSS3, and JavaScript while implementing efficient code organization and API integrations.",
      "technologies": ["HTML5", "CSS3", "JavaScript", "RESTful APIs", "Cross-browser Compatibility"]
    }       
  ],
  "projects": [
    {
      "id": 1,
      "name": "Go Groceries(E-commerce App)",
      "description": "Modern e-commerce solution with shopping cart, payment integration, and admin dashboard",
      "technologies": ["React", "Node.js", "MongoDB", "Stripe","Express","TailwindCSS"],
      "status": "In Progress",
      "liveDemo": "https://gogroceries.vercel.app/",
      "github": "https://github.com/BISINIGISHIVANI/gogroceries/tree/main"
    },
    {
      "id": 2,
      "name": "Rill Flix (Video Streaming App)",
      "description": "Built a full-featured video streaming platform with secure user authentication, personalized watchlists, custom playlists, viewing history tracking, and advanced category filtering for enhanced content discovery.",
      "technologies": ["React", "TypeScript", "MockBee Backend"],
      "status": "Completed",
      "liveDemo": "https://rillflix.netlify.app/",
      "github": "https://github.com/BISINIGISHIVANI/rill_flix"
    },
  ],
  "blogPosts": [
    {
      "title": "A Beginner's Handbook to Frontend Development Courses",
      "excerpt": "Best practices and techniques for mastering frontend development through structured courses",
      "date": "2024-04-29",
      "readTime": "14 min read",
      "tags": ["React", "JavaScript","CSS"],
      "link":'https://shivaninext.hashnode.dev/a-beginners-handbook-to-frontend-development-courses'
    },
    {
      "title": "Quick Form Validation Hacks with Zod, React-Hook-Form, and Bootstrap",
     "excerpt": "Master efficient form validation with Zod schemas, React-Hook-Form performance, and Bootstrap styling - practical hacks for faster, type-safe development.",
      "date": "2024-04-22",
      "readTime": "4 min read",
      "tags": ["Zod", "BootStrap", "Frontend","React",'React-Hook-Form'],
      "link":"https://shivaninext.hashnode.dev/quick-form-validation-hacks-with-zod-react-hook-form-and-bootstrap"
    },
    {
      "title": "Nullish Coalescing Operator (??)",
      "excerpt": "Understanding the Nullish Coalescing Operator in JavaScript: A concise guide to using ?? for default values and handling null/undefined effectively.",
      "date": "2022-09-05",
      "readTime": "3 min read",
      "tags": ["Frontend", "Technology", "JavaScript",'ES6'],
      'link':'https://shivaninext.hashnode.dev/nullish-coalescing-operator'
    }
  ]
};

const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in modern frontend technologies including React, JavaScript,NextJS, TypeScript, and CSS frameworks like TailwindCSS. I also have experience with backend technologies and database management."
  },
  {
    question: "How do you approach new projects?",
    answer: "I start by understanding the requirements thoroughly, then create wireframes and prototypes. I follow agile development practices and maintain regular communication with stakeholders throughout the project."
  },
  {
    question: "What is your experience with responsive design?",
    answer: "I have extensive experience creating mobile-first, responsive designs that work seamlessly across all device sizes. I use modern CSS techniques and frameworks to ensure optimal user experience."
  },
  {
    question: "Do you work with teams or as a freelancer?",
    answer: "I have experience working both in team environments and as a freelancer. I'm comfortable with collaborative tools, version control, and agile methodologies."
  }
];

// DOM Elements
let themeToggle, mobileMenuToggle, downloadResumeBtn, contactForm, formStatus;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements after DOM is loaded
  themeToggle = document.getElementById('themeToggle');
  mobileMenuToggle = document.getElementById('mobileMenuToggle');
  downloadResumeBtn = document.getElementById('downloadResume');
  contactForm = document.getElementById('contactForm');
  formStatus = document.getElementById('formStatus');

  initializeTheme();
  populateSkills();
  populateExperience();
  populateProjects();
  populateBlog();
  initializeFAQ();
  initializeNavigation();
  initializeViewToggles();
  initializeContactForm();
  initializeAnimations();
  
  // Event listeners
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', downloadResume);
  }
  
  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // FAQ modal
  const faqTrigger = document.querySelector('[data-faq]');
  if (faqTrigger) {
    faqTrigger.addEventListener('click', openFAQModal);
  }
});

// Theme Management - Fixed
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-color-scheme', savedTheme);
  updateThemeToggleIcon(savedTheme);
}

function toggleTheme() {
  console.log('Theme toggle clicked'); // Debug log
  const currentTheme = document.body.getAttribute('data-color-scheme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  console.log(`Switching from ${currentTheme} to ${newTheme}`); // Debug log
  
  document.body.setAttribute('data-color-scheme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeToggleIcon(newTheme);
  
  // Add smooth transition
  document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  setTimeout(() => {
    document.body.style.transition = '';
  }, 300);
}

function updateThemeToggleIcon(theme) {
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon mx-2';
    }
  }
}

// Skills Section
function populateSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  const categoryButtons = document.querySelectorAll('.skill-category-btn');
  
  if (!skillsGrid) return;
  
  function renderSkills(skillsToShow = portfolioData.skills) {
    skillsGrid.innerHTML = '';
    
    skillsToShow.forEach((skill, index) => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skill-card';
      skillCard.style.animationDelay = `${index * 0.1}s`;
      
      skillCard.innerHTML = `
        <div class="skill-header">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-level">${skill.level}%</span>
        </div>
        <div class="skill-progress">
          <div class="skill-progress-fill" data-level="${skill.level}"></div>
        </div>
        <div class="skill-category">${skill.category}</div>
      `;
      
      skillsGrid.appendChild(skillCard);
    });
    
    // Animate progress bars
    setTimeout(() => {
      const progressBars = skillsGrid.querySelectorAll('.skill-progress-fill');
      progressBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = `${level}%`;
      });
    }, 200);
  }
  
  // Category filtering
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const category = btn.getAttribute('data-category');
      const filteredSkills = category === 'all' 
        ? portfolioData.skills 
        : portfolioData.skills.filter(skill => skill.category === category);
      
      renderSkills(filteredSkills);
    });
  });
  
  // Initial render
  renderSkills();
}

// Experience Section
function populateExperience() {
  const cardView = document.getElementById('experienceCardView');
  const tableBody = document.getElementById('experienceTableBody');
  
  if (!cardView || !tableBody) return;
  
  // Card view
  cardView.innerHTML = portfolioData.experience.map(exp => `
    <div class="experience-card">
      <div class="experience-header">
        <div>
          <h3 class="experience-title">${exp.title}</h3>
          <div class="experience-company">${exp.company}</div>
        </div>
        <div class="experience-duration">${exp.duration}</div>
      </div>
      <p class="experience-description">${exp.description}</p>
      <div class="experience-technologies">
        ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
  `).join('');
  
  // Table view
  tableBody.innerHTML = portfolioData.experience.map(exp => `
    <tr>
      <td>${exp.title}</td>
      <td>${exp.company}</td>
      <td>${exp.duration}</td>
      <td>
        <div style="display: flex; flex-wrap: wrap; gap: 0.25rem;">
          ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </td>
    </tr>
  `).join('');
}

// Projects Section
function populateProjects() {
  const cardView = document.getElementById('projectsCardView');
  const tableBody = document.getElementById('projectsTableBody');
  
  if (!cardView || !tableBody) return;
  
  // Card view
  cardView.innerHTML = portfolioData.projects.map(project => `
    <div class="project-card">
      <div class="project-image">
        <i class="fas fa-laptop-code"></i>
      </div>
      <div class="project-content">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-technologies">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="status-badge status-${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span>
        </div>
        <div class="project-actions">
          <a href="${project.liveDemo}" target="_blank" class="btn btn--primary">
            <i class="fas fa-external-link-alt mx-8"></i> Live Demo
          </a>
          <a href="${project.github}" target="_blank" class="btn btn--outline">
            <i class="fab fa-github mx-8"></i> Code
          </a>
        </div>
      </div>
    </div>
  `).join('');
  
  // Table view
  tableBody.innerHTML = portfolioData.projects.map(project => `
    <tr>
      <td>${project.name}</td>
      <td>
        <div style="display: flex; flex-wrap: wrap; gap: 0.25rem;">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </td>
      <td>
        <span class="status-badge status-${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span>
      </td>
      <td>
        <div style="display: flex; gap: 0.5rem;">
          <a href="${project.liveDemo}" target="_blank" class="btn btn--sm btn--primary">Demo</a>
          <a href="${project.github}" target="_blank" class="btn btn--sm btn--outline">Code</a>
        </div>
      </td>
    </tr>
  `).join('');
}

// Blog Section
function populateBlog() {
  const blogGrid = document.getElementById('blogGrid');
  
  if (!blogGrid) return;
  
  blogGrid.innerHTML = portfolioData.blogPosts.map(post => `
    <article class="blog-card">
      <a href="${post.link}" target="_blank" class="btn btn--outline blog-preview-btn form-group">
            <i class="fas fa-external-link-alt mx-8"></i>Preview
          </a>
      <h3 class="blog-title">${post.title}</h3>
      <p class="blog-excerpt">${post.excerpt}</p>
      <div class="blog-meta">
        <span>${new Date(post.date).toLocaleDateString()}</span>
        <span>${post.readTime}</span>
      </div>
      <div class="blog-tags">
        ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
      </div>
      
    </article>
  `).join('');
}

// FAQ Modal and Accordion
function initializeFAQ() {
  const faqAccordion = document.getElementById('faqAccordion');
  
  if (faqAccordion) {
    faqAccordion.innerHTML = faqData.map((faq, index) => `
      <div class="accordion-item">
        <div class="accordion-header" data-index="${index}">
          <span>${faq.question}</span>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="accordion-content">
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join('');
    
    // Add click handlers
    const headers = faqAccordion.querySelectorAll('.accordion-header');
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');
        
        // Toggle active state
        const isActive = content.classList.contains('active');
        
        // Close all other accordions
        faqAccordion.querySelectorAll('.accordion-content').forEach(c => {
          c.classList.remove('active');
        });
        faqAccordion.querySelectorAll('.accordion-header i').forEach(i => {
          i.style.transform = 'rotate(0deg)';
        });
        
        if (!isActive) {
          content.classList.add('active');
          icon.style.transform = 'rotate(180deg)';
        }
      });
    });
  }
}

function openFAQModal() {
  const modal = document.getElementById('faqModal');
  if (modal) {
    modal.classList.remove('hidden');
    
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
      });
    }
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
}

// Navigation - Fixed
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetOffset = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
        
        // Update active nav link immediately
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
  
  // Update active link on scroll - Fixed logic
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id], .hero');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        current = section.getAttribute('id');
      }
    });
    
    // If we're at the top, highlight home
    if (window.scrollY < 100) {
      current = 'home';
    }
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// View Toggles
function initializeViewToggles() {
  const viewButtons = document.querySelectorAll('.view-btn');
  
  viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      const section = btn.closest('section');
      const buttons = section.querySelectorAll('.view-btn');
      
      // Update button states
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Toggle views
      if (section.id === 'experience') {
        const cardView = section.querySelector('.experience-card-view');
        const tableView = section.querySelector('.experience-table-view');
        
        if (view === 'card') {
          cardView.classList.remove('hidden');
          tableView.classList.add('hidden');
        } else {
          cardView.classList.add('hidden');
          tableView.classList.remove('hidden');
        }
      } else if (section.id === 'projects') {
        const cardView = section.querySelector('.projects-card-view');
        const tableView = section.querySelector('.projects-table-view');
        
        if (view === 'card') {
          cardView.classList.remove('hidden');
          tableView.classList.add('hidden');
        } else {
          cardView.classList.add('hidden');
          tableView.classList.remove('hidden');
        }
      }
    });
  });
}

// Contact Form - Fixed

function initializeContactForm() {
  if (!contactForm) return;
 
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous errors and status
    const errorMessages = contactForm.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');
    if (formStatus) {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate form
    const errors = validateContactForm(data);
    
    if (Object.keys(errors).length > 0) {
      // Display errors
      Object.keys(errors).forEach(field => {
        const errorElement = contactForm.querySelector(`[name="${field}"] + .error-message`);
        if (errorElement) {
          errorElement.textContent = errors[field];
        }
      });
      return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    if (btnText && btnLoading) {
      btnText.classList.add('hidden');
      btnLoading.classList.remove('hidden');
    }
    submitBtn.disabled = true;
    
    // Simulate form submission with proper promise resolution
    try {
      const resp = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!resp.ok) throw new Error(await resp.text());
  
      // Show success message
      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thank you! Your message has been sent successfully.';
      }
      
      // Reset form
      contactForm.reset();
      setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
      }, 4500);
  
    } catch (error) {
      // Show error message
      if (formStatus) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Sorry, there was an error sending your message. Please try again.';
      }
      setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = 'form-status error';
      }, 2500);
    } finally {
      // Hide loading state
      if (btnText && btnLoading) {
        btnText.classList.remove('hidden');
        btnLoading.classList.add('hidden');
      }
      submitBtn.disabled = false;
    }
  });
}

function validateContactForm(data) {
  const errors = {};
  
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!data.subject || data.subject.trim().length < 5) {
    errors.subject = 'Subject must be at least 5 characters long';
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return errors;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Mobile Menu
function toggleMobileMenu() {
  const navMenu = document.querySelector('.nav-menu');
  if (navMenu) {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileMenuToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : '';
  }
}

// Resume Download
function downloadResume() {
  // Create a mock PDF download
  const link = document.createElement('a');
  link.href = 'https://docs.google.com/document/d/132hg4UC5VfQaqv5Fuo328o-Nm_mx-kJ-FQ7Xweubsi4/export?format=pdf';
  link.download = 'Shivani_Bisinigi_Resume.pdf';
  
  // Show notification
  const notification = document.createElement('div');
  notification.className = 'form-status success';
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 2000;
    padding: 1rem;
    border-radius: 8px;
    font-weight: 500;
    max-width: 300px;
  `;
  notification.textContent = 'Resume download started!';
  
  document.body.appendChild(notification);
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
  
  // Trigger download
  link.click();
}

// Animations on Scroll
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        
        // Special animations for specific elements
        if (entry.target.classList.contains('skill-card')) {
          const progressBar = entry.target.querySelector('.skill-progress-fill');
          if (progressBar) {
            const level = progressBar.getAttribute('data-level');
            setTimeout(() => {
              progressBar.style.width = `${level}%`;
            }, 300);
          }
        }
        
        if (entry.target.classList.contains('stat-item')) {
          const number = entry.target.querySelector('.stat-number');
          if (number) {
            animateNumber(number);
          }
        }
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.skill-card, .experience-card, .project-card, .blog-card, .stat-item');
  animatedElements.forEach(el => observer.observe(el));
}

function animateNumber(element) {
  const finalNumber = parseInt(element.textContent);
  const duration = 2000;
  const increment = finalNumber / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= finalNumber) {
      current = finalNumber;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
  }, 16);
}

// FAQ trigger in about section
document.addEventListener('DOMContentLoaded', function() {
  // Add FAQ trigger button to about section
  setTimeout(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection && !document.querySelector('[data-faq]')) {
      const faqTrigger = document.createElement('button');
      faqTrigger.className = 'btn btn--outline';
      faqTrigger.innerHTML = '<i class="fas fa-question-circle mx-8"></i> View FAQ';
      faqTrigger.setAttribute('data-faq', 'true');
      faqTrigger.style.marginTop = '1rem';
      faqTrigger.addEventListener('click', openFAQModal);
      
      const aboutContent = aboutSection.querySelector('.about-text');
      if (aboutContent) {
        aboutContent.appendChild(faqTrigger);
      }
    }
  }, 1000);
});

// Add mobile navigation styles for responsive behavior
const addMobileNavStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: rgba(15, 15, 15, 0.95);
        backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: flex-start;
        padding: 2rem;
        transition: left 0.3s ease;
        z-index: 999;
      }
      
      [data-color-scheme="light"] .nav-menu {
        background: rgba(248, 249, 250, 0.95);
      }
      
      .nav-menu.active {
        left: 0;
      }
      
      .nav-menu li {
        margin: 1rem 0;
      }
      
      .nav-link {
        font-size: 1.2rem;
        padding: 0.5rem 0;
        display: block;
        border-bottom: 1px solid rgba(0, 255, 136, 0.2);
      }
    }
  `;
  document.head.appendChild(style);
};

addMobileNavStyles();

// Add scroll-based navbar background opacity
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const scrolled = window.scrollY > 100;
  const currentTheme = document.body.getAttribute('data-color-scheme') || 'dark';
  
  if (navbar) {
    if (scrolled) {
      navbar.style.background = currentTheme === 'dark' 
        ? 'rgba(15, 15, 15, 0.95)' 
        : 'rgba(248, 249, 250, 0.95)';
    } else {
      navbar.style.background = currentTheme === 'dark' 
        ? 'rgba(15, 15, 15, 0.9)' 
        : 'rgba(248, 249, 250, 0.9)';
    }
  }
});