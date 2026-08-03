import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiShoppingBag, FiGrid, FiHeart, FiUser } from 'react-icons/fi'

function MobileBottomNav() {
  const location = useLocation()

  const navItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/products', icon: FiShoppingBag, label: 'Orders' },
    { path: '/products', icon: FiGrid, label: 'Shops' },
    { path: '/products', icon: FiHeart, label: 'Favorite' },
    { path: '/products', icon: FiUser, label: 'Profile' }
  ]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="mobile-bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon
        const active = isActive(item.path)
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-nav-item ${active ? 'active' : ''}`}
          >
            <div className="nav-icon-wrapper">
              <Icon />
            </div>
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default MobileBottomNav