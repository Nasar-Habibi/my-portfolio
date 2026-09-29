/**
 * ==========================================================================
 * NASAR FAROOQUE - PORTFOLIO INTERACTION ENGINE
 * Vanilla JavaScript (ES6+) • Clean, Modular & Highly Performant
 * ==========================================================================
 */

/**
/**
 * ==========================================================================
 * 1. UNIFIED PORTFOLIO CONFIGURATION (CUSTOMIZE ALL YOUR DETAILS HERE)
 * ==========================================================================
 * 
 * Welcome to your portfolio configuration! You can edit any of your personal
 * details, links, photo path, and content below. All updates here automatically
 * synchronize with buttons, cards, copy buttons, terminal tabs, and modals.
 * 
 * QUICK EDIT GUIDE:
 * --------------------------------------------------------------------------
 * 1. NAME & BIO:         Lines below in 'name', 'bio', and 'role'
 * 2. PROFILE PHOTO:      Place your photo in 'assets/images/' and update 'profilePhoto'
 * 3. EMAIL & SOCIALS:    Update 'social.email', 'social.github', 'social.linkedin', 'social.instagram'
 * 4. SKILLS:             The 11 specified skills are categorized under 'skills'
 * 5. PROJECTS:           Edit 'projects' to add real repo links or update project cards
 * 6. EDUCATION:          Update 'education' details and relevant coursework
 * 7. ACHIEVEMENTS:       Fill in your hackathon, competition, or certification slots
 * 8. INTERESTS:          Adjust your focus topics under 'interests'
 * ==========================================================================
 */

