import React from "react";
import { motion } from "framer-motion";

export default function TruePowerWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 antialiased">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left-aligned logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="TruePower Consultants logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm text-green-600 font-semibold">Your energy partner</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Smarter energy procurement. Lower costs. Better control.</h2>
            <p className="mt-4 text-slate-600">TruePower Consultants helps businesses secure the most competitive electricity and natural gas rates while simplifying contract management and energy strategy.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block px-5 py-3 rounded-md bg-blue-600 text-white font-medium">Get a Quote</a>
              <a href="#services" className="inline-block px-5 py-3 rounded-md border border-slate-200 text-slate-700">Learn More</a>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              <strong>Phone:</strong> (555) 987-6543 • <strong>Email:</strong> <a href="mailto:info@truepowerconsultants.com" className="underline">info@truepowerconsultants.com</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="rounded-xl overflow-hidden shadow">
            <img src="https://source.unsplash.com/featured/?energy,city-lights" alt="Energy markets" className="w-full h-64 object-cover" />
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="mt-16">
          <h3 className="text-2xl font-semibold">Our Services</h3>
          <p className="mt-2 text-slate-600">Comprehensive consulting and energy strategy services for commercial clients.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h4 className="font-semibold">Energy Procurement</h4>
              <p className="mt-2 text-slate-600 text-sm">We negotiate competitive electricity and gas supply contracts tailored to your risk tolerance and usage profile.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h4 className="font-semibold">Market Intelligence</h4>
              <p className="mt-2 text-slate-600 text-sm">Access up-to-date insights on wholesale market trends, regulatory changes, and timing strategies for renewals.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h4 className="font-semibold">Risk Management</h4>
              <p className="mt-2 text-slate-600 text-sm">Mitigate price volatility through strategic purchasing and contract structures that align with your energy goals.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h4 className="font-semibold">Community Solar</h4>
              <p className="mt-2 text-slate-600 text-sm">We help businesses enroll in community solar programs that reduce utility costs and support local renewable energy generation—without installing panels on-site.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h4 className="font-semibold">Demand Response</h4>
              <p className="mt-2 text-slate-600 text-sm">Earn incentives for reducing load during peak demand events. We manage enrollment and participation to ensure you maximize returns with minimal disruption.</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16 bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl">
          <div className="md:flex md:items-center md:gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">About TruePower</h3>
              <p className="mt-2 text-slate-600">TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial energy solutions. We bring transparency, competitive pricing, and expert negotiation to every client we serve.</p>

              <ul className="mt-4 grid gap-2 text-sm">
                <li>• 100% independent — no hidden supplier incentives</li>
                <li>• Licensed consultants with nationwide reach</li>
                <li>• Decades of experience in deregulated energy markets</li>
              </ul>
            </div>

            <div className="mt-6 md:mt-0 md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow">
                <img src="https://source.unsplash.com/featured/?business,team" alt="Team" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-semibold">Request a Quote</h3>
          <p className="text-slate-600 mt-2">Let us find the best energy rates for your business. Fill out the form below to get started.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form className="bg-white p-6 rounded-xl shadow-sm" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:info@truepowerconsultants.com?subject=Energy%20Quote%20Request&body=' + encodeURIComponent(`Name: ${e.target.name.value}\nCompany: ${e.target.company.value}\nEmail: ${e.target.email.value}\nUsage (kWh/year): ${e.target.usage.value}\nMessage:\n${e.target.message.value}`); }}>
              <div className="grid gap-3">
                <input name="name" placeholder="Your name" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
                <input name="company" placeholder="Company" className="w-full border border-slate-200 rounded-md px-3 py-2" />
                <input name="email" type="email" placeholder="Email" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
                <input name="usage" placeholder="Annual usage (kWh or therms)" className="w-full border border-slate-200 rounded-md px-3 py-2" />
                <textarea name="message" rows={4} placeholder="Additional details (locations, meters, etc.)" className="w-full border border-slate-200 rounded-md px-3 py-2" />
                <div className="flex items-center gap-3">
                  <button type="submit" className="px-4 py-2 rounded-md bg-green-600 text-white">Send via Email</button>
                  <button type="reset" className="px-4 py-2 rounded-md border">Reset</button>
                </div>
              </div>
            </form>

            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h4 className="font-semibold">Office</h4>
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

        <footer className="mt-16 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} TruePower Consultants — All rights reserved.
        </footer>
      </main>
    </div>
  );
}
