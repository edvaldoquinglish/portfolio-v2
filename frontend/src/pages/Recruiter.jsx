import { Link } from 'react-router-dom'

export default function Recruiter() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h1 className="section-title">Para Recrutadores</h1>
        <p className="section-subtitle">
          Resumo rápido do perfil profissional para facilitar a avaliação.
        </p>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Resumo profissional</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Desenvolvedor Full-Stack em evolução profissional, com 4 anos de aprendizagem
            contínua e 1,5 anos de experiência prática real. Foco em transformar ideias em
            software funcional.
          </p>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Principais áreas</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Web Full-Stack · Mobile · Desktop · Game Development · AI · Automation · Cybersecurity (defensiva)
          </p>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Stack principal</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            JavaScript / React · Python / FastAPI · PostgreSQL · HTML/CSS · Git
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Níveis qualitativos (CORE / Professional / Learning / Exploring) — sem percentagens artificiais.
          </p>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Disponibilidade</h2>
          <p style={{ color: 'var(--text-secondary)' }}>[Adicionar disponibilidade]</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
          <Link to="/projects" className="btn btn-primary">
            Ver projetos
          </Link>
          <Link to="/experience" className="btn btn-secondary">
            Experiência
          </Link>
          <Link to="/skills" className="btn btn-secondary">
            Skills
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Contactar
          </Link>
        </div>

        <div className="card" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
            Vamos conversar sobre uma oportunidade?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Pode solicitar uma reunião ou enviar mensagem diretamente.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Solicitar contacto / reunião
          </Link>
        </div>
      </div>
    </section>
  )
}
