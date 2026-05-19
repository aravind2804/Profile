import React from 'react'
import './Footer.css'

// Up arrow icon
const ChevronUp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="18 15 12 9 6 15"/>
  </svg>
)

function Footer() {
  // Smooth scroll back to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">

      {/* Left: Logo + name */}
      <div className="footer-left">
        <div className="footer-logo">A</div>
        <span className="footer-name">Aravind</span>
      </div>

      {/* Center: copyright */}
      <p className="footer-copy">© 2024 Aravind. All rights reserved.</p>

      {/* Right: scroll to top */}
      <button className="scroll-top-btn" onClick={scrollToTop} title="Back to top">
        <ChevronUp />
      </button>

    </footer>
  )
}

export default Footer
