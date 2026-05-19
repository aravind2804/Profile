import React, { useState } from 'react'
import './Navbar.css'

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

function Navbar() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (link) => {
    setActive(link)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="nav-logo">A</div>

        {/* Desktop Links */}
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`nav-link ${active === link ? 'active' : ''}`}
                onClick={() => setActive(link)}
              >
                {link}
                {active === link && <span className="active-dot" />}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <button className="resume-btn">Resume <DownloadIcon /></button>

        {/* Mobile Hamburger Icon */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          <button className="nav-close-btn" onClick={() => setMenuOpen(false)}>✕</button>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={active === link ? 'active' : ''}
              onClick={() => handleNavClick(link)}
            >
              {link}
            </a>
          ))}
          <button className="nav-mobile-resume">Resume <DownloadIcon /></button>
        </div>
      )}
    </>
  )
}

export default Navbar
