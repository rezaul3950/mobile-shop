import { Link } from 'react-router-dom'
import { FiStar, FiShoppingBag } from 'react-icons/fi'

function Shops() {
  const phones = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      brand: 'Apple',
      price: 999,
      storage: '256GB',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Galaxy S24 Ultra',
      brand: 'Samsung',
      price: 1299,
      storage: '512GB',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519efa?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Xiaomi 14 Pro',
      brand: 'Xiaomi',
      price: 699,
      storage: '256GB',
      image: 'https://images.unsplash.com/photo-1598327105666-5b1730a3d066?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Pixel 8 Pro',
      brand: 'Google',
      price: 899,
      storage: '128GB',
      image: 'https://images.unsplash.com/photo-1598327105666-5b1730a3d066?w=400&h=400&fit=crop&q=80',
    },
    {
      id: 5,
      name: 'OnePlus 12',
      brand: 'OnePlus',
      price: 799,
      storage: '256GB',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    },
    {
      id: 6,
      name: 'Nothing Phone (2)',
      brand: 'Nothing',
      price: 599,
      storage: '256GB',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop',
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full text-xs sm:text-sm font-bold text-blue-300 uppercase tracking-wider shadow-lg shadow-blue-500/20">
              ✨ All Products
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Our Complete Collection
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
            Explore our full range of premium smartphones from the world's leading manufacturers
          </p>
          
          {/* Decorative Line */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-12 sm:w-20 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-12 sm:w-20 h-0.5 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
        </div>

        {/* Products Grid - Desktop Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {phones.map((phone, index) => (
            <Link key={phone.id} to={`/product/${phone.id}`} className="group block bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/30 relative animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              {/* Image Container */}
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center min-h-[280px] sm:min-h-[320px] overflow-hidden group-hover:shadow-inner">
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30"></div>
                </div>
                
                {/* Brand Badge */}
                <span className="absolute top-4 left-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-xl border border-blue-400/40 rounded-xl text-xs font-bold text-blue-200 uppercase tracking-wider z-10 shadow-lg shadow-blue-500/20">
                  {phone.brand}
                </span>
                
                {/* Product Image */}
                <img 
                  src={phone.image} 
                  alt={phone.name} 
                  className="w-full h-48 sm:h-56 object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10 drop-shadow-2xl filter group-hover:brightness-110" 
                  loading="lazy" 
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 relative">
                {/* Gradient Line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{phone.name}</h3>
                <p className="text-sm text-slate-400 mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  {phone.storage}
                </p>
                
                {/* Price and Button */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    ${phone.price}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-bold hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-blue-400/30 flex items-center gap-2 shadow-lg shadow-blue-500/30"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="hidden sm:inline">Add to Cart</span>
                    <span className="sm:hidden">Add</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Shops
