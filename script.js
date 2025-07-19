// Traductions
const translations = {
  fr: {
    subtitle:
      "Développeur fullstack & DevOps avec une expertise en analyse géospatiale.",
    ctaButton: "Découvrir mes projets",
    projectsTitle: "Mes Projets",
    projectsSubtitle: "Une sélection de mes réalisations les plus récentes",
    seeAllProjects: "Voir tous mes projets",
    hideProjects: "Masquer les projets",
    allProjectsTitle: "Tous mes projets",
    experienceTitle: "Expérience & Compétences",
    experience: "Expérience",
    skills: "Compétences",
    contactTitle: "Contact",
    contactSubtitle:
      "Envie de collaborer ? N'hésitez pas à me contacter pour discuter de nouvelles opportunités !",
    sendMessage: "Envoyer un message",
    sourceCodeAvailable: "Code source disponible",
    sourceCodePrivate: "Code source privé",
    youAreHere: "Vous êtes dessus ! ;)",
    myContactInfo: "Mes coordonnées",
    sendAMessage: "Envoyer un message",
    subject: "Motif",
    selectSubject: "Sélectionnez un motif",
    freelanceProject: "Projet freelance",
    jobOpportunity: "Opportunité d'emploi",
    collaboration: "Collaboration",
    technicalQuestion: "Question technique",
    other: "Autre",
    email: "Email",
    message: "Message",
    describeProject: "Décrivez votre projet ou votre demande...",
    sending: "Envoi en cours...",
    messagePrepared:
      "✓ Votre message a été préparé. Votre client mail va s'ouvrir automatiquement.",
    errorOccurred: "✗ Une erreur s'est produite. Veuillez réessayer.",
    home: "Accueil",
    cv: "CV",
    contact: "Contact",
    // Projets
    "project1.title": "Jumeau Numérique EDF R&D",
    "project1.tech": "Vue.js • Node.js • FastAPI • Docker • Kubernetes",
    "project1.desc":
      "Conception et développement d'un démonstrateur de jumeau numérique d'un turbo-alternateur de centrale nucléaire avec orchestration conteneurisée.",
    "project2.title": "Deep Learning - Perception Urbaine",
    "project2.tech":
      "Python • Deep Learning • ArcGIS • Google Street View • Mapillary",
    "project2.desc":
      "Recherche sur les applications du Deep Learning en perception urbaine à l'Université d'Ottawa. Analyse comparative de Google Street View et Mapillary pour la génération de heatmaps de perception urbaine.",
    "project3.title": "Tuiles Cartographiques Globales",
    "project3.tech": "Python • FastAPI • Docker • VM • Microservices",
    "project3.desc":
      "Génération et service de tuiles cartographiques pour le globe entier via microservices Docker. Architecture scalable pour la distribution de données géospatiales sur le web.",
    // Expériences
    "exp1.title": "Développeur fullstack & DevOps",
    "exp1.meta": "PME innovante • Janvier 2025 - Présent",
    "exp1.desc":
      "Architecture de serveurs cartographiques, microservices Docker, API REST FastAPI/Flask, intégration IA, PostgreSQL.",
    "exp2.title": "Stage - Jumeau Numérique",
    "exp2.meta": "EDF R&D • Mai 2024 - Novembre 2024",
    "exp2.desc":
      "Développement full-stack Vue.js/Node.js/FastAPI, orchestration Docker/Kubernetes pour jumeau numérique de turbo-alternateur.",
    "exp3.title": "Formation",
    "exp3.meta": "ENSG Géomatique • 2021 - 2024",
    "exp3.desc":
      "École d'ingénieur informatique : Développement Web, SIG, Conteneurisation, CI/CD, Méthode Agile, Linux, SQL, POO.",
    // Projets complets
    projects: [
      {
        title: "Jumeau Numérique EDF R&D",
        tech: "Vue.js • Node.js • FastAPI • Docker • Kubernetes",
        desc: "Conception et développement d'un démonstrateur de jumeau numérique d'un turbo-alternateur de centrale nucléaire avec orchestration conteneurisée.",
        image: "EDF",
        tags: ["Full-Stack", "DevOps", "IA"],
        githubUrl: null,
      },
      {
        title: "Tuiles Cartographiques Globales",
        tech: "Python • FastAPI • Docker • VM • Microservices",
        desc: "Génération et service de tuiles cartographiques pour le globe entier via microservices Docker. Architecture scalable pour la distribution de données géospatiales sur le web.",
        image: "MAP",
        tags: ["Backend", "Géospatial", "Microservices"],
        githubUrl: null,
      },
      {
        title: "Deep Learning - Perception Urbaine",
        tech: "Python • Deep Learning • ArcGIS • Google Street View • Mapillary",
        desc: "Recherche sur les applications du Deep Learning en perception urbaine à l'Université d'Ottawa. Analyse comparative de Google Street View et Mapillary pour la génération de heatmaps de perception urbaine.",
        image: "AI",
        tags: ["IA", "Géospatial", "Recherche"],
        githubUrl: "https://github.com/Hannick5/UrbanPerception",
      },
      {
        title: "ELDA Technology - Monitoring Ski",
        tech: "Flask • PostgreSQL • Cesium • Python",
        desc: "Développement backend pour le traitement d'images satellite et monitoring de pistes de ski avec chargement MNT sous Cesium.",
        image: "SKI",
        tags: ["Backend", "SIG", "API"],
        githubUrl: "https://github.com/Hannick5/Projet_Ski",
      },
      {
        title: "IGN - Labellisation Satellite",
        tech: "VueJS • Flask • OpenLayers • PostgreSQL",
        desc: "Interface de labellisation d'images satellite GeoTIFF avec segmentation et traitement backend Flask.",
        image: "IGN",
        tags: ["Frontend", "IA", "SIG"],
        githubUrl: "https://github.com/Hannick5/Projet_labellisation_IA",
      },
      {
        title: "Portfolio Personnel",
        tech: "React • TypeScript • Vite • CSS",
        desc: "Portfolio moderne avec animations fluides et design responsive inspiré des meilleures pratiques UX/UI.",
        image: "PORT",
        tags: ["Frontend", "Design", "React"],
        githubUrl: "https://github.com/Hannick5/portfolio",
        specialMessage: "Vous êtes dessus ! ;)",
      },
    ],
    skillsList: [
      { skill: "Python & FastAPI/Flask", level: 85 },
      { skill: "Vue.js & JavaScript", level: 80 },
      { skill: "Docker & Kubernetes", level: 75 },
      { skill: "PostgreSQL & MongoDB", level: 80 },
      { skill: "DevOps & CI/CD", level: 70 },
      { skill: "Java & Spring Boot", level: 65 },
    ],
  },
  en: {
    subtitle:
      "Fullstack & DevOps developer with expertise in geospatial analysis.",
    ctaButton: "Discover my projects",
    projectsTitle: "My Projects",
    projectsSubtitle: "A selection of my most recent achievements",
    seeAllProjects: "See all my projects",
    hideProjects: "Hide projects",
    allProjectsTitle: "All my projects",
    experienceTitle: "Experience & Skills",
    experience: "Experience",
    skills: "Skills",
    contactTitle: "Contact",
    contactSubtitle:
      "Want to collaborate? Don't hesitate to contact me to discuss new opportunities!",
    sendMessage: "Send message",
    sourceCodeAvailable: "Source code available",
    sourceCodePrivate: "Private source code",
    youAreHere: "You're here! ;)",
    myContactInfo: "My contact information",
    sendAMessage: "Send a message",
    subject: "Subject",
    selectSubject: "Select a subject",
    freelanceProject: "Freelance project",
    jobOpportunity: "Job opportunity",
    collaboration: "Collaboration",
    technicalQuestion: "Technical question",
    other: "Other",
    email: "Email",
    message: "Message",
    describeProject: "Describe your project or request...",
    sending: "Sending...",
    messagePrepared:
      "✓ Your message has been prepared. Your email client will open automatically.",
    errorOccurred: "✗ An error occurred. Please try again.",
    home: "Home",
    cv: "CV",
    contact: "Contact",
    // Projets
    "project1.title": "EDF R&D Digital Twin",
    "project1.tech": "Vue.js • Node.js • FastAPI • Docker • Kubernetes",
    "project1.desc":
      "Design and development of a digital twin demonstrator for a nuclear power plant turbo-alternator with container orchestration and integration of operational models.",
    "project2.title": "Deep Learning - Urban Perception",
    "project2.tech":
      "Python • Deep Learning • ArcGIS • Google Street View • Mapillary",
    "project2.desc":
      "Research on Deep Learning applications in urban perception at the University of Ottawa. Comparative analysis of Google Street View and Mapillary for generating urban perception heatmaps.",
    "project3.title": "Global Map Tiles",
    "project3.tech": "Python • FastAPI • Docker • VM • Microservices",
    "project3.desc":
      "Generation and serving of map tiles for the entire globe via Docker microservices. Scalable architecture for web geospatial data distribution.",
    // Expériences
    "exp1.title": "Fullstack & DevOps Developer",
    "exp1.meta": "Innovative SME • January 2025 - Present",
    "exp1.desc":
      "Architecture of map servers, Docker microservices, FastAPI/Flask REST APIs, AI integration, PostgreSQL.",
    "exp2.title": "Internship - Digital Twin",
    "exp2.meta": "EDF R&D • May 2024 - November 2024",
    "exp2.desc":
      "Full-stack development Vue.js/Node.js/FastAPI, Docker/Kubernetes orchestration for turbo-alternator digital twin.",
    "exp3.title": "Education",
    "exp3.meta": "ENSG Geomatics • 2021 - 2024",
    "exp3.desc":
      "Engineering school: Web development, GIS, Containerization, CI/CD, Agile, Linux, SQL, OOP.",
    // Projets complets
    projects: [
      {
        title: "EDF R&D Digital Twin",
        tech: "Vue.js • Node.js • FastAPI • Docker • Kubernetes",
        desc: "Design and development of a digital twin demonstrator for a nuclear power plant turbo-alternator with container orchestration and integration of operational models.",
        image: "EDF",
        tags: ["Full-Stack", "DevOps", "AI"],
        githubUrl: null,
      },
      {
        title: "Global Map Tiles",
        tech: "Python • FastAPI • Docker • VM • Microservices",
        desc: "Generation and serving of map tiles for the entire globe via Docker microservices. Scalable architecture for web geospatial data distribution.",
        image: "MAP",
        tags: ["Backend", "Geospatial", "Microservices"],
        githubUrl: null,
      },
      {
        title: "Deep Learning - Urban Perception",
        tech: "Python • Deep Learning • ArcGIS • Google Street View • Mapillary",
        desc: "Research on Deep Learning applications in urban perception at the University of Ottawa. Comparative analysis of Google Street View and Mapillary for generating urban perception heatmaps.",
        image: "AI",
        tags: ["AI", "Geospatial", "Research"],
        githubUrl: "https://github.com/Hannick5/UrbanPerception",
      },
      {
        title: "ELDA Technology - Ski Monitoring",
        tech: "Flask • PostgreSQL • Cesium • Python",
        desc: "Backend development for satellite image processing and ski slope monitoring with DEM loading in Cesium.",
        image: "SKI",
        tags: ["Backend", "GIS", "API"],
        githubUrl: "https://github.com/Hannick5/Projet_Ski",
      },
      {
        title: "IGN - Satellite Labeling",
        tech: "VueJS • Flask • OpenLayers • PostgreSQL",
        desc: "Labeling interface for GeoTIFF satellite images with segmentation and Flask backend processing.",
        image: "IGN",
        tags: ["Frontend", "AI", "GIS"],
        githubUrl: "https://github.com/Hannick5/Projet_labellisation_IA",
      },
      {
        title: "Personal Portfolio",
        tech: "React • TypeScript • Vite • CSS",
        desc: "Modern portfolio with smooth animations and responsive design inspired by best UX/UI practices.",
        image: "PORT",
        tags: ["Frontend", "Design", "React"],
        githubUrl: "https://github.com/Hannick5/portfolio",
        specialMessage: "You're here! ;)",
      },
    ],
    skillsList: [
      { skill: "Python & FastAPI/Flask", level: 95 },
      { skill: "Vue.js & JavaScript", level: 90 },
      { skill: "Docker & Kubernetes", level: 85 },
      { skill: "PostgreSQL & MongoDB", level: 90 },
      { skill: "DevOps & CI/CD", level: 85 },
      { skill: "Java & Spring Boot", level: 80 },
    ],
  },
};

