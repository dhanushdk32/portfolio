/**
 * Dhanush Kumar D - Portfolio Professional Animations & Interactions
 * Features: AI Neural Background, Cursor Spotlight, Scroll Reveal, 3D Card Tilt,
 * Dynamic Role Typing, Scroll Progress Bar, Project Modals & Clipboard Utilities.
 */

// Project database for interactive modal walkthroughs
const projectData = {
  parking: {
    title: "Smart Car Parking Management with Predictive Analysis",
    category: "Machine Learning • IoT • Computer Vision • Full Stack",
    image: "assets/project_parking.png",
    overview: "An automated smart parking platform developed to tackle urban parking bottlenecks. The system combines machine learning for slot vacancy forecasting with computer vision and image processing for automated detection.",
    highlights: [
      "Trained predictive ML algorithms on historical time-of-day, day-of-week, and geographic traffic data to forecast parking availability with high precision.",
      "Integrated image processing module to detect parking lot occupancy from camera video streams.",
      "Built a robust asynchronous REST API backend using FastAPI to deliver sub-millisecond response rates.",
      "Engineered cross-platform mobile application in Flutter for seamless user navigation, slot booking, and payment processing.",
      "Relational database design in MySQL for telemetry records, transaction handling, and user authentication."
    ],
    techStack: ["Python", "FastAPI", "Flutter", "Machine Learning", "Image Processing", "MySQL", "REST APIs"],
    githubUrl: "https://github.com/dhanushdk32"
  },
  chatpdf: {
    title: "ChatPDF: Conversational Text Summaries using LLM in Python",
    category: "Generative AI • LLM • RAG • LangChain",
    image: "assets/project_chatpdf.png",
    overview: "An end-to-end intelligent document question-answering assistant that enables users to upload complex PDF documents and query them interactively with zero hallucinations using semantic search and retrieval-augmented generation (RAG).",
    highlights: [
      "Engineered multi-page PDF text extraction and semantic chunking pipelines for optimal retrieval context windows.",
      "Integrated OpenAI GPT models with LangChain orchestration for nuanced, context-grounded conversational summaries and natural language answers.",
      "Implemented vector embedding workflows and local SQLite caching for rapid query execution and low latency.",
      "Designed prompt engineering strategies with cite-and-quote verification to ground LLM outputs directly on document snippets."
    ],
    techStack: ["Python", "OpenAI GPT-LLM", "LangChain", "SQLite", "Vector Embeddings", "RAG Pipeline", "Prompt Engineering"],
    githubUrl: "https://github.com/dhanushdk32"
  },
  resume: {
    title: "AI-Based Resume Screening & Candidate Ranking System",
    category: "Natural Language Processing • Talent Intelligence • REST API",
    image: "assets/project_resume.png",
    overview: "An automated recruitment screening engine that parses multi-format resumes, extracts technical proficiencies and job histories, and computes matching scores against role requirements using advanced NLP algorithms.",
    highlights: [
      "Developed NLP-based tokenization, named entity recognition (NER), and keyword extraction algorithms to parse candidate resumes accurately from PDF/DOC formats.",
      "Calculated weighted similarity scores comparing job description vectors against applicant profiles to generate an objective candidate ranking matrix.",
      "Integrated secure REST API endpoints for candidate uploading, criteria filtering, and recruiter dashboards.",
      "Utilized MySQL for persistent applicant database management and structured candidate data storage."
    ],
    techStack: ["Python", "MySQL", "Natural Language Processing (NLP)", "REST API", "PDF Parsing", "Candidate Scoring Algorithm"],
    githubUrl: "https://github.com/dhanushdk32"
  }
};

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initHeaderScroll();
  initScrollProgress();
  initScrollReveal();
  initStatsObserver();
  initRoleTyping();
  initCursorSpotlight();
  initNeuralCanvas();
  init3DSkillSphere();
  init3DTilt();
  initProcessCycle();
  setCurrentYear();
});

// Set Dynamic Year
function setCurrentYear() {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// 1. Scroll Progress Bar
function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgressBar");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  });
}

// 2. Scroll Reveal Animations (IntersectionObserver)
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach(el => revealObserver.observe(el));
}

