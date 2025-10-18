// app/page.jsx  (or paste into your existing page component)
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-6">
          {/* Glowing circle container (larger, overflow-hidden so square doesn't poke out) */}
          <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-white">
            {/* glow layer (pulsing) */}
            <div className="absolute inset-0 rounded-full animate-pulse-glow hover:animate-pulse-glow-strong pointer-events-none" />
            {/* logo image (object-contain so it won't show the square corners) */}
            <div className="relative z-10 w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/bolt-logo.jpeg"
                alt="TruePower Bolt Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>

          {/* Company name - larger TruePower, CONSULTANTS lighter and centered under it */}
          <div className="flex flex-col items-start leading-tight">
            <h1 className="text-5xl font-extrabold text-[#0b2b4a] leading-tight">TruePower</h1>
            <div className="w-full">
              <p className="text-sm text-slate-400 tracking-widest mt-1">CONSULTANTS</p>
            </div>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-8">
          <a href="#services" className="text-lg text-gray-700 hover:text-[#0b2b4a] transition">Services</a>
          <a href="#about" className="text-lg text-gray-700 hover:text-[#0b2b4a] transition">About</a>
          <a href="#contact" className="inline-block bg-[#0b2b4a] text-white px-6 py-2 rounded-lg shadow">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-12 py-12 flex flex-col lg:flex-row items-start gap-10">
        <div className="flex-1 max-w-2xl">
          <h2 className="text-4xl lg:text-4xl font-bold text-[#0b2b4a] mb-4">Smarter Energy Solutions.</h2>
          <p className="text-gray-600 mb-6">Working with businesses to manage and reduce energy costs.</p>

          <div className="flex gap-4 mb-6">
            <button className="bg-[#0b2b4a] text-white px-6 py-3 rounded-md shadow">Get a Quote</button>
            <button className="border border-slate-300 px-6 py-3 rounded-md">Learn More</button>
          </div>

          <p className="text-sm text-gray-600">
            <strong>Phone:</strong> 716-303-3014 &nbsp;·&nbsp;
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@truepowerconsultants.com" className="text-blue-700 hover:underline">contact@truepowerconsultants.com</a>
          </p>
        </div>

        {/* ENERGY CHART - wider rectangle to fill space */}
        <div className="flex-shrink-0 w-full lg:w-[560px]">
          <div className="border border-gray-200 rounded-lg bg-white shadow-sm h-[320px] flex items-center justify-center">
            {/* Put a real chart component or an <img src="/chart.jpeg" /> here */}
            <div className="text-gray-400">Energy chart</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 py-16 px-12">
        <h3 className="text-2xl font-bold text-[#0b2b4a] mb-8">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Energy Procurement"
            description="We negotiate competitive electricity and gas supply contracts tailored to your usage profile."
          />
          <ServiceCard
            title="Market Intelligence"
            description="Access insights on wholesale market trends, regulatory changes, and renewal timing."
          />
          <ServiceCard
            title="Risk Management"
            description="Mitigate price volatility with strategic purchasing aligned with your goals."
          />
          <ServiceCard
            title="Community Solar"
            description="Reduce utility costs and support local renewable energy projects."
          />
          <ServiceCard
            title="Demand Response"
            description="Earn incentives for reducing load during peak events — we manage enrollment and participation."
          />
          <ServiceCard
            title="Bill Management"
            description="Streamline invoice tracking, cost analysis, and billing error recovery."
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-12">
        <h3 className="text-2xl font-bold text-[#0b2b4a] mb-4">About TruePower</h3>
        <p className="text-gray-700 max-w-3xl">
          TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial solutions.
          We bring transparency, competitive pricing, and expert negotiation to every client we serve.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>100% independent — no hidden supplier incentives</li>
          <li>Experienced consultants with nationwide reach</li>
          <li>Decades of expertise in deregulated energy markets</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-50 py-16 px-12">
        <h3 className="text-2xl font-bold text-[#0b2b4a] mb-6">Request a Quote</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <input className="w-full p-3 border rounded-md" placeholder="Your name" />
            <input className="w-full p-3 border rounded-md" placeholder="Company" />
            <input className="w-full p-3 border rounded-md" placeholder="Email" />
            <input className="w-full p-3 border rounded-md" placeholder="Annual usage (kWh or therms)" />
            <textarea className="w-full p-3 border rounded-md h-28" placeholder="Additional details (locations, meters, etc.)" />
            <div className="flex gap-4">
              <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-md">Send via Email</button>
              <button type="reset" className="border px-6 py-3 rounded-md">Reset</button>
            </div>
          </form>

          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Office</h4>
            <p>1 Seneca Street, Floor 29<br/>Buffalo, NY 14203</p>
            <p className="mt-4">Hours: Mon–Fri 9:00–17:00</p>
            <p className="mt-4">Follow: <a href="#" className="text-blue-700">LinkedIn</a> · <a href="#" className="text-blue-700">X</a></p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t text-center py-6 text-sm text-gray-500">© {new Date().getFullYear()} TruePower Consultants — All rights reserved.</footer>

      {/* --- Styles for pulsing glow --- */}
      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 8px 3px rgba(10, 92, 180, 0.25);
          }
          50% {
            box-shadow: 0 0 30px 12px rgba(10, 120, 220, 0.45);
          }
          100% {
            box-shadow: 0 0 8px 3px rgba(10, 92, 180, 0.25);
          }
        }
        @keyframes pulseGlowStrong {
          0% { box-shadow: 0 0 12px 4px rgba(10,120,220,0.35); }
          50% { box-shadow: 0 0 40px 16px rgba(10,160,240,0.6); }
          100% { box-shadow: 0 0 12px 4px rgba(10,120,220,0.35); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2.6s infinite ease-in-out;
          border-radius: inherit;
        }
        .animate-pulse-glow:hover {
          /* tiny extra brightness on hover */
          animation: pulseGlowStrong 1.8s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}

/* Helper ServiceCard (kept inline for single-file copy/paste) */
function ServiceCard({ title, description }) {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h4 className="font-semibold text-[#0b2b4a] mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
