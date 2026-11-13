import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ShieldCheck,
  Clock,
  Users,
  CarFront,
  BadgeCheck,
  Route,
  Headset,
  CalendarCheck,
  Building2,
  HeartPulse,
  Award,
  CheckCircle2,
  ArrowRight,
  Binoculars,
  Target,
} from "lucide-react";
import PageHeader from "../Component/PageHeader";
import FAQSection from "../Component/Faq";

export const metadata = {
  title: "About Us | Guru Nanak Tours & Travels - Trusted Since 2005",
  description:
    "Learn about Guru Nanak Tours & Travels, Punjab's trusted transportation partner since 2005 for Government Departments, Healthcare Institutions and Corporate Organizations.",
};

const stats = [
  { value: "2005", label: "Established Year" },
  { value: "20+", label: "Years of Experience" },
  { value: "3+", label: "Key Sectors Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const coreValues = [
  {
    icon: CalendarCheck,
    title: "Reliable & On-Time Service",
    desc: "Strict adherence to schedules ensuring government officials and corporate executives reach on time.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Journeys",
    desc: "Comprehensive safety protocols, verified chauffeurs, and routine vehicle fitness inspections.",
  },
  {
    icon: Users,
    title: "Experienced Chauffeurs",
    desc: "Trained, courteous and disciplined drivers familiar with official protocol and all North Indian routes.",
  },
  {
    icon: CarFront,
    title: "Well-Maintained Fleet",
    desc: "Spacious, clean, air-conditioned sedans, SUVs, and luxury vans with complete documentation.",
  },
  {
    icon: Clock,
    title: "24/7 Operational Support",
    desc: "Round-the-clock booking coordination and immediate assistance for emergency transport needs.",
  },
  {
    icon: Route,
    title: "Local & Outstation Reach",
    desc: "Complete coverage across Punjab, Chandigarh Tricity, Himachal Pradesh, Haryana, and Delhi NCR.",
  },
];

const missionList = [
  "Provide safe, reliable, and timely transportation services for every customer.",
  "Maintain a clean, comfortable, and well-maintained fleet with professional drivers.",
  "Ensure 24/7 availability, transparent pricing, and dependable customer support.",
  "Build long-term relationships through trust, customer satisfaction, and commitment to service excellence.",
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="About Us"
        subtitle="Your Trusted Transport Partner Since 2005"
        breadcrumb={[{ label: "About Us" }]}
      />

      {/* Overview Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none"
          style={{ backgroundImage: "url('/img/aboutttbg.webp')" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#00193d]/5 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#00193d] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#ffa41b]" />
                About Guru Nanak Tours & Travels
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00193d] leading-tight">
                Two Decades of Excellence in Transport & Fleet Solutions
              </h2>

              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  <strong>Guru Nanak Tours & Travels</strong> is a distinguished and trusted name in
                  the transport industry of Punjab. Established in <strong>2005</strong>, we have been
                  delivering safe, reliable, and efficient transport solutions to Government
                  Departments, Healthcare Institutions, Corporate Organizations, and individual
                  travelers across North India.
                </p>
                <p>
                  Our commitment to uncompromising service quality, punctual dispatches, transparent
                  dealings, and passenger comfort has earned us a preferred vendor status for official
                  duties and institutional long-term contracts.
                </p>
              </div>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="h-5 w-5 text-[#ffa41b] shrink-0" />
                  <span>20+ Years Trusted Track Record</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="h-5 w-5 text-[#ffa41b] shrink-0" />
                  <span>Verified & Polite Chauffeurs</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="h-5 w-5 text-[#ffa41b] shrink-0" />
                  <span>Government Outsourcing Specialist</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="h-5 w-5 text-[#ffa41b] shrink-0" />
                  <span>24/7 Dedicated Support</span>
                </div>
              </div>

              {/* Call to action boxes */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ffa41b] flex items-center justify-center text-[#00193d] shadow-md shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                      Call For Enquiries
                    </p>
                    <div className="flex flex-col text-base sm:text-lg font-bold text-[#00193d]">
                      <a href="tel:+919872632396" className="hover:text-[#ffa41b] transition">
                        +91-9872632396
                      </a>
                      <a href="tel:+918728888181" className="hover:text-[#ffa41b] transition">
                        +91-8728888181
                      </a>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#00193d] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#ffa41b] hover:text-[#00193d] transition-all"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Image with floating badge */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/img/about_driver.jpg"
                  alt="Guru Nanak Tours and Travels professional chauffeur service"
                  width={640}
                  height={680}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -left-4 sm:bottom-6 sm:-left-6 bg-[#00193d] text-white p-5 rounded-2xl shadow-2xl border-2 border-[#ffa41b]/40 max-w-xs">
                <div className="flex items-center gap-3">
                  <Award className="h-10 w-10 text-[#ffa41b] shrink-0" />
                  <div>
                    <p className="text-2xl font-black text-[#ffa41b]">2005</p>
                    <p className="text-xs font-semibold text-gray-200">
                      Serving Punjab & North India with honor and excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-[#00193d] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="pt-4 md:pt-0">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ffa41b]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm sm:text-base font-medium text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#ffa41b]">
              Our Foundation & Drive
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00193d]">
              Vision & Mission
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#ffa41b]" />
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Driving every journey with a clear vision, a strong mission, and an unwavering
              commitment to safe and reliable transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#00193d] text-[#ffa41b] flex items-center justify-center shadow-md">
                    <Binoculars className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#00193d]">Our Vision</h3>
                    <div className="h-1 w-12 rounded-full bg-[#ffa41b] mt-1" />
                  </div>
                </div>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  To be the most trusted and preferred transport partner for individuals, government
                  departments, and corporate organizations across North India by delivering
                  excellence, comfort, and uncompromising reliability in every journey.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100">
                <p className="text-sm font-semibold italic text-[#00193d]">
                  "Your journey, our commitment to excellence."
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-md border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00193d] text-[#ffa41b] flex items-center justify-center shadow-md">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#00193d]">Our Mission</h3>
                  <div className="h-1 w-12 rounded-full bg-[#ffa41b] mt-1" />
                </div>
              </div>

              <div className="space-y-4">
                {missionList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ffa41b] shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Banner Quote */}
          <div className="mt-10 rounded-2xl bg-[#00193d] p-6 sm:p-8 text-center text-white">
            <h3 className="text-xl sm:text-2xl font-bold text-[#ffa41b]">
              Every Mile Matters. Every Customer Counts.
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-3xl mx-auto">
              We strive to build long-term relationships through trust, dedicated service, and
              dependable transportation solutions tailored to the unique needs of every client.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00193d]">
                <span className="h-1 w-8 rounded-full bg-[#ffa41b]" />
                Why Choose Guru Nanak Tours & Travels
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00193d] leading-tight">
                Your Trusted Partner for Comfortable & Reliable Travel
              </h2>

              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                Guru Nanak Tours & Travels is committed to providing safe, comfortable and dependable
                transportation solutions. From airport transfers and local taxi services to
                corporate travel and government official visits, we focus on professional service,
                punctual pickups and a smooth travel experience.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/img/choose_travel.jpg"
                alt="Guru Nanak Tours and Travels Fleet"
                width={640}
                height={400}
                className="rounded-2xl object-cover shadow-xl w-full h-[320px] sm:h-[380px]"
              />
              <div className="absolute -bottom-4 -right-2 sm:right-4 bg-[#00193d] text-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-[#ffa41b]" />
                <div>
                  <p className="font-bold text-sm">Travel With Confidence</p>
                  <p className="text-xs text-gray-300">Comfort, safety & reliability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00193d] text-[#ffa41b] flex items-center justify-center mb-4 group-hover:bg-[#ffa41b] group-hover:text-[#00193d] transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#00193d] mb-2">{val.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Sectors We Serve */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ffa41b]">
              Specialized Expertise
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#00193d]">
              Key Sectors We Proudly Serve
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#ffa41b]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sector 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#00193d]/5 text-[#00193d] flex items-center justify-center mb-5">
                <Building2 size={32} className="text-[#ffa41b]" />
              </div>
              <h3 className="text-xl font-bold text-[#00193d] mb-3">
                Government Departments
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dedicated vehicle outsourcing and protocol transportation for official departmental
                inspections, ministerial assignments, and administrative travel across Punjab.
              </p>
            </div>

            {/* Sector 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#00193d]/5 text-[#00193d] flex items-center justify-center mb-5">
                <HeartPulse size={32} className="text-[#ffa41b]" />
              </div>
              <h3 className="text-xl font-bold text-[#00193d] mb-3">
                Healthcare Institutions
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                24/7 on-call transport for medical staff, doctors, hospital administrators, and
                scheduled clinical visits with high standards of cleanliness and safety.
              </p>
            </div>

            {/* Sector 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#00193d]/5 text-[#00193d] flex items-center justify-center mb-5">
                <Users size={32} className="text-[#ffa41b]" />
              </div>
              <h3 className="text-xl font-bold text-[#00193d] mb-3">
                Corporate Organizations
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Seamless daily employee commutes, executive airport transfers, client meetings, and
                custom corporate transport contracts with transparent invoicing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded FAQ Section */}
      <FAQSection />

      {/* CTA Bottom Banner */}
      <section className="bg-[#00193d] py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ffa41b]">
            Need Reliable Transport?
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
            Ready to Partner With Punjab's Most Trusted Fleet Service?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
            Reach out today to discuss your transport requirements, corporate packages, or
            government vehicle outsourcing contracts.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#ffa41b] px-8 py-3.5 text-sm sm:text-base font-bold text-[#00193d] shadow-lg hover:bg-white transition"
            >
              <span>Contact Us Today</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+919872632396"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-8 py-3.5 text-sm sm:text-base font-bold text-white backdrop-blur hover:bg-white hover:text-[#00193d] transition"
            >
              <Phone size={18} />
              <span>+91-9872632396</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

