"use client";

export default function GetFree() {
  return (
    <section
      className="relative flex items-center justify-center text-center bg-center bg-cover bg-no-repeat h-[60vh] sm:h-[70vh] lg:min-h-[80vh]"
      style={{
        backgroundImage: "url('/gallery/img8.webp')", // Update to your actual image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 sm:px-6 md:px-8">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug mb-4">
          Get a Free Quote <br className="hidden sm:block" /> on Locksmith Services
        </h1>

        <p className="text-gray-200 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
          From key making and lock repairs to ignition services and advanced security solutions, we provide fast, reliable, and professional locksmith services you can trust.
        </p>

        <button className="bg-[#F9C643] hover:bg-[#e3b835] text-black font-semibold py-2.5 px-5 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base md:text-lg">
          GET A FREE QUOTE
        </button>
      </div>
    </section>
  );
}
