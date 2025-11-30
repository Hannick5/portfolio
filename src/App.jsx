import { useEffect, useState } from 'react'
import './App.css'

const content = {
  fr: {
    nav: {
      profil: 'profil',
      experience: 'expérience',
      projets: 'projets',
      skills: 'compétences',
      contact: 'contact',
    },
    hero: {
      badge: 'Disponible pour nouveaux défis',
      title: 'Développeur full-stack & DevOps',
      subtitle:
        'Automatisation, microservices, data & cartographie. Je construis des solutions robustes et scalables pour des produits qui comptent.',
      actions: { primary: 'Écrire', secondary: 'Voir les projets' },
      location: 'Paris, France (ou remote)',
      stack: 'Python, FastAPI, Flask, Vue.js, Docker, Kubernetes, PostgreSQL',
      profile:
        'Développeur full-stack passionné par l’automatisation et le déploiement. J’aime transformer des idées en produits fiables.',
    },
    profileText:
      'Développeur full-stack avec un fort intérêt pour l’automatisation et les méthodologies DevOps. Curieux, orienté impact, prêt à rejoindre une équipe innovante pour livrer des produits ambitieux et évolutifs.',
    experiences: [
      {
        title: 'Développeur full-stack',
        company: 'Vectorive',
        location: 'Puteaux',
        period: 'Novembre 2024 – Présent',
        bullets: [
          "Mise en place d'une architecture de serveurs de tuiles cartographiques pour des apps web.",
          'Déploiement et création de microservices conteneurisés via Docker sur VM.',
          'Développement d’API REST (CRUD et métiers) avec FastAPI et Flask.',
          'Intégration front-end pour une plateforme SaaS et modélisation PostgreSQL.',
          'Intégration de modèles IA dans des workflows applicatifs.',
        ],
      },
      {
        title: "Stage - Développement d’un jumeau numérique open-source",
        company: 'EDF R&D',
        location: 'Palaiseau',
        period: 'Mai 2024 – Novembre 2024',
        bullets: [
          'Démonstrateur de jumeau numérique (Vue.js, Node.js, FastAPI).',
          'Orchestration et conteneurisation via Docker et Kubernetes.',
          'Conception d’une API FastAPI pour accéder à un méta-modèle.',
        ],
      },
      {
        title: 'Stage - Deep Learning pour espaces urbains',
        company: 'University of Ottawa (LAGGIS)',
        location: 'Ottawa, Canada',
        period: 'Mai 2023 – Août 2023',
        bullets: [
          'Développement de modèles deep learning (TensorFlow/Keras, Transformers) pour la perception urbaine.',
          'Expérimentation sur des cas d’usage terrain et amélioration de la qualité prédictive.',
          'Exposition des résultats via API et workflows reproductibles.',
        ],
      },
      {
        title: 'Stagiaire',
        company: "IGN (Institut national de l'information géographique et forestière)",
        location: 'Forcalquier, France',
        period: 'Mai 2022 – Juillet 2022',
        bullets: [
          'Classification d’arbres par deep learning et QGIS à partir de données terrain.',
          'Mesures topographiques et métrologie (pont, nivellement) avec instruments de précision.',
          'Acquisition photogrammétrique et LiDAR pour modéliser une structure 3D intérieure/extérieure.',
        ],
      },
    ],
    projects: [
      {
        name: 'Monitoring de piste de ski — ELDA Technology',
        description:
          'Application web de suivi de pistes avec analyse d’images satellitaires et visualisation temps réel.',
        stack: ['HTML/CSS', 'JavaScript', 'PHP', 'Python', 'Flask', 'PostgreSQL'],
      },
      {
        name: 'Interface de traitement d’images — IGN',
        description:
          'Back-end Flask pour traitement GeoTIFF et interface Vue.js pour segmentation d’images.',
        stack: ['Vue.js', 'OpenLayers', 'Flask', 'PostgreSQL'],
      },
      {
        name: 'Application Android GPS avec guidage vocal',
        description:
          'App mobile Java pour navigation avec guidage vocal turn-by-turn, calcul d’itinéraires et géolocalisation temps réel. Backend Spring Boot + MongoDB pour les trajets/sessions et panneau web pour la gestion et la configuration.',
        stack: ['Java', 'MongoDB', 'Spring Boot', 'Android SDK'],
      },
    ],
    education: [
      {
        school: 'Géodata Paris',
        degree: 'Diplôme d’ingénieur en Technologie des Systèmes d’information',
        period: 'Septembre 2021 – Juin 2024',
      },
      {
        school: 'Lycée Blanqui',
        degree: 'Baccalauréat scientifique',
        period: 'Septembre 2015 – Juin 2018',
      },
    ],
    skills: {
      Langages: ['Python', 'Java', 'HTML/CSS', 'JavaScript', 'SQL', 'C++'],
      'Outils & Frameworks': [
        'Vue.js',
        'Flask',
        'FastAPI',
        'Node.js',
        'QGIS',
        'MongoDB',
        'InfluxDB',
        'PostgreSQL',
        'RabbitMQ',
        'Docker',
        'Kubernetes',
        'Jira',
        'Confluence',
        'Jenkins',
        'Sonarqube',
      ],
      Langues: ['Français', 'Anglais (TOEIC : 955)'],
    },
    educationLabel: '/formation',
    contactText: 'Prêt à discuter ? Choisissez un canal :',
  },
  en: {
    nav: {
      profil: 'profile',
      experience: 'experience',
      projets: 'projects',
      skills: 'skills',
      contact: 'contact',
    },
    hero: {
      badge: 'Open for new challenges',
      title: 'Full-stack Developer & DevOps',
      subtitle:
        'Automation, microservices, data & mapping. I build robust, scalable solutions for products that matter.',
      actions: { primary: 'Contact', secondary: 'View projects' },
      location: 'Paris, France (or remote)',
      stack: 'Python, FastAPI, Flask, Vue.js, Docker, Kubernetes, PostgreSQL',
      profile:
        'Full-stack developer passionate about automation and deployment. I love turning ideas into reliable products.',
    },
    profileText:
      'Full-stack developer with a strong focus on automation and DevOps. Curious, impact-driven, ready to join an innovative team to ship ambitious, scalable products.',
    experiences: [
      {
        title: 'Full-stack Developer',
        company: 'Vectorive',
        location: 'Puteaux',
        period: 'Nov 2024 – Present',
        bullets: [
          'Built a full map-tiles server architecture for web apps.',
          'Deployed microservices with Docker on VMs.',
          'Developed REST APIs (CRUD & business) with FastAPI and Flask.',
          'Frontend integration for a SaaS platform and PostgreSQL modeling.',
          'Integrated AI models into production workflows.',
        ],
      },
      {
        title: 'Intern — Open-source Digital Twin',
        company: 'EDF R&D',
        location: 'Palaiseau',
        period: 'May 2024 – Nov 2024',
        bullets: [
          'Built a digital twin demonstrator (Vue.js, Node.js, FastAPI).',
          'Container orchestration with Docker and Kubernetes.',
          'Designed a FastAPI to expose a meta-model.',
        ],
      },
      {
        title: 'Intern — Deep Learning for Urban Spaces',
        company: 'University of Ottawa (LAGGIS)',
        location: 'Ottawa, Canada',
        period: 'May 2023 – Aug 2023',
        bullets: [
          'Developed deep learning models (TensorFlow/Keras, Transformers) for urban perception.',
          'Experimented on field use cases and improved predictive quality.',
          'Exposed results through APIs and reproducible workflows.',
        ],
      },
      {
        title: 'Intern',
        company: 'IGN (National Institute of Geographic and Forest Information)',
        location: 'Forcalquier, France',
        period: 'May 2022 – Jul 2022',
        bullets: [
          'Tree classification via deep learning and QGIS on field data.',
          'Topographic measurements and metrology (bridge, leveling) with precision instruments.',
          'Photogrammetry and LiDAR capture to model a 3D structure, inside and out.',
        ],
      },
    ],
    projects: [
      {
        name: 'Ski slope monitoring — ELDA Technology',
        description:
          'Full-stack web app for slope tracking with satellite imagery analysis and real-time visual monitoring.',
        stack: ['HTML/CSS', 'JavaScript', 'PHP', 'Python', 'Flask', 'PostgreSQL'],
      },
      {
        name: 'Image processing interface — IGN',
        description:
          'Flask backend for GeoTIFF processing and Vue.js interface for image segmentation.',
        stack: ['Vue.js', 'OpenLayers', 'Flask', 'PostgreSQL'],
      },
      {
        name: 'Android GPS app with voice guidance',
        description:
          'Java mobile app for navigation with turn-by-turn voice guidance, routing, and live geolocation. Spring Boot + MongoDB backend for trips/sessions and a web panel for management.',
        stack: ['Java', 'MongoDB', 'Spring Boot', 'Android SDK'],
      },
    ],
    education: [
      {
        school: 'Géodata Paris',
        degree: 'Engineering degree in Information Systems Technology',
        period: 'Sep 2021 – Jun 2024',
      },
      {
        school: 'Lycée Blanqui',
        degree: 'Scientific Baccalaureate',
        period: 'Sep 2015 – Jun 2018',
      },
    ],
    skills: {
      Languages: ['Python', 'Java', 'HTML/CSS', 'JavaScript', 'SQL', 'C++'],
      'Tools & Frameworks': [
        'Vue.js',
        'Flask',
        'FastAPI',
        'Node.js',
        'QGIS',
        'MongoDB',
        'InfluxDB',
        'PostgreSQL',
        'RabbitMQ',
        'Docker',
        'Kubernetes',
        'Jira',
        'Confluence',
        'Jenkins',
        'Sonarqube',
      ],
      Languages_spoken: ['French', 'English (TOEIC: 955)'],
    },
    educationLabel: '/education',
    contactText: 'Ready to talk? Pick a channel:',
  },
}

