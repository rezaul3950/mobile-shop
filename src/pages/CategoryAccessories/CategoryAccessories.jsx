import { FiHeadphones } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function CategoryAccessories() {
  const products = [
    {
      id: 1,
      name: 'Wireless Earbuds Pro',
      brand: 'TechBrand',
      price: 199,
      storage: 'Premium',
      image: 'https://images.unsplash.com/photo-1572569028738-411a196cb574?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Fast Charger 65W',
      brand: 'PowerTech',
      price: 49,
      storage: '65W',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Phone Case Premium',
      brand: 'ProtectCo',
      price: 39,
      storage: 'Universal',
      image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 pt-24 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-full text-sm font-bold text-green-300 uppercase tracking-wider mb-4">
            <FiHeadphones className="text-green-400" />
            <span>Category</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Accessories
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Smart mobile gear and accessories
          </p>
        </div>

        {/* Products Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {products.map((phone, index) => (
            <Link key={phone.id} to={`/product/${phone.id}`} className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-green-400/60 hover:scale-105 transition-all duration-300 block">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 via-emerald-600/0 to-teal-600/0 group-hover:from-green-600/15 group-hover:via-emerald-600/15 group-hover:to-teal-600/15 transition-all duration-300"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Image Container */}
              <div className="relative p-3 sm:p-6 lg:p-8 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 flex items-center justify-center min-h-[140px] sm:min-h-[200px] lg:min-h-[280px]">
                {/* Brand Badge */}
                <span className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-xl border border-green-400/40 rounded-lg text-[10px] sm:text-xs font-bold text-green-200 uppercase tracking-wider z-10">
                  {phone.brand}
                </span>
                
                <img src={phone.image} alt={phone.name} className="w-full h-24 sm:h-40 lg:h-48 object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-3 sm:p-6 lg:p-8">
                {/* Gradient Line */}
                <div className="absolute top-0 left-3 right-3 sm:left-6 sm:right-6 h-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-50"></div>
                
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-green-300 transition-colors leading-tight">{phone.name}</h3>
                <p className="text-[10px] sm:text-sm text-slate-400 mb-2 sm:mb-4 flex items-center gap-1">
                  <svg className="w-3 h-3 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  {phone.storage}
                </p>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    ${phone.price}
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400/0 group-hover:bg-green-400 transition-all duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryAccessories