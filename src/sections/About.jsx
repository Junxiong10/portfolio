import React from 'react'

export default function About() {
  return (
    <section id="about" style={{
      padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section label */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--cyan)' }}>01.</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>About Me</h2>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, var(--border), transparent)', maxWidth: '300px' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(200px, 30%, 280px) 1fr',
          gap: '4rem',
          alignItems: 'start',
        }} className="about-grid">

          {/* Photo placeholder */}
          <div className="reveal" style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              aspectRatio: '1',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <img
                src="/profile1.jpeg"
                alt="Wong Jun Xiong"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={e => { e.target.style.display = 'none' }}
              />


              {/* Scan line effect */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
                opacity: 0.4,
                animation: 'scanline 3s linear infinite',
              }} />
            </div>

            {/* Offset border decoration */}
            <div style={{
              position: 'absolute', top: '12px', left: '12px',
              right: '-12px', bottom: '-12px',
              border: '1px solid var(--cyan)',
              borderRadius: '8px', zIndex: -1, opacity: 0.3,
            }} />


          </div>

          {/* Text content */}
          <div className="reveal">
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '1.02rem' }}>
              I'm an <span style={{ color: 'var(--text)' }}>AI Engineer</span> currently at{' '}
              <span style={{ color: 'var(--cyan)' }}>Beyondsoft Malaysia</span>, where I build
              LLM-driven systems and work on prompt engineering for enterprise AI products
              built on the Microsoft ecosystem.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '1.02rem' }}>
              I hold a <span style={{ color: 'var(--text)' }}>Bachelor of Computer Science (Hons) in Artificial Intelligence</span> from{' '}
              Asia Pacific University, where I graduated with a 4.0 GPA on my Final Year Project —
              a sentiment-aware restaurant recommendation system combining NLP and collaborative filtering.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '2rem', fontSize: '1.02rem' }}>
              On my own time, I build <span style={{ color: 'var(--text)' }}>agentic pipelines and RAG architectures</span> as
              personal projects, including self-correcting agentic RAG systems with hybrid search
              and ReAct-based conversational agents with custom state management. I thrive at the intersection
              of solid engineering and cutting-edge LLM capabilities.
            </p>

            {/* Quick facts */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem',
            }}>
              {[
                'LangChain & LangGraph',
                'Agentic AI Systems',
                'Prompt Engineering',
                'Microsoft Fabric / Copilot',
                'Python',
                'MCP Server Integration',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--text-muted)',
                }}>
                  <span style={{ color: 'var(--cyan)', fontSize: '0.6rem' }}>▶</span>
                  {item}
                </div>
              ))}
            </div>

            {/* Education bar */}
            <div style={{
              marginTop: '2rem',
              padding: '1.2rem 1.5rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              borderLeft: '3px solid var(--cyan)',
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--cyan)', letterSpacing: '0.15em', marginBottom: '6px' }}>EDUCATION</div>
              <div style={{ fontWeight: 600, marginBottom: '2px' }}>Asia Pacific University (APU)</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>B.Sc. Computer Science (Hons) — Artificial Intelligence</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>Jun 2022 – Jun 2025 · Bukit Jalil, KL</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
