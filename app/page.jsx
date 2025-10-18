// app/page.jsx
"use client";
import React from "react";

export default function Home() {
  const handleMail = (e) => {
    e.preventDefault();
    const f = e.target;
    const subject = encodeURIComponent("Energy Quote Request");
    const body = encodeURIComponent(
      `Name: ${f.name.value}\nCompany: ${f.company.value}\nEmail: ${f.email.value}\nPhone: ${f.phone?.value || ""}\nUsage: ${f.usage.value}\n\nMessage:\n${f.message.value}`
    );
    window.location.href = `mailto:contact@truepowerconsultants.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* Larger glowing circular logo */}
          <div
            className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg animate-pulse"
            style={{ boxShadow: "0 0 25px rgba(59,130,246,0.35)" }}
          >
            <img
              src="/bolt-logo.jpeg"
              alt="TruePower bolt"
              className="w-14 h-14 object-contain"
            />
          </div>

          {/* Larger Title: TruePower / Consultants */}
          <div className="leading-tight">
            <div className="text-4xl font-extrabold" style={{ color: "#1f3b5b" }}>
              TruePower
            </div>
            <div className="text-lg font-semibold tracking-wide" style={{ color: "#6b7280" }}>
              CONSULTANTS
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="px-3 py-2 rounded-md hover:bg-gray-100" style={{ color: "#1f3b5b" }}>
            Services
          </a>
          <a href="#about" className="px-3 py-2 rounded-md hover:bg-gray-100" style={{ color: "#1f3b5b" }}>
            About
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md text-white"
            style={{ backgroundColor: "#1f3b5b" }}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm text-green-600 font-semibold">Your energy partner</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-3" style={{ color: "#0f172a" }}>
            Smarter energy procurement. Lower costs. Better control.
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl">
            TruePower Consultants helps businesses secure the most competitive electricity and natural gas rates while simplifying contract management and energy strategy.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="inline-block px-5 py-3 rounded-md text-white font-medium"
              style={{ backgroundColor: "#1f3b5b" }}
            >
              Get a Quote
            </a>
            <a href="#services" className="inline-block px-5 py-3 rounded-md border border-gray-200 text-slate-700">
              Learn More
            </a>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            <strong>Phone:</strong> 716-303-3014 • <strong>Email:</strong>{" "}
            <a href="mailto:contact@truepowerconsultants.com" className="underline">contact@truepowerconsultants.com</a>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow">
          <img src="/energy-chart.png" alt="Energy chart" className="w-full h-64 object-cover" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold" style={{ color: "#1f3b5b" }}>Our Services</h3>
        <p className="mt-2 text-slate-600">Comprehensive consulting and energy strategy services for commercial clients.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 rounded-xl bg-[#f8fafc] border border-[#e6eef6] shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-[#1f3b5b]">Energy Procurement</h4>
            <p className="mt-2 text-sm text-slate-600">We negotiate competitive electricity and gas supply contracts tailored to your risk tolerance and usage profile.</p>
          </div>

          <div className="p-6 rounded-xl bg-[#f8fafc] border border-[#e6eef6] shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-[#1f3b5b]">Market Intelligence</h4>
            <p className="mt-2 text-sm text-slate-600">Access up-to-date insights on wholesale market trends, regulatory changes, and timing strategies for renewals.</p>
          </div>

          <div className="p-6 rounded-xl bg-[#f8fafc] border border-[#e6eef6] shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-[#1f3b5b]">Risk Management</h4>
            <p className="mt-2 text-sm text-slate-600">Mitigate price volatility through strategic purchasing and contract structures that align with your energy goals.</p>
          </div>

          <div className="p-6 rounded-xl bg-[#f8fafc] border border-[#e6eef6] shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-[#1f3b5b]">Community Solar</h4>
            <p className="mt-2 text-sm text-slate-600">Enroll in community solar programs that reduce utility costs and support local renewable energy generation.</p>
          </div>

          <div className="p-6 rounded-xl bg-[#f8fafc] border border-[#e6eef6] shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-[#1f3b5b]">Demand Response</h4>
            <p className="mt-2 text-sm text-slate-600">Earn incentives for reducing load during peak events; we manage enrollment and participation.</p>
          </div>

          {/* ✨ NEW SERVICE ✨ */}
          <div className="p-6 rounded-xl bg-[#f8fafc] border border-[#e6eef6] shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-[#1f3b5b]">Bill Management</h4>
            <p className="mt-2 text-sm text-slate-600">We streamline invoice tracking, utility cost analysis, and billing error recovery to save your business time and money.</p>
          </div>
        </div>
      </section>

      {/* About / Contact sections stay the same */}
      {/* ...keep everything below unchanged from your current version */}
    </main>
  );
}
