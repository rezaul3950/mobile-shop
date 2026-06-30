
import heroImage from '../../assets/hero.png'

function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 overflow-hidden pt-20">
      {/* Animated glow effects */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/50 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/40 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-500/30 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-2rem)]">
        {/* Content */}
        <div className="text-white animate-fadeInUp space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-xl border border-blue-500/40 rounded-full text-sm font-semibold text-blue-200 animate-pulse">
            <span>⭐</span>
            <span>NEW ARRIVAL 2026</span>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            Next Level
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Smartphones
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
            Discover the latest smartphones from top brands with cutting-edge technology and premium design.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#shop" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-xl shadow-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2">
                Shop Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="#deals" className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-blue-500/50 rounded-xl font-semibold hover:bg-blue-500/10 hover:border-blue-500/80 hover:-translate-y-1 transition-all backdrop-blur-xl">
              <span className="group-hover:text-blue-200 transition-colors">Explore Deals</span>
            </a>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="group flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div>
                <strong className="block text-white font-semibold">Free Shipping</strong>
                <span className="text-sm text-slate-400">On orders over $500</span>
              </div>
            </div>
            
            <div className="group flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <strong className="block text-white font-semibold">1 Year Warranty</strong>
                <span className="text-sm text-slate-400">Official brand warranty</span>
              </div>
            </div>
            
            <div className="group flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <div>
                <strong className="block text-white font-semibold">24/7 Support</strong>
                <span className="text-sm text-slate-400">Dedicated support</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual */}
        <div className="relative flex items-center justify-center animate-fadeInRight">
          {/* Enhanced glow effects */}
          <div className="absolute w-[500px] h-[500px] bg-blue-500/60 rounded-full blur-[60px] animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-purple-500/50 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Phone image with advanced 3D animations */}
          <div className="relative group">
            <div className="animate-float-rotate">
              <img
                src={heroImage}
                alt="Latest Smartphone"
                className="relative w-80 h-[640px] object-contain z-10 transition-all duration-500 group-hover:scale-110 animate-phone-glow"
                style={{ 
                  filter: 'drop-shadow(0 30px 60px rgba(59, 130, 246, 0.6)) drop-shadow(0 10px 20px rgba(139, 92, 246, 0.4))'
                }}
              />
            </div>
            
            {/* Multiple rotating rings with different speeds */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[500px] h-[500px] border-2 border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute w-[450px] h-[450px] border border-purple-500/15 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              <div className="absolute w-[400px] h-[400px] border border-pink-500/10 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
              <div className="absolute w-[350px] h-[350px] border border-blue-400/10 rounded-full animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
            </div>
            
            {/* Animated glow effect behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-[640px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-[3rem] blur-3xl animate-pulse"></div>
            </div>
            
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-[3rem]">
              <div className="absolute inset-0 animate-shimmer"></div>
            </div>
          </div>
          
          {/* Quality Card */}
          <div className="absolute top-[10%] right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl z-20 hover:bg-white/15 hover:scale-105 transition-all cursor-pointer group animate-pulse">
            <div className="text-2xl mb-2 group-hover:animate-bounce">💎</div>
            <div>
              <strong className="block text-white font-semibold text-sm">Premium Quality</strong>
              <span className="text-xs text-slate-300">Built with the best materials</span>
            </div>
          </div>
          
          {/* Rating Card */}
          <div className="absolute bottom-[15%] right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl z-20 hover:bg-white/15 hover:scale-105 transition-all cursor-pointer group animate-pulse" style={{ animationDelay: '1s' }}>
            <div className="text-2xl mb-2">📊</div>
            <div>
              <strong className="block text-white font-semibold text-sm">4.9/5 Rating</strong>
              <div className="text-sm my-1">⭐⭐⭐⭐⭐</div>
              <span className="text-xs text-slate-300">From 2,500+ customers</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brands */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl py-4 px-6 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50"></div>
          
          {/* Content */}
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-400 tracking-widest uppercase whitespace-nowrap">Top Brands You Trust</span>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              <div className="group">
                <div className="text-xl md:text-2xl font-bold text-slate-400 opacity-60 hover:opacity-100 hover:text-white transition-all cursor-pointer transform hover:scale-110 transition-transform duration-300">
                  I Phone
                </div>
              </div>
              
              <div className="group">
                <div className="text-lg md:text-xl font-bold text-slate-400 opacity-60 hover:opacity-100 hover:text-white transition-all cursor-pointer transform hover:scale-110 transition-transform duration-300 tracking-tight">
                  Samsung
                </div>
              </div>
              
              <div className="group">
                <div className="text-lg md:text-xl font-bold text-slate-400 opacity-60 hover:opacity-100 hover:text-white transition-all cursor-pointer transform hover:scale-110 transition-transform duration-300">
                  Google
                </div>
              </div>
              
              <div className="group">
                <div className="text-lg md:text-xl font-bold text-slate-400 opacity-60 hover:opacity-100 hover:text-white transition-all cursor-pointer transform hover:scale-110 transition-transform duration-300">
                  1+ OnePlus
                </div>
              </div>
              
              <div className="group">
                <div className="text-lg md:text-xl font-bold text-slate-400 opacity-60 hover:opacity-100 hover:text-white transition-all cursor-pointer transform hover:scale-110 transition-transform duration-300">
                  Xiaomi
                </div>
              </div>
              
              <div className="group">
                <div className="text-lg md:text-xl font-bold text-slate-400 opacity-60 hover:opacity-100 hover:text-white transition-all cursor-pointer transform hover:scale-110 transition-transform duration-300">
                  ealme
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
