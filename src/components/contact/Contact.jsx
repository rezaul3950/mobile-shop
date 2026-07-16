import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaHeadset, FaWhatsapp, FaTelegram } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Us",
      detail: "support@mobileshop.com",
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/30"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/30"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      detail: "+1 (555) 123-4567",
      color: "text-green-400",
      bgColor: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-400/30"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      detail: "123 Tech Street, Silicon Valley, CA",
      color: "text-red-400",
      bgColor: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-400/30"
    }
  ]

  return (
    <section 
      id="contact" 
      className="relative py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/40 to-blue-500/40 backdrop-blur-md border border-indigo-400/50 rounded-full text-sm font-medium text-white mb-6 animate-pulse">
            <FaHeadset className="text-indigo-400" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Let's Start a{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-indigo-400/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className={`text-3xl ${info.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {info.title}
                  </h3>
                  
                  <p className="text-sm text-slate-300">
                    {info.detail}
                  </p>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${info.bgColor} opacity-50 rounded-full blur-2xl group-hover:opacity-100 transition-opacity`}></div>
              </div>
            )
          })}
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-indigo-400/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl">
                <FaPaperPlane className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-black text-white">
                Send Us a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="6"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative w-full py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative flex items-center gap-2">
                  Send Message
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>

          {/* Right Side - Map and Additional Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-64 flex items-center justify-center hover:border-indigo-400/30 transition-all duration-300 relative overflow-hidden group">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20"></div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full shadow-lg shadow-indigo-500/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <FaMapMarkerAlt className="text-4xl text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Our Location</h4>
                <p className="text-slate-300">123 Tech Street, Silicon Valley, CA</p>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-xl border border-indigo-400/30 rounded-3xl p-8 hover:border-indigo-400/50 transition-all duration-300 relative overflow-hidden group">
              {/* Glow effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl group-hover:bg-indigo-500/50 transition-all"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex-shrink-0 shadow-lg shadow-indigo-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <FaHeadset className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Quick Response Guaranteed
                  </h4>
                  <p className="text-slate-300 mb-4">
                    We typically respond within 24 hours. For urgent inquiries, please call us directly.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-indigo-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                    <span className="font-medium">Online and ready to help</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-indigo-400/30 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">4.9/5</div>
                  <div className="text-sm text-slate-400">Customer Rating</div>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-slate-400">Support Available</div>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-slate-400">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact