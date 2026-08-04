import { FiSmartphone } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function CategorySamsung() {
  const products = [
    {
      id: 301,
      name: 'Galaxy S24 Ultra',
      brand: 'Samsung',
      price: 1299,
      storage: '512GB',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519efa?w=400&h=400&fit=crop',
    },
    {
      id: 302,
      name: 'Galaxy S24+',
      brand: 'Samsung',
      price: 999,
      storage: '256GB',
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    },
    {
      id: 303,
      name: 'Galaxy Z Fold 5',
      brand: 'Samsung',
      price: 1799,
      storage: '256GB',
      image: 'https://images.unsplash.com/photo-1628744448839-30aa98c53b10?w=400&h=400&fit=crop',
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 pt-24 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-xl border border-blue-600/30 rounded-full text-sm font-bold text-blue-300 uppercase tracking-wider mb-4">
            <FiSmartphone className="text-blue-400" />
            <span>Category</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Samsung
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Galaxy series smartphones with innovative features
          </p>
        </div>

        {/* Products Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {products.map((phone, index) => (
            <Link key={phone.id} to={`/product/${phone.id}`} className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-blue-600/60 hover:scale-105 transition-all duration-300 block">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-700/0 to-blue-800/0 group-hover:from-blue-600/15 group-hover:via-blue-700/15 group-hover:to-blue-800/15 transition-all duration-300"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Image Container */}
              <div className="relative p-3 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-600/10 via-blue-700/10 to-blue-800/10 flex items-center justify-center min-h-[140px] sm:min-h-[200px] lg:min-h-[280px]">
                {/* Brand Badge */}
                <span className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-blue-600/30 to-blue-800/30 backdrop-blur-xl border border-blue-400/40 rounded-lg text-[10px] sm:text-xs font-bold text-blue-200 uppercase tracking-wider z-10">
                  {phone.brand}
                </span>
                
                <img src={phone.image} alt={phone.name} className="w-full h-24 sm:h-40 lg:h-48 object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-3 sm:p-6 lg:p-8">
                {/* Gradient Line */}
                <div className="absolute top-0 left-3 right-3 sm:left-6 sm:right-6 h-0.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 opacity-50"></div>
                
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors leading-tight">{phone.name}</h3>
                <p className="text-[10px] sm:text-sm text-slate-400 mb-2 sm:mb-4 flex items-center gap-1">
                  <svg className="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  {phone.storage}
                </p>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                    ${phone.price}
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400/0 group-hover:bg-blue-400 transition-all duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategorySamsung