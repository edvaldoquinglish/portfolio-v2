export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Skills</h1>
        <p className="section-subtitle">
          Tecnologias organizadas por categoria e nível qualitativo (CORE · Professional / Practical · Learning · Exploring).
        </p>
        <div className="card">
          <p style={{ color: 'var(--text-muted)' }}>
            Dados virão de `/api/v1/skills`. Execute o seed para ver skills de demonstração.
          </p>
        </div>
      </div>
    </section>
  )
}
