// app/page.jsx
"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-accent-100 text-slate-900 antialiased">
      {/* Header / Navigation */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full">
            {/* If you want to use next/image later, swap <img> for Image */}
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

        <nav className="space-x-6 text-[#1f3b5b] font-medium">
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

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-green-600 font-semibold">Your energy partner</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mt-4 leading-tight">
              Smarter energy procurement. Lower costs. Better control.
            </h2>
            <p className="mt-5 text-slate-600 max-w-xl">
              TruePower Consultants helps businesses secure the most competitive electricity and natural gas rates while simplifying contract management and energy strategy.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block px-5 py-3 rounded-md bg-navy-700 text-white font-medium shadow">Get a Quote</a>
              <a href="#services" className="inline-block px-5 py-3 rounded-md border border-slate-200 text-slate-700">Learn More</a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              <strong>Phone:</strong> (555) 987-6543 &nbsp; • &nbsp;
              <strong>Email:</strong> <a href="mailto:info@truepowerconsultants.com" className="underline">info@truepowerconsultants.com</a>
            </div>
          </div>

          <div>
            {/* Placeholder image or illustration */}
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <img src="/hero-illustration.png" alt="TruePower illustration" className="mx-auto max-w-full h-60 object-contain" />
              <p className="mt-4 text-sm text-slate-600">We analyze usage, negotiate contracts, and manage supplier relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-[#1f3b5b]">Services</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Energy Procurement</h4>
            <p className="mt-2 text-sm text-slate-600">We secure competitive electricity and natural gas contracts tailored to your usage patterns.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Contract Management</h4>
            <p className="mt-2 text-sm text-slate-600">Simplify billing, renewals, and compliance with our ongoing management services.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Consulting & Strategy</h4>
            <p className="mt-2 text-sm text-slate-600">Strategic advice to reduce energy costs and volatility for your business.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-12 bg-slate-50">
        <h3 className="text-2xl font-bold text-[#1f3b5b]">About TruePower</h3>
        <p className="mt-4 text-slate-600 max-w-3xl">
          TruePower Consultants brings experience in energy markets, supplier negotiation, and contract optimization so your business can reduce costs and improve predictability.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-[#1f3b5b]">Contact Us</h3>
            <p className="mt-2 text-slate-600">Fill out the form and we’ll reach out with a tailored quote.</p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-3">
                <input name="name" placeholder="Your name" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
                <input name="company" placeholder="Company" className="w-full border border-slate-200 rounded-md px-3 py-2" />
                <input name="email" type="email" placeholder="Email" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
                <input name="usage" placeholder="Annual usage (kWh or therms)" className="w-full border border-slate-200 rounded-md px-3 py-2" />
                <textarea name="message" rows={4} placeholder="Additional details" className="w-full border border-slate-200 rounded-md px-3 py-2" />
              </div>

              <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 rounded-md bg-green-600 text-white">Send via Email</button>
                <button type="reset" className="px-4 py-2 rounded-md border">Reset</button>
              </div>
            </form>
          </div>

          <div>
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h4 className="font-semibold text-navy-900">Office</h4>
              <p className="text-sm text-slate-600 mt-2">123 Market Street<br/>Anytown, USA</p>

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
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-slate-500 text-center pb-10">
        © {new Date().getFullYear()} TruePower Consultants — All rights reserved.
      </footer>
    </div>
  );
}
