// app/page.jsx
"use client";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      {/* inline styled-jsx for the pulsing glow so Tailwind alone isn't required */}
      <style jsx>{`
        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.15), 0 0 0 0 rgba(99, 102, 241, 0.08);
          }
          70% {
            box-shadow: 0 0 40px 12px rgba(59, 130, 246, 0.08), 0 0 24px 6px rgba(99, 102, 241, 0.04);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.0);
          }
        }
        .glow {
          animation: glowPulse 2.6s infinite ease-in-out;
        }
      `}</style>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Glowing circular logo */}
          <div
            className="relative rounded-full bg-white p-5 w-20 h-20 flex items-center justify-center"
            style={{
              boxShadow: "0 12px 24px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div className="rounded-full bg-white w-full h-full flex items-center justify-center glow">
              <img
                src="/bolt-logo.jpeg"
                alt="TruePower bolt logo"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* Brand */}
          <div className="leading-tight">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-extrabold text-[#0f2340]">
                TruePower
              </span>
              <span className="text-sm md:text-base font-semibold text-slate-400 mt-1 tracking-wider text-center">
                CONSULTANTS
              </span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          <a href="#services" className="text-slate-700 hover:text-[#0f2340]">
            Services
          </a>
          <a href="#about" className="text-slate-700 hover:text-[#0f2340]">
            About
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-[#0f2340] text-white rounded-md shadow"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f2340] leading-tight">
            Smarter Energy Solutions.
          </h1>

          <p className="mt-4 text-slate-600 max-w-xl">
            Working with businesses to manage and reduce energy costs.
          </p>

          <div className="mt-8 flex gap-4 items-center">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-[#0f2340] text-white rounded-md"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="inline-block px-6 py-3 border border-slate-200 rounded-md text-slate-700"
            >
              Learn More
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            <strong>Phone:</strong> 716-303-3014 &nbsp; • &nbsp;
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@truepowerconsultants.com"
              className="underline text-slate-600"
            >
              contact@truepowerconsultants.com
            </a>
          </div>
        </div>

        <div>
          {/* Energy chart card */}
          <div className="rounded-xl border bg-white shadow p-6 h-64 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/energy-chart.jpg"
                alt="Energy chart"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-[#0f2340]">Our Services</h2>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Energy Procurement"
            desc="We negotiate competitive electricity and gas supply contracts tailored to your usage profile."
          />
          <ServiceCard
            title="Market Intelligence"
            desc="Access insights on wholesale market trends, regulatory changes, and renewal timing."
          />
          <ServiceCard
            title="Risk Management"
            desc="Mitigate price volatility with strategic purchasing aligned with your goals."
          />
          <ServiceCard
            title="Community Solar"
            desc="Reduce utility costs and support local renewable energy projects."
          />
          <ServiceCard
            title="Demand Response"
            desc="Earn incentives for reducing load during peak events — we manage enrollment and participation."
          />
          <ServiceCard
            title="Bill Management"
            desc="Streamline invoice tracking, cost analysis, and billing error recovery."
          />
        </div>
      </section>

      {/* About + Team */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start bg-gradient-to-r from-white to-slate-50 p-8 rounded-xl">
          <div>
            <h3 className="text-xl font-semibold text-[#0f2340]">About TruePower</h3>
            <p className="mt-4 text-slate-600">
              TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial energy solutions. We bring transparency, competitive pricing, and expert negotiation to every client we serve.
            </p>

            <ul className="mt-6 space-y-3 text-slate-600 list-disc list-inside">
              <li>100% independent — no hidden supplier incentives</li>
              <li>Experienced consultants with nationwide reach</li>
              <li>Decades of experience in deregulated energy markets</li>
            </ul>
          </div>

          {/* Team image on the right only */}
          <div className="rounded-lg border bg-white shadow p-6 h-64 flex items-center justify-center">
            <img
              src="/team.jpg"
              alt="Team meeting"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Request a Quote / Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-[#0f2340]">Request a Quote</h3>
        <p className="mt-2 text-slate-600">
          Let us find the best energy rates for your business. Fill out the form below to get started.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <form className="bg-white rounded-xl border p-6 shadow">
            <div className="grid gap-4">
              <input
                name="name"
                placeholder="Your name"
                className="w-full border border-slate-200 rounded-md px-4 py-3"
              />
              <input
                name="company"
                placeholder="Company"
                className="w-full border border-slate-200 rounded-md px-4 py-3"
              />
              <input
                name="email"
                placeholder="Email"
                className="w-full border border-slate-200 rounded-md px-4 py-3"
              />
              <input
                name="usage"
                placeholder="Annual usage (kWh or therms)"
                className="w-full border border-slate-200 rounded-md px-4 py-3"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Additional details (locations, meters, etc.)"
                className="w-full border border-slate-200 rounded-md px-4 py-3"
              />
            </div>

            <div className="mt-4 flex gap-4">
              <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-md">
                Send via Email
              </button>
              <button type="reset" className="px-6 py-2 border rounded-md">
                Reset
              </button>
            </div>
          </form>

          <aside className="bg-white rounded-xl border p-6 shadow">
            <h4 className="font-semibold text-slate-800">Office</h4>
            <p className="text-slate-600 mt-2">
              1 Seneca Street, Floor 29
              <br />
              Buffalo, NY 14203
            </p>

            <div className="mt-4">
              <h5 className="font-medium text-slate-800">Hours</h5>
              <p className="text-slate-600 mt-1">Mon–Fri 9:00–17:00</p>
            </div>

            <div className="mt-6">
              <h5 className="font-medium text-slate-800">Follow</h5>
              <div className="mt-2 flex gap-4">
                <a href="#" className="text-sm underline text-slate-600">
                  LinkedIn
                </a>
                <a href="#" className="text-sm underline text-slate-600">
                  X
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-500">
          © {new Date().getFullYear()} TruePower Consultants — All rights reserved.
        </div>
      </footer>
    </main>
  );
}

/* small service card component */
function ServiceCard({ title, desc }) {
  return (
    <div className="rounded-xl bg-white border p-6 shadow-sm hover:shadow-md transition">
      <h4 className="text-lg font-semibold text-[#0f2340]">{title}</h4>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}