// Variables globales
let currentLanguage = "fr";
let scrollY = 0;
let showAllProjects = false;

// Initialisation
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupLanguageSwitch();
  setupScrollEffects();
  setupContactForm();
  setupShowMoreButton();
  generateSkillsList();
  generateAllProjects();
  updateTranslations();
}

// Navigation
function setupNavigation() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollArrow = document.getElementById("scrollArrow");

  // Gestion du scroll pour la navbar
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Gestion de la flèche de scroll
    if (scrollArrow) {
      if (scrollY < 100) {
        scrollArrow.style.display = "block";
      } else {
        scrollArrow.style.display = "none";
      }
    }

    // Animation du titre et sous-titre
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");

    if (heroTitle) {
      heroTitle.style.transform = `translateY(${Math.min(
        scrollY * 0.2,
        100
      )}px)`;
    }
    if (heroSubtitle) {
      heroSubtitle.style.transform = `translateY(${Math.min(
        scrollY * 0.1,
        50
      )}px)`;
    }
  });

  // Navigation smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Flèche de scroll
  if (scrollArrow) {
    scrollArrow.addEventListener("click", () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }
}

// Switch de langue
function setupLanguageSwitch() {
  const languageBtns = document.querySelectorAll(".language-btn");

  languageBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLanguage = lang;

  // Mise à jour des boutons
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });

  // Mise à jour des traductions
  updateTranslations();
}

