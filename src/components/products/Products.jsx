import { useCart } from '../../context/CartContext'

function Products() {
  const { addToCart } = useCart()
  
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
    <section id="shop" className="py-20 bg-gradient-to-b from-slate-900 to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Featured Phones
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Hand-picked devices from the world's leading manufacturers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {phones.map((phone) => (
            <article key={phone.id} className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20">
              {/* Image */}
              <div className="relative p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center min-h-[250px]">
                <span className="absolute top-4 left-4 px-3 py-1 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 rounded-lg text-xs font-semibold text-blue-200 uppercase tracking-wider">
                  {phone.brand}
                </span>
                <img 
                  src={phone.image} 
                  alt={phone.name} 
                  className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300" 
                  loading="lazy" 
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{phone.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{phone.storage}</p>
                
                <div className="flex items-center justify-between gap-4">
                  <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    ${phone.price}
                  </span>
                  <button 
                    onClick={() => addToCart(phone)}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-semibold hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products