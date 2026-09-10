import { api } from './api'

export const getProjects = (params = {}) =>
  api.get('/api/v1/projects', { params }).then((r) => r.data)

export const getProject = (slug) =>
  api.get(`/api/v1/projects/${slug}`).then((r) => r.data)

export const getProfile = () =>
  api.get('/api/v1/profile').then((r) => r.data)