// 3. Dynamic Typing / Role Switcher in Hero Title
function initRoleTyping() {
  const roleEl = document.getElementById("dynamicRole");
  if (!roleEl) return;

  const roles = [
    "ENGINEER",
    "DEVELOPER",
    "SPECIALIST"
  ];

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let isDeleting = true;
  let typingSpeed = 100;

  function typeStep() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      roleEl.textContent = currentRole.substring(0, charIndex);
      typingSpeed = 50;
    } else {
      charIndex++;
      roleEl.textContent = currentRole.substring(0, charIndex);
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      typingSpeed = 2400;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(typeStep, typingSpeed);
  }

  // Start after initial delay
  setTimeout(typeStep, 2500);
}

// 4. Interactive Cursor Spotlight (Mouse Glow)
function initCursorSpotlight() {
  const spotlight = document.getElementById("cursorSpotlight");
  if (!spotlight || window.innerWidth < 768) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateSpotlight() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    spotlight.style.left = `${currentX}px`;
    spotlight.style.top = `${currentY}px`;
    requestAnimationFrame(animateSpotlight);
  }

  animateSpotlight();
}

// 5. Interactive AI Neural Node Background Canvas
function initNeuralCanvas() {
  const canvas = document.getElementById("neuralCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = { x: -1000, y: -1000, radius: 150 };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createNodes();
  });

  const nodeCount = Math.min(50, Math.floor((width * height) / 28000));
  let nodes = [];

  function createNodes() {
    nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  createNodes();

  function drawNeuralNetwork() {
    ctx.clearRect(0, 0, width, height);

    // Update & draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Mouse gentle interaction
      const dx = mouse.x - node.x;
      const dy = mouse.y - node.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (1 - dist / mouse.radius) * 0.8;
        node.x -= (dx / dist) * force;
        node.y -= (dy / dist) * force;
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${node.alpha * 0.8})`;
      ctx.fill();

      // Connect nearby nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const nodeB = nodes[j];
        const distance = Math.hypot(node.x - nodeB.x, node.y - nodeB.y);

        if (distance < 130) {
          const lineAlpha = (1 - distance / 130) * 0.15;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          ctx.strokeStyle = `rgba(165, 180, 252, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawNeuralNetwork);
  }

  drawNeuralNetwork();
}

// 6. 3D Interactive Tilt on Cards
function init3DTilt() {
  if (window.innerWidth < 1024) return; // Disable on mobile/touch devices for smooth performance

  const tiltCards = document.querySelectorAll("[data-tilt]");
  tiltCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

// 7. Active Process Flow Pipeline Cycle
function initProcessCycle() {
  const steps = document.querySelectorAll(".process-step");
  if (!steps.length) return;

  let currentStep = 0;
  setInterval(() => {
    steps.forEach((step, index) => {
      if (index === currentStep) {
        step.classList.add("step-active");
      } else {
        step.classList.remove("step-active");
      }
    });
    currentStep = (currentStep + 1) % steps.length;
  }, 2600);
}

// 8. Mobile Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    // Close menu when clicking nav links
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }
}

// 9. Header Scroll Effect
function initHeaderScroll() {
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "14px 0";
      header.style.background = "rgba(10, 12, 17, 0.94)";
      header.style.borderBottomColor = "rgba(255, 255, 255, 0.08)";
    } else {
      header.style.padding = "20px 0";
      header.style.background = "rgba(10, 12, 17, 0.75)";
      header.style.borderBottomColor = "rgba(255, 255, 255, 0.04)";
    }
  });
}

// 10. Stats Counter Animation
function initStatsObserver() {
  const statsBar = document.getElementById("statsBar");
  if (!statsBar) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateStats();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsBar);
}

function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach(stat => {
    const rawTarget = stat.getAttribute("data-target");
    if (!rawTarget) return;

    if (rawTarget.includes(".")) {
      const target = parseFloat(rawTarget);
      let current = 0;
      const step = target / 30;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          stat.textContent = target.toFixed(2);
          clearInterval(timer);
        } else {
          stat.textContent = current.toFixed(2);
        }
      }, 30);
    } else {
      const hasPlus = stat.textContent.includes("+");
      const target = parseInt(rawTarget, 10);
      let current = 0;
      const step = Math.ceil(target / 25) || 1;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          stat.textContent = target + (hasPlus ? "+" : "");
          clearInterval(timer);
        } else {
          stat.textContent = current + (hasPlus ? "+" : "");
        }
      }, 40);
    }
  });
}

