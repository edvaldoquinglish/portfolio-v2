import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { getProfile, getProjects } from '../services/projects'
import { AREAS } from '../utils/constants'

export default function Home() {
  const [profile, setProfile] = useState(null)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      getProfile().catch(() => null),
      getProjects({ featured: true, limit: 6 }).catch(() => ({ items: [] })),
    ])
      .then(([prof, proj]) => {
        setProfile(prof)
        setProjects(proj?.items || [])
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Hero profile={profile} />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Áreas de atuação</h2>
          <p className="section-subtitle">
            Foco em construir software funcional e aprender continuamente.
          </p>
          <div className="grid grid-4">
            {AREAS.map((area) => (
              <div key={area} className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
                <strong>{area}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Projetos em destaque</h2>
          <p className="section-subtitle">Alguns dos trabalhos mais relevantes.</p>
          {loading ? (
            <div className="loader" />
          ) : projects.length > 0 ? (
            <div className="grid grid-3">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--text-muted)' }}>
              Ainda sem projetos públicos. (Os dados virão da API após o seed.)
            </p>
          )}
          <div style={{ marginTop: '2rem' }}>
            <Link to="/projects" className="btn btn-primary">
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Vamos trabalhar juntos?</h2>
          <p className="section-subtitle" style={{ marginInline: 'auto' }}>
            Aberto a oportunidades, freelances e parcerias.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              Contactar
            </Link>
            <Link to="/recruiter" className="btn btn-secondary">
              Modo recrutador
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
