// app/page.jsx
"use client";

import React from "react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Header / Logo + Title */}
        <header className="flex flex-col items-center py-8 bg-gray-100">
          <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg">
            <img
              src="/bolt-logo.jpeg"
              alt="TruePower Logo"
              className="w-12 h-12 object-contain logo-glow"
            />
          </div>
          <div className="mt-4 text-center">
            <h1 className="text-3xl font-bold text-[#1f3b5b]">TruePower</h1>
            <p className="text-lg text-[#3b82f6] tracking-wide">CONSULTANTS</p>
          </div>

          {/* Navigation */}
          <nav className="mt-6 space-x-8 text-[#1f3b5b] font-medium">
            <a href="#services" className="hover:text-[#3b82f6] transition">Services</a>
            <a href="#about" className="hover:text-[#3b82f6] transition">About</a>
            <a
              href="#contact"
              className="px-4 py-2 bg-[#1f3b5b] text-white rounded-md hover:bg-[#3b82f6] transition"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Hero / Chart Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-green-600 font-semibold">Your energy partner</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f3b5b] mt-4">
                Smarter energy procurement. Lower costs. Better control.
              </h2>
              <p className="mt-5 text-gray-700 max-w-xl">
                TruePower Consultants helps businesses secure the most competitive electricity and natural gas rates while simplifying contract management and energy strategy.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Example placeholder chart image */}
              <img
                src="/energy-chart.png"
                alt="Energy Chart"
                className="max-w-full h-64 object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-[#1f3b5b] mb-8 text-center">Our Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#f9fafb] rounded-lg shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold text-[#1f3b5b] mb-3">Energy Procurement</h4>
                <p className="text-gray-700">
                  We negotiate and secure the best electricity and gas contracts suited to your usage.
                </p>
              </div>
              <div className="p-6 bg-[#f9fafb] rounded-lg shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold text-[#1f3b5b] mb-3">Contract Management</h4>
                <p className="text-gray-700">
                  Handle renewals, compliance, and supplier relationships seamlessly.
                </p>
              </div>
              <div className="p-6 bg-[#f9fafb] rounded-lg shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold text-[#1f3b5b] mb-3">Strategic Advisory</h4>
                <p className="text-gray-700">
                  Long-term energy strategy to reduce risks, costs, and volatility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-[#1f3b5b] mb-4">About Us</h3>
            <p className="text-gray-700">
              TruePower Consultants blends years of experience in energy markets,
              supplier negotiation, and strategic planning to deliver value, cost savings,
              and sustainability for our clients.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1f3b5b] mb-4">Contact Us</h3>
              <p className="text-gray-700 mb-6">
                Fill out the form and we’ll get back to you with a tailored solution.
              </p>
              <form className="space-y-4">
                <input
                  name="name"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
                <input
                  name="company"
                  placeholder="Company"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
                <input
                  name="usage"
                  placeholder="Annual usage (kWh or therms)"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Additional details"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1f3b5b] text-white rounded-md hover:bg-[#3b82f6] transition"
                  >
                    Send via Email
                  </button>
                  <button
                    type="reset"
                    className="px-4 py-2 border border-gray-300 rounded-md"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2 text-[#1f3b5b]">Office</h4>
              <p className="text-gray-700">
                123 Market Street<br />
                Anytown, USA
              </p>
              <div className="mt-4">
                <p className="text-sm font-medium">Hours</p>
                <p className="text-sm text-gray-700">Mon–Fri 9:00–17:00</p>
              </div>
              <div className="mt-6">
                <p className="text-sm font-medium">Follow</p>
                <div className="flex gap-3 mt-2">
                  <a
                    aria-label="LinkedIn"
                    href="#"
                    className="text-sm underline text-[#3b82f6]"
                  >
                    LinkedIn
                  </a>
                  <a
                    aria-label="X"
                    href="#"
                    className="text-sm underline text-[#3b82f6]"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-100 text-center text-gray-600">
          © {new Date().getFullYear()} TruePower Consultants — All rights reserved.
        </footer>
      </main>
    </>
  );
}
