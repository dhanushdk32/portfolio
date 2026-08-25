/**
 * Dhanush Kumar D - Portfolio Interactions
 * Handles navigation, stats animation, project modals, contact modal, and clipboard utilities.
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
  initStatsObserver();
  setCurrentYear();
});

// Set Dynamic Year
function setCurrentYear() {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// Mobile Navigation Toggle
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

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "14px 0";
      header.style.background = "rgba(10, 12, 17, 0.92)";
      header.style.borderBottomColor = "rgba(255, 255, 255, 0.08)";
    } else {
      header.style.padding = "20px 0";
      header.style.background = "rgba(10, 12, 17, 0.7)";
      header.style.borderBottomColor = "rgba(255, 255, 255, 0.04)";
    }
  });
}

// Stats Counter Animation
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
      // Float
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
      // Integer with possible plus
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
      <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 10px 22px; font-size: 0.8rem;">
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