// Project Modal Handlers
function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const contentWrap = document.getElementById("projectModalContent");
  contentWrap.innerHTML = `
    <div class="project-modal-header">
      <span class="section-tag">${data.category}</span>
      <h3 class="modal-title">${data.title}</h3>
    </div>
    
    <div style="margin: 20px 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-glass);">
      <img src="${data.image}" alt="${data.title}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
    </div>

    <div style="margin-bottom: 20px;">
      <h5 style="color: var(--text-pure); font-size: 1rem; margin-bottom: 8px; font-family: var(--font-display);">Project Architecture & Overview</h5>
      <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6;">${data.overview}</p>
    </div>

    <div style="margin-bottom: 24px;">
      <h5 style="color: var(--text-pure); font-size: 1rem; margin-bottom: 10px; font-family: var(--font-display);">Key Technical Milestones</h5>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
        ${data.highlights.map(item => `
          <li style="font-size: 0.85rem; color: var(--text-muted); position: relative; padding-left: 18px;">
            <span style="position: absolute; left: 0; color: var(--accent-cyan);">▹</span>
            ${item}
          </li>
        `).join("")}
      </ul>
    </div>

    <div style="margin-bottom: 24px;">
      <h5 style="color: var(--text-pure); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">Technologies Applied</h5>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${data.techStack.map(tech => `
          <span style="font-size: 0.75rem; padding: 4px 12px; background: rgba(255,255,255,0.06); border: 1px solid var(--border-glass); border-radius: 9999px; color: var(--text-pure);">
            ${tech}
          </span>
        `).join("")}
      </div>
    </div>

    <div style="display: flex; gap: 14px; flex-wrap: wrap; padding-top: 16px; border-top: 1px solid var(--border-glass);">
      <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-shimmer" style="padding: 10px 22px; font-size: 0.8rem;">
        <span>VIEW REPOSITORY</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </a>
      <button onclick="closeProjectModal()" class="btn btn-secondary" style="padding: 10px 22px; font-size: 0.8rem;">
        <span>CLOSE</span>
      </button>
    </div>
  `;

  document.getElementById("projectModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function handleModalBackdropClick(event) {
  if (event.target.id === "projectModal") {
    closeProjectModal();
  }
}

