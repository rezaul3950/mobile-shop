import { useState, useEffect } from 'react'
import { FaFire, FaClock, FaTag, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Deals() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const deals = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      originalPrice: 1199,
      dealPrice: 999,
      discount: 17,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
      badge: "Best Seller",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Galaxy S24 Ultra",
      originalPrice: 1299,
      dealPrice: 1099,
      discount: 15,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519efa?w=400&h=400&fit=crop",
      badge: "Limited Time",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Xiaomi 14 Pro",
      originalPrice: 799,
      dealPrice: 699,
      discount: 13,
      image: "https://images.unsplash.com/photo-1598327105666-5b1730a3d066?w=400&h=400&fit=crop",
      badge: "Hot Deal",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      name: "Pixel 8 Pro",
      originalPrice: 999,
      dealPrice: 899,
      discount: 10,
      image: "https://images.unsplash.com/photo-1598327105666-5b1730a3d066?w=400&h=400&fit=crop&q=80",
      badge: "Popular",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section 
      id="deals" 
      className="relative py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/40 to-red-500/40 backdrop-blur-md border border-orange-400/50 rounded-full text-sm font-medium text-white mb-6">
            <FaFire className="text-orange-400" />
            <span>LIMITED TIME OFFERS</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            🔥 Hot Deals of the Day
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Grab these exclusive deals before they're gone! Limited stock available.
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
              <FaClock className="text-orange-400" />
              <span className="text-white font-semibold text-sm">Ends in:</span>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-400/30 rounded-xl">
                <div className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-slate-400">Hours</div>
              </div>
              <div className="text-2xl font-bold text-orange-400">:</div>
              <div className="px-4 py-2 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-400/30 rounded-xl">
                <div className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-slate-400">Minutes</div>
              </div>
              <div className="text-2xl font-bold text-orange-400">:</div>
              <div className="px-4 py-2 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-400/30 rounded-xl">
                <div className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-slate-400">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deals.map((deal) => (
            <Link
              key={deal.id}
              to={`/product/${deal.id}`}
              className="group block relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-orange-400/40 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${deal.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

              {/* Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                  {deal.badge}
                </span>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full">
                  -{deal.discount}%
                </span>
              </div>

               {/* Product Image */}
               <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10 p-6 overflow-hidden">
                 <img 
                   src={deal.image} 
                   alt={deal.name}
                   className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                   loading="lazy"
                 />
               </div>

              {/* Product Info */}
              <div className="relative p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  {deal.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-black text-white">
                    ${deal.dealPrice}
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    ${deal.originalPrice}
                  </span>
                  <span className="text-sm font-semibold text-green-400">
                    Save ${deal.originalPrice - deal.dealPrice}
                  </span>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2">
                  <FaTag className="text-sm" />
                  <span>Grab Deal</span>
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-orange-500/50 rounded-xl font-semibold hover:bg-orange-500/10 hover:border-orange-500/80 hover:-translate-y-1 transition-all backdrop-blur-xl">
            <span className="group-hover:text-orange-200 transition-colors">View All Deals</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Deals