import { Outlet } from 'react-router-dom'
import Navbar         from '../components/layout/Navbar'
import Footer         from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import { useScrollTop } from '../hooks/useScrollTop'

export default function RootLayout() {
  useScrollTop()
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
