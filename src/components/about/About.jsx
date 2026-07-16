import { useState, useEffect } from 'react'
import { FaRocket, FaUsers, FaAward, FaGlobe, FaHeart, FaShieldAlt, FaStar, FaTrophy, FaMedal } from 'react-icons/fa'

function About() {
  const [activeTab, setActiveTab] = useState('story')
  const [counters, setCounters] = useState({ customers: 0, countries: 0, awards: 0, satisfaction: 0 })

  const stats = [
    { icon: FaUsers, number: "50K+", label: "Happy Customers", color: "text-blue-400", bgColor: "from-blue-500/20 to-cyan-500/20" },
    { icon: FaGlobe, number: "25+", label: "Countries Served", color: "text-green-400", bgColor: "from-green-500/20 to-emerald-500/20" },
    { icon: FaAward, number: "15+", label: "Industry Awards", color: "text-yellow-400", bgColor: "from-yellow-500/20 to-orange-500/20" },
    { icon: FaRocket, number: "99%", label: "Satisfaction Rate", color: "text-purple-400", bgColor: "from-purple-500/20 to-pink-500/20" }
  ]

  const values = [
    {
      icon: FaHeart,
      title: "Customer First",
      description: "We prioritize our customers' needs and satisfaction above everything else.",
      color: "from-red-500 to-pink-500",
      borderColor: "border-red-400/30"
    },
    {
      icon: FaShieldAlt,
      title: "Quality Guaranteed",
      description: "Every product undergoes rigorous quality testing before reaching you.",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-400/30"
    },
    {
      icon: FaRocket,
      title: "Innovation",
      description: "We stay ahead with the latest technology and trends in mobile devices.",
      color: "from-purple-500 to-indigo-500",
      borderColor: "border-purple-400/30"
    }
  ]

  const achievements = [
    { icon: FaTrophy, title: "Best Mobile Store 2024", description: "Awarded by Tech Industry Association" },
    { icon: FaMedal, title: "Excellence in Service", description: "Customer Choice Award 2023" },
    { icon: FaStar, title: "Top Rated Platform", description: "4.9/5 stars from 50,000+ reviews" }
  ]

  return (
    <section 
      id="about" 
      className="relative py-16 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40 backdrop-blur-md border border-blue-400/50 rounded-full text-xs font-medium text-white mb-4">
            <FaRocket className="text-blue-400 text-sm" />
            <span>ABOUT US</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            We're Changing the Way You{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Shop
            </span>
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Your trusted destination for premium mobile devices and accessories.
          </p>
        </div>

        {/* Stats Grid - Compact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className={`text-2xl ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-black text-white mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Story Section with Tabs - Compact */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div>
            {/* Tab Buttons */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab('story')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'story'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                Our Story
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'mission'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                Mission & Vision
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300">
              {activeTab === 'story' ? (
                <div className="space-y-3 text-slate-300">
                  <p className="text-sm leading-relaxed">
                    Founded in 2020, MobileShop started with a simple mission: to make premium mobile technology accessible to everyone. What began as a small startup has grown into a trusted name in the mobile industry.
                  </p>
                  <p className="text-sm leading-relaxed">
                    We believe in providing not just products, but experiences. Every device we sell is carefully selected to ensure it meets our high standards of quality and performance.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Today, we serve over 50,000 customers worldwide and continue to grow, driven by our commitment to excellence and customer satisfaction.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex-shrink-0 shadow-lg">
                      <FaRocket className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Our Mission</h4>
                      <p className="text-sm text-slate-300">To provide cutting-edge mobile technology with exceptional customer service, making premium devices accessible to all.</p>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex-shrink-0 shadow-lg">
                      <FaGlobe className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Our Vision</h4>
                      <p className="text-sm text-slate-300">To become the world's most trusted destination for mobile technology, known for quality, innovation, and customer-centricity.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Achievements - Compact */}
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:border-purple-400/40 hover:translate-x-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-start gap-3">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-400/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Icon className="text-xl text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Values Section - Compact */}
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-8">
            What We{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Stand For
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Icon className="text-2xl text-white" />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">
                      {value.title}
                    </h4>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${value.color} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity`}></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section - Compact */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 rounded-2xl hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Ready to Experience the Difference?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl mb-4">
                Join thousands of satisfied customers who trust us for their mobile needs.
              </p>
              <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:-translate-y-1 transition-all shadow-xl shadow-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative flex items-center gap-2 text-sm">
                  Shop Now
                  <FaRocket className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About