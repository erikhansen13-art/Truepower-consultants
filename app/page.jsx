// app/page.jsx
"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-accent-100 text-slate-900 antialiased">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white shadow-md">
  <div className="flex items-center space-x-3">
    <Image
  src="/bolt-logo.jpeg"
  alt="TruePower Bolt Logo"
  width={60}
  height={60}
  className="logo-glow"
/>
    <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[radial-gradient(circle_at_center,#3b82f6,transparent_70%)]">
      ⚡
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
    <a href="#contact" className="px-4 py-2 bg-[#1f3b5b] text-white rounded-md hover:bg-[#3b82f6] transition">
      Contact
    </a>
  </nav>
</header>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-green-600 font-semibold">Your energy partner</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 mt-4 leading-tight">
              Smarter energy procurement. Lower costs. Better control.
            </h1>
            <p className="mt-5 text-slate-600 max-w-xl">
              TruePower Consultants helps businesses secure the most competitive electricity and natural gas rates while simplifying contract management and energy strategy.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block px-5 py-3 rounded-md bg-navy-700 text-white font-medium shadow">Get a Quote</a>
              <a href="#services" className="inline-block px-5 py-3 rounded-md border border-slate-200 text-slate-700">Learn More</a>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              <strong>Phone:</strong> (555) 987-6543 • <strong>Email:</strong> <a href="mailto:info@truepowerconsultants.com" className="underline">info@truepowerconsultants.com</a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6">
            {/* Right card visually — keep space for image */}
            <div className="w-full h-64 bg-gray-50 rounded-md flex items-center justify-center text-slate-400">
              {/* Replace the content below with a real image later */}
              <span className="text-sm">Energy markets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center text-navy-900">Our Services</h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">Comprehensive consulting and energy strategy services for commercial clients.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 rounded-xl bg-white shadow-sm">
            <h4 className="font-semibold text-navy-900">Energy Procurement</h4>
            <p className="mt-2 text-slate-600 text-sm">We negotiate competitive electricity and gas supply contracts tailored to your risk tolerance and usage profile.</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-sm">
            <h4 className="font-semibold text-navy-900">Market Intelligence</h4>
            <p className="mt-2 text-slate-600 text-sm">Access up-to-date insights on wholesale market trends, regulatory changes, and timing strategies for renewals.</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-sm">
            <h4 className="font-semibold text-navy-900">Risk Management</h4>
            <p className="mt-2 text-slate-600 text-sm">Mitigate price volatility through strategic purchasing and contract structures that align with your energy goals.</p>
          </div>
        </div>
      </section>

      {/* About & Contact */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-b from-white to-accent-50">
        <div className="md:flex md:items-center md:gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-navy-900">About TruePower</h3>
            <p className="mt-3 text-slate-600">TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial energy solutions. We bring transparency, competitive pricing, and expert negotiation to every client we serve.</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>• 100% independent — no hidden supplier incentives</li>
              <li>• Experienced consultants with nationwide reach</li>
              <li>• Decades of experience in deregulated energy markets</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow">
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-slate-400">Team image</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-center text-navy-900">Request a Quote</h3>
        <p className="text-slate-600 text-center mt-2">Let us find the best energy rates for your business.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <form className="bg-white p-6 rounded-xl shadow-sm" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:info@truepowerconsultants.com?subject=Energy%20Quote%20Request&body=' + encodeURIComponent(`Name: ${e.target.name.value}\nCompany: ${e.target.company.value}\nEmail: ${e.target.email.value}\nUsage: ${e.target.usage.value}\nMessage:\n${e.target.message.value}`); }}>
            <div className="grid gap-3">
              <input name="name" placeholder="Your name" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
              <input name="company" placeholder="Company" className="w-full border border-slate-200 rounded-md px-3 py-2" />
              <input name="email" type="email" placeholder="Email" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
              <input name="usage" placeholder="Annual usage (kWh or therms)" className="w-full border border-slate-200 rounded-md px-3 py-2" />
              <textarea name="message" rows={4} placeholder="Additional details" className="w-full border border-slate-200 rounded-md px-3 py-2" />
              <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 rounded-md bg-green-600 text-white">Send via Email</button>
                <button type="reset" className="px-4 py-2 rounded-md border">Reset</button>
              </div>
            </div>
          </form>

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
      </section>

      <footer className="mt-16 text-sm text-slate-500 text-center pb-10">
        © {new Date().getFullYear()} TruePower Consultants — All rights reserved.
      </footer>
    </main>
  );
}
