import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import MobileBottomNav from './MobileBottomNav'

function Layout({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

export default Layout