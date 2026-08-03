import { FiUser, FiSettings, FiLogOut, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full border-2 border-indigo-400/30">
            <FiUser className="text-4xl text-indigo-400" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">My Profile</h1>
          <p className="text-sm text-slate-400">Manage your account settings</p>
        </div>

        {/* Profile Card */}
        <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl p-6 mb-6 hover:border-indigo-400/60 transition-all duration-300 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-indigo-600/15 group-hover:via-purple-600/15 group-hover:to-pink-600/15 transition-all duration-300"></div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">John Doe</h3>
                <p className="text-sm text-slate-400">Premium Member</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <FiMail className="text-indigo-400 text-lg" />
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="text-sm text-white font-medium">john.doe@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <FiPhone className="text-indigo-400 text-lg" />
                <div>
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="text-sm text-white font-medium">+1 234 567 8900</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <FiMapPin className="text-indigo-400 text-lg" />
                <div>
                  <p className="text-xs text-slate-400">Address</p>
                  <p className="text-sm text-white font-medium">New York, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-400/0 group-hover:bg-indigo-400 transition-all duration-300"></div>
        </div>

        {/* Settings */}
        <div className="space-y-3">
          <button className="w-full group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl p-4 hover:border-indigo-400/60 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 rounded-xl">
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
              <div className="w-12 h-12 flex items-center justify-center bg-red-500/20 rounded-xl">
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