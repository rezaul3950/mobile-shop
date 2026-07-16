import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import MobileBottomNav from './MobileBottomNav'
import { useLocation } from 'react-router-dom'

function Layout({ children }) {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <div className="app">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      {!isLoginPage && <MobileBottomNav />}
    </div>
  )
}

export default Layout