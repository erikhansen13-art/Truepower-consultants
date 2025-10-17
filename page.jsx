"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Page() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.target);
    const name = data.get('name') || '';
    const company = data.get('company') || '';
    const email = data.get('email') || '';
    const usage = data.get('usage') || '';
    const message = data.get('message') || '';

    const body = `Name: ${name}%0D%0ACompany: ${company}%0D%0AEmail: ${email}%0D%0AUsage: ${usage}%0D%0AMessage:%0D%0A${message}`;
    const mailto = `mailto:contact@truepowerconsultants.com?subject=Website%20Contact&body=${body}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="TruePower Consultants" width={140} height={48} />
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-brand text-white">Contact</a>
          </nav>
          <div className="md:hidden">{/* mobile placeholder */}</div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-green-600 font-semibold">Your energy partner</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-3">Smarter energy procurement. Lower costs. Better control.</h1>
            <p className="mt-4 text-slate-600">TruePower Consultants helps businesses secure competitive electricity and natural gas rates while simplifying contract management and energy strategy.</p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block px-5 py-3 rounded-md bg-brand text-white">Get a Quote</a>
              <a href="#services" className="inline-block px-5 py-3 rounded-md border border-slate-200 text-slate-700">Learn More</a>
            </div>
            <div className="mt-6 text-xs text-slate-500">
              <strong>Phone:</strong> 716-303-3014 • <strong>Email:</strong> <a href="mailto:contact@truepowerconsultants.com" className="underline">contact@truepowerconsultants.com</a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow">
            <Image src="/og-image.jpg" alt="Energy" width={700} height={460} className="w-full h-64 object-cover" />
          </div>
        </section>

        <section id="services" className="mt-16">
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <p className="mt-2 text-slate-600">Comprehensive consulting and energy strategy services for commercial clients.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h3 className="font-semibold">Energy Procurement</h3>
              <p className="mt-2 text-slate-600 text-sm">We negotiate competitive electricity and gas supply contracts tailored to your risk tolerance and usage profile.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h3 className="font-semibold">Market Intelligence</h3>
              <p className="mt-2 text-slate-600 text-sm">Access up-to-date insights on wholesale market trends, regulatory changes, and timing strategies for renewals.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <h3 className="font-semibold">Risk Management</h3>
              <p className="mt-2 text-slate-600 text-sm">Mitigate price volatility through strategic purchasing and contract structures that align with your energy goals.</p>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16 bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl">
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
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-2xl font-semibold">Request a Quote</h2>
          <p className="text-slate-600 mt-2">Let us find the best energy rates for your business. Fill out the form below to get started.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-white shadow-sm">
              <div className="grid gap-3">
                <input name="name" placeholder="Your name" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
                <input name="company" placeholder="Company" className="w-full border border-slate-200 rounded-md px-3 py-2" />
                <input name="email" type="email" placeholder="Email" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
                <input name="usage" placeholder="Annual usage (kWh or therms)" className="w-full border border-slate-200 rounded-md px-3 py-2" />
                <textarea name="message" rows={4} placeholder="Additional details (locations, meters, etc.)" className="w-full border border-slate-200 rounded-md px-3 py-2" />
                <div className="flex items-center gap-3">
                  <button type="submit" className="px-4 py-2 rounded-md bg-brand text-white">Send Message</button>
                </div>
                {submitting && <p className="text-sm text-slate-500">Opening your mail client…</p>}
                {sent && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                    <strong>✅ Thank you for contacting TruePower Consultants.</strong>
                    <p>We’ll get back to you as soon as possible.</p>
                  </motion.div>
                )}
              </div>
            </form>

            <div className="p-6 rounded-xl bg-white shadow-sm">
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
        </section>

        <footer className="mt-16 text-sm text-slate-500 text-center">© 2025 TruePower Consultants — All Rights Reserved.</footer>
      </main>
    </div>
  );
}