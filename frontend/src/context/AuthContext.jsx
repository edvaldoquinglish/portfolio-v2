import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(() => localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      api
        .get('/api/v1/auth/me')
        .then((res) => setUser(res.data))
        .catch(() => {
          localStorage.removeItem('token')
          setToken(null)
          setUser(null)
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [token])

  const login = async (username, password) => {
    const form = new URLSearchParams()
    form.append('username', username)
    form.append('password', password)
    const res = await api.post('/api/v1/auth/login', form, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    const accessToken = res.data.access_token
    localStorage.setItem('token', accessToken)
    setToken(accessToken)
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    const me = await api.get('/api/v1/auth/me')
    setUser(me.data)
    return me.data
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
    delete api.defaults.headers.common['Authorization']
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
