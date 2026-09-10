import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', paddingTop: '6rem' }}>
      <div className="container">
        <h1 className="section-title" style={{ fontSize: '4rem' }}>404</h1>
        <p className="section-subtitle" style={{ marginInline: 'auto' }}>
          Página não encontrada.
        </p>
        <Link to="/" className="btn btn-primary">
          Voltar à Home
        </Link>
      </div>
    </section>
  )
}