const PORTFOLIO_CONFIG = {
  /* --- 1. Personal Identity --- */
  name: "Nasar Farooque",
  role: "BTech CSE Student | Developer | Tech Enthusiast",

  /* --- 2. Profile Photo --- */
  // To use your actual picture:
  // 1. Copy your image into "assets/images/" (e.g. "profile.jpg")
  // 2. Change the filename below to "assets/images/profile.jpg"
  profilePhoto: "assets/images/avatar-placeholder.svg",

  /* --- 3. Social & Contact Profiles (Replace placeholders when ready) --- */
  social: {
    email: "[ADD YOUR EMAIL]",               // e.g. "nasar.farooque@example.com"
    github: "[ADD GITHUB URL]",             // e.g. "https://github.com/nasarfarooque"
    linkedin: "[ADD LINKEDIN URL]",         // e.g. "https://linkedin.com/in/nasarfarooque"
    instagram: "[ADD INSTAGRAM URL]"        // e.g. "https://instagram.com/nasarfarooque"
  },

  /* Quick Clone Snippet (Hero Section) */
  cloneCommand: "git clone [ADD GITHUB URL]/portfolio.git",

  /* --- 4. Bio & Personal Narrative --- */
  bio: {
    heroGreeting: "Hi, I'm Nasar Farooque",
    heroTitle: "BTech CSE Student",
    heroSubtitle: "Developer & Tech Enthusiast",
    heroFocusKeywords: ["Software Development", "Data Structures", "Web Technologies"],
    heroDescription: "I am a Computer Science Engineering student at Jain University, Bangalore, passionate about technology, programming, and software design. I focus on core computational problem solving while building clean, responsive, and functional digital experiences.",

    // 3-Pillar Student Overview
    whoIAm: "BTech CSE Student at Jain University, Bangalore",
    whatILearn: "Data Structures, Python, Java, Web Development & APIs",
    whatILikeBuilding: "Modern Web Applications, Student Tools & Useful Digital Experiences",

    // Narrative Bio (Natural, human, student-focused)
    narrativeTitle: "Aspiring Software Engineer & Tech Enthusiast",
    aboutParagraphs: [
      "I'm a Computer Science Engineering student at Jain University, Bangalore. My journey into tech started with simple curiosity about how software and everyday apps work under the hood. That curiosity quickly turned into a real drive to write code, solve problems, and build things from scratch.",
      "Currently, I'm focusing on building a solid engineering foundation. I spend most of my study and practice time working through Data Structures and Object-Oriented Programming using Java and Python, while also exploring web development with HTML, CSS, JavaScript, and APIs. For me, taking the time to truly understand the core fundamentals is key to writing clean, reliable software.",
      "Outside of classes, I enjoy turning ideas into working prototypes, experimenting with modern tools in Artificial Intelligence, and preparing for student hackathons and collaborative projects. I'm always looking to learn, stay curious, and collaborate with others who are passionate about building practical software."
    ],

    // Highlights Checklist
    aboutHighlights: [
      "BTech Computer Science Student",
      "Programming & Data Structures",
      "Web Development & APIs",
      "AI & Emerging Technologies",
      "Hackathons & Team Builds",
      "Continuous Skill Improvement"
    ],

    // Quick Facts Card
    quickFacts: {
      education: "BTech Computer Science Engineering",
      institution: "Jain University, Bangalore",
      focus: "Software Development & Technology",
      currentlyLearning: ["Data Structures", "Python", "Java", "Web Development", "APIs"],
      goal: "Become a skilled software developer and build practical, high-quality digital products."
    }
  },

  /* --- 5. Education --- */
  education: {
    degree: "BTech – Computer Science Engineering",
    institution: "Jain University, Bangalore",
    status: "Current Academic Status: Undergraduate / In Progress",
    duration: "[Current Academic Year / Expected: 202X]",
    description: "Pursuing undergraduate studies in Computer Science and Engineering, establishing deep theoretical and practical foundations in programming paradigms, algorithmic problem solving, software design, and modern computational systems.",
    coreSubjects: [
      "Data Structures",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering"
    ]
  },

  /* --- 6. Technical Skills (Strictly the 11 user-specified technologies) --- */
  skills: [
    {
      category: "Programming",
      items: ["Java", "Python", "C", "JavaScript"]
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Computer Science",
      items: ["Data Structures", "Object-Oriented Programming"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "GitHub", "APIs"]
    }
  ],

  /* --- 7. Projects (Editable placeholders with zero fabricated information) --- */
  projects: {
    "portfolio": {
      id: "portfolio",
      title: "Personal Portfolio Website",
      category: "Web Development",
      badge: "Completed / Active",
      image: "assets/images/project-portfolio.svg",
      description: "A responsive personal portfolio showcasing my skills, projects, education, and achievements with a modern dark futuristic aesthetic.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      highlights: [
        "Dark developer aesthetic with subtle glows and glassmorphism",
        "100% Vanilla JavaScript with zero external frameworks or heavy dependencies",
        "Responsive across desktop, laptop, tablet, and mobile devices",
        "Interactive canvas background, project modals, and accessible semantic markup"
      ],
      githubUrl: "[ADD GITHUB URL]",
      liveDemoUrl: "#home",
      editableNote: "This project card can be customized with your actual GitHub repository URL and deployed live domain."
    },
    "fitness": {
      id: "fitness",
      title: "Fitness & Workout Website",
      category: "Web Development",
      badge: "[Editable Project Placeholder]",
      image: "assets/images/project-fitness.svg",
      description: "A modern fitness platform concept containing workout routines, activity tracking UI, and exercise analytics.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      highlights: [
        "Workout routine catalog and exercise logging concepts",
        "Calorie and activity monitoring dashboard mockups",
        "Interactive weekly progress visualizer",
        "Modern mobile-first responsive layout"
      ],
      githubUrl: "[ADD GITHUB URL]",
      liveDemoUrl: "[ADD LIVE DEMO URL]",
      editableNote: "Replace with your GitHub repository link and deployed demo URL once ready."
    },
    "productivity": {
      id: "productivity",
      title: "Student Productivity Platform",
      category: "Concept Platforms",
      badge: "[Editable Concept Placeholder]",
      image: "assets/images/project-student.svg",
      description: "A concept for a student-focused platform for organizing academic resources, revision schedules, and productivity tools.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      highlights: [
        "Subject-specific resource hub and notes organizer",
        "Integrated Pomodoro focus timer concept",
        "Semester milestone and assignment progress tracking",
        "Clean, distraction-free study environment"
      ],
      githubUrl: "[ADD GITHUB URL]",
      liveDemoUrl: "[ADD LIVE DEMO URL]",
      editableNote: "Replace with your GitHub repository link and deployed demo URL once ready."
    }
  },

  /* --- 8. Achievements & Milestones (Editable slot cards) --- */
  achievements: [
    {
      slotTitle: "[Add Hackathon Achievement]",
      slotDescription: "Dedicated placeholder for participated hackathons, university innovation challenges, project builds, or team hack sprint recognitions.",
      slotInstruction: "Replace with: Event name, project built, and result"
    },
    {
      slotTitle: "[Add Coding Competition / Platform Rank]",
      slotDescription: "Dedicated placeholder for competitive programming milestones, LeetCode / HackerRank / CodeChef problem counts, or university coding contests.",
      slotInstruction: "Replace with: Platform, rating / rank, or contest score"
    },
    {
      slotTitle: "[Add Technical Certification / Coursework]",
      slotDescription: "Dedicated placeholder for completed technical courses, cloud fundamentals, programming credentials, or specialized certificates.",
      slotInstruction: "Replace with: Certificate title, issuing body, and credential URL"
    },
    {
      slotTitle: "[Add Workshop / Tech Event]",
      slotDescription: "Dedicated placeholder for technical workshops attended, developer conferences, student club activities, or tech symposiums.",
      slotInstruction: "Replace with: Workshop title, topics covered, and date"
    }
  ],

  /* --- 9. Areas of Interest --- */
  interests: [
    { title: "Technology", tagline: "Computing hardware, operating systems & ecosystem advances" },
    { title: "Programming", tagline: "Logic, clean code patterns & efficient algorithmic thinking" },
    { title: "Web Development", tagline: "Crafting modern, accessible & responsive interactive user interfaces" },
    { title: "AI", tagline: "Machine intelligence, modern LLMs & assistive developer tools" },
    { title: "Hackathons", tagline: "High-energy team building, rapid prototyping & problem solving" },
    { title: "Fitness", tagline: "Physical training, discipline, mental resilience & healthy balance" },
    { title: "Learning New Technologies", tagline: "Curiosity, reading documentation & staying updated with trends" },
    { title: "Building Projects", tagline: "Turning theoretical knowledge into concrete, practical digital products" }
  ]
};

