import React, { useState } from 'react'

const experiences = [
  {
    company: 'Beyondsoft Malaysia',
    role: 'AI Engineer',
    period: 'Oct 2025 – April 2026',
    location: 'KL Eco City, Kuala Lumpur',
    tag: 'Full-time',
    color: '#00c8ff',
    bullets: [
      'Conducted testing and evaluation of Microsoft Fabric Data Agent, validating its capability in handling Power BI semantic models, data queries, and automated insights generation using prompt engineering.',
      'Optimized LLM-driven Fabric Data Agent performance through prompt engineering and agent instruction design, improving response accuracy, grounding quality, and contextual relevance against Power BI semantic model datasets.',
      'Leveraged GitHub Copilot Enterprise and Model Context Protocol (MCP) servers to enable LLM-driven automation and structured task execution across Microsoft ecosystem services.',
      'Built scalable data engineering pipelines and designed modular AI agents with reusable SKILLs for task-specific automation using MCP servers.',
    ],
  },
  {
    company: 'YToday Sdn Bhd',
    role: 'IT & Project Management Intern',
    period: 'Apr 2024 – Aug 2024',
    location: 'Seri Kembangan, Selangor',
    tag: 'Internship',
    color: '#e8b86d',
    bullets: [
      'Collaborated with stakeholders to support IT enhancements through requirement gathering, UI/UX improvements, user role design, and UAT.',
      'Contributed to an NLP-based chatbot to enhance customer interaction and efficiency.',
      'Applied problem-solving skills to address project challenges, ensuring timely completion, proper documentation, and progress tracking across multiple projects.',
    ],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const exp = experiences[active]

  return (
    <section id="experience" style={{
      padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
      background: 'var(--bg2)',
      position: 'relative',
    }}>
      {/* BG decoration */}
      <div style={{
        position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
        width: '40%', height: '60%',
        background: 'radial-gradient(ellipse at right, rgba(0,200,255,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section label */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--cyan)' }}>02.</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Work Experience</h2>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, var(--border), transparent)', maxWidth: '300px' }} />
        </div>

        <div style={{ display: 'flex', gap: '3rem' }} className="exp-layout reveal">
          {/* Company tabs */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            borderLeft: '2px solid var(--border)',
            minWidth: '180px',
          }} className="exp-tabs">
            {experiences.map((e, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                padding: '14px 20px',
                textAlign: 'left',
                background: active === i ? 'var(--surface)' : 'transparent',
                border: 'none',
                borderLeft: `2px solid ${active === i ? e.color : 'transparent'}`,
                marginLeft: '-2px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                color: active === i ? 'var(--text)' : 'var(--text-dim)',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.82rem', fontWeight: active === i ? 600 : 400 }}>{e.company}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: active === i ? e.color : 'var(--text-dim)', marginTop: '2px' }}>{e.tag}</div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ flex: 1 }} key={active}>
            <div style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <h3 style={{
                fontFamily: 'var(--sans)', fontWeight: 600,
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              }}>
                {exp.role}{' '}
                <span style={{ color: exp.color }}>@ {exp.company}</span>
              </h3>
            </div>

            <div style={{
              display: 'flex', gap: '1rem', marginBottom: '1.8rem', flexWrap: 'wrap',
            }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>{exp.period}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>·</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>{exp.location}</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {exp.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: exp.color, marginTop: '6px', flexShrink: 0, fontSize: '0.6rem' }}>◆</span>
                  <span style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-layout { flex-direction: column !important; }
          .exp-tabs { flex-direction: row !important; border-left: none !important; border-bottom: 2px solid var(--border); min-width: unset !important; overflow-x: auto; }
          .exp-tabs button { border-left: none !important; border-bottom: 2px solid transparent; margin-left: 0 !important; margin-bottom: -2px; white-space: nowrap; }
        }
      `}</style>
    </section>
  )
}
