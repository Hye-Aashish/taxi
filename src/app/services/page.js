import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Users,
  HeartPulse,
  Plane,
  Route,
  Clock,
  CheckCircle2,
  Phone,
  MessageSquare,
  CarFront,
  ArrowRight,
  Shield,
  FileText,
  BadgeCheck,
} from "lucide-react";
import PageHeader from "../Component/PageHeader";

export const metadata = {
  title: "Our Services | Guru Nanak Tours & Travels - Vehicle Outsourcing & Taxi Services",
  description:
    "Explore transportation services by Guru Nanak Tours & Travels: Government Vehicle Outsourcing, Official Duty Vehicles, Employee Transport, Healthcare Transport, and Airport Transfers in Punjab.",
};

const whatsappNumber = "919876239897";

const servicesList = [
  {
    id: "govt-outsourcing",
    title: "Government Vehicle Outsourcing",
    icon: Building2,
    image: "/taxiimg/front-left-side-47.webp",
    badge: "Official & Public Sector",
    desc: "Guru Nanak Tours & Travels provides dependable, fully compliant vehicle outsourcing services for government departments, public sector undertakings, and administrative boards. We supply well-maintained commercial vehicles, verified chauffeurs, and comprehensive log management for daily official operations.",
    features: [
      "Long-term and short-term annual contracts",
      "Strict compliance with government transport regulations",
      "Disciplined, verified, and uniformed chauffeurs",
      "Complete log-book maintenance and prompt reporting",
    ],
  },
  {
    id: "official-duty",
    title: "Official Duty Vehicles",
    icon: ShieldCheck,
    image: "/taxiimg/2.webp",
    badge: "VIP & Administrative",
    desc: "Our official duty vehicle services are tailored for government officers, departmental inspections, ministerial visits, conferences, and high-level administrative assignments. We ensure punctuality, passenger privacy, and premium comfort throughout the duty period.",
    features: [
      "Punctual executive pickups and protocol management",
      "Clean, air-conditioned, and sanitized premium sedans & SUVs",
      "Route-knowledgeable chauffeurs familiar with official offices",
      "Flexible standby and full-day duty packages",
    ],
  },
  {
    id: "employee-transport",
    title: "Employee & Corporate Transportation",
    icon: Users,
    image: "/taxiimg/3.webp",
    badge: "Corporate & BPO / IT",
    desc: "Ensure seamless, stress-free employee transportation with our flexible vehicle options. Designed for daily corporate commutes, staff pickup and drop-offs, executive business meetings, and client delegations across Chandigarh Tricity and Punjab.",
    features: [
      "Scheduled shifts, morning/evening staff pick-and-drop",
      "Optimized route planning to save transit time",
      "Safety monitoring, SOS readiness, and emergency backups",
      "Cost-effective monthly corporate invoicing plans",
    ],
  },
  {
    id: "healthcare-transport",
    title: "Healthcare Transportation",
    icon: HeartPulse,
    image: "/taxiimg/4.webp",
    badge: "Medical & Hospital Staff",
    desc: "We provide dedicated, round-the-clock transport support for healthcare institutions, hospitals, pharmaceutical teams, medical specialists, and clinical staff. Our fleet maintains the highest standards of cleanliness and punctual timing.",
    features: [
      "24/7 on-call availability for urgent medical duties",
      "Sanitized, comfortable, and disturbance-free vehicles",
      "Coordinated transit for rotating shift healthcare professionals",
      "Direct tie-ups with leading hospitals and medical centers",
    ],
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers (Mohali & Delhi)",
    icon: Plane,
    image: "/taxiimg/5.webp",
    badge: "Punctual & Stress-Free",
    desc: "Travel to and from Shaheed Bhagat Singh International Airport (Chandigarh/Mohali) and IGI New Delhi Airport with complete peace of mind. Suitable for government delegations, corporate travelers, families, and individuals.",
    features: [
      "Flight schedule tracking for on-time arrivals and departures",
      "Doorstep pickup and luggage assistance",
      "24/7 midnight and early morning airport transfers",
      "Fixed, transparent pricing with no hidden charges",
    ],
  },
  {
    id: "outstation-travel",
    title: "Outstation & Intercity Travel",
    icon: Route,
    image: "/taxiimg/6.webp",
    badge: "North India Coverage",
    desc: "Safe, scenic, and relaxed outstation journeys across Punjab, Himachal Pradesh, Haryana, Uttarakhand, and Delhi NCR. Whether you require a one-way drop or a multi-day round trip, our experienced highway drivers ensure a smooth voyage.",
    features: [
      "Wide coverage: Shimla, Manali, Dharamshala, Amritsar, Delhi, etc.",
      "Transparent per-km or all-inclusive tour packages",
      "Experienced highway chauffeurs with safe driving records",
      "Comfortable long-drive seating with ample luggage capacity",
    ],
  },
];

