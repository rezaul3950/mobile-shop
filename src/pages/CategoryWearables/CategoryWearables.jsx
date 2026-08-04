import { FiWatch } from 'react-icons/fi'

function CategoryWearables() {
  const products = [
    {
      id: 1,
      name: 'Apple Watch Ultra',
      brand: 'Apple',
      price: 799,
      storage: '49mm',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Galaxy Watch 6',
      brand: 'Samsung',
      price: 399,
      storage: '44mm',
      image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Fitbit Charge 5',
      brand: 'Fitbit',
      price: 179,
      storage: 'Standard',
      image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400&h=400&fit=crop',
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 pt-24 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-xl border border-pink-500/30 rounded-full text-sm font-bold text-pink-300 uppercase tracking-wider mb-4">
            <FiWatch className="text-pink-400" />
            <span>Category</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Wearables
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Smart watches and fitness trackers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((phone, index) => (
            <div key={phone.id} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/30">
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-pink-500/10 via-rose-500/10 to-red-500/10 flex items-center justify-center min-h-[280px]">
                <img src={phone.image} alt={phone.name} className="w-full h-48 object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
              </div>
              <div className="p-6 sm:p-8 relative">
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 opacity-50"></div>
                <h3 className="text-xl font-bold text-white mb-2">{phone.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{phone.storage}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 bg-clip-text text-transparent">${phone.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryWearables