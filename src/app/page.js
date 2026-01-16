import React from 'react'
import FAQSection from './Component/Faq'
import Choose from './Component/Choose'
import Howwork from './Component/Howwork'
import Service from './Component/Service'
import ServicesSection from './Component/Servicesection'
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
      <Counter />
      <Service />
      <ServicesSection />
      <Choose />
      <Contact/>
      <FAQSection />
      <Howwork />
      <BlogSection />

    </>
  )
}

export default page