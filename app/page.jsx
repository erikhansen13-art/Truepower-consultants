// app/page.jsx
"use client";

import React from "react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-accent-100 text-slate-900 antialiased">
        {/* Header area (logo + title) */}
        <div className="flex items-center space-x-3">
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full">
            <img
              src="/bolt-logo.jpeg"
              alt="TruePower Bolt Logo"
              className="logo-glow w-12 h-12 object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#1f3b5b]">TruePower</h1>
            <p className="text-sm font-medium text-[#1f3b5b]/80 tracking-wide">
              CONSULTANTS
            </p>
          </div>
        </div>

        {/* Navigation */}
        <header>
          <nav className="space-x-6 text-[#1f3b5b] font-medium">
            <a href="#services" className="hover:text-[#3b82f6] transition">
              Services
            </a>
            <a href="#about" className="hover:text-[#3b82f6] transition">
              About
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-[#1f3b5b] text-white rounded-md hover:bg-[#3b82f6] transition"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm text-green-600 font-semibold">
                Your energy partner
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 mt-4 leading-tight">
                Smarter energy procurement. Lower costs. Better control.
              </h1>
              <p className="mt-5 text-slate-600 max-w-xl">
                TruePower Consultants helps businesses secure the most competitive
                electricity and natural gas rates while simplifying contract
                management and energy strategy.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  className="inline-block px-5 py-3 rounded-md bg-navy-700 text-white font-medium shadow"
                >
                  Get a Quote
                </a>
                <a
                  href="#services"
                  className="inline-block px-5 py-3 rounded-md border border-slate-200 text-slate-700"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div>
              {/* You can replace with an actual image or graphic */}
              <img
                src="/hero-image.png"
                alt="Energy graph"
                className="w-full rounded-lg shadow"
              />
            </div>
          </div>
        </section>

        {/* Example Services Section */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold mb-2">Procurement</h3>
              <p className="text-sm text-slate-600">
                We source competitive rates and manage supplier contracts.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold mb-2">Contract Management</h3>
              <p className="text-sm text-slate-600">
                Timely renewals, risk assessments, and compliance.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold mb-2">Strategy</h3>
              <p className="text-sm text-slate-600">
                Long-term energy strategy to reduce volatility and cost.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section (from your screenshots, simplified) */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-xl font-semibold mb-2">Get in touch</h3>
              <form className="space-y-4">
                <div className="grid gap-3">
                  <input
                    name="name"
                    placeholder="Your name"
                    className="w-full border border-slate-200 rounded-md px-3 py-2"
                    required
                  />
                  <input
                    name="company"
                    placeholder="Company"
                    className="w-full border border-slate-200 rounded-md px-3 py-2"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border border-slate-200 rounded-md px-3 py-2"
                    required
                  />
                  <input
                    name="usage"
                    placeholder="Annual usage (kWh or therms)"
                    className="w-full border border-slate-200 rounded-md px-3 py-2"
                  />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Additional details"
                    className="w-full border border-slate-200 rounded-md px-3 py-2"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button type="submit" className="px-4 py-2 rounded-md bg-green-600 text-white">
                    Send via Email
                  </button>
                  <button type="reset" className="px-4 py-2 rounded-md border">
                    Reset
                  </button>
                </div>
              </form>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h4 className="font-semibold text-navy-900">Office</h4>
              <p className="text-sm text-slate-600 mt-2">
                123 Market Street<br />
                Anytown, USA
              </p>

              <div className="mt-4">
                <p className="text-sm font-medium">Hours</p>
                <p className="text-sm text-slate-600">Mon–Fri 9:00–17:00</p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium">Follow</p>
                <div className="flex gap-3 mt-2">
                  <a aria-label="LinkedIn" href="#" className="text-sm underline">LinkedIn</a>
                  <a aria-label="X" href="#" className="text-sm underline">X</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-sm text-slate-500 text-center pb-10">
          © {new Date().getFullYear()} TruePower Consultants — All rights reserved.
        </footer>
      </main>
    </>
  );
}
