import React from 'react'
import './Contact.css'

// ── Inline SVG Icons ──
const MailIcon = ({ size = 20, color = '#a855f7' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.06 2.2 2 2 0 012.02 0H5a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#a855f7">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

// Contact details array — edit values here to personalize
const CONTACTS = [
  {
    icon: <MailIcon />,
    label: 'Email',
    value: 'aravindbabu2804@gmail.com',
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+91 8072042940',
  },
  {
    icon: <MapPinIcon />,
    label: 'Location',
    value: 'Madurai,TamilNadu,India',
  },
  // {
  //   icon: <LinkedinIcon />,
  //   label: 'LinkedIn',
  //   value: 'linkedin.com/in/aravind',
  // },
]

function Contact() {
  return (
    <section id="contact" className="contact-section">

      {/* ── Left: heading + tagline ── */}
      <div className="contact-left">
        <div className="contact-icon-box"><MailIcon size={22} /></div>
        <h3 className="contact-heading">Contact Me</h3>
        <p className="contact-tagline">
          Let's work together and build something amazing!
        </p>
      </div>

      {/* ── Right: info cards ── */}
      <div className="contact-cards">
        {CONTACTS.map((c) => (
          <div key={c.label} className="contact-card">
            <div className="contact-icon">{c.icon}</div>
            <span className="contact-label">{c.label}</span>
            <span className="contact-value">{c.value}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Contact