const contactLinks = [
  { label: 'Email', href: 'mailto:abdul.hannick@gmail.com' },
  { label: 'Github', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

function App() {
  const [lang, setLang] = useState('fr')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const t = content[lang]

  return (
    <div className="page">
      <header className="top-bar">
        <div className="brand">
          <span className="prompt">$</span> Hannick Abdul Kuthoos
        </div>
        <nav>
          <a href="#profil">{t.nav.profil}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#projects">{t.nav.projets}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#contact">{t.nav.contact}</a>
          <button
            className="lang-toggle"
            type="button"
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="badge">{t.hero.badge}</p>
          <h1>
            <span className="prompt">$</span>
            <span className="command">
              {t.hero.title}
              <span className="caret" aria-hidden="true">
                █
              </span>
            </span>
          </h1>
          <p className="subtitle">{t.hero.subtitle}</p>
          <div className="actions">
            <a className="button primary" href="mailto:abdul.hannick@gmail.com">
              {t.hero.actions.primary}
            </a>
            <a className="button ghost" href="#projects">
              {t.hero.actions.secondary}
            </a>
          </div>
        </div>
        <div className="terminal-card">
          <div className="card-header">
            <div className="status-lights">
              <span />
              <span />
              <span />
            </div>
            <span className="card-title">whoami</span>
          </div>
          <div className="card-body">
            <p>
              <span className="prompt">$</span> cat profil.txt
            </p>
            <p className="muted">
              {t.hero.profile}
            </p>
            <p>
              <span className="prompt">$</span> location --get
            </p>
            <p className="muted">{t.hero.location}</p>
            <p>
              <span className="prompt">$</span> stack --highlight
            </p>
            <p className="muted">{t.hero.stack}</p>
          </div>
        </div>
      </section>

      <section id="profil" className="section">
        <div className="section-header">
          <span className="section-label">
            /{lang === 'fr' ? 'profil' : 'profile'}
          </span>
          <div className="line" />
        </div>
        <div className="panel">
          <p>{t.profileText}</p>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-header">
          <span className="section-label">
            /{lang === 'fr' ? 'expérience' : 'experience'}
          </span>
          <div className="line" />
        </div>
        <div className="grid">
          {t.experiences.map((exp) => (
            <article key={exp.title} className="panel">
              <header className="panel-header">
                <div>
                  <p className="eyebrow">{exp.period}</p>
                  <h3>
                    {exp.title} · {exp.company}
                  </h3>
                </div>
                <span className="tag">{exp.location}</span>
              </header>
              <ul>
                {exp.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-header">
          <span className="section-label">
            /{lang === 'fr' ? 'projets' : 'projects'}
          </span>
          <div className="line" />
        </div>
        <div className="grid">
          {t.projects.map((project) => (
            <article key={project.name} className="panel compact">
              <header className="panel-header">
                <h3>{project.name}</h3>
              </header>
              <p className="muted">{project.description}</p>
              <div className="chips">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-header">
          <span className="section-label">
            /{lang === 'fr' ? 'compétences' : 'skills'}
          </span>
          <div className="line" />
        </div>
        <div className="grid skills">
          {Object.entries(t.skills).map(([category, items]) => (
            <article key={category} className="panel compact">
              <p className="eyebrow">{category}</p>
              <div className="chips">
                {items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-header">
          <span className="section-label">{t.educationLabel}</span>
          <div className="line" />
        </div>
        <div className="grid">
          {t.education.map((item) => (
            <article key={item.school} className="panel compact">
              <p className="eyebrow">{item.period}</p>
              <h3>{item.school}</h3>
              <p className="muted">{item.degree}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-header">
          <span className="section-label">/contact</span>
          <div className="line" />
        </div>
        <div className="panel contact">
          <p>{t.contactText}</p>
          <div className="chips">
            {contactLinks.map((link) => (
              <a key={link.label} className="chip link" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
