import React from 'react'
import './Projects.css'

// ── Inline SVG Icons ──
const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
  </svg>
)
const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)
const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)
const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

// ── YOUR REAL PROJECTS ──
const PROJECTS = [
  {
    id: 1,
    title: 'Ayurveda Landing Page',
    desc: 'A clean, single-page website for an Ayurveda brand — built with HTML & CSS. Focused on calm layouts, smooth sections, and a natural feel.',
    tags: ['HTML', 'CSS', 'Responsive'],
    emoji: '🌿',
    previewColor: '#16a34a',   // green theme — nature/ayurveda
    previewAccent: '#4ade80',
    previewBg: 'linear-gradient(135deg, #052e16 0%, #14532d 60%, #166534 100%)',
    previewLines: [
      { w: '75%', bg: '#4ade80' },
      { w: '55%', bg: '#86efac60' },
      { w: '65%', bg: '#86efac40' },
      { w: '40%', bg: '#86efac30' },
    ],
    demoLink: 'https://aravind2804.github.io/myportfolio/',
    githubLink: 'https://github.com/aravind2804',
    isLive: true,
    type: 'Landing Page',
  },
  {
    id: 2,
    title: 'The Focus Fox Studio',
    desc: 'A premium single-page website for a photography studio. Features cinematic design, services section, and a contact form. Built with HTML & CSS.',
    tags: ['HTML', 'CSS', 'Photography'],
    emoji: '📸',
    previewColor: '#7c3aed',   // purple/dark theme — studio vibes
    previewAccent: '#a855f7',
    previewBg: 'linear-gradient(135deg, #0d0618 0%, #1e0a38 60%, #2d1257 100%)',
    previewLines: [
      { w: '70%', bg: '#a855f7' },
      { w: '50%', bg: '#c084fc60' },
      { w: '80%', bg: '#c084fc40' },
      { w: '45%', bg: '#c084fc30' },
    ],
    demoLink: 'https://focusfox-sigma.vercel.app/',
    githubLink: 'https://github.com/aravind2804',
    isLive: true,
    type: 'Landing Page',
  },
  // {
  //   id: 3,
  //   title: 'Next Project',
  //   desc: 'Something exciting is in the works! Stay tuned for my next project — currently learning and building every day. 🚀',
  //   tags: ['Coming Soon'],
  //   emoji: '⚡',
  //   previewColor: '#0ea5e9',
  //   previewAccent: '#38bdf8',
  //   previewBg: 'linear-gradient(135deg, #082f49 0%, #0c4a6e 60%, #075985 100%)',
  //   previewLines: [],
  //   demoLink: null,
  //   githubLink: null,
  //   isLive: false,
  //   type: 'Coming Soon',
  // },
]

// ── Single Project Card ──
function ProjectCard({ project }) {
  const isComingSoon = !project.isLive

  return (
    <div className={`project-card ${isComingSoon ? 'coming-soon-card' : ''}`}>

      {/* ── Visual Preview ── */}
      <div className="project-preview" style={{ background: project.previewBg }}>

        {/* Browser top bar */}
        <div className="preview-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <div className="preview-url">
            {isComingSoon ? '🔒 coming-soon...' : project.demoLink?.replace('https://', '').slice(0, 28) + '...'}
          </div>
        </div>

        {/* Preview body */}
        <div className="preview-body">
          {isComingSoon ? (
            // Coming soon placeholder
            <div className="coming-soon-preview">
              <div className="cs-emoji">⚡</div>
              <div className="cs-text">Coming Soon</div>
              <div className="cs-dots">
                <span /><span /><span />
              </div>
            </div>
          ) : (
            <>
              {/* Project emoji badge */}
              <div className="prev-emoji-badge" style={{ color: project.previewAccent }}>
                {project.emoji} {project.type}
              </div>
              {/* Fake content lines */}
              {project.previewLines.map((line, i) => (
                <div key={i} className="prev-line" style={{ width: line.w, background: line.bg }} />
              ))}
              {/* View button */}
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="prev-view-btn"
                style={{ background: `${project.previewColor}90`, borderColor: `${project.previewAccent}60`, color: project.previewAccent }}
              >
                View Live →
              </a>
            </>
          )}
        </div>

        {/* Glow blob */}
        <div className="preview-glow"
          style={{ background: `radial-gradient(circle, ${project.previewColor}50 0%, transparent 70%)` }}
        />
      </div>

      {/* ── Card Info ── */}
      <div className="project-info">

        {/* Title + live badge */}
        <div className="project-title-row">
          <h4 className="project-title">{project.title}</h4>
          {project.isLive
            ? <span className="badge-live">● Live</span>
            : <span className="badge-soon"><ClockIcon /> Soon</span>
          }
        </div>

        {/* Description */}
        <p className="project-desc">{project.desc}</p>

        {/* Tech tags */}
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="proj-tag">{tag}</span>
          ))}
        </div>

        {/* Buttons */}
        {!isComingSoon && (
          <div className="project-btns">
            <a href={project.demoLink} target="_blank" rel="noreferrer" className="proj-btn proj-btn-demo">
              Live Demo <ExternalLinkIcon />
            </a>
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="proj-btn">
              GitHub <GithubIcon />
            </a>
          </div>
        )}

        {/* Coming soon message */}
        {isComingSoon && (
          <div className="coming-soon-msg">
            🛠️ Working on something new...
          </div>
        )}

      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* Header */}
      <div className="projects-header">
        <div className="card-title-row">
          <div className="icon-box"><BriefcaseIcon /></div>
          <h3 className="card-title">My Projects</h3>
        </div>
        <div className="projects-count">
          <span className="count-badge">2 Live</span>
          {/* <span className="count-badge upcoming">+More Coming</span> */}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

    </section>
  )
}

export default Projects
