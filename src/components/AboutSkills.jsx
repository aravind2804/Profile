import React from 'react'
import './AboutSkills.css'

// ── Inline SVG Icons ──
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
)
const RocketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

// ── Skills Data ──
// Each skill has a name, the official brand colors, and an SVG icon
const SKILLS = [
  {
    name: 'HTML',
    icon: (
      // HTML5 shield icon
      <svg viewBox="0 0 32 32" width="38" height="38">
        <path d="M4 2l2.4 27L16 30l9.6-1L28 2H4z" fill="#e44d26"/>
        <path d="M16 27.5l7.7-.9 1.9-21.6H16v22.5z" fill="#f16529"/>
        <path d="M11.1 10h4.9V7H8l2 21 6 1.7V26l-4-1.2-1-10.8zm9.7 5H16v3h4.5l-.4 5-4.1 1.1V27l5.8-1.6L23 10h-2.8l.6 5z" fill="#fff"/>
      </svg>
    )
  },
  {
    name: 'CSS',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38">
        <path d="M4 2l2.4 27L16 30l9.6-1L28 2H4z" fill="#264de4"/>
        <path d="M16 27.5l7.7-.9 1.9-21.6H16v22.5z" fill="#2965f1"/>
        <path d="M16 17H11.3l-.3-3H16v-3H8.4l.7 7.5 7 2V17zm0 6.4l-3.8-1-.3-2.9H9l.5 5.5 6.5 1.9v-3.5z" fill="#fff"/>
        <path d="M16 17v2.5l3.7-1 .4-4.5H16V11h7l-.7-7H16v3h4l.4 4H16z" fill="#ebebeb"/>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38">
        <rect width="28" height="28" x="2" y="2" rx="1.5" fill="#f7df1e"/>
        <path d="M20.1 22.4c.4.8 1 1.5 2.1 1.5.9 0 1.5-.5 1.5-1.1 0-.8-.6-1.1-1.6-1.5l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.3-3 1.5 0 2.5.5 3.2 1.8l-1.8 1.1c-.4-.7-.8-.9-1.4-.9-.6 0-1 .4-1 .9 0 .6.4.9 1.3 1.3l.6.2c2 .8 3.1 1.7 3.1 3.6 0 2.1-1.6 3.2-3.8 3.2-2.1 0-3.5-1-4.1-2.3l1.9-1.1zM11.5 22.6c.3.5.5 1 1.3 1 .5 0 1-.2 1-1.3V14h2.2v8.4c0 2.2-1.3 3.2-3.2 3.2-1.7 0-2.7-.9-3.2-1.9l1.9-1.1z" fill="#333"/>
      </svg>
    )
  },
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38">
        <circle cx="16" cy="16" r="2.5" fill="#61dafb"/>
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.5" fill="none"/>
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
      </svg>
    )
  },
  // {
  //   name: 'Vite',
  //   icon: (
  //     <svg viewBox="0 0 32 32" width="38" height="38">
  //       <path d="M29 4.5L16.7 27.8 14.2 23l9-18.5H29z" fill="#646cff"/>
  //       <path d="M3 4.5l13.7 23.3L14.2 23l-7-14.5H3z" fill="#ffbd2e" opacity=".9"/>
  //       <path d="M14.2 23L16.7 27.8 29 4.5H14.2V23z" fill="#646cff" opacity=".5"/>
  //     </svg>
  //   )
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: (
  //     <svg viewBox="0 0 32 32" width="38" height="38">
  //       <path d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9Q11.1 10.9 9 13.7zM2 22.1q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z" fill="#38bdf8"/>
  //     </svg>
  //   )
  // },
  // {
  //   name: 'Git',
  //   icon: (
  //     <svg viewBox="0 0 32 32" width="38" height="38">
  //       <path d="M29.5 14.5L17.5 2.5a1.7 1.7 0 00-2.4 0L12.7 4.9l3 3a2 2 0 012.5 2.5l2.9 2.9a2 2 0 012.5 2.5 2 2 0 01-2 2 2 2 0 01-2-2c-.1-.4.1-.7.2-.9L17 12.2v7.1a2 2 0 11-2 0V12a2 2 0 01-1-1.7 2 2 0 012-2c.3 0 .6 0 .9.2L13.8 5.4 2.5 16.7a1.7 1.7 0 000 2.4l12 12a1.7 1.7 0 002.4 0L29.5 19a1.7 1.7 0 000-2.5z" fill="#f05032"/>
  //     </svg>
  //   )
  // },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38">
        <path fillRule="evenodd" d="M16 4C9.37 4 4 9.37 4 16c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.13 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C24.56 25.8 28 21.3 28 16c0-6.63-5.37-12-12-12z" fill="white"/>
      </svg>
    )
  },
]

function AboutSkills() {
  return (
    // Side-by-side row: About Me (left) + My Skills (right)
    <div id="about" className="about-skills-row">

      {/* ── ABOUT ME CARD ── */}
      <div className="about-card">
        {/* Icon + title */}
        <div className="card-title-row">
          <div className="icon-box"><UserIcon /></div>
          <h3 className="card-title">About Me</h3>
        </div>

        {/* Bio text */}
        {/* Bio text */}
<p className="about-text">
  🚀 Passionate Frontend Developer with <strong>1.2 years</strong> of hands-on experience
  building clean, responsive, and user-friendly web apps.
</p>

{/* Current Company Highlight */}
<div className="about-company">
  <span className="company-dot" />
  <div>
    <span className="company-label">Currently Working At</span>
    <span className="company-name">⚡ Stackly</span>
  </div>
</div>

{/* Bullet Points */}
<ul className="about-points">
  <li>🎨 Turning design mockups into pixel-perfect pages</li>
  <li>📱 Building mobile-friendly, responsive UIs</li>
  <li>🐛 Fixing bugs and improving page performance</li>
  <li>📚 Always learning something new every day</li>
</ul>

        {/* Read More button */}
        {/* <button className="read-more-btn">
          Read More <ArrowRight />
        </button> */}

        {/* Decorative code icon bottom-right */}
        {/* <div className="deco-code">&lt;/&gt;</div> */}
      </div>

      {/* ── MY SKILLS CARD ── */}
      <div id="skills" className="skills-card">
        {/* Icon + title */}
        <div className="card-title-row">
          <div className="icon-box"><RocketIcon /></div>
          <h3 className="card-title">My Skills</h3>
        </div>

        {/* 4-column skills grid */}
        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default AboutSkills
