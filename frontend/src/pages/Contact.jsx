import { useState } from 'react'
import { api } from '../services/api'
import { CONTACT_TYPES } from '../utils/constants'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'General',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await api.post('/api/v1/contact', form)
      setStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' })
      setForm({ name: '', email: '', subject: '', message: '', type: 'General' })
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Erro ao enviar. Tente novamente.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 560 }}>
        <h1 className="section-title">Contacto</h1>
        <p className="section-subtitle">Envie uma mensagem. Responderei o mais breve possível.</p>

        <form onSubmit={handleSubmit} className="card">
          <div className="form-group">
            <label htmlFor="name">Nome *</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="type">Tipo</label>
            <select id="type" name="type" value={form.type} onChange={handleChange}>
              {CONTACT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Assunto</label>
            <input id="subject" name="subject" value={form.subject} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem *</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} required />
          </div>

          {status && (
            <p
              style={{
                marginBottom: '1rem',
                color: status.type === 'success' ? 'var(--accent)' : '#ef4444',
              }}
            >
              {status.message}
            </p>
          )}

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'A enviar...' : 'Enviar mensagem'}
          </button>
        </form>
      </div>
    </section>
  )
}
