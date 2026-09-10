import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card card">
      <div className="project-card-image">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-card-placeholder">{project.category || 'Project'}</div>
        )}
        {project.featured && <span className="badge badge-accent project-featured">Featured</span>}
      </div>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span className="badge">{project.category || 'Web'}</span>
          <span className="badge">{project.status}</span>
        </div>
        <h3 className="project-card-title">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-card-desc">{project.short_description || '—'}</p>
        {project.technologies && (
          <p className="project-card-tech">{project.technologies}</p>
        )}
      </div>
    </article>
  )
}
