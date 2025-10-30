import React from 'react'
import About from '../Component/About'
import LogoSlider from '../Component/LogoSilder'
import Counter from '../Component/Counter'
import TeamSection from '../Component/team'
import Service from '../Component/Service'
import ServicesSection from '../Component/Servicesection'
import Choose from '../Component/Choose'

const page = () => {
  return (
    <>
      <section className="relative">
        <div className="hero-slider">
          <div className="slider-item">
            <div className="relative bg-image h-[150px] md:h-[300px] lg:h-[400px] ">
              <img
                className="animated w-full h-full object-cover "
                src="/gallery/img8.webp"
                alt="Banner"
              />

               <div className="absolute inset-0 bg-black/50 " />
              <img
                src=""
                
                className="absolute  top-0 left-0 md:-left-[72px] z-0 w-full h-[150px] md:h-full lg:h-[400px] object-cover"
              />
            </div>
            <div className="absolute top-[30%] lg:top-[40%] px-5 md:px-28 w-full ">
              <div className="text-white text-center relative">
                <h2 className="text-4xl font-medium text-white">Service</h2>
                <h3 className="xl:text-xl md:text-[50px] mt-4 leading-none text-white font-bold">
                 Fast, Reliable Locksmith Services Anytime
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Service/>
      <ServicesSection/>
      <LogoSlider/>
       <Choose/>
      
    
    </>
  )
}

export default page