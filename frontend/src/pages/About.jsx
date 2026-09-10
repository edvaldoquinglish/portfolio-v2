export default function About() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h1 className="section-title">Sobre</h1>
        <p className="section-subtitle">Trajetória, objetivos e filosofia.</p>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ marginBottom: '0.75rem', fontSize: '1.2rem' }}>Biografia</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            [Adicionar biografia]
          </p>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ marginBottom: '0.75rem', fontSize: '1.2rem' }}>Posicionamento</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Desenvolvedor Full-Stack em evolução profissional, com 4 anos de aprendizagem
            contínua e 1,5 anos de experiência prática real.
          </p>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ marginBottom: '0.75rem', fontSize: '1.2rem' }}>Filosofia</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            O objetivo não é demonstrar domínio absoluto de todas as tecnologias, mas sim a
            capacidade de aprender, compreender sistemas de software e transformar conhecimento
            em projetos funcionais.
          </p>
        </div>

        <div className="card">
          <h2 style={{ marginBottom: '0.75rem', fontSize: '1.2rem' }}>Aprendizagem contínua</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            [Adicionar interesses tecnológicos e objetivos de aprendizagem]
          </p>
        </div>
      </div>
    </section>
  )
}
