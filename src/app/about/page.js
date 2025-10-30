import React from 'react'
import About from '../Component/About'
import LogoSlider from '../Component/LogoSilder'
import Counter from '../Component/Counter'
import TeamSection from '../Component/team'

const page = () => {
  return (
    <>
      <section className="relative">
        <div className="hero-slider">
          <div className="slider-item">
            <div className="relative bg-image h-[150px] md:h-[300px] lg:h-[400px]">
              <img
                className="animated w-full h-full object-cover"
                src="/gallery/img8.webp"
                alt="Banner"
              />
               <div className="absolute inset-0 bg-black/30 " />
             
            </div>
            <div className="absolute top-[30%] lg:top-[40%] px-5 md:px-28 w-full">
              <div className="text-white text-center relative">
                <h2 className="text-4xl font-medium text-white">About</h2>
                <h3 className="xl:text-xl md:text-[50px] mt-4 leading-none text-white font-bold">
                K.K All Keys Maker: Committed to Security and Customer Satisfaction
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <LogoSlider/>
      <Counter/>
     <TeamSection/> 
    
    </>
  )
}

export default page