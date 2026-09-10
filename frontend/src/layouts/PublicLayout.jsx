import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ minHeight: 'calc(100vh - var(--navbar-height) - 200px)' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
