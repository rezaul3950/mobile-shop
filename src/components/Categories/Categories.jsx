import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight
} from "lucide-react";


function Categories() {
  const navigate = useNavigate()

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

  const handleCategoryClick = (categoryName) => {
    const categoryRoutes = {
      'Smartphones': '/category/smartphones',
      'Tablets': '/category/tablets',
      'iPhone': '/category/iphone',
      'Samsung': '/category/samsung',
      'Google': '/category/google',
      'Motorola': '/category/motorola',
      'Huawei': '/category/huawei',
      'Accessories': '/category/accessories',
      'Wearables': '/category/wearables'
    }
    // Use React Router navigate for proper client-side routing
    // Scroll to top first to prevent any scroll conflicts
    window.scrollTo(0, 0)
    navigate(categoryRoutes[categoryName] || '/products')
  }

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
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleCategoryClick(item.name)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleCategoryClick(item.name)
                    }
                  }}
                  tabIndex={0}
                  role="button"
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
            onClick={() => navigate('/categories')}
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