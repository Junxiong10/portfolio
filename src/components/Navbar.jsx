import React, { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 2rem',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8, 12, 20, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <a href="#hero" style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.85rem',
          color: 'var(--cyan)',
          letterSpacing: '0.15em',
          fontWeight: 500,
        }}>
          Wong Jun Xiong
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {links.map((link, i) => (
            <a key={i} href={link.href} style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              <span style={{ color: 'var(--cyan)', marginRight: '4px' }}>0{i + 1}.</span>
              {link.label}
            </a>
          ))}
          <a href="/resume1.pdf" target="_blank" rel="noopener noreferrer" style={{
            padding: '6px 18px',
            border: '1px solid var(--cyan)',
            borderRadius: '4px',
            fontFamily: 'var(--mono)',
            fontSize: '0.78rem',
            color: 'var(--cyan)',
            letterSpacing: '0.08em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--cyan-dim)' }}
          onMouseLeave={e => { e.target.style.background = 'transparent' }}
          >Resume</a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none',
          flexDirection: 'column', gap: '5px', cursor: 'pointer',
          background: 'none', border: 'none', padding: '8px',
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              width: '22px', height: '2px',
              background: 'var(--cyan)',
              display: 'block',
              transition: 'all 0.2s',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(8, 12, 20, 0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          padding: '2rem',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}>
          {links.map((link, i) => (
            <a key={i} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '1rem',
                color: 'var(--text)',
                letterSpacing: '0.08em',
              }}>
              <span style={{ color: 'var(--cyan)', marginRight: '8px' }}>0{i+1}.</span>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </>
  )
}
