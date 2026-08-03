import { FiUser, FiSettings, FiLogOut, FiMail, FiPhone, FiMapPin, FiEdit, FiCamera } from 'react-icons/fi'

function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with Profile Picture */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            {/* Profile Picture with Ring */}
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                <span className="text-4xl font-black bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  JD
                </span>
              </div>
              {/* Camera Icon */}
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center border-2 border-slate-900 hover:scale-110 transition-transform">
                <FiCamera className="text-white text-sm" />
              </button>
            </div>
          </div>
          <h1 className="text-3xl font-black text-white mb-2">John Doe</h1>
          <p className="text-sm text-slate-400">Premium Member</p>
          
          {/* Edit Profile Button */}
          <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-semibold text-white hover:bg-white/10 hover:border-indigo-400/50 transition-all">
            <FiEdit className="text-indigo-400" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl p-4 text-center hover:border-indigo-400/60 hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-indigo-600/15 group-hover:via-purple-600/15 group-hover:to-pink-600/15 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">12</div>
              <div className="text-xs text-slate-400">Orders</div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl p-4 text-center hover:border-pink-400/60 hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 via-red-600/0 to-purple-600/0 group-hover:from-pink-600/15 group-hover:via-red-600/15 group-hover:to-purple-600/15 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl font-black bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-1">8</div>
              <div className="text-xs text-slate-400">Favorites</div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl p-4 text-center hover:border-blue-400/60 hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/15 group-hover:via-purple-600/15 group-hover:to-pink-600/15 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">3</div>
              <div className="text-xs text-slate-400">Reviews</div>
            </div>
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl p-6 mb-6 hover:border-indigo-400/60 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-indigo-600/15 group-hover:via-purple-600/15 group-hover:to-pink-600/15 transition-all duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FiMail className="text-indigo-400" />
              Contact Information
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-10 h-10 flex items-center justify-center bg-indigo-500/20 rounded-lg">
                  <FiMail className="text-indigo-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="text-sm text-white font-medium">john.doe@example.com</p>
                </div>
                <button className="text-indigo-400 hover:text-indigo-300">
                  <FiEdit className="text-sm" />
                </button>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-500/20 rounded-lg">
                  <FiPhone className="text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="text-sm text-white font-medium">+1 234 567 8900</p>
                </div>
                <button className="text-purple-400 hover:text-purple-300">
                  <FiEdit className="text-sm" />
                </button>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-10 h-10 flex items-center justify-center bg-pink-500/20 rounded-lg">
                  <FiMapPin className="text-pink-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-400">Address</p>
                  <p className="text-sm text-white font-medium">New York, USA</p>
                </div>
                <button className="text-pink-400 hover:text-pink-300">
                  <FiEdit className="text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-400/0 group-hover:bg-indigo-400 transition-all duration-300"></div>
        </div>

        {/* Settings & Logout */}
        <div className="space-y-3">
          <button className="w-full group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl p-4 hover:border-indigo-400/60 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 rounded-xl group-hover:scale-110 transition-transform">
                <FiSettings className="text-indigo-400 text-xl" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-white font-bold text-base">Settings</h3>
                <p className="text-xs text-slate-400">Manage your preferences</p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </button>

          <button className="w-full group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl p-4 hover:border-red-400/60 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-red-500/20 rounded-xl group-hover:scale-110 transition-transform">
                <FiLogOut className="text-red-400 text-xl" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-white font-bold text-base">Logout</h3>
                <p className="text-xs text-slate-400">Sign out of your account</p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile