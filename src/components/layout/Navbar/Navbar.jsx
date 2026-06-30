import { useEffect, useState } from 'react'
import { useCart } from '../../../context/CartContext'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { cartCount } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg' 
        : 'bg-slate-900/80 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-white text-xl font-bold hover:scale-105 transition-transform">
            <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
            <span>
              Mobile<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Shop</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a href="#home" className="px-4 py-2 text-white bg-blue-500/15 rounded-lg text-sm font-medium relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:rounded-full">
              Home
            </a>
            <a href="#shop" className="px-4 py-2 text-slate-300 hover:text-white hover:bg-blue-500/10 rounded-lg text-sm font-medium transition-all">
              Shop
            </a>
            <a href="#categories" className="px-4 py-2 text-slate-300 hover:text-white hover:bg-blue-500/10 rounded-lg text-sm font-medium transition-all">
              Categories
            </a>
            <a href="#deals" className="px-4 py-2 text-slate-300 hover:text-white hover:bg-blue-500/10 rounded-lg text-sm font-medium transition-all">
              Deals
            </a>
            <a href="#about" className="px-4 py-2 text-slate-300 hover:text-white hover:bg-blue-500/10 rounded-lg text-sm font-medium transition-all">
              About
            </a>
            <a href="#contact" className="px-4 py-2 text-slate-300 hover:text-white hover:bg-blue-500/10 rounded-lg text-sm font-medium transition-all">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center bg-transparent border border-white/10 rounded-lg text-slate-300 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-white hover:-translate-y-0.5 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>

            <a href="/cart" className="relative w-10 h-10 flex items-center justify-center bg-transparent border border-white/10 rounded-lg text-slate-300 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-white hover:-translate-y-0.5 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40 animate-pulse">
                  {cartCount}
                </span>
              )}
            </a>

            <button className="hidden sm:block px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-semibold hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40">
              Login
            </button>

            {/* Mobile toggle */}
            <button 
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-transparent border border-white/10 rounded-lg hover:border-blue-500/30 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`w-5 h-0.5 bg-slate-300 rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-slate-300 rounded transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-slate-300 rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setMenuOpen(false)}></div>
          <div className="lg:hidden fixed top-0 right-0 bottom-0 w-[340px] bg-slate-900/98 backdrop-blur-xl border-l border-white/10 z-50 p-6 pt-20 overflow-y-auto">
            <nav className="flex flex-col gap-2">
              <a href="#home" className="px-4 py-3 text-white bg-blue-500/15 rounded-lg font-medium">Home</a>
              <a href="#shop" className="px-4 py-3 text-slate-300 hover:text-white hover:bg-blue-500/10 rounded-lg font-medium transition-all">Shop</a>
              <a href="#categories" className="px-4 py-3 text-slate-300 hover:text-white hover:bg-blue-500/10 rounded-lg font-medium transition-all">Categories</a>
              <a href="#deals" className="px-4 py-3 text-slate-300 hover:text-white hover:bg-blue-500/10 rounded-lg font-medium transition-all">Deals</a>
              <a href="#about" className="px-4 py-3 text-slate-300 hover:text-white hover:bg-blue-500/10 rounded-lg font-medium transition-all">About</a>
              <a href="#contact" className="px-4 py-3 text-slate-300 hover:text-white hover:bg-blue-500/10 rounded-lg font-medium transition-all">Contact</a>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

export default Navbar
