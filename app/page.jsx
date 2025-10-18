import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-6">
          {/* Larger glowing circle around logo */}
          <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-white overflow-hidden shadow-lg">
            <div className="absolute inset-0 rounded-full bg-blue-300 blur-2xl opacity-70 animate-pulse"></div>
            <Image
              src="/bolt-logo.jpeg"
              alt="TruePower Logo"
              width={72}
              height={72}
              className="relative z-10 object-contain"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col leading-tight">
            <h1 className="text-5xl font-extrabold text-[#0b2b4a]">
              TruePower
            </h1>
            <p className="text-base text-slate-400 tracking-[0.25em] text-center mt-1">
              CONSULTANTS
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-8">
          <a href="#services" className="text-lg text-gray-700 hover:text-[#0b2b4a]">
            Services
          </a>
          <a href="#about" className="text-lg text-gray-700 hover:text-[#0b2b4a]">
            About
          </a>
          <a
            href="#contact"
            className="inline-block bg-[#0b2b4a] text-white px-6 py-2 rounded-lg shadow hover:bg-[#123b65]"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-12 py-16 bg-white">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-[#0b2b4a] mb-4">
            Smarter Energy Solutions.
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Working with businesses to manage and reduce energy costs.
          </p>

          <div className="flex gap-4 mb-4">
            <button className="bg-[#0b2b4a] text-white px-6 py-3 rounded-lg shadow hover:bg-[#123b65]">
              Get a Quote
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100">
              Learn More
            </button>
          </div>

          <p className="text-sm text-gray-500">
            <strong>Phone:</strong> 716-303-3014 ·{" "}
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@truepowerconsultants.com"
              className="text-[#0b2b4a] hover:underline"
            >
              contact@truepowerconsultants.com
            </a>
          </p>
        </div>

        {/* ENERGY CHART RECTANGLE */}
        <div className="flex-shrink-0 w-full lg:w-[580px] mt-10 lg:mt-0">
          <div className="border border-gray-200 rounded-lg bg-white shadow-sm h-[280px] flex items-center justify-center">
            <div className="text-gray-400">Energy chart</div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section id="services" className="px-12 py-16 bg-[#f8fafc]">
        <h3 className="text-2xl font-bold text-[#0b2b4a] mb-8">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="font-semibold text-[#0b2b4a] mb-2">Energy Procurement</h4>
            <p>We negotiate competitive electricity and gas supply contracts tailored to your usage profile.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="font-semibold text-[#0b2b4a] mb-2">Market Intelligence</h4>
            <p>Access insights on wholesale market trends, regulatory changes, and renewal timing.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="font-semibold text-[#0b2b4a] mb-2">Risk Management</h4>
            <p>Mitigate price volatility with strategic purchasing aligned with your goals.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="font-semibold text-[#0b2b4a] mb-2">Community Solar</h4>
            <p>Reduce utility costs and support local renewable energy projects.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="font-semibold text-[#0b2b4a] mb-2">Demand Response</h4>
            <p>Earn incentives for reducing load during peak events — we manage enrollment and participation.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="font-semibold text-[#0b2b4a] mb-2">Bill Management</h4>
            <p>Streamline invoice tracking, cost analysis, and billing error recovery.</p>
          </div>
        </div>
      </section>

      {/* ABOUT TRUEPOWER */}
      <section id="about" className="px-12 py-16 bg-white">
        <h3 className="text-2xl font-bold text-[#0b2b4a] mb-6">About TruePower</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial solutions. We bring transparency, competitive pricing, and expert negotiation to every client we serve.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>100% independent — no hidden supplier incentives</li>
          <li>Experienced consultants with nationwide reach</li>
          <li>Decades of expertise in deregulated energy markets</li>
        </ul>

        {/* Team image box */}
        <div className="mt-10 border border-gray-200 rounded-lg bg-[#f8fafc] shadow-sm h-[280px] flex items-center justify-center">
          <div className="text-gray-400">Team</div>
        </div>
      </section>

      {/* REQUEST A QUOTE */}
      <section id="contact" className="px-12 py-16 bg-[#f8fafc]">
        <h3 className="text-2xl font-bold text-[#0b2b4a] mb-6">Request a Quote</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            <input type="text" placeholder="Company" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            <input type="text" placeholder="Annual usage (kWh or therms)" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            <textarea placeholder="Additional details (locations, meters, etc.)" rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-2"></textarea>
            <div className="flex gap-4">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                Send via Email
              </button>
              <button type="reset" className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100">
                Reset
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#0b2b4a]">Office</h4>
              <p>1 Seneca Street, Floor 29<br />Buffalo, NY 14203</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#0b2b4a]">Hours</h4>
              <p>Mon–Fri 9:00–17:00</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#0b2b4a]">Follow</h4>
              <p>
                <a href="#" className="text-blue-600 hover:underline">LinkedIn</a> ·{" "}
                <a href="#" className="text-gray-600 hover:underline">X</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
