// pages/index.js (Next.js)

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-16 py-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="TruePower Logo"
            width={72}
            height={72}
            className="animate-pulse"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">TruePower</h1>
            <p className="text-sm text-gray-500 tracking-widest">CONSULTANTS</p>
          </div>
        </div>
        <nav className="flex space-x-8 text-gray-700 font-medium">
          <a href="#services" className="hover:text-gray-900">
            Services
          </a>
          <a href="#about" className="hover:text-gray-900">
            About
          </a>
          <a
            href="#contact"
            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex justify-between items-center px-16 py-24">
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Smarter Energy Solutions.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Working with businesses to manage and reduce energy costs.
          </p>
          <div className="flex space-x-4">
            <a
              href="#quote"
              className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800"
            >
              Get a Quote
            </a>
            <a
              href="#about"
              className="border border-gray-300 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
            >
              Learn More
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-8">
            <strong>Phone:</strong> 716-303-3014 &nbsp; • &nbsp;
            <strong>Email:</strong>{' '}
            <a href="mailto:contact@truepowerconsultants.com" className="text-blue-600 hover:underline">
              contact@truepowerconsultants.com
            </a>
          </p>
        </div>

        <div className="w-[500px] h-[220px] bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-gray-400">
          Energy chart
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-16 py-20 bg-white">
        <h3 className="text-2xl font-bold text-gray-900 mb-10">Our Services</h3>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              title: 'Energy Procurement',
              desc: 'We negotiate competitive electricity and gas supply contracts tailored to your usage profile.',
            },
            {
              title: 'Market Intelligence',
              desc: 'Access insights on wholesale market trends, regulatory changes, and renewal timing.',
            },
            {
              title: 'Risk Management',
              desc: 'Mitigate price volatility with strategic purchasing aligned with your goals.',
            },
            {
              title: 'Community Solar',
              desc: 'Reduce utility costs and support local renewable energy projects.',
            },
            {
              title: 'Demand Response',
              desc: 'Earn incentives for reducing load during peak events — we manage enrollment and participation.',
            },
            {
              title: 'Bill Management',
              desc: 'Streamline invoice tracking, cost analysis, and billing error recovery.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold mb-2 text-gray-900">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-16 py-20 bg-gray-50">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              About TruePower
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial energy solutions. We bring transparency, competitive pricing, and expert negotiation to every client we serve.
            </p>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>100% independent — no hidden supplier incentives</li>
              <li>Experienced consultants with nationwide reach</li>
              <li>Decades of expertise in deregulated energy markets</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            Team
          </div>
        </div>
      </section>

      {/* Contact / Quote */}
      <section id="contact" className="px-16 py-20 bg-white border-t border-gray-100">
        <div className="grid grid-cols-2 gap-10">
          <form
            id="quote"
            className="bg-gray-50 p-8 rounded-xl border border-gray-100 space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Quote</h3>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-300"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-300"
            />
            <input
              type="text"
              placeholder="Annual usage (kWh or therms)"
              className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-300"
            />
            <textarea
              placeholder="Additional details (locations, meters, etc.)"
              className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-300"
            ></textarea>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-800"
              >
                Send via Email
              </button>
              <button
                type="reset"
                className="bg-white text-gray-700 border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-100"
              >
                Reset
              </button>
            </div>
          </form>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-gray-800">
            <h3 className="text-xl font-bold mb-4">Office</h3>
            <p>1 Seneca Street, Floor 29</p>
            <p>Buffalo, NY 14203</p>
            <h4 className="mt-6 font-semibold">Hours</h4>
            <p>Mon–Fri 9:00–17:00</p>
            <h4 className="mt-6 font-semibold">Follow</h4>
            <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}