// Contact Modal Handlers
function openContactModal() {
  document.getElementById("contactModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  document.getElementById("contactModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function handleContactModalBackdropClick(event) {
  if (event.target.id === "contactModal") {
    closeContactModal();
  }
}

// Copy to Clipboard Utility
function copyToClipboard(text, element) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied "${text}" to clipboard!`);
  }).catch(err => {
    showToast("Unable to copy to clipboard");
  });
}

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Form Submission Simulation
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("contactName").value;
  const feedback = document.getElementById("formFeedback");

  feedback.style.color = "var(--accent-emerald)";
  feedback.textContent = `Thank you, ${name}! Your message has been prepared. You can also reach me directly at dhanush420490@gmail.com.`;

  setTimeout(() => {
    closeContactModal();
    feedback.textContent = "";
    document.getElementById("contactForm").reset();
  }, 2500);
}

// ==========================================================================
// 11. 3D INTERACTIVE SPINNING SKILL SPHERE (MATCHING REFERENCE DESIGN)
// ==========================================================================
function init3DSkillSphere() {
  const container = document.getElementById("sphereViewport");
  const canvas = document.getElementById("sphereCanvas");
  const tagsContainer = document.getElementById("sphereTags");

  if (!container || !canvas || !tagsContainer) return;

  const ctx = canvas.getContext("2d");

  // Technical Skills Data with Custom Vector Graphics & Branding Colors
  const skillsData = [
    {
      name: "Python",
      color: "#38bdf8",
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.47 2 7 4.5 7 4.5V7h5v1H5s-3 0-3 5 2.5 5 2.5 5H6v-2.5c0-1.5 1.5-2.5 2.5-2.5h5c1.5 0 2.5-1 2.5-2.5V4.5S16.5 2 12 2zm-1.5 2a1 1 0 110 2 1 1 0 010-2z" fill="#38bdf8"/><path d="M12 22c5.53 0 5-2.5 5-2.5V17h-5v-1h7s3 0 3-5-2.5-5-2.5-5H18v2.5c0 1.5-1.5 2.5-2.5 2.5h-5c-1.5 0-2.5 1-2.5 2.5v5.5s-.5 2.5 4 2.5zm1.5-2a1 1 0 110-2 1 1 0 010 2z" fill="#fbbf24"/></svg>`
    },
    {
      name: "LangChain",
      color: "#22c55e",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`
    },
    {
      name: "OpenAI",
      color: "#10a37f",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#10a37f" stroke-width="2"><path d="M12 3a9 9 0 019 9c0 2.4-1 4.6-2.6 6.2L12 12V3z"/><path d="M12 12l-6.4 6.2C4 16.6 3 14.4 3 12a9 9 0 019-9v9z"/><circle cx="12" cy="12" r="3" fill="#10a37f"/></svg>`
    },
    {
      name: "FastAPI",
      color: "#059669",
      icon: `<svg viewBox="0 0 24 24" fill="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#059669"/></svg>`
    },
    {
      name: "PyTorch",
      color: "#ee4c2c",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#ee4c2c" stroke-width="2"><path d="M14.5 4a6.5 6.5 0 106 6.5"/><circle cx="16" cy="7" r="1.5" fill="#ee4c2c"/></svg>`
    },
    {
      name: "Computer Vision",
      color: "#38bdf8",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`
    },
    {
      name: "NLP",
      color: "#f59e0b",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M12 2a8 8 0 00-8 8c0 3 2 5 2 7v3h12v-3c0-2 2-4 2-7a8 8 0 00-8-8z"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M10 13a3 3 0 004 0"/></svg>`
    },
    {
      name: "MySQL",
      color: "#00758f",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#00758f" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`
    },
    {
      name: "Flutter",
      color: "#0284c7",
      icon: `<svg viewBox="0 0 24 24" fill="#0284c7"><polygon points="14 2 4 12 7 15 17 5"/><polygon points="14 14 9 19 12 22 20 14"/><polygon points="11 11 7 15 12 20 16 16"/></svg>`
    },
    {
      name: "GitHub",
      color: "#ffffff",
      icon: `<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>`
    },
    {
      name: "Docker",
      color: "#38bdf8",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.8"><rect x="3" y="10" width="3" height="3"/><rect x="7" y="10" width="3" height="3"/><rect x="11" y="10" width="3" height="3"/><rect x="7" y="6" width="3" height="3"/><rect x="11" y="6" width="3" height="3"/><path d="M2 13c1 0 2 1 3 1s2-1 3-1 2 1 3 1 2-1 3-1 2 1 3 1 2-1 3-1c2 0 4 2 4 4s-4 4-11 4C4 21 2 17 2 13z"/></svg>`
    },
    {
      name: "Scikit-Learn",
      color: "#f97316",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><line x1="7" y1="7" x2="10" y2="10"/><line x1="14" y1="14" x2="17" y2="17"/><line x1="17" y1="7" x2="14" y2="10"/><line x1="10" y1="14" x2="7" y2="17"/></svg>`
    },
    {
      name: "Pandas",
      color: "#a855f7",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`
    },
    {
      name: "NumPy",
      color: "#4f46e5",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
    },
    {
      name: "Vector DB",
      color: "#06b6d4",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="8" r="3"/><circle cx="12" cy="18" r="3"/><line x1="8.5" y1="7" x2="15.5" y2="7.5"/><line x1="7.5" y1="8.5" x2="10.5" y2="15.5"/><line x1="16.5" y1="10.5" x2="13.5" y2="15.5"/></svg>`
    },
    {
      name: "VS Code",
      color: "#0ea5e9",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
    },
    {
      name: "C++",
      color: "#2563eb",
      icon: `<svg viewBox="0 0 24 24" fill="none"><polygon points="12 2 21 7 21 17 12 22 3 17 3 7" stroke="#2563eb" stroke-width="2" fill="rgba(37,99,235,0.15)"/><text x="12" y="15" font-size="8" font-family="monospace" font-weight="bold" fill="#38bdf8" text-anchor="middle">C++</text></svg>`
    },
    {
      name: "REST APIs",
      color: "#c084fc",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#c084fc" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
    },
    {
      name: "Deep Learning",
      color: "#ec4899",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2"><circle cx="4" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="20" cy="12" r="2"/><line x1="6" y1="12" x2="10" y2="6"/><line x1="6" y1="12" x2="10" y2="18"/><line x1="14" y1="6" x2="18" y2="12"/><line x1="14" y1="18" x2="18" y2="12"/><line x1="12" y1="7" x2="12" y2="17"/></svg>`
    },
    {
      name: "Next.js",
      color: "#ffffff",
      icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#000000" stroke="#ffffff" stroke-width="1.5"/><path d="M8 8v8l8-9.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><path d="M15 11v5" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></svg>`
    }
  ];

  // Distribute nodes over 3D sphere using Fibonacci Spiral
  const count = skillsData.length;
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle ~2.39996323

  const nodes = [];
  tagsContainer.innerHTML = "";

  skillsData.forEach((skill, index) => {
    // Spherical coordinates
    const y = 1 - (index / (count - 1)) * 2; // from 1 to -1
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = phi * index;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    // Create DOM element for skill
    const tagEl = document.createElement("div");
    tagEl.className = "sphere-skill-tag";
    tagEl.innerHTML = `
      <div class="tag-icon-wrap" style="box-shadow: 0 0 14px ${skill.color}22;">
        ${skill.icon}
      </div>
      <span class="tag-name">${skill.name}</span>
    `;

    // Pause rotation when user hovers a tag
    tagEl.addEventListener("mouseenter", () => {
      isHoveringTag = true;
    });
    tagEl.addEventListener("mouseleave", () => {
      isHoveringTag = false;
    });

    tagsContainer.appendChild(tagEl);

    nodes.push({
      x, y, z,
      skill,
      element: tagEl
    });
  });

  // State variables for 3D physics and rotation
  let rotX = 0.2;
  let rotY = 0.3;
  let velX = 0.0018;
  let velY = 0.0035;

  let isDragging = false;
  let isHoveringTag = false;
  let lastMouseX = 0;
  let lastMouseY = 0;

  // Viewport dimensions and sphere radius
  let width = (canvas.width = container.clientWidth);
  let height = (canvas.height = container.clientHeight);
  let sphereRadius = Math.min(width, height) * 0.38;

  function resizeCanvas() {
    if (!container) return;
    width = canvas.width = container.clientWidth;
    height = canvas.height = container.clientHeight;
    sphereRadius = Math.min(width, height) * 0.38;
  }

  window.addEventListener("resize", resizeCanvas);

  // Mouse / Pointer Drag Interaction
  container.addEventListener("pointerdown", (e) => {
    isDragging = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    container.setPointerCapture(e.pointerId);
  });

  window.addEventListener("pointermove", (e) => {
    if (isDragging) {
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;

      velY = dx * 0.004;
      velX = -dy * 0.004;

      rotY += velY;
      rotX += velX;

      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    }
  });

  window.addEventListener("pointerup", () => {
    isDragging = false;
  });

  window.addEventListener("pointercancel", () => {
    isDragging = false;
  });

  // 3D Matrix Rotation Helper
  function rotate3D(x, y, z, angleX, angleY) {
    // Rotate around Y axis
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);
    const x1 = x * cosY - z * sinY;
    const z1 = z * cosY + x * sinY;

    // Rotate around X axis
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const y2 = y * cosX - z1 * sinX;
    const z2 = z1 * cosX + y * sinX;

    return { x: x1, y: y2, z: z2 };
  }

  // Draw 3D Wireframe Mesh (Latitude, Longitude and Points)
  function drawWireframeSphere(centerX, centerY, radius, currentRotX, currentRotY) {
    ctx.clearRect(0, 0, width, height);

    const latCount = 7;
    const lonCount = 10;
    const pointsPerCircle = 36;

    // Draw Latitudes
    for (let i = 1; i < latCount; i++) {
      const latAngle = ((i / latCount) - 0.5) * Math.PI;
      const ringRadius = Math.cos(latAngle) * radius;
      const ringY = Math.sin(latAngle) * radius;

      ctx.beginPath();
      let firstPoint = true;

      for (let j = 0; j <= pointsPerCircle; j++) {
        const theta = (j / pointsPerCircle) * Math.PI * 2;
        const px = Math.cos(theta) * ringRadius;
        const py = ringY;
        const pz = Math.sin(theta) * ringRadius;

        const rotated = rotate3D(px, py, pz, currentRotX, currentRotY);
        const k = 450 / (450 + rotated.z);
        const sx = centerX + rotated.x * k;
        const sy = centerY + rotated.y * k;

        if (firstPoint) {
          ctx.moveTo(sx, sy);
          firstPoint = false;
        } else {
          ctx.lineTo(sx, sy);
        }
      }

      ctx.strokeStyle = "rgba(99, 102, 241, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw Longitudes
    for (let i = 0; i < lonCount; i++) {
      const lonAngle = (i / lonCount) * Math.PI;

      ctx.beginPath();
      let firstPoint = true;

      for (let j = 0; j <= pointsPerCircle; j++) {
        const theta = (j / pointsPerCircle) * Math.PI * 2;
        const px = Math.cos(theta) * Math.sin(lonAngle) * radius;
        const py = Math.sin(theta) * radius;
        const pz = Math.cos(theta) * Math.cos(lonAngle) * radius;

        const rotated = rotate3D(px, py, pz, currentRotX, currentRotY);
        const k = 450 / (450 + rotated.z);
        const sx = centerX + rotated.x * k;
        const sy = centerY + rotated.y * k;

        if (firstPoint) {
          ctx.moveTo(sx, sy);
          firstPoint = false;
        } else {
          ctx.lineTo(sx, sy);
        }
      }

      ctx.strokeStyle = "rgba(56, 189, 248, 0.10)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw faint glowing grid nodes
    for (let i = 0; i < 40; i++) {
      const angleA = (i * 1.61803) * Math.PI * 2;
      const angleB = Math.asin((i / 20) - 1);
      const px = Math.cos(angleB) * Math.cos(angleA) * radius;
      const py = Math.sin(angleB) * radius;
      const pz = Math.cos(angleB) * Math.sin(angleA) * radius;

      const rotated = rotate3D(px, py, pz, currentRotX, currentRotY);
      const k = 450 / (450 + rotated.z);
      const sx = centerX + rotated.x * k;
      const sy = centerY + rotated.y * k;

      const alpha = Math.max(0.05, 0.25 * ((rotated.z + radius) / (2 * radius)));
      ctx.beginPath();
      ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(165, 180, 252, ${alpha})`;
      ctx.fill();
    }
  }

  // Animation Loop
  function animateSphere() {
    const centerX = width / 2;
    const centerY = height / 2;

    // Apply inertia or auto-rotation
    if (!isDragging) {
      if (isHoveringTag) {
        // Slow down while user inspects a tag
        velX *= 0.9;
        velY *= 0.9;
      } else {
        // Smoothly return to default auto-rotation speed
        velX = velX * 0.94 + 0.0012 * 0.06;
        velY = velY * 0.94 + 0.0030 * 0.06;
      }
      rotX += velX;
      rotY += velY;
    }

    // Draw 3D wireframe mesh on canvas
    drawWireframeSphere(centerX, centerY, sphereRadius, rotX, rotY);

    // Update 3D projected coordinates for each skill node
    const focalLength = 450;
    nodes.forEach((node) => {
      const px = node.x * sphereRadius;
      const py = node.y * sphereRadius;
      const pz = node.z * sphereRadius;

      const rotated = rotate3D(px, py, pz, rotX, rotY);

      // Perspective projection
      const k = focalLength / (focalLength + rotated.z);
      const screenX = centerX + rotated.x * k;
      const screenY = centerY + rotated.y * k;

      // Depth mapping: front nodes are larger & fully opaque, back nodes are smaller & translucent
      const depthFactor = (rotated.z + sphereRadius) / (2 * sphereRadius);
      const scale = k * (0.75 + 0.45 * depthFactor);
      const opacity = Math.max(0.22, Math.min(1.0, 0.25 + 0.75 * depthFactor));
      const zIndex = Math.round(rotated.z + 500);

      node.element.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      node.element.style.opacity = opacity.toFixed(3);
      node.element.style.zIndex = zIndex;
    });

    requestAnimationFrame(animateSphere);
  }

  animateSphere();
}

