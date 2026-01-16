import React from 'react'

const Counter = () => {
  return (
    <section className="relative w-full h-full xl:h-[90vh] flex flex-col justify-end">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/img/bg.webp')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Hero Text Section */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 py-16 md:py-20">
        <div className="bg-black/10 border border-white/20 p-4 md:p-6 rounded-lg max-w-2xl w-full">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Need a Trusted Taxi?
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-2 md:mt-3">
            Book Your Ride Anytime, Anywhere
          </h2>

          <p className="text-sm md:text-base mt-3 mb-5">
            Safe, reliable and affordable taxi service for outstation trips, airport rides, 
            city travel and daily one-way routes.
          </p>

          <button className="bg-[#ffd101] text-black font-semibold px-6 py-2 transition">
            BOOK NOW
          </button>

        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-20 w-auto bg-[#ffd101] py-8 mx-4 md:mx-8 xl:mx-32 grid grid-cols-2 md:grid-cols-4 text-center text-black shadow-lg bottom-[-50px] gap-4">

        <div>
          <p className="text-2xl lg:text-3xl font-extrabold">35K+</p>
          <p className="text-sm mt-1">Happy Riders</p>
        </div>

        <div>
          <p className="text-2xl lg:text-3xl font-bold">12K+</p>
          <p className="text-sm mt-1">Trips Completed</p>
        </div>

        <div>
          <p className="text-2xl lg:text-3xl font-bold">18+</p>
          <p className="text-sm mt-1">City Routes Covered</p>
        </div>

        <div>
          <p className="text-2xl lg:text-3xl font-bold">4.9</p>
          <p className="text-sm mt-1">Customer Rating</p>
        </div>

      </div>

    </section>
  )
}

export default Counter
