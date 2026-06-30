import { useParams } from 'react-router-dom'
import phones from '../../data/products'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/formatPrice'

function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = phones.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Product not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex items-center justify-center min-h-[500px]">
            <img src={product.image} alt={product.name} className="w-full h-full object-contain max-h-[500px]" />
          </div>

          {/* Info */}
          <div className="text-white">
            <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-sm font-semibold text-blue-200 mb-4">
              {product.brand}
            </span>
            
            <h1 className="text-4xl sm:text-5xl font-black mb-4">{product.name}</h1>
            <p className="text-lg text-slate-400 mb-6">{product.storage}</p>
            
            <p className="text-4xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {formatPrice(product.price)}
            </p>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails