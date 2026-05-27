import React from 'react'

const skillGroups = [
  {
    category: 'Languages',
    icon: '⌨️',
    color: '#7dd3fc',
    skills: ['Python', 'Java', 'SQL', 'R', 'C#', 'HTML/CSS', 'JavaScript'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    color: '#c084fc',
    skills: ['Visual Studio Code', 'Visual Studio', 'PyCharm', 'RStudio', 'NetBeans', 'Cursor', 'GitHub Copilot'],
  },
  {
    category: 'Frameworks',
    icon: '🧱',
    color: '#e8b86d',
    skills: ['Flask', 'LangChain', 'FastAPI', 'Streamlit', 'React', 'TailwindCSS'],
  },
  {
    category: 'Libraries',
    icon: '📚',
    color: '#86efac',
    skills: ['pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLTK', 'spaCy', 'VADER', 'TextBlob', 'Hugging Face Transformers', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
      background: 'var(--bg2)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* BG decoration */}
      <div style={{
        position: 'absolute', left: '-5%', top: '50%', transform: 'translateY(-50%)',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,200,255,0.05) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Section label */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--cyan)' }}>04.</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Skills</h2>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, var(--border), transparent)', maxWidth: '300px' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.2rem',
        }}>
          {skillGroups.map((group, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem',
                height: '100%',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = group.color + '50'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
                  <div style={{
                    width: '3px', height: '18px',
                    background: group.color,
                    borderRadius: '2px',
                    boxShadow: `0 0 8px ${group.color}60`,
                  }} />
                  <h3 style={{
                    fontFamily: 'var(--mono)', fontSize: '0.78rem',
                    color: group.color, letterSpacing: '0.12em',
                    fontWeight: 500,
                  }}>{group.category.toUpperCase()}</h3>
                </div>

                {/* Skills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.skills.map((skill, j) => (
                    <span key={j} style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      transition: 'all 0.15s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.target.style.borderColor = group.color + '80'
                      e.target.style.color = group.color
                      e.target.style.background = group.color + '12'
                    }}
                    onMouseLeave={e => {
                      e.target.style.borderColor = 'var(--border)'
                      e.target.style.color = 'var(--text-muted)'
                      e.target.style.background = 'var(--bg)'
                    }}
                    >{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
