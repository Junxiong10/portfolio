import React, { useEffect, useState } from 'react'

const roles = ['AI Engineer', 'Prompt Engineer']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((roleIdx + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 clamp(1.5rem, 6vw, 6rem)',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,200,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,200,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,200,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', left: '5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(232,184,109,0.05) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
      }} />

      {/* Decorative corner lines */}
      <div style={{
        position: 'absolute', top: '80px', right: '4rem',
        fontFamily: 'var(--mono)', fontSize: '0.7rem',
        color: 'var(--text-dim)', letterSpacing: '0.1em',
        writingMode: 'vertical-rl', opacity: 0.5,
      }}>KUL · MY · AI ENGINEER</div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        {/* Pre-title */}
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
          color: 'var(--cyan)',
          letterSpacing: '0.2em',
          marginBottom: '1.5rem',
          opacity: 0,
          animation: 'fadeUp 0.6s ease 0.2s forwards',
        }}>
          {'>>> I\'M'}
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem',
          opacity: 0,
          animation: 'fadeUp 0.7s ease 0.4s forwards',
        }}>
          Wong<br />
          <span style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Jun Xiong</span>
        </h1>

        {/* Typewriter role */}
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          color: 'var(--text-muted)',
          marginBottom: '2rem',
          height: '2.2rem',
          display: 'flex', alignItems: 'center', gap: '2px',
          opacity: 0,
          animation: 'fadeUp 0.7s ease 0.6s forwards',
        }}>
          <span style={{ color: 'var(--gold)' }}>$ </span>
          {displayed}
          <span style={{ opacity: cursorVisible ? 1 : 0, color: 'var(--cyan)', fontWeight: 300 }}>_</span>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
          color: 'var(--text-muted)',
          maxWidth: '540px',
          lineHeight: 1.8,
          marginBottom: '3rem',
          opacity: 0,
          animation: 'fadeUp 0.7s ease 0.8s forwards',
        }}>
          AI Engineer at Beyondsoft Malaysia — building LLM-driven systems.
          On my own time, I explore agentic pipelines and RAG architectures as personal projects.
          Passionate about making AI work reliably in production.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          opacity: 0,
          animation: 'fadeUp 0.7s ease 1s forwards',
        }}>
          <a href="#projects" style={{
            padding: '12px 28px',
            background: 'var(--cyan)',
            color: '#000',
            fontFamily: 'var(--mono)',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            borderRadius: '4px',
            transition: 'all 0.2s',
            boxShadow: '0 0 20px rgba(0,200,255,0.3)',
          }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 0 30px rgba(0,200,255,0.5)' }}
          onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0 20px rgba(0,200,255,0.3)' }}
          >VIEW PROJECTS</a>
          <a href="#contact" style={{
            padding: '12px 28px',
            border: '1px solid var(--border-hover)',
            color: 'var(--text)',
            fontFamily: 'var(--mono)',
            fontSize: '0.82rem',
            letterSpacing: '0.1em',
            borderRadius: '4px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.color = 'var(--cyan)' }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border-hover)'; e.target.style.color = 'var(--text)' }}
          >GET IN TOUCH</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{
            padding: '12px 28px',
            border: '1px solid var(--border-hover)',
            color: 'var(--text)',
            fontFamily: 'var(--mono)',
            fontSize: '0.82rem',
            letterSpacing: '0.1em',
            borderRadius: '4px',
            transition: 'all 0.2s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            RESUME
          </a>
        </div>

        {/* Social links */}
        <div style={{
          display: 'flex', gap: '1.5rem', marginTop: '3rem',
          opacity: 0,
          animation: 'fadeUp 0.7s ease 1.2s forwards',
        }}>
          {[
            { label: 'Email', href: 'mailto:wongjunxiong10@gmail.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/wong-jun-xiong-bbbb662a1' },
            { label: 'GitHub', href: 'https://github.com/Junxiong10' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.75rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
              transition: 'color 0.2s',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
            >
              <span style={{ width: '24px', height: '1px', background: 'currentColor', display: 'inline-block' }} />
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'fadeIn 1s ease 1.5s both',
      }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.15em' }}>SCROLL</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--cyan), transparent)',
          animation: 'pulse 2s ease infinite',
        }} />
      </div>
    </section>
  )
}