const fleetCategories = [
  {
    name: "Economy & Executive Sedans",
    models: "Swift Dzire, Toyota Etios, Honda Amaze",
    capacity: "4 Passengers + 1 Driver",
    luggage: "2 Medium Suitcases",
    idealFor: "Official Duty, Airport Transfers, City Tours",
    image: "/taxiimg/front-left-side-47.webp",
  },
  {
    name: "Premium SUVs & MUVs",
    models: "Toyota Innova Crysta, Maruti Ertiga",
    capacity: "6-7 Passengers + 1 Driver",
    luggage: "4 Large Suitcases",
    idealFor: "Delegation Visits, Outstation Trips, Family Travel",
    image: "/taxiimg/2.webp",
  },
  {
    name: "Corporate & Group Vans",
    models: "Tempo Traveller, Force Urbania",
    capacity: "12-17 Passengers",
    luggage: "Spacious Dedicated Luggage Carrier",
    idealFor: "Employee Shuttles, Institutional Delegations",
    image: "/taxiimg/3.webp",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Share Requirement",
    desc: "Contact us via call, WhatsApp, or form with your travel dates, route, or outsourcing scope.",
  },
  {
    step: "02",
    title: "Custom Quotation",
    desc: "Receive transparent pricing, vehicle choices, and contract terms with zero hidden fees.",
  },
  {
    step: "03",
    title: "Vehicle Assigned",
    desc: "Get chauffeur details, sanitized vehicle allotment, and timely tracking updates.",
  },
  {
    step: "04",
    title: "Smooth Journey",
    desc: "Enjoy safe, punctual, and comfortable travel backed by 24/7 operations support.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive fleet and mobility solutions for Government, Corporate and Individual travel"
        breadcrumb={[{ label: "Services" }]}
      />

      {/* Intro Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#00193d]">
            Guru Nanak Tours & Travels
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00193d]">
            Reliable Transport Solutions{" "}
            <span className="text-[#ffa41b]">For Every Requirement</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#ffa41b]" />
          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
            Since 2005, Guru Nanak Tours & Travels has been trusted by government departments,
            healthcare institutions, corporate bodies, and individuals across Punjab. Explore our
            core service offerings designed around safety, punctuality, and passenger convenience.
          </p>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image Side */}
                <div className={`relative ${isReversed ? "lg:col-start-2" : ""}`}>
                  <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-md group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#00193d]/90 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/20">
                      {service.badge}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-5 ${isReversed ? "lg:col-start-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#00193d] text-[#ffa41b] flex items-center justify-center shadow-md shrink-0">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#00193d]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed text-justify sm:text-left">
                    {service.desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#ffa41b] shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base font-medium text-gray-700">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ffa41b] px-6 py-3 text-sm font-bold text-[#00193d] shadow-sm hover:bg-[#00193d] hover:text-white transition-all"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight size={16} />
                    </Link>

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hello Guru Nanak Tours & Travels, I would like to enquire about ${service.title}. Please share details and pricing.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-green-700 transition-all"
                    >
                      <MessageSquare size={16} />
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fleet Showcase Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ffa41b]">
              Our Modern Fleet
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#00193d]">
              Well-Maintained Vehicles for Every Journey
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#ffa41b]" />
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              All vehicles are thoroughly sanitized, regularly serviced, commercially registered,
              and driven by verified chauffeurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetCategories.map((fleet, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img
                      src={fleet.image}
                      alt={fleet.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#00193d]">{fleet.name}</h3>
                    <p className="text-sm font-medium text-[#ffa41b] mt-1">{fleet.models}</p>

                    <div className="mt-4 space-y-2 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-3">
                      <p>
                        <strong>Capacity:</strong> {fleet.capacity}
                      </p>
                      <p>
                        <strong>Luggage:</strong> {fleet.luggage}
                      </p>
                      <p>
                        <strong>Best For:</strong> {fleet.idealFor}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/contact?service=${encodeURIComponent(fleet.name)}`}
                    className="block text-center w-full rounded-lg bg-[#00193d] py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#ffa41b] hover:text-[#00193d] transition-colors"
                  >
                    Book This Category
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - 4 Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ffa41b]">
              Easy & Transparent
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#00193d]">
              How Booking With Us Works
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#ffa41b]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-gray-50 p-6 border border-gray-100 text-center hover:bg-[#00193d] hover:text-white transition-all group"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00193d] text-[#ffa41b] text-xl font-black group-hover:bg-[#ffa41b] group-hover:text-[#00193d] transition-colors">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#00193d] group-hover:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Term Contracts Callout */}
      <section className="py-14 bg-[#00193d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#00193d] via-[#002860] to-[#00193d] p-8 md:p-12 border border-[#ffa41b]/30 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ffa41b]">
                Institutional & Corporate Solutions
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Looking for Monthly or Annual Fleet Contracts?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We design custom fleet outsourcing contracts for government departments,
                multi-speciality hospitals, colleges, and business enterprises across Punjab.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ffa41b] px-7 py-3.5 text-sm sm:text-base font-bold text-[#00193d] hover:bg-white transition"
              >
                <span>Request a Proposal</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+919876239897"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-sm sm:text-base font-bold text-white hover:bg-white hover:text-[#00193d] transition"
              >
                <Phone size={18} />
                <span>+91-9876239897</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

