import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/formatPrice'

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedPayment) {
      alert('Please select a payment method')
      return
    }
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-4xl font-black text-white mb-4">Order Placed Successfully!</h1>
          <p className="text-lg text-slate-400">Thank you for your purchase. You will receive a confirmation email shortly.</p>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Checkout</h1>
          <p className="text-lg text-slate-400">Your cart is empty</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-white mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Shipping Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Address</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">City</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">ZIP Code</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
                <div className="space-y-3">
                  {/* bKash */}
                  <div 
                    onClick={() => setSelectedPayment('bkash')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPayment === 'bkash' 
                        ? 'border-pink-500 bg-pink-500/10' 
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === 'bkash' ? 'border-pink-500' : 'border-white/30'
                      }">
                        {selectedPayment === 'bkash' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">bKash</p>
                        <p className="text-xs text-slate-400">Pay with bKash mobile banking</p>
                      </div>
                      <span className="text-2xl">📱</span>
                    </div>
                    {selectedPayment === 'bkash' && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <label className="block text-sm font-medium text-slate-300 mb-2">bKash Number</label>
                        <input 
                          type="tel" 
                          placeholder="01XXXXXXXXX"
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all"
                        />
                      </div>
                    )}
                  </div>

                  {/* Nagad */}
                  <div 
                    onClick={() => setSelectedPayment('nagad')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPayment === 'nagad' 
                        ? 'border-orange-500 bg-orange-500/10' 
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === 'nagad' ? 'border-orange-500' : 'border-white/30'
                      }">
                        {selectedPayment === 'nagad' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">Nagad</p>
                        <p className="text-xs text-slate-400">Pay with Nagad mobile banking</p>
                      </div>
                      <span className="text-2xl">💳</span>
                    </div>
                    {selectedPayment === 'nagad' && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <label className="block text-sm font-medium text-slate-300 mb-2">Nagad Number</label>
                        <input 
                          type="tel" 
                          placeholder="01XXXXXXXXX"
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        />
                      </div>
                    )}
                  </div>

                  {/* Cash on Delivery */}
                  <div 
                    onClick={() => setSelectedPayment('cod')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPayment === 'cod' 
                        ? 'border-green-500 bg-green-500/10' 
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === 'cod' ? 'border-green-500' : 'border-white/30'
                      }">
                        {selectedPayment === 'cod' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">Cash on Delivery</p>
                        <p className="text-xs text-slate-400">Pay when you receive your order</p>
                      </div>
                      <span className="text-2xl">💵</span>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full mt-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
              >
                Place Order - {formatPrice(cartTotal)}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b border-white/10">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-lg" />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-400">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-white font-semibold text-sm">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout