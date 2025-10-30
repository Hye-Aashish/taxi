import React from 'react'
import BlogCards from '../Component/Blog'

const page = () => {
  return (
    <>
       <section className="relative">
  <div className="hero-slider">
    <div className="slider-item relative">
      <div className="relative bg-image h-[150px] md:h-[300px] lg:h-[400px]">
        <img
          className="animated w-full h-full object-cover"
          src="/gallery/img8.webp"
          alt="Banner"
        />

        {/* Black Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />

        <img
          src=""
          
          className="absolute top-0 left-0 md:-left-[72px] z-0 w-full h-[150px] md:h-full lg:h-[400px] object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="absolute top-[30%] lg:top-[40%] px-5 md:px-28 w-full z-[2]">
        <div className="text-white text-center relative">
          <h2 className="text-lg font-medium text-[#ff7236]">Blog</h2>
          <h3 className="text-2xl md:text-[50px] mt-4 leading-none text-white font-bold">
            Blog
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>
    
    <BlogCards/>
    </>
  )
}

export default page