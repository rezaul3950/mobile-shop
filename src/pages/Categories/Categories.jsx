import { FiSmartphone, FiTablet, FiWatch, FiHeadphones, FiMonitor, FiTv } from 'react-icons/fi'

function Categories() {
  const categories = [
    {
      name: "Smartphones",
      desc: "Latest flagship phones",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      icon: FiSmartphone
    },
    {
      name: "Tablets",
      desc: "Powerful tablets",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      icon: FiTablet
    },
    {
      name: "iPhone",
      desc: "Premium Apple devices",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
      icon: FiSmartphone
    },
    {
      name: "Samsung",
      desc: "Galaxy series",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519efa?w=400&h=400&fit=crop",
      icon: FiSmartphone
    },
    {
      name: "Accessories",
      desc: "Smart mobile gear",
      image: "https://images.unsplash.com/photo-1572569028738-411a196cb574?w=400&h=400&fit=crop",
      icon: FiHeadphones
    },
    {
      name: "Wearables",
      desc: "Smart lifestyle tech",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
      icon: FiWatch
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full text-sm font-bold text-blue-300 uppercase tracking-wider mb-4">
            <FiSmartphone className="text-blue-400" />
            <span>Explore Categories</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Find Your <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Perfect Device</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover smartphones, accessories and smart devices from top brands
          </p>
        </div>

        {/* Categories Grid - Desktop Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl p-6 hover:border-blue-400/60 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/15 group-hover:via-purple-600/15 group-hover:to-pink-600/15 transition-all duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex-1">
                    {/* Icon */}
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="text-3xl text-blue-400" />
                    </div>

                    {/* Category Info */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">
                      {category.desc}
                    </p>

                    {/* Arrow */}
                    <svg className="w-6 h-6 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Category Image */}
                  <div className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-400/0 group-hover:bg-blue-400 transition-all duration-300"></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Categories