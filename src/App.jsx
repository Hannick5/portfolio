import { useEffect } from 'react'
import './App.css'

const experiences = [
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
]

const projects = [
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
]

const education = [
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
]

const skills = {
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
}

const contactLinks = [
  { label: 'Email', href: 'mailto:abdul.hannick@gmail.com' },
  { label: 'Téléphone', href: 'tel:+33768618120' },
  { label: 'Github', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page">
      <header className="top-bar">
        <div className="brand">
          <span className="prompt">$</span> Hannick Abdul Kuthoos
        </div>
        <nav>
          <a href="#profil">profil</a>
          <a href="#experience">expérience</a>
          <a href="#projects">projets</a>
          <a href="#skills">compétences</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="badge">Disponible pour nouveaux défis</p>
          <h1>
            <span className="prompt">$</span>
            <span className="command">
              Développeur full-stack & DevOps
              <span className="caret" aria-hidden="true">
                █
              </span>
            </span>
          </h1>
          <p className="subtitle">
            Automatisation, microservices, data & cartographie. Je construis des
            solutions robustes et scalables pour des produits qui comptent.
          </p>
          <div className="actions">
            <a className="button primary" href="mailto:abdul.hannick@gmail.com">
              Écrire
            </a>
            <a className="button ghost" href="#projects">
              Voir les projets
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
              Développeur full-stack passionné par l’automatisation et le
              déploiement. J’aime transformer des idées en produits fiables.
            </p>
            <p>
              <span className="prompt">$</span> location --get
            </p>
            <p className="muted">Paris, France (ou remote)</p>
            <p>
              <span className="prompt">$</span> stack --highlight
            </p>
            <p className="muted">
              Python, FastAPI, Flask, Vue.js, Docker, Kubernetes, PostgreSQL
            </p>
          </div>
        </div>
      </section>

      <section id="profil" className="section">
        <div className="section-header">
          <span className="section-label">/profil</span>
          <div className="line" />
        </div>
        <div className="panel">
          <p>
            Développeur full-stack avec un fort intérêt pour l’automatisation et
            les méthodologies DevOps. Curieux, orienté impact, prêt à rejoindre
            une équipe innovante pour livrer des produits ambitieux et
            évolutifs.
          </p>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-header">
          <span className="section-label">/expérience</span>
          <div className="line" />
        </div>
        <div className="grid">
          {experiences.map((exp) => (
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
          <span className="section-label">/projets</span>
          <div className="line" />
        </div>
        <div className="grid">
          {projects.map((project) => (
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
          <span className="section-label">/compétences</span>
          <div className="line" />
        </div>
        <div className="grid skills">
          {Object.entries(skills).map(([category, items]) => (
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
          <span className="section-label">/formation</span>
          <div className="line" />
        </div>
        <div className="grid">
          {education.map((item) => (
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
          <p>Prêt à discuter ? Choisissez un canal :</p>
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
