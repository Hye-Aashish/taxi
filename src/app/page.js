import React from 'react'
import GetFree from './Component/Freequoite'
import FAQSection from './Component/Faq'
import TeamSection from './Component/Ourteam'
import PerformanceSection from './Component/Perfrome'
import Choose from './Component/Choose'
import Howwork from './Component/Howwork'
import LocksmithHero from './Component/Locksmith'
import Service from './Component/Service'
import ServicesSection from './Component/Servicesection'
import Counter from './Component/Counter'

import About from './Component/About'
import HeroSection from './Component/Herosection'
import LogoSlider from './Component/LogoSilder'

const page = () => {
  return (
    <>
    <HeroSection/>
    <About/>
      {/* <LogoSlider/> */}
      <Counter />
      <ServicesSection />
      <Service />
      <LocksmithHero />
      <Howwork />
      <Choose />
      <PerformanceSection />
      <TeamSection />
      <FAQSection />
      <GetFree />

    </>
  )
}

export default page