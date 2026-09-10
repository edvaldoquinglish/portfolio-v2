import { Outlet, Navigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AdminLayout() {
  const { isAuthenticated, loading, user, logout } = useAuth()

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div className="loader" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside
        style={{
          width: 240,
          background: 'var(--bg-secondary)',
          borderRight: '1px solid var(--border)',
          padding: '1.5rem 1rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ marginBottom: '2rem', fontWeight: 700, fontSize: '1.1rem' }}>
          Admin Panel
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <Link to="/admin/dashboard" className="btn btn-ghost" style={{ justifyContent: 'flex-start' }}>
            Dashboard
          </Link>
          <Link to="/admin/dashboard" className="btn btn-ghost" style={{ justifyContent: 'flex-start' }}>
            Projects
          </Link>
          <Link to="/" className="btn btn-ghost" style={{ justifyContent: 'flex-start' }}>
            ← Back to site
          </Link>
        </nav>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            {user?.username}
          </p>
          <button onClick={logout} className="btn btn-secondary" style={{ width: '100%' }}>
            Logout
          </button>
        </div>
      </aside>
      <main style={{ flex: 1, padding: '2rem', overflow: 'auto' }}>
        <Outlet />
      </main>
    </div>
  )
}
