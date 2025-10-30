"use client";

export default function PerformanceSection() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left: Image */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[530px] xl:h-[500px]">
          <img
            src="/img/aboutimg1.webp" // replace with your image path
            alt="Technician working"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>

        {/* Right: Text & Progress Bars */}
        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c4b7a] text-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-md">
          <p className="text-[#ffa41b] font-semibold uppercase mb-3 tracking-wide text-sm sm:text-base">
            Our Performance
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Committed to Security <br /> and Customer Satisfaction
          </h2>

          <p className="text-gray-200 mb-8 text-sm sm:text-base leading-relaxed">
            At K.K All Keys Maker, we deliver **fast, reliable, and professional locksmith services**. From key making and lock repair to ignition services and advanced security solutions, we ensure your safety and peace of mind.
          </p>

          {/* Progress Bars */}
          <div className="space-y-5">
            {/* 1 */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-1">
                <span>Customer Satisfaction</span>
                <span className="text-[#ffa41b]">99%</span>
              </div>
              <div className="h-2 w-full bg-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-yellow-500 w-[99%]"></div>
              </div>
            </div>

            {/* 2 */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-1">
                <span>Smart Lock Installations</span>
                <span className="text-[#ffa41b]">81%</span>
              </div>
              <div className="h-2 w-full bg-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-yellow-500 w-[81%]"></div>
              </div>
            </div>

            {/* 3 */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-1">
                <span>Repeat Customers & Referrals</span>
                <span className="text-[#ffa41b]">62%</span>
              </div>
              <div className="h-2 w-full bg-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-yellow-500 w-[62%]"></div>
              </div>
            </div>

            {/* 4 */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-1">
                <span>Commercial Security Installations</span>
                <span className="text-[#ffa41b]">87%</span>
              </div>
              <div className="h-2 w-full bg-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-yellow-500 w-[87%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
