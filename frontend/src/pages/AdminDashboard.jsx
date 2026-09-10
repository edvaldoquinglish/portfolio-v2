import { useAuth } from '../context/AuthContext'

export default function AdminDashboard() {
  const { user } = useAuth()

  const cards = [
    { label: 'Projects', value: '—' },
    { label: 'Products', value: '—' },
    { label: 'Courses', value: '—' },
    { label: 'Certificates', value: '—' },
    { label: 'Clients', value: '—' },
    { label: 'Messages', value: '—' },
    { label: 'Meetings', value: '—' },
  ]

  return (
    <div>
      <h1 style={{ marginBottom: '0.5rem' }}>Dashboard</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Bem-vindo, {user?.username}. Gerencie o conteúdo do portfólio.
      </p>

      <div className="grid grid-4" style={{ marginBottom: '2.5rem' }}>
        {cards.map((c) => (
          <div key={c.label} className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>{c.value}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{c.label}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Próximos passos</h2>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', listStyle: 'disc' }}>
          <li>Criar projetos via API /api/v1/admin/projects</li>
          <li>Expandir CRUD no frontend (Fase 7+)</li>
          <li>Configurar PostgreSQL e executar seed</li>
          <li>Adicionar upload de imagens</li>
        </ul>
      </div>
    </div>
  )
}
