function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gradient-to-t from-slate-950 via-indigo-950 to-slate-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-md">
            <a href="#home" className="inline-flex items-center gap-2 text-white text-2xl font-bold mb-4 hover:scale-105 transition-transform">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg shadow-blue-500/30">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <span>
                Mobile<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Shop</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed">
              Your trusted destination for the latest smartphones and accessories.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Shop</h4>
              <ul className="space-y-3">
                <li><a href="#shop" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block">All Phones</a></li>
                <li><a href="#shop" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block">New Arrivals</a></li>
                <li><a href="#shop" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Best Sellers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#contact" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Contact Us</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Shipping Info</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#contact" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block">About Us</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Careers</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">Rezaul Karim</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer