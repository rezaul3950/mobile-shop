import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { useState } from 'react';

const brands = [
  { name: "iPhone", icon: FaIcons.FaApple },
  { name: "Samsung", icon: SiIcons.SiSamsung },
  { name: "Google", icon: FaIcons.FaGoogle },
  { name: "OnePlus", icon: SiIcons.SiOneplus },
  { name: "Xiaomi", icon: SiIcons.SiXiaomi },
  { name: "Motorola", icon: SiIcons.SiMotorola }, 
  { name: "Huawei", icon: SiIcons.SiHuawei },
  { name: "Nokia", icon: SiIcons.SiNokia },
  { name: "HTC", icon: SiIcons.SiHtc },
];

function TopBrands() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleBrands = isExpanded ? brands : brands.slice(0, 6);

  return (
    <section className="lg:hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 py-10 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Section Header */}
      <div className="relative z-10 mb-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-1">
          Top Brands
        </h2>
        <p className="text-xs text-slate-400">
          Premium smartphone manufacturers
        </p>
      </div>

      {/* Circular Logo Buttons Grid */}
      <div className="relative z-10 grid grid-cols-3 gap-6 mb-6">
        {visibleBrands.map((brand, i) => {
          const Icon = brand.icon;
          return (
            <a
              key={i}
              href="#"
              className="group relative flex flex-col items-center"
            >
              {/* Circular Logo Button */}
              <div className="
                relative
                w-20
                h-20
                flex
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-slate-800/90
                to-slate-900/90
                backdrop-blur-xl
                border-2
                border-slate-700/50
                shadow-[0_4px_16px_rgba(0,0,0,0.3)]
                hover:shadow-[0_8px_32px_rgba(255,255,255,0.4)]
                hover:border-white/80
                hover:scale-110
                active:scale-95
                transition-all
                duration-300
                cursor-pointer
                overflow-hidden
              ">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/25 group-hover:via-purple-600/25 group-hover:to-pink-600/25 transition-all duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Logo icon */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/40 transition-all"></div>
                    {Icon ? (
                      <Icon 
                        size={36} 
                        className="relative z-10 text-white transition-all duration-300 drop-shadow-lg"
                      />
                    ) : (
                      <span className="relative z-10 text-3xl">📱</span>
                    )}
                  </div>
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800/90 backdrop-blur-xl border border-slate-600/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20">
                  <span className="text-xs text-white font-medium">{brand.name}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Show More/Less Button */}
      <div className="relative z-10 flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="
            group
            relative
            inline-flex
            items-center
            gap-2
            px-6
            py-2.5
            bg-gradient-to-r
            from-indigo-600/30
            to-purple-600/30
            backdrop-blur-xl
            border-2
            border-indigo-400/40
            rounded-full
            text-white
            font-semibold
            text-sm
            hover:bg-gradient-to-r
            hover:from-indigo-600/40
            hover:to-purple-600/40
            hover:border-indigo-400/70
            hover:scale-105
            active:scale-95
            transition-all
            duration-300
            shadow-lg
            hover:shadow-[0_8px_24px_rgba(99,102,241,0.5)]
            overflow-hidden
          "
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          <span className="relative z-10">{isExpanded ? 'Show Less' : 'Show More'}</span>
          
          <svg 
            className={`relative z-10 w-4 h-4 transition-all duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default TopBrands