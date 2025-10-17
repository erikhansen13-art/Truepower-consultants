'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Page() {
  const [showTop, setShowTop] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.target);
    const name = data.get('name') || '';
    const company = data.get('company') || '';
    const email = data.get('email') || '';
    const usage = data.get('usage') || '';
    const message = data.get('message') || '';
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nUsage: ${usage}\nMessage:\n${message}`);
    const mailto = `mailto:contact@truepowerconsultants.com?subject=Website%20Contact&body=${body}`;
    window.location.href = mailto;
    setTimeout(() => { setSubmitting(false); setSent(true); }, 800);
  };

  return (
    <div className="min-h-screen text-white">
      <header className="sticky top-0 z-40 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="TruePower Consultants" width={160} height={56} />
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm text-slate-200">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-brand text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero-gradient py-20 relative">
        <div className="hero-watermark"><img src="/logo.png" className="logo-watermark" alt="logo watermark" /></div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <p className="text-sm text-green-400 font-semibold">Your energy partner</p>
            <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-bold mt-3">Smarter Energy Procurement. Lower Costs. Better Control.</motion.h1>
            <p className="mt-4 text-slate-200 max-w-xl">TruePower Consultants helps businesses secure competitive electricity and natural gas rates while simplifying contract management and energy strategy.</p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="btn">Get a Quote</a>
              <a href="#services" className="btn secondary">Learn More</a>
            </div>
            <div className="mt-6 text-sm text-slate-300">
              <strong>Phone:</strong> 716-303-3014 • <strong>Email:</strong> <a href="mailto:contact@truepowerconsultants.com" className="underline">contact@truepowerconsultants.com</a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src="/og-image.jpg" alt="energy" width={700} height={460} className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="services" className="mt-6">
          <h2 className="text-2xl font-semibold text-white">Our Services</h2>
          <p className="mt-2 text-slate-300">Comprehensive consulting and energy strategy services for commercial clients.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 rounded-xl card">
              <h3 className="font-semibold">Energy Procurement</h3>
              <p className="mt-2 text-sm">We negotiate competitive electricity and gas supply contracts tailored to your risk tolerance and usage profile.</p>
            </div>
            <div className="p-6 rounded-xl card">
              <h3 className="font-semibold">Market Intelligence</h3>
              <p className="mt-2 text-sm">Access up-to-date insights on wholesale market trends, regulatory changes, and timing strategies for renewals.</p>
            </div>
            <div className="p-6 rounded-xl card">
              <h3 className="font-semibold">Risk Management</h3>
              <p className="mt-2 text-sm">Mitigate price volatility through strategic purchasing and contract structures that align with your energy goals.</p>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16 bg-gradient-to-r from-transparent to-transparent p-6 rounded-xl">
          <div className="md:flex md:items-center md:gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold">About TruePower</h2>
              <p className="mt-2 text-slate-300">TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial energy solutions. We bring transparency, competitive pricing, and expert negotiation to every client we serve.</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                <li>• 100% independent — no hidden supplier incentives</li>
                <li>• Licensed consultants with nationwide reach</li>
                <li>• Decades of experience in deregulated energy markets</li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow">
                <Image src="/og-image.jpg" alt="team" width={600} height={320} className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-2xl font-semibold">Request a Quote</h2>
          <p className="text-slate-300 mt-2">Let us find the best energy rates for your business. Fill out the form below to get started.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-white/5 shadow-sm">
              <div className="grid gap-3">
                <input name="name" placeholder="Your name" className="w-full border border-white/10 rounded-md px-3 py-2 bg-transparent text-white" required />
                <input name="company" placeholder="Company" className="w-full border border-white/10 rounded-md px-3 py-2 bg-transparent text-white" />
                <input name="email" type="email" placeholder="Email" className="w-full border border-white/10 rounded-md px-3 py-2 bg-transparent text-white" required />
                <input name="usage" placeholder="Annual usage (kWh or therms)" className="w-full border border-white/10 rounded-md px-3 py-2 bg-transparent text-white" />
                <textarea name="message" rows={4} placeholder="Additional details (locations, meters, etc.)" className="w-full border border-white/10 rounded-md px-3 py-2 bg-transparent text-white" />
                <div className="flex items-center gap-3">
                  <button type="submit" className="px-4 py-2 rounded-md bg-brand text-white">Send Message</button>
                </div>
                {submitting && <p className="text-sm text-slate-300">Opening your mail client…</p>}
                {sent && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 bg-green-900/40 border border-green-700 rounded">
                    <strong>✅ Thank you for contacting TruePower Consultants.</strong>
                    <p>We’ll get back to you as soon as possible.</p>
                  </motion.div>
                )}
              </div>
            </form>

            <div className="p-6 rounded-xl bg-white/5 shadow-sm">
              <h3 className="font-semibold">Office</h3>
              <p className="text-sm text-slate-300 mt-2">123 Market Street<br/>Anytown, USA</p>
              <div className="mt-4">
                <p className="text-sm font-medium">Hours</p>
                <p className="text-sm text-slate-300">Mon–Fri 9:00–17:00</p>
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
      </main>

      <footer className="mt-16 text-sm text-slate-400 text-center">© 2025 TruePower Consultants — All Rights Reserved.</footer>

      <button id="back-to-top" aria-label="Back to top" title="Back to top">↑</button>

      <script dangerouslySetInnerHTML={{__html: `
        (function(){
          const btn = document.getElementById('back-to-top');
          window.addEventListener('scroll', () => {
            if(window.scrollY > 300) btn.style.display = 'block'; else btn.style.display = 'none';
          });
          btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
        })();
      `}} />
    </div>
  );
}