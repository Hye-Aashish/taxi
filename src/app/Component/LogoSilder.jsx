'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const logos = [
  'https://digital.creativemox.com/golock/wp-content/uploads/sites/14/2025/02/logo-4.png',
  'https://digital.creativemox.com/golock/wp-content/uploads/sites/14/2025/02/logo-4.png',
  'https://digital.creativemox.com/golock/wp-content/uploads/sites/14/2025/02/logo-4.png',
  'https://digital.creativemox.com/golock/wp-content/uploads/sites/14/2025/02/logo-4.png',
  'https://digital.creativemox.com/golock/wp-content/uploads/sites/14/2025/02/logo-4.png',
  'https://digital.creativemox.com/golock/wp-content/uploads/sites/14/2025/02/logo-4.png',


];

export default function LogoSlider() {
  return (
    <div className="w-full py-8 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {logos.map((src, idx) => (
            <SwiperSlide key={idx} className="flex justify-center items-center">
              <img src={src} alt={`Logo ${idx + 1}`} width={120} height={60} className="object-contain grayscale hover:grayscale-0 transition duration-300" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
