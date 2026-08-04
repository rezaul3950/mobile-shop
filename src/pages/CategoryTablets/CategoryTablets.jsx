import { FiTablet } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function CategoryTablets() {
  const products = [
    {
      id: 101,
      name: 'iPad Pro 12.9"',
      brand: 'Apple',
      price: 1099,
      storage: '256GB',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    },
    {
      id: 102,
      name: 'Galaxy Tab S9',
      brand: 'Samsung',
      price: 899,
      storage: '128GB',
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop',
    },
    {
      id: 103,
      name: 'Xiaomi Pad 6',
      brand: 'Xiaomi',
      price: 499,
      storage: '128GB',
      image: 'https://images.unsplash.com/photo-1585792180666-f7347f490ea2?w=400&h=400&fit=crop',
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 pt-24 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full text-sm font-bold text-purple-300 uppercase tracking-wider mb-4">
            <FiTablet className="text-purple-400" />
            <span>Category</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Tablets
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Powerful tablets for work and entertainment
          </p>
        </div>

        {/* Products Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {products.map((phone, index) => (
            <Link key={phone.id} to={`/product/${phone.id}`} className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-purple-400/60 hover:scale-105 transition-all duration-300 block">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-blue-600/0 group-hover:from-purple-600/15 group-hover:via-pink-600/15 group-hover:to-blue-600/15 transition-all duration-300"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Image Container */}
              <div className="relative p-3 sm:p-6 lg:p-8 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 flex items-center justify-center min-h-[140px] sm:min-h-[200px] lg:min-h-[280px]">
                {/* Brand Badge */}
                <span className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-xl border border-purple-400/40 rounded-lg text-[10px] sm:text-xs font-bold text-purple-200 uppercase tracking-wider z-10">
                  {phone.brand}
                </span>
                
                <img src={phone.image} alt={phone.name} className="w-full h-24 sm:h-40 lg:h-48 object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-3 sm:p-6 lg:p-8">
                {/* Gradient Line */}
                <div className="absolute top-0 left-3 right-3 sm:left-6 sm:right-6 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-50"></div>
                
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-purple-300 transition-colors leading-tight">{phone.name}</h3>
                <p className="text-[10px] sm:text-sm text-slate-400 mb-2 sm:mb-4 flex items-center gap-1">
                  <svg className="w-3 h-3 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  {phone.storage}
                </p>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                    ${phone.price}
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400/0 group-hover:bg-purple-400 transition-all duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryTablets