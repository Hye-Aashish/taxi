'use client';

export default function About() {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT SECTION */}
        <div>
          <p className="text-yellow-500 font-semibold mb-2 uppercase">Who we are</p>
          <h2 className="text-3xl md:text-4xl xl:text-4xl font-extrabold text-gray-800 mb-4">
          Comprehensive Locksmith Services for Home, Office, and Vehicle
          </h2>
          <p className="text-gray-500 mb-8 text-base md:text-lg leading-relaxed">
           At K.K All Keys Maker, we specialize in key making, lock repair, ignition services, and advanced security solutions. With years of experience, our certified technicians provide fast, reliable, and professional locksmith services for homes, offices, and vehicles, ensuring safety, convenience, and peace of mind for all customers.
          </p>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="flex flex-wrap items-start gap-4">
              <div className="bg-[#ffa41b] p-3 rounded-lg flex flex-wrap items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-1">Our Vision</h4>
                <p className="text-gray-500 text-sm leading-snug">
                  To be the most trusted locksmith service provider, known for quality, innovation, and exceptional customer care across the region.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex flex-wrap items-start gap-4">
              <div className="bg-[#ffa41b] p-3 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-1">Our Mission</h4>
                <p className="text-gray-500 text-sm leading-snug">
                  To provide fast, reliable, and professional locksmith services, ensuring safety, security, and peace of mind for every home, office, and vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
          {/* Left Image (shorter) */}
          <div className="relative flex flex-col justify-end">
            {/* Badge */}
            <div className="absolute -top-2  xl:-top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ffa41b] to-yellow-300 text-center w-full  sm:w-4/5 xl:py-4 py-3 rounded-xl shadow-md">
              <h3 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-none">15+</h3>
              <p className="text-gray-700 font-medium text-xs sm:text-sm mt-1">YEARS OF EXPERIENCE</p>
            </div>

            <div className="rounded-xl overflow-hidden mt-12 lg:h-[350px] md:h-[320px] h-[280px]">
              <img
                src="/gallery/img7.webp"
                alt="Locksmith working"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Image (taller) */}
          <div className="rounded-xl overflow-hidden h-[360px] sm:h-[420px] md:h-[480px] self-end">
            <img
              src="/gallery/img2.webp"
              alt="Lock installation"
              width={500}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
