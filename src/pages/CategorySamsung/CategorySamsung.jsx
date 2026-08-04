import { FiSmartphone } from 'react-icons/fi'

function CategorySamsung() {
  const products = [
    {
      id: 1,
      name: 'Galaxy S24 Ultra',
      brand: 'Samsung',
      price: 1299,
      storage: '512GB',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519efa?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Galaxy S24+',
      brand: 'Samsung',
      price: 999,
      storage: '256GB',
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    },
    {
      id: 3,
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((phone, index) => (
            <div key={phone.id} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-600/30">
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-blue-600/10 via-blue-700/10 to-blue-800/10 flex items-center justify-center min-h-[280px]">
                <img src={phone.image} alt={phone.name} className="w-full h-48 object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
              </div>
              <div className="p-6 sm:p-8 relative">
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 opacity-50"></div>
                <h3 className="text-xl font-bold text-white mb-2">{phone.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{phone.storage}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent">${phone.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategorySamsung