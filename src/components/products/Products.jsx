import { useCart } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

function Products() {
  const { addToCart } = useCart()
  const navigate = useNavigate()
  
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
    },
  ]

  return (
    <section id="shop" className="products-section py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile Section Header */}
        <div className="best-offers-header lg:hidden">
          <h3 className="section-title-mobile">Best Offers</h3>
          <a href="#shop">See All</a>
        </div>

        {/* Mobile Products Grid */}
        <div className="mobile-products-grid lg:hidden">
          {phones.slice(0, 6).map((phone, index) => (
            <div key={phone.id} className="mobile-product-card">
              <div className="product-image-wrapper">
                <img 
                  src={phone.image} 
                  alt={phone.name} 
                  loading="lazy" 
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{phone.name}</h3>
                <div className="product-rating">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>(4.8)</span>
                </div>
                <div className="product-price-row">
                  <div className="price-container">
                    <span className="current-price">${phone.price}</span>
                    <span className="original-price">${phone.price + 200}</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      addToCart(phone)
                    }}
                    className="add-to-cart-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full text-xs sm:text-sm font-bold text-blue-300 uppercase tracking-wider shadow-lg shadow-blue-500/20">
              ✨ Premium Collection
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Featured Phones
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
            Hand-picked devices from the world's leading manufacturers, featuring cutting-edge technology and premium design
          </p>
          
          {/* Decorative Line */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-12 sm:w-20 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-12 sm:w-20 h-0.5 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {phones.map((phone, index) => (
            <Link key={phone.id} to={`/product/${phone.id}`} className="product-card-mobile group block bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/30 relative animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              {/* Image Container */}
              <div className="product-image relative p-6 sm:p-8 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center min-h-[280px] sm:min-h-[320px] overflow-hidden group-hover:shadow-inner">
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30"></div>
                </div>
                {/* Animated Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-all duration-500"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Floating Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-purple-500/30 rounded-br-3xl"></div>
                
                {/* Brand Badge */}
                <span className="absolute top-4 left-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-xl border border-blue-400/40 rounded-xl text-xs font-bold text-blue-200 uppercase tracking-wider z-10 shadow-lg shadow-blue-500/20">
                  {phone.brand}
                </span>
                
                {/* Heart/Wishlist Button */}
                <button className="wishlist-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
                
                {/* Hot Badge */}
                {index < 3 && (
                  <span className="absolute top-4 right-4 px-2 sm:px-3 py-1 bg-gradient-to-r from-red-500/30 to-orange-500/30 backdrop-blur-xl border border-red-400/40 rounded-lg text-xs font-bold text-red-200 z-10 animate-pulse">
                    🔥 HOT
                  </span>
                )}
                
                {/* New Badge */}
                {index === 0 && (
                  <span className="absolute top-4 right-4 px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl border border-cyan-400/40 rounded-lg text-xs font-bold text-cyan-200 z-10 animate-pulse">
                    ✨ NEW
                  </span>
                )}
                
                {/* Discount Badge */}
                <span className="absolute bottom-4 right-4 px-2 sm:px-3 py-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-xl border border-green-400/40 rounded-lg text-xs font-bold text-green-200 z-10">
                  -{Math.round((200 / (phone.price + 200)) * 100)}% OFF
                </span>
                
                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white text-sm font-semibold hover:bg-white/20 transition-all">
                    Quick View
                  </button>
                </div>
                
                {/* Product Image */}
                <img 
                  src={phone.image} 
                  alt={phone.name} 
                  className="w-full h-48 sm:h-56 object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10 drop-shadow-2xl filter group-hover:brightness-110" 
                  loading="lazy" 
                />
              </div>

              {/* Content */}
              <div className="product-info p-6 sm:p-8 relative">
                {/* Gradient Line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
                
                <h3 className="product-name text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{phone.name}</h3>
                <p className="text-sm text-slate-400 mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  {phone.storage}
                </p>
                
                {/* Rating */}
                <div className="product-rating flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">(4.8)</span>
                </div>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300 flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"></path>
                    </svg>
                    5G
                  </span>
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs text-purple-300 flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                    Smart
                  </span>
                  <span className="px-2 py-1 bg-pink-500/10 border border-pink-500/20 rounded-lg text-xs text-pink-300 flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                    Pro
                  </span>
                </div>
                
                {/* Price and Button */}
                <div className="product-price-row flex items-center justify-between gap-4">
                  <div className="price-container">
                    <span className="current-price text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      ${phone.price}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="original-price text-xs text-slate-500 line-through">${phone.price + 200}</p>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      addToCart(phone)
                    }}
                    className="add-to-cart-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 sm:mt-20">
          <button 
            onClick={() => navigate('/products')}
            className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-blue-400/30 shadow-lg shadow-blue-500/30"
          >
            View All Products →
          </button>
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Products