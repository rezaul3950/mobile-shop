
import heroImage from '../../assets/Hero_Section.png'
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import React, { useState, useEffect } from 'react';

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

function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const bannerImages = [
    '/mobile view banner 1.jpg',
    '/mobile view banner 2.jpg',
    '/mobile view banner 3.jpg',
    '/mobile view banner 4.jpg'
  ];

  // Auto-slide banner every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [bannerImages.length]);

  // Vercel deployment fix - brand icons
  return (
    <section 
        id="home"
        className="hero-section relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 overflow-hidden"
    >
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center min-h-[60vh]">
      
      {/* Mobile Banner - Only visible on mobile */}
      <div className="lg:hidden">
        {/* Animated Banner Carousel */}
        <div className="relative w-full aspect-square overflow-hidden">
          {bannerImages.map((banner, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(${(index - currentBanner) * 100}%)`,
                opacity: index === currentBanner ? 1 : 0,
              }}
            >
              <img 
                src={banner} 
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          
          {/* Banner Dots */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: index === currentBanner ? '#667eea' : 'rgba(255, 255, 255, 0.5)',
                  width: index === currentBanner ? '16px' : '8px',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content - Desktop only */}
      <div className="hidden lg:block text-white space-y-4 mt-24">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/40 to-purple-500/40 backdrop-blur-md border border-blue-400/50 rounded-full text-sm font-medium text-white">
          <span>✨</span>
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
        
        {/* Visual - Desktop only */}
        <div className="hidden lg:block relative flex items-center justify-center">
          {/* Phone image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Latest Smartphone"
              className="relative w-[32rem] h-[48rem] object-contain z-10"
            />
          </div>
          
          {/* Quality Card */}
          <div className="absolute top-[13%] right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl z-20 hover:bg-white/15 hover:scale-105 transition-all cursor-pointer group animate-pulse">
            <div className="text-2xl mb-2 group-hover:animate-bounce">💎</div>
            <div>
              <strong className="block text-white font-semibold text-sm">Premium Quality</strong>
              <span className="text-xs text-slate-300">Built with the best materials</span>
            </div>
          </div>
          
          {/* Rating Card */}
          <div className="absolute bottom-[10%] right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl z-20 hover:bg-white/15 hover:scale-105 transition-all cursor-pointer group animate-pulse" style={{ animationDelay: '1s' }}>
            <div className="text-2xl mb-2">📊</div>
            <div>
              <strong className="block text-white font-semibold text-sm">4.9/5 Rating</strong>
              <div className="text-sm my-1">⭐⭐⭐⭐⭐</div>
              <span className="text-xs text-slate-300">From 2,500+ customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Brands - Desktop */}
      <div className="hidden lg:flex justify-center py-12 px-6">
        <div className="flex items-center gap-8 px-10 py-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
          
          {/* "TOP BRANDS" text */}
          <div className="flex items-center gap-2 pr-8 border-r border-white/10">
            <span className="text-white font-black tracking-widest text-sm md:text-base uppercase">
              Top Brands
            </span>
          </div>

          {/* Brand icons list */}
          <div className="flex items-center gap-6">
            {brands.map((brand, i) => {
              const Icon = brand.icon;
              return (
                <a
                  key={i}
                  href="#"
                  className="
                  group
                  flex items-center gap-2
                  text-slate-300 
                  font-semibold 
                  text-sm md:text-base 
                  hover:text-white 
                  cursor-pointer 
                  transition-all 
                  duration-300 
                  hover:scale-110
                  "
                >
                  <span className="text-slate-300 group-hover:text-blue-400 transition inline-flex items-center">
                    {Icon ? (
                      <Icon 
                        size={24}
                        className="group-hover:scale-110 transition"
                      />
                    ) : (
                      <span>📱</span>
                    )}
                  </span>
                  <span className="text-slate-300 group-hover:text-white transition">
                    {brand.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
