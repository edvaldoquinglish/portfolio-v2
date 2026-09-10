export default function Clients() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Clients</h1>
        <p className="section-subtitle">
          Apenas clientes marcados como públicos e autorizados aparecem aqui.
        </p>
        <div className="card">
          <p style={{ color: 'var(--text-muted)' }}>
            Por padrão os clientes são privados. Não inventar clientes.
          </p>
        </div>
      </div>
    </section>
  )
}
