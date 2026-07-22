import React, { useState } from 'react';
import {
  Smartphone,
  Tablet,
  Apple,
  Headphones,
  Watch,
  ArrowRight,
  SmartphoneIcon,
  Monitor,
  Tv,
  Video,
  Plus
} from "lucide-react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as SiBrands from "react-icons/si";


function Categories() {

  const categories = [
    {
      name: "Smartphones",
      desc: "Latest flagship phones",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    },
    {
      name: "Tablets",
      desc: "Powerful tablets",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    },
    {
      name: "iPhone",
      desc: "Premium Apple devices",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    },
    {
      name: "Samsung",
      desc: "Galaxy series",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519efa?w=400&h=400&fit=crop",
    },
    {
      name: "Accessories",
      desc: "Smart mobile gear",
      image: "https://images.unsplash.com/photo-1572569028738-411a196cb574?w=400&h=400&fit=crop",
    },
    {
      name: "Wearables",
      desc: "Smart lifestyle tech",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    },
  ];

  // Mobile brand icons (shown only on mobile)
  const allMobileCategories = [
    { name: "iPhone", icon: FaIcons.FaApple },
    { name: "Samsung", icon: SiIcons.SiSamsung },
    { name: "Google", icon: FaIcons.FaGoogle },
    { name: "OnePlus", icon: SiIcons.SiOneplus },
    { name: "Xiaomi", icon: SiIcons.SiXiaomi },
    { name: "Motorola", icon: SiIcons.SiMotorola },
    { name: "Huawei", icon: SiBrands.SiHuawei },
    { name: "Nokia", icon: SiBrands.SiNokia },
    { name: "HTC", icon: SiBrands.SiHtc },
  ];
  
  const [showAllBrands, setShowAllBrands] = React.useState(false);
  const mobileCategories = showAllBrands ? allMobileCategories : allMobileCategories.slice(0, 3);


  return (

    <section
      id="categories"
      className="
      relative
      py-4 lg:py-24
      bg-slate-950
      overflow-hidden
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2

        w-[600px]
        h-[350px]

        bg-blue-500/20

        blur-[120px]

        rounded-full
        "
      />


      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-6
        "
      >


        {/* Section Title Mobile - Hidden */}
        <div className="best-offers-header lg:hidden hidden">
          <h3 className="section-title-mobile">Top Brands</h3>
          <a href="#categories" onClick={(e) => { e.preventDefault(); setShowAllBrands(!showAllBrands); }}>
            {showAllBrands ? 'Show Less' : 'See All'}
          </a>
        </div>

        {/* Mobile Category Icons Grid - Hidden */}
        <div className="category-icons-grid lg:hidden hidden">
          {mobileCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div key={index} className="category-icon-item">
                <div className="icon-wrapper">
                  {Icon ? <Icon size={24} /> : <span>📱</span>}
                </div>
                <span>{cat.name}</span>
              </div>
            )
          })}
        </div>

        {/* Heading */}

        <div className="text-center mb-16">


          <p
            className="
            text-blue-400
            uppercase
            tracking-[0.35em]
            text-sm
            font-semibold
            "
          >
            Explore Categories
          </p>


          <h2
            className="
            mt-4
            text-4xl
            md:text-5xl
            font-black
            text-white
            "
          >
            Find Your
            <span
              className="
              ml-3

              bg-gradient-to-r
              from-blue-400
              via-purple-500
              to-pink-500

              bg-clip-text
              text-transparent
              "
            >
              Perfect Device
            </span>
          </h2>


          <p
            className="
            mt-5
            text-slate-400
            max-w-xl
            mx-auto
            "
          >
            Discover smartphones, accessories and smart devices from top brands.
          </p>


        </div>

        {/* Category Grid - Hidden on mobile */}

        <div
          className="
          hidden lg:grid

          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3

          gap-6
          "
        >


          {
            categories.map((item,index)=>{


              return (

                <div
                  key={index}

                  className="
                  group

                  relative

                  p-6

                  rounded-3xl

                  bg-white/5

                  backdrop-blur-xl

                  border
                  border-white/10

                  hover:border-blue-400/40

                  hover:-translate-y-2

                  transition-all
                  duration-300

                  overflow-hidden

                  cursor-pointer
                  "
                >


                  {/* Hover Glow */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-blue-500/20
                    via-purple-500/10
                    to-transparent

                    opacity-0

                    group-hover:opacity-100

                    transition
                    "
                  />


                  <div
                    className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                    "
                  >


                    <div>


                      <div
                        className="
                        w-16
                        h-16

                        flex
                        items-center
                        justify-center

                        rounded-2xl

                        bg-gradient-to-br
                        from-blue-500/20
                        to-purple-500/20

                        border
                        border-white/10

                        group-hover:scale-110

                        transition

                        overflow-hidden
                        "
                      >

                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                        />

                      </div>



                      <h3
                        className="
                        mt-5
                        text-xl
                        font-bold
                        text-white
                        "
                      >
                        {item.name}
                      </h3>



                      <p
                        className="
                        mt-2
                        text-sm
                        text-slate-400
                        "
                      >
                        {item.desc}
                      </p>


                    </div>


                    <ArrowRight
                      className="
                      text-slate-500

                      group-hover:text-blue-400

                      group-hover:translate-x-2

                      transition
                      "
                    />


                  </div>


                </div>

              )

            })
          }


        </div>



        {/* Button - Hidden on mobile */}

        <div className="hidden lg:flex justify-center mt-12">


          <button
            className="
            flex
            items-center
            gap-2

            px-8
            py-4

            rounded-full

            bg-gradient-to-r
            from-blue-500
            to-purple-600

            text-white

            font-semibold

            shadow-lg
            shadow-blue-500/30

            hover:scale-105

            transition
            "
          >

            Browse All Devices

            <ArrowRight size={20}/>

          </button>


        </div>


      </div>


    </section>

  )
}


export default Categories;