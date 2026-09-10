import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { getProjects } from '../services/projects'
import { PROJECT_CATEGORIES } from '../utils/constants'

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [data, setData] = useState({ items: [], page: 1, total: 0, pages: 0 })
  const [loading, setLoading] = useState(true)

  const page = Number(searchParams.get('page') || 1)
  const category = searchParams.get('category') || 'All'
  const search = searchParams.get('search') || ''

  useEffect(() => {
    setLoading(true)
    const params = { page, limit: 12 }
    if (category && category !== 'All') params.category = category
    if (search) params.search = search

    getProjects(params)
      .then(setData)
      .catch(() => setData({ items: [], page: 1, total: 0, pages: 0 }))
      .finally(() => setLoading(false))
  }, [page, category, search])

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    if (key !== 'page') next.delete('page')
    setSearchParams(next)
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Projetos</h1>
        <p className="section-subtitle">Catálogo de projetos com filtros e pesquisa.</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <input
            type="search"
            placeholder="Pesquisar..."
            defaultValue={search}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setFilter('search', e.target.value)
            }}
            style={{
              flex: '1 1 200px',
              padding: '0.65rem 1rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border)',
              background: 'var(--bg-secondary)',
            }}
            aria-label="Pesquisar projetos"
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`badge ${category === cat ? 'badge-accent' : ''}`}
                onClick={() => setFilter('category', cat === 'All' ? null : cat)}
                style={{ cursor: 'pointer', border: 'none' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="loader" />
        ) : data.items.length > 0 ? (
          <>
            <div className="grid grid-3">
              {data.items.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
            {data.pages > 1 && (
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '2rem' }}>
                <button
                  className="btn btn-secondary"
                  disabled={page <= 1}
                  onClick={() => setFilter('page', String(page - 1))}
                >
                  Anterior
                </button>
                <span style={{ alignSelf: 'center', color: 'var(--text-muted)' }}>
                  {page} / {data.pages}
                </span>
                <button
                  className="btn btn-secondary"
                  disabled={page >= data.pages}
                  onClick={() => setFilter('page', String(page + 1))}
                >
                  Seguinte
                </button>
              </div>
            )}
          </>
        ) : (
          <p style={{ color: 'var(--text-muted)' }}>
            Nenhum projeto encontrado. Execute o seed no backend ou adicione projetos no admin.
          </p>
        )}
      </div>
    </section>
  )
}
