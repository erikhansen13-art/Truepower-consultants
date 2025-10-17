"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TruePowerWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cardClass = "p-6 rounded-xl bg-white shadow-sm";
  const sectionMotion = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 antialiased scroll-smooth">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="TruePower Consultants logo" width={140} height={48} className="h-10 w-auto object-contain" priority />
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-brand text-white hover:bg-brand/90">Contact</a>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 focus:outline-none" aria-label="Toggle Menu">
            <span className="w-6 h-0.5 bg-slate-800"></span>
            <span className="w-6 h-0.5 bg-slate-800"></span>
            <span className="w-6 h-0.5 bg-slate-800"></span>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white shadow-inner px-6 pb-4 flex flex-col gap-3 text-sm text-slate-700">
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-md bg-brand text-white text-center">Contact</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.section variants={{...sectionMotion}} initial="hidden" animate="visible" transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-green-600 font-semibold">Your energy partner</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-3">Smarter energy procurement. Lower costs. Better control.</h1>
            <p className="mt-4 text-slate-600">TruePower Consultants helps businesses secure the most competitive electricity and natural gas rates while simplifying contract management and energy strategy.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block px-5 py-3 rounded-md bg-brand text-white font-medium hover:bg-brand/90">Get a Quote</a>
              <a href="#services" className="inline-block px-5 py-3 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">Learn More</a>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              <strong>Phone:</strong> 716-303-3014 • <strong>Email:</strong> <a href="mailto:contact@truepowerconsultants.com" className="underline">contact@truepowerconsultants.com</a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="rounded-xl overflow-hidden shadow">
            <Image src="/og-image.jpg" alt="Energy markets" width={700} height={460} className="w-full h-64 object-cover" />
          </motion.div>
        </motion.section>

        <motion.section id="services" className="mt-16" variants={{...sectionMotion}} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <p className="mt-2 text-slate-600">Comprehensive consulting and energy strategy services for commercial clients.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Energy Procurement",
                desc: "We negotiate competitive electricity and gas supply contracts tailored to your risk tolerance and usage profile."
              },
              {
                title: "Market Intelligence",
                desc: "Access up-to-date insights on wholesale market trends, regulatory changes, and timing strategies for renewals."
              },
              {
                title: "Risk Management",
                desc: "Mitigate price volatility through strategic purchasing and contract structures that align with your energy goals."
              }
            ].map((s, i) => (
              <motion.div key={i} variants={{...sectionMotion}} initial="hidden" whileInView="visible" transition={{ delay: i * 0.1 }} viewport={{ once: true }} className={cardClass}>
                <h3 className="font-semibold">{'{'}s.title{'}'}</h3>
                <p className="mt-2 text-slate-600 text-sm">{'{'}s.desc{'}'}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="about" className="mt-16 bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl" variants={{...sectionMotion}} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="md:flex md:items-center md:gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold">About TruePower</h2>
              <p className="mt-2 text-slate-600">TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial energy solutions. We bring transparency, competitive pricing, and expert negotiation to every client we serve.</p>

              <ul className="mt-4 grid gap-2 text-sm">
                <li>• 100% independent — no hidden supplier incentives</li>
                <li>• Licensed consultants with nationwide reach</li>
                <li>• Decades of experience in deregulated energy markets</li>
              </ul>
            </div>

            <div className="mt-6 md:mt-0 md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow">
                <Image src="/og-image.jpg" alt="Team" width={600} height={320} className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" className="mt-16" variants={{...sectionMotion}} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold">Request a Quote</h2>
          <p className="text-slate-600 mt-2">Let us find the best energy rates for your business. Fill out the form below to get started.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form className={cardClass} onSubmit={(e) => {
              e.preventDefault();
              const data = e.target;
              window.location.href = "mailto:contact@truepowerconsultants.com?subject=Energy%20Quote%20Request&body=" + encodeURIComponent(`Name: ${` + "data.name.value" + `}\nCompany: ${` + "data.company.value" + `}\nEmail: ${` + "data.email.value" + `}\nUsage: ${` + "data.usage.value" + `}\nMessage:\n${` + "data.message.value" + `}`);
            }}>
              <div className="grid gap-3">
                <input name="name" placeholder="Your name" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
                <input name="company" placeholder="Company" className="w-full border border-slate-200 rounded-md px-3 py-2" />
                <input name="email" type="email" placeholder="Email" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
                <input name="usage" placeholder="Annual usage (kWh or therms)" className="w-full border border-slate-200 rounded-md px-3 py-2" />
                <textarea name="message" rows={4} placeholder="Additional details (locations, meters, etc.)" className="w-full border border-slate-200 rounded-md px-3 py-2" />
                <div className="flex items-center gap-3">
                  <button type="submit" className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">Send via Email</button>
                  <button type="reset" className="px-4 py-2 rounded-md border">Reset</button>
                </div>
              </div>
            </form>

            <div className={cardClass}>
              <h3 className="font-semibold">Office</h3>
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
        </motion.section>

        <footer className="mt-16 text-sm text-slate-500 text-center">© {new Date().getFullYear()} TruePower Consultants — All rights reserved.</footer>
      </main>
    </div>
  );
}
