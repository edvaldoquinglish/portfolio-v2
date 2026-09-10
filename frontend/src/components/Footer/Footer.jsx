import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>Portfolio V2</strong>
          <p>Full-Stack Developer · Learning continuously</p>
        </div>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <Link to="/recruiter">Recruiter</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin/login">Admin</Link>
        </div>
        <p className="footer-copy">© {year} · Built with React + FastAPI</p>
      </div>
    </footer>
  )
}
