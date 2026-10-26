import React from 'react'
import FAQSection from './Component/Faq'
import Choose from './Component/Choose'
import Howwork from './Component/Howwork'
import Service from './Component/Service'

import Counter from './Component/Counter'
import About from './Component/About'
import HeroSection from './Component/Herosection'
import BlogSection from './Component/Blog'
import Contact from './Component/Contact'


const page = () => {
  return (
    <>
      <HeroSection />
      <About />

      <Service />
      {/* <ServicesSection /> */}
      <Choose />
          <Counter />
      <FAQSection />
      <Howwork />
        <Contact/>
      <BlogSection />

      
      

    </>
  )
}

export default page