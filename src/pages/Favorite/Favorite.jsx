import { FiHeart, FiShoppingBag } from 'react-icons/fi'

function Favorite() {
  const favorites = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 999,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Galaxy S24 Ultra',
      price: 1099,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519efa?w=400&h=400&fit=crop',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Pixel 8 Pro',
      price: 899,
      image: 'https://images.unsplash.com/photo-1598327105666-5b1730a3d066?w=400&h=400&fit=crop',
      rating: 4.7
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full border-2 border-pink-400/30">
            <FiHeart className="text-3xl text-pink-400" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">My Favorites</h1>
          <p className="text-sm text-slate-400">Your saved items</p>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl overflow-hidden hover:border-pink-400/60 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 via-red-600/0 to-purple-600/0 group-hover:from-pink-600/15 group-hover:via-red-600/15 group-hover:to-purple-600/15 transition-all duration-300"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Product Image */}
              <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10 p-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                />
                
                {/* Heart Icon */}
                <div className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-pink-500/20 backdrop-blur-xl border border-pink-400/30 rounded-full">
                  <FiHeart className="text-pink-400 text-lg" />
                </div>
              </div>

              {/* Product Info */}
              <div className="relative z-10 p-4">
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-pink-200 transition-colors">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-white">${item.price}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">⭐</span>
                    <span className="text-sm font-semibold text-white">{item.rating}</span>
                  </div>
                </div>

                <button className="w-full mt-3 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2">
                  <FiShoppingBag className="text-sm" />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-pink-400/0 group-hover:bg-pink-400 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Empty state if no favorites */}
        {favorites.length === 0 && (
          <div className="text-center py-16">
            <FiHeart className="text-6xl text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-lg">No favorites yet</p>
            <p className="text-slate-500 text-sm mt-2">Save items you love to see them here</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorite