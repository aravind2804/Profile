import React from 'react'
import './Hero.css'

// ── Inline SVG Icons ──
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
)
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.554 4.1 1.523 5.824L.057 23.429a.5.5 0 00.609.61l5.7-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.98 0-3.84-.574-5.407-1.565l-.387-.24-4.01 1.053 1.025-3.9-.265-.404A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

function Hero() {
  return (
    <section id="home" className="hero">

      {/* ── LEFT: Text Content ── */}
      <div className="hero-left">

        {/* "Hello, I'm" badge */}
        <div className="hello-tag">Hello, I'm</div>

        {/* Big Name */}
        <h1 className="hero-name">Aravind</h1>

        {/* Job title */}
        <h2 className="hero-role">Frontend Developer</h2>

        {/* Short description */}
        <p className="hero-desc">
          I build modern, responsive and user-friendly<br />
          web applications with clean code.
        </p>

        {/* CTA Buttons
        <div className="hero-btns">
          <button className="btn-purple">
            View Projects <ArrowRight />
          </button>
          <button className="btn-outline">
            Hire Me <UserIcon />
          </button>
        </div> */}

        {/* Social Icons */}
        <div className="hero-socials">
          <a href="https://github.com/aravind2804" className="social-btn" title="GitHub"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/aravind-babu-95062122b" className="social-btn" title="LinkedIn"><LinkedinIcon /></a>
          <a href="https://www.instagram.com/_.aravindh?igsh=MXA5bXNmemtrOHBidQ==" className="social-btn" title="Instagram"><InstagramIcon /></a>
          <a href="https://wa.me/8072042940" className="social-btn" title="WhatsApp"><WhatsappIcon /></a>
        </div>

      </div>

      {/* ── RIGHT: Developer Illustration ── */}
      <div className="hero-right">
        {/* Glowing ring in background */}
        <div className="glow-ring" />

        {/* Floating code brackets - top right */}
        <div className="float-box top-right">{'{}'}</div>

       {/* ── Your Profile Photo ── */}
<div className="dev-card">
  <div className="profile-img-wrap">
    <img src="src/public/profile.JPG" alt="Aravind" className="profile-img" />
  </div>
</div>

        {/* Floating brackets - bottom right */}
        <div className="float-box bottom-right">&lt;/&gt;</div>

        {/* Sparkle dots */}
        <span className="sparkle s1">✦</span>
        <span className="sparkle s2">✦</span>
        <span className="sparkle s3">·</span>
      </div>

    </section>
  )
}

export default Hero
