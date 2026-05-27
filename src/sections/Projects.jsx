import React, { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'Agentic RAG — AI/ML Knowledge Assistant',
    period: 'May 2026',
    description: 'A production-grade agentic RAG system using LangGraph with a self-correcting workflow: query decomposition, hybrid retrieval, document grading, answer generation, and automatic query rewriting on insufficient results.',
    highlights: [
      'Self-correcting LangGraph workflow with automatic query rewriting',
      'Hybrid search: ChromaDB dense + BM25 sparse with Reciprocal Rank Fusion',
      'Cross-encoder re-ranking for improved relevance accuracy',
      'Fully local, privacy-preserving architecture via Ollama (Qwen 2.5:7b)',
      'Streamlit UI with citation verification and agent trace visualization',
    ],
    stack: ['Python', 'LangGraph', 'LangChain', 'ChromaDB', 'Streamlit', 'Ollama', 'BM25'],
    github: 'https://github.com/Junxiong10/Agentic-RAG-AI-ML-Knowledge-Assistant',
    featured: true,
  },
  {
    number: '02',
    title: 'Product Catalog ReAct Agent',
    period: 'May 2026',
    description: 'A conversational product catalog agent using LangGraph and ReAct (Reasoning + Acting) for multi-step reasoning and autonomous tool selection with a hybrid search engine combining TF-IDF and keyword matching.',
    highlights: [
      'ReAct pattern for multi-step reasoning and autonomous tool selection',
      'Hybrid search with semantic weight (0.65) favouring recall and keyword weight (0.35) preserving precision — bonus values (+0.25, +0.20, +0.15, +0.10), a 0.72 threshold, and a 0.20 margin gap guard to prevent false positives on similar products',
      'Custom LangGraph state reducer: agent calls add_to_shortlist repeatedly while the reducer handles merge-by-ID and quantity arithmetic at the state layer, keeping tool logic stateless',
      'Hallucination-resilient input parsing for local LLMs',
      'Callback-based middleware for real-time token usage monitoring',
    ],
    stack: ['Python', 'LangGraph', 'LangChain', 'TF-IDF', 'ReAct', 'CLI'],
    github: 'https://github.com/Junxiong10/Product-Catalog-Research-Agent',
    featured: true,
  },
  {
    number: '03',
    title: 'Restaurant Recommendation System',
    period: 'Apr 2025 · FYP — 4.0 GPA',
    description: 'AI-driven restaurant recommendation system addressing the limitations of traditional star ratings by analyzing customer reviews through sentiment and emotion classification, enabling smarter recommendation intelligence.',
    highlights: [
      'Sentiment classification and emotion analysis on restaurant review data',
      'Item-based collaborative filtering using cosine similarity on sentiment profiles',
      'Leverages users\' bookmarked restaurants to recommend similar dining options',
      'Addresses cold-start problem with sentiment-aware recommendation profiles',
    ],
    stack: ['Python', 'Machine Learning', 'NLP', 'Item-based Collaborative Filtering', 'Cosine Similarity', 'Flask', 'VADER'],
    github: null,
    featured: false,
  },
]

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
        borderRadius: '8px',
        padding: '2rem',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 40px rgba(0,200,255,0.08)' : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--cyan)', opacity: 0.6 }}>
            {project.number}
          </span>
          {project.period.includes('FYP') && (
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '0.62rem',
              color: 'var(--gold)', border: '1px solid rgba(232,184,109,0.3)',
              padding: '2px 8px', borderRadius: '3px',
            }}>FYP · 4.0 GPA</span>
          )}
        </div>
        {project.github && (
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              title="GitHub"
              style={{ color: 'var(--text-dim)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        )}
      </div>

      <h3 style={{
        fontFamily: 'var(--sans)', fontWeight: 600,
        fontSize: '1.05rem', marginBottom: '0.8rem',
        color: hovered ? 'var(--cyan)' : 'var(--text)',
        transition: 'color 0.2s',
        lineHeight: 1.4,
      }}>{project.title}</h3>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        {project.description}
      </p>

      {/* Key highlights */}
      <ul style={{ listStyle: 'none', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {project.highlights.slice(0, 3).map((h, i) => (
          <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--cyan)', flexShrink: 0, fontSize: '0.6rem', marginTop: '6px' }}>▸</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>{h}</span>
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.stack.map((tech, i) => (
          <span key={i} style={{
            fontFamily: 'var(--mono)', fontSize: '0.68rem',
            color: 'var(--text-dim)',
            background: 'var(--surface2)',
            padding: '3px 10px', borderRadius: '3px',
            border: '1px solid var(--border)',
          }}>{tech}</span>
        ))}
      </div>

      {/* Hover glow */}
      {hovered && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
        }} />
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section label */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--cyan)' }}>03.</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Projects</h2>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, var(--border), transparent)', maxWidth: '300px' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
        }} className="reveal">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://github.com/Junxiong10" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'var(--mono)', fontSize: '0.8rem',
            color: 'var(--cyan)', letterSpacing: '0.1em',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            transition: 'gap 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.gap = '14px'}
          onMouseLeave={e => e.currentTarget.style.gap = '8px'}
          >
            VIEW ALL ON GITHUB
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
