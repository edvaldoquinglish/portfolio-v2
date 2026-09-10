import { Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import AdminLayout from './layouts/AdminLayout'

import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Products from './pages/Products'
import Learning from './pages/Learning'
import Certificates from './pages/Certificates'
import Downloads from './pages/Downloads'
import Media from './pages/Media'
import Startup from './pages/Startup'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Recruiter from './pages/Recruiter'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/media" element={<Media />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recruiter" element={<Recruiter />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
