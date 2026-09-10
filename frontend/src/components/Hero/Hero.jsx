import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero({ profile }) {
  const name = profile?.name || '[Adicionar Nome]'
  const title = profile?.title || 'Full-Stack Developer'
  const tagline =
    profile?.tagline ||
    'Desenvolvedor Full-Stack em evolução profissional, com 4 anos de aprendizagem contínua e 1,5 anos de experiência prática real.'

  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="hero-greeting">Olá, sou</p>
        <h1 className="hero-name">{name}</h1>
        <p className="hero-title">{title}</p>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">
            Ver projetos
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Entrar em contacto
          </Link>
          <Link to="/recruiter" className="btn btn-ghost">
            Para recrutadores
          </Link>
        </div>
      </div>
    </section>
  )
}
