import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/formatPrice'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Your Cart</h1>
          <p className="text-lg text-slate-400">Your cart is empty</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-white mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex gap-6">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-contain rounded-lg" />
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-sm text-slate-400 mb-3">{item.storage}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all"
                      >
                        -
                      </button>
                      <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all"
                      >
                        +
                      </button>
                    </div>
                    
                    <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-slate-400 hover:text-red-400 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="pt-3 border-t border-white/10 flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
              </div>
              
              <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart