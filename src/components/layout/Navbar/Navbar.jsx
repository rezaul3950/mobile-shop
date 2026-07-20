import { useEffect, useState } from 'react'
import { useCart } from '../../../context/CartContext'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import phones from '../../../data/products'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const { cartCount } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    // First navigate to home page
    navigate('/')
    // Then scroll to the section after a short delay
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'auto' })
      }
    }, 100)
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setSearchResults([])
      return
    }
    
    const filtered = phones.filter(phone => 
      phone.name.toLowerCase().includes(query.toLowerCase()) ||
      phone.brand.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(filtered)
  }

  const handleSearchResultClick = (productId) => {
    navigate(`/product/${productId}`)
    setSearchOpen(false)
    setSearchQuery('')
    setSearchResults([])
  }

  useEffect(() => {
    // Only run scroll spy on home page
    if (location.pathname !== '/') {
      return
    }
    
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'categories', 'deals', 'shop', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg' 
        : 'bg-slate-900/80 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 hover:scale-105 transition-transform">
            <img 
              src="/Navber and Footer Logo.png" 
              alt="Mobile Shop Logo" 
              className="h-16 sm:h-20 w-auto"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === 'home'
                  ? 'text-white bg-purple-500/20 shadow-lg shadow-purple-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-purple-500/10'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === 'about'
                  ? 'text-white bg-purple-500/20 shadow-lg shadow-purple-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-purple-500/10'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('categories')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === 'categories'
                  ? 'text-white bg-purple-500/20 shadow-lg shadow-purple-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-purple-500/10'
              }`}
            >
              Categories
            </button>
            <button 
              onClick={() => scrollToSection('deals')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === 'deals'
                  ? 'text-white bg-purple-500/20 shadow-lg shadow-purple-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-purple-500/10'
              }`}
            >
              Deals
            </button>
            <button 
              onClick={() => scrollToSection('shop')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === 'shop'
                  ? 'text-white bg-purple-500/20 shadow-lg shadow-purple-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-purple-500/10'
              }`}
            >
              Shop
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === 'contact'
                  ? 'text-white bg-purple-500/20 shadow-lg shadow-purple-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-purple-500/10'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search - visible on all screens */}
            <div className="relative">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-10 h-10 flex items-center justify-center bg-transparent border border-white/20 rounded-lg text-slate-300 hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-white hover:-translate-y-0.5 transition-all flex-shrink-0"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>

              {/* Search Dropdown */}
              {searchOpen && (
                <div className="absolute left-0 right-0 sm:left-auto sm:right-0 sm:top-12 top-14 w-[calc(100vw-2rem)] sm:w-80 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-[60] overflow-hidden">
                  <div className="p-3 sm:p-4">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 text-sm"
                      autoFocus
                    />
                  </div>
                  
                  {searchResults.length > 0 && (
                    <div className="max-h-[50vh] sm:max-h-96 overflow-y-auto">
                      {searchResults.map(product => (
                        <button
                          key={product.id}
                          onClick={() => handleSearchResultClick(product.id)}
                          className="w-full px-3 sm:px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-all text-left"
                        >
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg bg-white/5 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-semibold text-sm truncate">{product.name}</p>
                            <p className="text-slate-400 text-xs">{product.brand}</p>
                          </div>
                          <span className="text-blue-400 font-bold text-sm flex-shrink-0 ml-2">${product.price}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-4 text-center">
                      <p className="text-slate-400 text-sm">No products found</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <Link 
              to="/cart" 
              className="group relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-xl text-slate-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-400/40 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 border-2 border-slate-900 animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/login" className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white rounded-xl text-sm font-bold hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-cyan-400/30">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              <span>Login</span>
            </Link>

          </div>
        </div>
      </div>

{/* Mobile Menu */}
{menuOpen && (
  <div className="lg:hidden">
    {/* Overlay */}
    <div
      className="
      fixed
      inset-0
      bg-slate-900/90
      backdrop-blur-sm
      z-[90]
      "
      onClick={() => setMenuOpen(false)}
    ></div>


    {/* Drawer */}
    <div
      className="
      fixed
      top-0
      right-0

      h-screen

      w-[85%]
      max-w-[360px]

      bg-slate-900
      backdrop-blur-2xl

      border-l
      border-white/10

      z-[100]

      px-6
      pt-8
      pb-8

      shadow-2xl

      overflow-y-auto
      "
    >

      {/* Glow Effect */}
      <div
        className="
        absolute
        -top-32
        -right-32

        w-80
        h-80

        rounded-full

        bg-blue-500/30

        blur-[100px]
        "
      ></div>


      <div className="relative z-10">


        {/* Header */}
        <div
          className="
          flex
          items-center
          justify-between

          mb-10
          "
        >

          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
              setMenuOpen(false)
            }}
            className="flex-shrink-0 hover:scale-105 transition-transform"
          >
            <img 
              src="/Navber and Footer Logo.png" 
              alt="Mobile Shop Logo" 
              className="h-16 sm:h-20 w-auto"
            />
          </a>

          {/* Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setMenuOpen(false)
            }}
            className="
            w-11
            h-11

            flex
            items-center
            justify-center

            rounded-2xl

            bg-white/5

            border
            border-white/10

            text-white
            text-xl

            hover:bg-red-500/20

            transition
            relative
            z-[110]
          "
          >
            ✕
          </button>

        </div>



        {/* Menu Links */}
        <nav className="flex flex-col gap-3">


          {[
            { name: "Home", section: "home" },
            { name: "About", section: "about" },
            { name: "Categories", section: "categories" },
            { name: "Deals", section: "deals" },
            { name: "Shop", section: "shop" },
            { name: "Contact", section: "contact" }
          ].map((item) => (

            <button
              key={item.name}
              onClick={() => {
                scrollToSection(item.section)
                setMenuOpen(false)
              }}

              className={`
              px-5
              py-4

              rounded-2xl

              font-semibold

              transition-all
              duration-300


              ${
                activeSection === item.section

                ?

                `
                text-white

                bg-gradient-to-r
                from-purple-500/30
                to-pink-500/30

                border
                border-purple-400/30

                shadow-lg
                shadow-purple-500/20

                `

                :

                `
                text-slate-300

                hover:text-white

                hover:bg-white/10

                border
                border-white/5

                `
              }

              `}
            >

              <div className="flex items-center justify-between">

                <span>
                  {item.name}
                </span>

                <span className="text-slate-500">
                  →
                </span>

              </div>


            </button>

          ))}


        </nav>



        {/* Bottom Card */}

        <div
          className="
          mt-10

          p-5

          rounded-3xl

          bg-gradient-to-br
          from-blue-500/20
          via-purple-500/20
          to-pink-500/20

          border
          border-white/10
          "
        >

          <h3
            className="
            text-white
            font-bold
            "
          >
          Latest Smartphones
          </h3>


          <p
            className="
            text-sm
            text-slate-400
            mt-2
            "
          >
            Latest technology in your hands
          </p>


          <button
            className="
            mt-4

            w-full

            py-3

            rounded-xl

            bg-gradient-to-r
            from-blue-500
            to-purple-600

            text-white

            font-semibold

            hover:scale-105

            transition
            "
          >
            Explore Now
          </button>


        </div>


      </div>


    </div>

  </div>
)}
    </header>
  )
}

export default Navbar
