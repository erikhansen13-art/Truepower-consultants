// app/page.jsx
"use client";

import React from "react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white text-slate-900 antialiased px-8 py-12">
        {/* Header */}
        <header className="max-w-7xl mx-auto flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            {/* Logo wrapper with pulsing outline */}
            <div className="logo-wrap">
              <img
                src="/bolt-logo.jpeg"
                alt="TruePower Bolt Logo"
                className="logo-img"
                width={84}
                height={84}
              />
            </div>

            <div>
              <h1 className="text-5xl font-extrabold leading-tight text-[#0f2b45]">
                TruePower
              </h1>
              <div className="text-sm tracking-widest text-slate-400 text-center mt-1" style={{letterSpacing: '2px'}}>
                CONSULTANTS
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#services" className="hover:text-[#1f3b5b]">Services</a>
            <a href="#about" className="hover:text-[#1f3b5b]">About</a>
            <a
              href="#contact"
              className="inline-block bg-[#0f2b45] text-white rounded-md px-5 py-2 shadow"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-start">
          <div className="col-span-7">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f2b45] leading-snug">
              Smarter Energy Solutions.
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl">
              Working with businesses to manage and reduce energy costs.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#contact"
                className="inline-block bg-[#0f2b45] text-white px-5 py-3 rounded-md shadow"
              >
                Get a Quote
              </a>
              <a href="#services" className="inline-block px-5 py-3 border rounded-md">
                Learn More
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-600">
              <strong>Phone:</strong> 716-303-3014 &nbsp;·&nbsp; <strong>Email:</strong>{" "}
              <a href="mailto:contact@truepowerconsultants.com" className="underline">
                contact@truepowerconsultants.com
              </a>
            </p>
          </div>

          {/* Energy chart placeholder (rectangular) */}
          <div className="col-span-5">
            <div className="border rounded-md p-6 bg-white shadow-sm h-full min-h-[220px] flex items-center justify-center">
              <div className="w-full h-[220px] rounded-md bg-[#f6fbfe] border border-slate-100 flex items-center justify-center">
                {/* Replace with your real chart image or embed */}
                <div className="text-slate-400">Energy chart</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-7xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold text-[#0f2b45] mb-6">Our Services</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card"> 
              <h4 className="font-semibold text-[#0f2b45] mb-2">Energy Procurement</h4>
              <p className="text-slate-600">We negotiate competitive electricity and gas supply contracts tailored to your usage profile.</p>
            </div>

            <div className="card">
              <h4 className="font-semibold text-[#0f2b45] mb-2">Market Intelligence</h4>
              <p className="text-slate-600">Access insights on wholesale market trends, regulatory changes, and renewal timing.</p>
            </div>

            <div className="card">
              <h4 className="font-semibold text-[#0f2b45] mb-2">Risk Management</h4>
              <p className="text-slate-600">Mitigate price volatility with strategic purchasing aligned with your goals.</p>
            </div>

            <div className="card">
              <h4 className="font-semibold text-[#0f2b45] mb-2">Community Solar</h4>
              <p className="text-slate-600">Reduce utility costs and support local renewable energy projects.</p>
            </div>

            <div className="card">
              <h4 className="font-semibold text-[#0f2b45] mb-2">Demand Response</h4>
              <p className="text-slate-600">Earn incentives for reducing load during peak events — we manage enrollment and participation.</p>
            </div>

            <div className="card">
              <h4 className="font-semibold text-[#0f2b45] mb-2">Bill Management</h4>
              <p className="text-slate-600">Streamline invoice tracking, cost analysis, and billing error recovery.</p>
            </div>
          </div>
        </section>

        {/* About + Team row */}
        <section id="about" className="max-w-7xl mx-auto mt-16 bg-white p-6 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <h4 className="text-2xl font-semibold text-[#0f2b45] mb-4">About TruePower</h4>
              <p className="text-slate-600 max-w-2xl">
                TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial energy solutions. We bring transparency, competitive pricing, and expert negotiation to every client we serve.
              </p>

              <ul className="mt-4 text-slate-600 list-disc pl-5 space-y-2">
                <li>100% independent — no hidden supplier incentives</li>
                <li>Experienced consultants with nationwide reach</li>
                <li>Decades of expertise in deregulated energy markets</li>
              </ul>
            </div>

            {/* Team square to the right */}
            <div className="bg-[#f6fbfe] border rounded-md p-6 flex items-center justify-center">
              <div className="text-slate-400">Team</div>
            </div>
          </div>
        </section>

        {/* Request a quote */}
        <section id="contact" className="max-w-7xl mx-auto mt-14 mb-20">
          <h4 className="text-2xl font-semibold text-[#0f2b45] mb-6">Request a Quote</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className="bg-white p-6 rounded-md shadow-sm">
              <div className="grid gap-3">
                <input name="name" placeholder="Your name" className="input" />
                <input name="company" placeholder="Company" className="input" />
                <input name="email" type="email" placeholder="Email" className="input" />
                <input name="usage" placeholder="Annual usage (kWh or therms)" className="input" />
                <textarea name="message" rows={4} placeholder="Additional details (locations, meters, etc.)" className="input"></textarea>

                <div className="flex gap-3">
                  <button type="submit" className="bg-[#0f2b45] text-white px-4 py-2 rounded-md">Send via Email</button>
                  <button type="reset" className="border px-4 py-2 rounded-md">Reset</button>
                </div>
              </div>
            </form>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <h5 className="text-lg font-semibold text-[#0f2b45]">Office</h5>
              <p className="text-slate-600 mt-2">1 Seneca Street, Floor 29<br/>Buffalo, NY 14203</p>

              <div className="mt-6">
                <p className="text-sm font-medium">Hours</p>
                <p className="text-slate-600">Mon–Fri 9:00–17:00</p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium">Follow</p>
                <div className="mt-2 flex gap-3">
                  <a href="#" className="text-sm underline">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="max-w-7xl mx-auto text-center text-slate-500 py-8">
          © {new Date().getFullYear()} TruePower Consultants — All rights reserved.
        </footer>
      </main>

      {/* Small CSS block for the glow, pulsing outline and cards */}
      <style jsx>{`
        .logo-wrap {
          position: relative;
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: white;
          z-index: 2;
        }

        /* The pulsing outline only (not the whole circle) */
        .logo-wrap::after {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 9999px;
          box-shadow: 0 0 0 6px rgba(79,156,255,0.12), 0 0 18px 2px rgba(79,156,255,0.18);
          animation: pulse 2.2s ease-in-out infinite;
          pointer-events: none;
        }

        .logo-img {
          width: 68px;
          height: 68px;
          object-fit: contain;
          border-radius: 9999px;
          background: white;
          padding: 8px;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(79,156,255,0.12), 0 0 18px 2px rgba(79,156,255,0.18);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 0 0 8px rgba(79,156,255,0.08), 0 0 30px 6px rgba(79,156,255,0.14);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(79,156,255,0.12), 0 0 18px 2px rgba(79,156,255,0.18);
          }
        }

        /* cards */
        .card {
          background: white;
          border: 1px solid #eef3f6;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(15,43,69,0.02);
        }

        /* basic input styling */
        .input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #e6eef3;
          border-radius: 8px;
          background: #fff;
          outline: none;
          transition: border-color .15s ease;
        }
        .input:focus {
          border-color: #bcdcff;
          box-shadow: 0 0 0 4px rgba(79,156,255,0.06);
        }

        @media (max-width: 768px) {
          .logo-wrap {
            width: 76px;
            height: 76px;
          }
          .logo-img {
            width: 56px;
            height: 56px;
          }
        }
      `}</style>
    </>
  );
}
