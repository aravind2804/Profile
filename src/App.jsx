import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSkills from './components/AboutSkills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      {/* ── Top Navigation ── */}
      <Navbar />

      {/* ── Hero / Banner Section ── */}
      <Hero />

      {/* ── About Me + My Skills (side by side) ── */}
      <AboutSkills />

      {/* ── My Projects ── */}
      <Projects />

      {/* ── Contact Me ── */}
      <Contact />

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}

export default App