function updateTranslations() {
  const t = translations[currentLanguage];

  // Mise à jour de tous les éléments avec data-translate
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (t[key]) {
      element.textContent = t[key];
    }
  });

  // Mise à jour des placeholders
  document
    .querySelectorAll("[data-translate-placeholder]")
    .forEach((element) => {
      const key = element.getAttribute("data-translate-placeholder");
      if (t[key]) {
        element.placeholder = t[key];
      }
    });

  // Mise à jour des options du select
  const motifSelect = document.getElementById("motif");
  if (motifSelect) {
    const options = motifSelect.querySelectorAll("option");
    options.forEach((option, index) => {
      if (index === 0) {
        option.textContent = t.selectSubject;
      } else {
        const key = option.getAttribute("data-translate");
        if (t[key]) {
          option.textContent = t[key];
        }
      }
    });
  }

  // Mise à jour des compétences
  generateSkillsList();

  // Mise à jour des projets
  generateAllProjects();
}

// Effets de scroll
function setupScrollEffects() {
  // Intersection Observer pour les animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-on-scroll");
      }
    });
  }, observerOptions);

  // Observer les éléments à animer
  document
    .querySelectorAll(".project-row, .timeline-item, .contact-card")
    .forEach((el) => {
      observer.observe(el);
    });
}

// Formulaire de contact
function setupContactForm() {
  const contactForm = document.getElementById("contactForm");
  const submitStatus = document.getElementById("submitStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const motif = formData.get("motif");
      const email = formData.get("email");
      const message = formData.get("message");

      // Désactiver le bouton
      const submitBtn = contactForm.querySelector(".submit-btn");
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = translations[currentLanguage].sending;

      try {
        // Construction du mailto
        const subject = encodeURIComponent(`Portfolio - ${motif}`);
        const body = encodeURIComponent(
          `Email: ${email}\n\nMessage:\n${message}`
        );
        const mailtoLink = `mailto:abdul.hannick@gmail.com?subject=${subject}&body=${body}`;

        // Ouverture du client mail
        window.location.href = mailtoLink;

        // Afficher le succès
        showSubmitStatus(
          "success",
          translations[currentLanguage].messagePrepared
        );

        // Réinitialiser le formulaire
        contactForm.reset();
      } catch (error) {
        showSubmitStatus("error", translations[currentLanguage].errorOccurred);
      } finally {
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
}

function showSubmitStatus(type, message) {
  const submitStatus = document.getElementById("submitStatus");
  if (submitStatus) {
    submitStatus.className = `submit-status ${type}`;
    submitStatus.textContent = message;
    submitStatus.style.display = "block";

    // Masquer après 5 secondes
    setTimeout(() => {
      submitStatus.style.display = "none";
    }, 5000);
  }
}

// Bouton "Voir plus"
function setupShowMoreButton() {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const allProjects = document.getElementById("allProjects");

  if (showMoreBtn && allProjects) {
    showMoreBtn.addEventListener("click", () => {
      showAllProjects = !showAllProjects;

      if (showAllProjects) {
        allProjects.style.display = "block";
        showMoreBtn.textContent = translations[currentLanguage].hideProjects;
      } else {
        allProjects.style.display = "none";
        showMoreBtn.textContent = translations[currentLanguage].seeAllProjects;
      }
    });
  }
}

// Génération de la liste des compétences
function generateSkillsList() {
  const skillsList = document.getElementById("skillsList");
  if (!skillsList) return;

  const t = translations[currentLanguage];

  skillsList.innerHTML = "";

  t.skillsList.forEach((skill, index) => {
    const skillItem = document.createElement("div");
    skillItem.className = "skill-item";
    skillItem.style.animationDelay = `${index * 0.2}s`;

    skillItem.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.skill}</span>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar-container">
                <div class="skill-bar-fill" style="width: 0%"></div>
            </div>
        `;

    skillsList.appendChild(skillItem);

    // Animation de la barre de compétence
    setTimeout(() => {
      const skillBarFill = skillItem.querySelector(".skill-bar-fill");
      if (skillBarFill) {
        skillBarFill.style.width = `${skill.level}%`;
      }
    }, index * 100);
  });
}

// Génération de tous les projets
function generateAllProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  const t = translations[currentLanguage];

  projectsGrid.innerHTML = "";

  t.projects.forEach((project, index) => {
    const projectCard = document.createElement(project.githubUrl ? "a" : "div");
    projectCard.className = "project-card";

    if (project.githubUrl) {
      projectCard.href = project.githubUrl;
      projectCard.target = "_blank";
      projectCard.rel = "noopener noreferrer";
    }

    projectCard.style.padding = "2rem";
    projectCard.style.borderRadius = "16px";
    projectCard.style.height = "100%";
    projectCard.style.display = "flex";
    projectCard.style.flexDirection = "column";
    projectCard.style.textDecoration = "none";
    projectCard.style.color = "inherit";

    const gradientColors = [
      "#2a0800, #775144",
      "#775144, #c09891",
      "#bea8a7, #f4dbd8",
    ];

    const colorIndex = index % 3;
    const textColor = colorIndex === 2 ? "#2a0800" : "#f4dbd8";

    projectCard.innerHTML = `
            <div style="
                position: relative;
                width: 100%;
                height: 200px;
                border-radius: 12px;
                overflow: hidden;
                margin-bottom: 1.5rem;
                background: linear-gradient(135deg, ${
                  gradientColors[colorIndex]
                });
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${textColor};
                font-size: 2.5rem;
                font-weight: 300;
            ">
                ${project.image}
                
                ${
                  project.githubUrl
                    ? `
                    <div style="
                        position: absolute;
                        top: 1rem;
                        left: 1rem;
                        width: 32px;
                        height: 32px;
                        background-color: rgba(0, 0, 0, 0.7);
                        color: #f4dbd8;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0;
                    " title="${
                      project.specialMessage || t.sourceCodeAvailable
                    }">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </div>
                `
                    : `
                    <div style="
                        position: absolute;
                        top: 1rem;
                        left: 1rem;
                        width: 32px;
                        height: 32px;
                        background-color: rgba(0, 0, 0, 0.7);
                        color: #666;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0;
                    " title="${t.sourceCodePrivate}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </div>
                `
                }
            </div>
            <h4 style="
                font-size: 1.3rem;
                font-weight: 500;
                margin-bottom: 0.5rem;
                color: #2a0800;
            ">${project.title}</h4>
            <p style="
                color: #775144;
                font-size: 0.9rem;
                margin-bottom: 1rem;
                font-weight: 500;
            ">${project.tech}</p>
            <p style="
                color: #2a0800;
                line-height: 1.6;
                font-size: 0.95rem;
                margin-bottom: 1.5rem;
                flex: 1;
            ">${project.desc}</p>
            <div style="
                display: flex;
                gap: 0.5rem;
                flex-wrap: wrap;
            ">
                ${project.tags
                  .map(
                    (tag) => `
                    <span style="
                        background-color: #2a0800;
                        color: #f4dbd8;
                        padding: 0.3rem 0.8rem;
                        border-radius: 15px;
                        font-size: 0.8rem;
                        font-weight: 500;
                    ">${tag}</span>
                `
                  )
                  .join("")}
            </div>
        `;

    projectsGrid.appendChild(projectCard);
  });
}
