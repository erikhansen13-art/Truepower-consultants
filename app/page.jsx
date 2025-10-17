"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TruePowerWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900 antialiased">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ boxShadow: ["0 0 0px #00bcd4", "0 0 16px #00bcd4", "0 0 0px #00bcd4"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-white rounded-full p-1 shadow-sm"
            >
              <img
                src="/logo.png"
                alt="TruePower Consultants logo"
                className="h-12 w-12 object-contain"
              />
            </motion.div>
            <span className="font-semibold text-xl text-blue-700 tracking-tight">TruePower Consultants</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with animated gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-400 to-blue-600 animate-gradient-x opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-green-600 font-semibold uppercase">Your Energy Partner</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-blue-900">
              Smarter Energy Procurement.<br />Lower Costs. Better Control.
            </h1>
            <p className="mt-5 text-slate-700 text-lg">
              TruePower Consultants helps businesses secure competitive electricity and natural gas rates while simplifying energy strategy and contract management.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-block px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg">
                Get a Quote
              </a>
              <a href="#services" className="inline-block px-6 py-3 rounded-md border border-blue-200 text-blue-700 hover:bg-blue-50 transition">
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80"
              alt="Energy markets"
              className="w-full h-80 object-cover"
            />
          </motion.div>
        </div>
        <svg className="w-full h-16 text-white" viewBox="0 0 1440 320" fill="currentColor">
          <path d="M0,224L60,234.7C120,245,240,267,360,250.7C480,235,600,181,720,181.3C840,181,960,235,1080,261.3C1200,288,1320,288,1380,288L1440,288L1440,320L0,320Z"></path>
        </svg>
      </section>

      {/* Services */}
      <section id="services" className="mt-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-900">Our Services</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
          Comprehensive energy strategy and consulting services for commercial clients.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Energy Procurement", desc: "We negotiate competitive electricity and gas contracts tailored to your business needs." },
            { title: "Market Intelligence", desc: "Stay ahead of market trends, regulations, and timing opportunities for renewals." },
            { title: "Risk Management", desc: "Mitigate price volatility through customized purchasing strategies aligned with your goals." },
            { title: "Community Solar", desc: "Reduce utility costs and support renewable energy through community solar — no panels required." },
            { title: "Demand Response", desc: "Earn incentives by reducing energy usage during peak events, managed seamlessly by our team." },
            { title: "Sustainability Consulting", desc: "Develop and achieve your ESG goals through renewable energy and carbon reduction strategies." },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -4 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-blue-600"
            >
              <h3 className="font-semibold text-lg text-blue-800">{service.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Divider */}
      <svg className="w-full h-16 text-blue-50 mt-24" viewBox="0 0 1440 320" fill="currentColor">
        <path d="M0,192L60,197.3C120,203,240,213,360,224C480,235,600,245,720,213.3C840,181,960,107,1080,80C1200,53,1320,75,1380,85.3L1440,96L1440,0L0,0Z"></path>
      </svg>

      {/* About */}
      <section id="about" className="bg-blue-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-blue-900">About TruePower</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              TruePower Consultants is an independent energy advisory firm helping commercial and industrial clients optimize energy costs and strategies.
              We bring transparency, competitive pricing, and expert negotiation to every partnership.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li>• 100% independent — no hidden supplier incentives</li>
              <li>• Experienced consultants with nationwide reach</li>
              <li>• Decades of expertise in deregulated energy markets</li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80"
              alt="TruePower Team"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <svg className="w-full h-16 text-white" viewBox="0 0 1440 320" fill="currentColor">
        <path d="M0,64L60,101.3C120,139,240,213,360,234.7C480,256,600,224,720,192C840,160,960,128,1080,138.7C1200,149,1320,203,1380,229.3L1440,256L1440,0L0,0Z"></path>
      </svg>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center text-blue-900">Request a Quote</h2>
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
            <h3 className="font-semibold text-blue-800">Office</h3>
            <p className="text-sm text-slate-600 mt-2">
              123 Market Street<br />Anytown, USA
            </p>
            <p className="text-sm text-slate-600 mt-4">
              <strong>Hours:</strong> Mon–Fri 9:00–17:00
            </p>
            <div className="mt-6">
              <p className="text-sm font-medium text-slate-700">Follow</p>
              <div className="flex gap-3 mt-2">
                <a href="#" className="text-sm underline text-blue-700 hover:text-blue-900">LinkedIn</a>
                <a href="#" className="text-sm underline text-blue-700 hover:text-blue-900">X</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-slate-500 text-center border-t pt-6">
        © {new Date().getFullYear()} TruePower Consultants — All rights reserved.
      </footer>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease infinite;
        }
      `}</style>
    </div>
  );
}
