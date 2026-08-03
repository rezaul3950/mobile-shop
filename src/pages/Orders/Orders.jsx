import { FiPackage, FiTruck, FiCheckCircle, FiClock } from 'react-icons/fi'

function Orders() {
  const orders = [
    {
      id: 'ORD-001',
      product: 'iPhone 15 Pro',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
      price: 999,
      status: 'Delivered',
      date: '2024-01-15',
      icon: FiCheckCircle,
      color: 'text-green-400'
    },
    {
      id: 'ORD-002',
      product: 'Galaxy S24 Ultra',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519efa?w=400&h=400&fit=crop',
      price: 1099,
      status: 'In Transit',
      date: '2024-01-18',
      icon: FiTruck,
      color: 'text-blue-400'
    },
    {
      id: 'ORD-003',
      product: 'Xiaomi 14 Pro',
      image: 'https://images.unsplash.com/photo-1598327105666-5b1730a3d066?w=400&h=400&fit=crop',
      price: 699,
      status: 'Processing',
      date: '2024-01-20',
      icon: FiClock,
      color: 'text-orange-400'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border-2 border-blue-400/30">
            <FiPackage className="text-3xl text-blue-400" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">My Orders</h1>
          <p className="text-sm text-slate-400">Track and manage your orders</p>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => {
            const StatusIcon = order.icon
            return (
              <div
                key={order.id}
                className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl p-5 hover:border-blue-400/60 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/15 group-hover:via-purple-600/15 group-hover:to-pink-600/15 transition-all duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative z-10 flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                    <img 
                      src={order.image} 
                      alt={order.product}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  {/* Order Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-white font-bold text-base mb-1 group-hover:text-blue-200 transition-colors">
                          {order.product}
                        </h3>
                        <p className="text-xs text-slate-400">Order ID: {order.id}</p>
                      </div>
                      <span className="text-lg font-black text-white">${order.price}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StatusIcon className={`text-sm ${order.color}`} />
                        <span className={`text-xs font-semibold ${order.color}`}>
                          {order.status}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">{order.date}</span>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-400/0 group-hover:bg-blue-400 transition-all duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* Empty state if no orders */}
        {orders.length === 0 && (
          <div className="text-center py-16">
            <FiPackage className="text-6xl text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-lg">No orders yet</p>
            <p className="text-slate-500 text-sm mt-2">Start shopping to see your orders here</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders