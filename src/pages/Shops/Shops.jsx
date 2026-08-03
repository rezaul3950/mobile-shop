import { FiShoppingBag, FiMapPin, FiStar, FiClock } from 'react-icons/fi'

function Shops() {
  const shops = [
    {
      id: 1,
      name: 'Tech Hub Store',
      location: 'New York, USA',
      rating: 4.8,
      products: 150,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
      status: 'Open'
    },
    {
      id: 2,
      name: 'Mobile World',
      location: 'Los Angeles, USA',
      rating: 4.6,
      products: 200,
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=400&fit=crop',
      status: 'Open'
    },
    {
      id: 3,
      name: 'Phone Paradise',
      location: 'Chicago, USA',
      rating: 4.9,
      products: 180,
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=400&fit=crop',
      status: 'Closed'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border-2 border-purple-400/30">
            <FiShoppingBag className="text-3xl text-purple-400" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">Our Shops</h1>
          <p className="text-sm text-slate-400">Find the best mobile stores near you</p>
        </div>

        {/* Shops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl overflow-hidden hover:border-purple-400/60 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-blue-600/0 group-hover:from-purple-600/15 group-hover:via-pink-600/15 group-hover:to-blue-600/15 transition-all duration-300"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Shop Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={shop.image} 
                  alt={shop.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    shop.status === 'Open' 
                      ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-400/30'
                  }`}>
                    {shop.status}
                  </span>
                </div>
              </div>

              {/* Shop Info */}
              <div className="relative z-10 p-5">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-200 transition-colors">
                  {shop.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <FiMapPin className="text-slate-400 text-sm" />
                  <span className="text-xs text-slate-400">{shop.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <FiStar className="text-yellow-400 text-sm" />
                    <span className="text-sm font-bold text-white">{shop.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiShoppingBag className="text-slate-400 text-sm" />
                    <span className="text-xs text-slate-400">{shop.products} products</span>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-purple-400/0 group-hover:bg-purple-400 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shops