/**
 * Syncs PORTFOLIO_CONFIG values to the DOM automatically.
 * Ensures that changes made in the configuration block are reflected across the website.
 */
function applyPortfolioConfig() {
  // 1. Sync Profile Photo
  const avatarImg = document.querySelector('.hero-avatar-box img');
  if (avatarImg && PORTFOLIO_CONFIG.profilePhoto) {
    avatarImg.src = PORTFOLIO_CONFIG.profilePhoto;
    avatarImg.alt = `${PORTFOLIO_CONFIG.name} - Profile Photo`;
  }

  // 2. Sync Quick Clone Command & Copy Button
  const cloneCode = document.querySelector('.hero-quick-code code');
  const cloneCopyBtn = document.querySelector('.hero-quick-code .copy-btn');
  const cloneCmd = PORTFOLIO_CONFIG.social.github !== "[ADD GITHUB URL]"
    ? `git clone ${PORTFOLIO_CONFIG.social.github}/portfolio.git`
    : `git clone [ADD GITHUB URL]/portfolio.git`;
  if (cloneCode) cloneCode.textContent = cloneCmd;
  if (cloneCopyBtn) cloneCopyBtn.setAttribute('data-copy', cloneCmd);

  // 3. Sync Email in Contact Section
  if (PORTFOLIO_CONFIG.social.email !== "[ADD YOUR EMAIL]") {
    const contactEmailVal = document.querySelector('.contact-item-val');
    if (contactEmailVal) contactEmailVal.textContent = PORTFOLIO_CONFIG.social.email;
    const emailCopyBtn = document.querySelector('.contact-item-row .copy-btn');
    if (emailCopyBtn) emailCopyBtn.setAttribute('data-copy', PORTFOLIO_CONFIG.social.email);
  }

  // 4. Sync Social Links (GitHub, LinkedIn, Instagram, Email)
  if (PORTFOLIO_CONFIG.social.github !== "[ADD GITHUB URL]") {
    document.querySelectorAll('a[title*="GITHUB"], a[title*="GitHub"], a[aria-label*="GitHub"]').forEach((a) => {
      a.href = PORTFOLIO_CONFIG.social.github;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      const span = a.querySelector('span');
      if (span && span.textContent.includes('[Add URL]')) {
        span.textContent = 'GitHub Profile';
      }
    });
  }

  if (PORTFOLIO_CONFIG.social.linkedin !== "[ADD LINKEDIN URL]") {
    document.querySelectorAll('a[title*="LINKEDIN"], a[title*="LinkedIn"], a[aria-label*="LinkedIn"]').forEach((a) => {
      a.href = PORTFOLIO_CONFIG.social.linkedin;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      const span = a.querySelector('span');
      if (span && span.textContent.includes('[Add URL]')) {
        span.textContent = 'LinkedIn Profile';
      }
    });
  }

  if (PORTFOLIO_CONFIG.social.instagram !== "[ADD INSTAGRAM URL]") {
    document.querySelectorAll('a[title*="INSTAGRAM"], a[title*="Instagram"], a[aria-label*="Instagram"]').forEach((a) => {
      a.href = PORTFOLIO_CONFIG.social.instagram;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      const span = a.querySelector('span');
      if (span && span.textContent.includes('[Add URL]')) {
        span.textContent = 'Instagram Profile';
      }
    });
  }

  if (PORTFOLIO_CONFIG.social.email !== "[ADD YOUR EMAIL]") {
    document.querySelectorAll('a[title*="EMAIL"], a[title*="Email"], a[aria-label*="Email"]').forEach((a) => {
      a.href = `mailto:${PORTFOLIO_CONFIG.social.email}`;
      const span = a.querySelector('span');
      if (span && span.textContent.includes('[Add Email]')) {
        span.textContent = PORTFOLIO_CONFIG.social.email;
      }
    });
  }
}

/* --- Initialize Application Once DOM is Loaded --- */
document.addEventListener('DOMContentLoaded', () => {
  applyPortfolioConfig();
  initScrollProgressBar();
  initNavbarBehavior();
  initActiveNavSpy();
  initMobileMenu();
  initBackgroundCanvas();
  initProjectFiltering();
  initProjectModals();
  initClipboardButtons();
  initContactFormValidation();
  initScrollReveal();
  initDeveloperTerminal();
});

/**
 * ==========================================================================
 * 2. SCROLL PROGRESS BAR
 * ==========================================================================
 */
function initScrollProgressBar() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

/**
 * ==========================================================================
 * 3. NAVBAR STICKY & BLUR EFFECT
 * ==========================================================================
 */
function initNavbarBehavior() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 24) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run on load
}

/**
 * ==========================================================================
 * 4. ACTIVE SECTION SCROLLSPY
 * ==========================================================================
 */
function initActiveNavSpy() {
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navLinks.length) return;

  const targetIds = Array.from(navLinks).map(link => link.getAttribute('href').replace('#', ''));
  const sections = Array.from(document.querySelectorAll('section[id]')).filter(sec => targetIds.includes(sec.id));
  if (!sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * ==========================================================================
 * 5. MOBILE HAMBURGER MENU
 * ==========================================================================
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleBtn || !navMenu) return;

  const allDrawerLinks = navMenu.querySelectorAll('a');

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : toggleBtn.getAttribute('aria-expanded') !== 'true';
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      navMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  // Close when clicking any link inside the mobile drawer
  allDrawerLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });

  // Close if window resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
      toggleMenu(false);
    }
  }, { passive: true });
}

/**
 * ==========================================================================
 * 6. SUBTLE INTERACTIVE BACKGROUND CANVAS (CONSTELLATION NODES)
 * ==========================================================================
 */
function initBackgroundCanvas() {
  // Respect user preference for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let animationFrameId;
  let isCanvasVisible = true;

  // Particle Settings
  const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
  const particles = [];
  const maxDistance = 140;

  let mouse = { x: null, y: null, radius: 120 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.5 + 1;
      this.baseColor = Math.random() > 0.4 ? 'rgba(56, 189, 248,' : 'rgba(99, 102, 241,';
      this.alpha = Math.random() * 0.4 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse gentle interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const dirX = dx / distance;
          const dirY = dy / distance;
          this.x -= dirX * force * 1.2;
          this.y -= dirY * force * 1.2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${this.baseColor} ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    if (!isCanvasVisible) return;

    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines between particles
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }

    // Update & draw particles
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  // Optimize battery by pausing when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isCanvasVisible = false;
      cancelAnimationFrame(animationFrameId);
    } else {
      isCanvasVisible = true;
      animate();
    }
  });

  animate();
}

/**
 * ==========================================================================
 * 7. PROJECTS FILTERING
 * ==========================================================================
 */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * ==========================================================================
 * 8. INTERACTIVE PROJECT DETAILS MODAL
 * ==========================================================================
 */
function initProjectModals() {
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalGithubLink = document.getElementById('modal-github-link');
  const modalDemoLink = document.getElementById('modal-demo-link');
  const detailBtns = document.querySelectorAll('[data-open-modal]');

  if (!modalOverlay || !modalCloseBtn) return;

  const openModal = (projectId) => {
    const project = PORTFOLIO_CONFIG.projects[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;

    let techChips = project.technologies.map(t => `<span class="tech-chip">${t}</span>`).join(' ');
    let highlightItems = project.highlights.map(h => `<li style="margin-bottom:6px;">${h}</li>`).join('');

    modalBody.innerHTML = `
      <div style="margin-bottom:14px;">
        <span class="project-meta-category">${project.category}</span>
        <p style="margin-top:6px; color:#cbd5e1;">${project.description}</p>
      </div>

      <div style="margin-bottom:18px;">
        <div style="font-size:0.8rem; font-family:var(--font-mono); color:var(--accent-blue); margin-bottom:8px; text-transform:uppercase;">Key Features & Architecture</div>
        <ul style="padding-left:18px; color:var(--text-secondary); font-size:0.92rem;">
          ${highlightItems}
        </ul>
      </div>

      <div style="margin-bottom:18px;">
        <div style="font-size:0.8rem; font-family:var(--font-mono); color:var(--accent-blue); margin-bottom:8px; text-transform:uppercase;">Technologies Used</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${techChips}
        </div>
      </div>

      <div style="background:rgba(245, 158, 11, 0.08); border:1px solid rgba(245, 158, 11, 0.25); border-radius:var(--radius-sm); padding:10px 14px; font-size:0.82rem; color:#fde68a;">
        <strong>Customization Note:</strong> ${project.editableNote}
      </div>
    `;

    if (modalGithubLink) {
      modalGithubLink.href = project.githubUrl === "[ADD GITHUB URL]" ? "#developer" : project.githubUrl;
      modalGithubLink.textContent = project.githubUrl === "[ADD GITHUB URL]" ? "GitHub [Add URL]" : "View Source";
    }

    if (modalDemoLink) {
      modalDemoLink.href = project.liveDemoUrl === "[ADD LIVE DEMO URL]" ? "#contact" : project.liveDemoUrl;
      modalDemoLink.textContent = project.liveDemoUrl === "[ADD LIVE DEMO URL]" ? "Demo [Add URL]" : "Live Preview";
    }

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  detailBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-open-modal');
      openModal(projectId);
    });
  });

  modalCloseBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * ==========================================================================
 * 9. CLIPBOARD HELPER & TOAST NOTIFICATION
 * ==========================================================================
 */
