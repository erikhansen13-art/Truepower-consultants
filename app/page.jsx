// app/page.jsx
"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white antialiased">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center space-y-6 py-20">
        <div className="relative w-24 h-24">
          <Image
            src="/bolt-logo.jpeg"
            alt="TruePower Bolt Logo"
            className="object-contain rounded-full"
            fill
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1f3b5b]">TruePower</h1>
          <p className="text-lg text-[#3b82f6] tracking-wide">
            CONSULTANTS
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center space-x-6 text-[#1f3b5b] font-medium pb-10">
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

      {/* Services Section */}
      <section id="services" className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Our Services</h2>
        <p className="text-center text-slate-300">
          At TruePower Consultants, we provide expert energy optimization,
          cost reduction, and sustainability solutions for businesses of all
          sizes.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-4">About Us</h2>
        <p className="text-center text-slate-300">
          With years of experience in power consulting, our mission is to help
          businesses reduce costs and improve efficiency while staying
          environmentally responsible.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <form className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-black"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your message"
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-black"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-[#1f3b5b] text-white rounded-md hover:bg-[#3b82f6] transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-400 py-10">
        © {new Date().getFullYear()} TruePower Consultants — All rights reserved.
      </footer>
    </main>
  );
}
