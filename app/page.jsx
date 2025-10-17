"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TruePowerWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 antialiased">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="TruePower Consultants logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-semibold text-lg">TruePower Consultants</span>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-green-600 font-semibold">Your energy partner</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Smarter energy procurement. <br /> Lower costs. Better control.
            </h1>
            <p className="mt-4 text-slate-600">
              TruePower Consultants helps businesses secure competitive electricity
              and natural gas rates while simplifying energy strategy and contract
              management.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                className="inline-block px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Get a Quote
              </a>
              <a
                href="#services"
                className="inline-block px-5 py-3 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://source.unsplash.com/featured/?solar,energy,city"
              alt="Energy markets"
              className="w-full h-72 object-cover"
            />
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="mt-24">
          <h2 className="text-3xl font-semibold text-center">Our Services</h2>
          <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">
            Comprehensive consulting and energy strategy services for commercial clients.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "Energy Procurement",
                desc: "We negotiate competitive electricity and gas contracts tailored to your business needs.",
              },
              {
                title: "Market Intelligence",
                desc: "Stay ahead of energy market trends, regulations, and timing opportunities for renewals.",
              },
              {
                title: "Risk Management",
                desc: "Mitigate price volatility through customized purchasing strategies aligned with your goals.",
              },
              {
                title: "Community Solar",
                desc: "Reduce utility costs and support renewable energy through community solar programs — no panels required.",
              },
              {
                title: "Demand Response",
                desc: "Earn incentives by reducing energy usage during peak events, managed seamlessly by our team.",
              },
              {
                title: "Sustainability Consulting",
                desc: "Develop and achieve your ESG goals through expert renewable energy and carbon reduction strategies.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-24 bg-white p-10 rounded-xl shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold">About TruePower</h2>
              <p className="mt-4 text-slate-600">
                TruePower Consultants is an independent energy advisory firm helping
                commercial and industrial clients optimize energy costs and strategies.
                We bring transparency, competitive pricing, and expert negotiation to
                every partnership.
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                <li>• 100% independent — no hidden supplier incentives</li>
                <li>• Licensed consultants with nationwide reach</li>
                <li>• Decades of experience in deregulated energy markets</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <img
                src="https://source.unsplash.com/featured/?business,consulting,energy"
                alt="Team"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-24">
          <h2 className="text-3xl font-semibold text-center">Request a Quote</h2>
          <p className="text-slate-600 text-center mt-2">
            Let us find the best energy rates for your business.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <form
              className="bg-white p-6 rounded-xl shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href =
                  "mailto:info@truepowerconsultants.com?subject=Energy%20Quote%20Request&body=" +
                  encodeURIComponent(
                    `Name: ${e.target.name.value}\nCompany: ${e.target.company.value}\nEmail: ${e.target.email.value}\nUsage: ${e.target.usage.value}\nMessage:\n${e.target.message.value}`
                  );
              }}
            >
              <div className="grid gap-3">
                <input name="name" placeholder="Your name" className="border border-slate-200 rounded-md px-3 py-2" required />
                <input name="company" placeholder="Company" className="border border-slate-200 rounded-md px-3 py-2" />
                <input name="email" type="email" placeholder="Email" className="border border-slate-200 rounded-md px-3 py-2" required />
                <input name="usage" placeholder="Annual usage (kWh or therms)" className="border border-slate-200 rounded-md px-3 py-2" />
                <textarea name="message" rows={4} placeholder="Additional details" className="border border-slate-200 rounded-md px-3 py-2" />
                <button type="submit" className="mt-3 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">
                  Send via Email
                </button>
              </div>
            </form>

            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h3 className="font-semibold">Office</h3>
              <p className="text-sm text-slate-600 mt-2">
                123 Market Street<br />Anytown, USA
              </p>
              <p className="text-sm text-slate-600 mt-4">
                <strong>Hours:</strong> Mon–Fri 9:00–17:00
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium">Follow</p>
                <div className="flex gap-3 mt-2">
                  <a href="#" className="text-sm underline">LinkedIn</a>
                  <a href="#" className="text-sm underline">X</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-sm text-slate-500 text-center border-t pt-6">
          © {new Date().getFullYear()} TruePower Consultants — All rights reserved.
        </footer>
      </main>
    </div>
  );
}