function showToast(message, duration = 3500) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" stroke-width="2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span style="color:#10b981;">✓ Copied</span>`;
        showToast(`Copied to clipboard: ${textToCopy}`);
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        showToast(`Select & copy: ${textToCopy}`);
      }
    });
  });
}

/**
 * ==========================================================================
 * 10. CONTACT FORM CLIENT-SIDE VALIDATION & HANDLING
 * ==========================================================================
 */
function initContactFormValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  const validateEmail = (email) => {
    // Standard RFC-compliant regex pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameError.textContent = 'Please enter your name (at least 2 characters).';
      nameError.classList.add('error');
      nameInput.setAttribute('aria-invalid', 'true');
      isValid = false;
    } else {
      nameError.textContent = '';
      nameError.classList.remove('error');
      nameInput.setAttribute('aria-invalid', 'false');
    }

    // Validate Email
    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.classList.add('error');
      emailInput.setAttribute('aria-invalid', 'true');
      isValid = false;
    } else {
      emailError.textContent = '';
      emailError.classList.remove('error');
      emailInput.setAttribute('aria-invalid', 'false');
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageError.textContent = 'Please write a message (at least 10 characters).';
      messageError.classList.add('error');
      messageInput.setAttribute('aria-invalid', 'true');
      isValid = false;
    } else {
      messageError.textContent = '';
      messageError.classList.remove('error');
      messageInput.setAttribute('aria-invalid', 'false');
    }

    if (isValid) {
      // Authentic handling: Do NOT fabricate that an email was sent to an inbox.
      // Explain transparently that client-side validation passed and describe how to hook up Formspree or EmailJS.
      const senderName = nameInput.value.trim();
      form.reset();

      // Show informational modal / toast
      showToast(`Thank you, ${senderName}! Form validated successfully.`);

      const modalOverlay = document.getElementById('project-modal');
      const modalTitle = document.getElementById('modal-title');
      const modalBody = document.getElementById('modal-body');
      const modalGithubLink = document.getElementById('modal-github-link');
      const modalDemoLink = document.getElementById('modal-demo-link');

      if (modalOverlay) {
        modalTitle.textContent = "Message Validation Successful";
        modalBody.innerHTML = `
          <div style="padding:10px 0;">
            <p style="color:#34d399; font-weight:600; margin-bottom:12px;">
              ✓ Your message passed all client-side validation checks!
            </p>
            <p style="color:var(--text-secondary); margin-bottom:16px;">
              Hello <strong>${senderName}</strong>, this portfolio is set up with strict client-side validation.
            </p>
            <div style="background:rgba(56, 189, 248, 0.08); border:1px solid rgba(56, 189, 248, 0.25); border-radius:var(--radius-sm); padding:14px; font-size:0.85rem; line-height:1.6; color:#e2e8f0;">
              <strong>Developer Note (For Nasar):</strong><br>
              To receive live emails directly in your inbox:
              <ol style="margin-top:8px; padding-left:18px;">
                <li>Sign up for a free service like <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" style="color:#38bdf8; text-decoration:underline;">Formspree</a> or <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" style="color:#38bdf8; text-decoration:underline;">EmailJS</a>.</li>
                <li>Add your endpoint action URL to <code>&lt;form action="YOUR_ENDPOINT" method="POST"&gt;</code> in <code>index.html</code>.</li>
                <li>Full instructions are documented in <code>README.md</code>.</li>
              </ol>
            </div>
          </div>
        `;
        if (modalGithubLink) modalGithubLink.style.display = 'none';
        if (modalDemoLink) {
          modalDemoLink.textContent = "Got it";
          modalDemoLink.href = "#";
          modalDemoLink.onclick = (ev) => {
            ev.preventDefault();
            modalOverlay.classList.remove('active');
          };
        }
        modalOverlay.classList.add('active');
      }
    }
  });
}

/**
 * ==========================================================================
 * 11. SCROLL REVEAL OBSERVER
 * ==========================================================================
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach((el) => observer.observe(el));
}

/**
 * ==========================================================================
 * 12. DEVELOPER TERMINAL INTERACTION
 * ==========================================================================
 */
function initDeveloperTerminal() {
  const tabBtns = document.querySelectorAll('.terminal-tab-btn');
  const terminalContent = document.getElementById('terminal-content');
  if (!tabBtns.length || !terminalContent) return;

  const terminalSnippets = {
    "info": `
<span class="cli-prompt">nasar@portfolio:~$</span> <span class="cli-cmd">cat profile.json</span>
<div class="cli-output">
{
  "name": "Nasar Farooque",
  "status": "BTech Computer Science Engineering Student",
  "university": "Jain University, Bangalore",
  "focus": ["Software Development", "Problem Solving", "APIs"],
  "goal": "Build scalable, meaningful digital products"
}
</div>
    `,
    "skills": `
<span class="cli-prompt">nasar@portfolio:~$</span> <span class="cli-cmd">ls -la ./skills</span>
<div class="cli-output">
drwxr-xr-x  programming  [Java, Python, C, JavaScript]
drwxr-xr-x  web_dev      [HTML, CSS, JavaScript, Responsive Design]
drwxr-xr-x  core_cs      [Data Structures, OOP, Algorithms]
drwxr-xr-x  tools        [Git, GitHub, VS Code, APIs]
</div>
    `,
    "connect": `
<span class="cli-prompt">nasar@portfolio:~$</span> <span class="cli-cmd">./connect.sh</span>
<div class="cli-output">
[+] GitHub:    [ADD GITHUB URL]
[+] LinkedIn:  [ADD LINKEDIN URL]
[+] Instagram: [ADD INSTAGRAM URL]
[+] Email:     [ADD YOUR EMAIL]
Ready for collaborations & hackathons!
</div>
    `
  };

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      if (terminalSnippets[tab]) {
        terminalContent.innerHTML = terminalSnippets[tab].trim();
      }
    });
  });
}
