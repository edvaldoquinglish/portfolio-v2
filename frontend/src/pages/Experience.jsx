export default function Experience() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h1 className="section-title">Experiência</h1>
        <p className="section-subtitle">Timeline profissional.</p>
        <div className="card">
          <p style={{ color: 'var(--text-muted)' }}>
            Os dados de experiência virão da API (`/api/v1/experience`). 
            Por agora use o seed e expanda a rota pública.
          </p>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
            [Adicionar informação] — placeholders até dados reais.
          </p>
        </div>
      </div>
    </section>
  )
}
