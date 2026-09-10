import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProject } from '../services/projects'

export default function ProjectDetails() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProject(slug)
      .then(setProject)
      .catch(() => setError('Projeto não encontrado'))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <div className="loader" />
  if (error || !project) {
    return (
      <section className="section">
        <div className="container">
          <p>{error || 'Projeto não encontrado'}</p>
          <Link to="/projects" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Voltar aos projetos
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <Link to="/projects" className="btn btn-ghost" style={{ marginBottom: '1.5rem' }}>
          ← Projetos
        </Link>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', borderRadius: 'var(--radius)', marginBottom: '1.5rem' }}
          />
        )}

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <span className="badge">{project.category}</span>
          <span className="badge">{project.status}</span>
          {project.featured && <span className="badge badge-accent">Featured</span>}
        </div>

        <h1 className="section-title">{project.title}</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          {project.short_description}
        </p>

        {project.description && (
          <div className="card" style={{ marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Descrição</h2>
            <p style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>{project.description}</p>
          </div>
        )}

        {project.problem && (
          <div className="card" style={{ marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Problema</h2>
            <p style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>{project.problem}</p>
          </div>
        )}

        {project.solution && (
          <div className="card" style={{ marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Solução</h2>
            <p style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>{project.solution}</p>
          </div>
        )}

        {project.features && (
          <div className="card" style={{ marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Funcionalidades</h2>
            <p style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>{project.features}</p>
          </div>
        )}

        {project.technologies && (
          <div className="card" style={{ marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Tecnologias</h2>
            <p style={{ color: 'var(--text-secondary)' }}>{project.technologies}</p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub
            </a>
          )}
          {project.demo_url && (
            <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Demo
            </a>
          )}
          {project.documentation_url && (
            <a href={project.documentation_url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Documentação
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
