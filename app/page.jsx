"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);
  const fadeClass = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  const handleMail = (e) => {
    e.preventDefault();
    const f = e.target;
    const subject = encodeURIComponent("Energy Quote Request");
    const body = encodeURIComponent(
      `Name: ${f.name.value}\nCompany: ${f.company.value}\nEmail: ${f.email.value}\nUsage: ${f.usage.value}\n\nMessage:\n${f.message.value}`
    );
    window.location.href = `mailto:contact@truepowerconsultants.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header / Logo + Nav */}
      <header className={`max-w-7xl mx-auto px-6 py-8 flex items-center justify-between ${fadeClass} transition-all duration-700`}>
        <div className="flex items-center gap-6">
          {/* Larger glowing logo */}
          <div
            className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg"
            style={{ boxShadow: "0 0 40px rgba(59,130,246,0.3)" }}
          >
            <img
              src="/bolt-logo.jpeg"
              alt="TruePower bolt"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Bigger text next to it */}
          <div className="leading-tight">
            <div className="text-5xl font-extrabold" style={{ color: "#1f3b5b" }}>
              TruePower
            </div>
            <div className="text-xl font-semibold text-gray-500 tracking-wide">
              CONSULTANTS
            </div>
          </div>
        </div>

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
      <section className={`max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center ${fadeClass} transition-all duration-700 delay-75`}>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mt-3" style={{ color: "#0f172a" }}>
            Smarter Energy Solutions.
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            TruePower Consultants helps businesses reduce costs and optimize energy.
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
          <img
            src="/energy-chart.png"
            alt="Energy chart"
            className="w-full h-64 object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`max-w-7xl mx-auto px-6 py-12 ${fadeClass} transition-all duration-700 delay-150`}>
        <h3 className="text-2xl font-semibold" style={{ color: "#1f3b5b" }}>Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            "Energy Procurement",
            "Market Intelligence",
            "Risk Management",
            "Community Solar",
            "Demand Response",
            "Bill Management",
          ].map((title, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-[#f8fafc] border border-[#e6eef6] shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[#1f3b5b]">{title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* About + Team */}
      <section id="about" className={`max-w-7xl mx-auto px-6 py-12 bg-gradient-to-r from-white to-gray-50 rounded-lg ${fadeClass} transition-all duration-700 delay-200`}>
        <div className="md:flex md:items-center md:gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#1f3b5b]">About TruePower</h3>
            <p className="mt-2 text-slate-600">
              TruePower Consultants is an independent energy advisory firm specializing in commercial solutions. We bring transparency, competitive pricing, and negotiating power to every client.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>• 100% independent — no hidden supplier incentives</li>
              <li>• Experienced consultants with nationwide reach</li>
              <li>• Decades of experience in deregulated energy markets</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow">
              <img
                src="/team-photo.png"
                alt="Team meeting"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Quote */}
      <section id="contact" className={`max-w-7xl mx-auto px-6 py-12 ${fadeClass} transition-all duration-700 delay-250`}>
        <h3 className="text-2xl font-semibold text-[#1f3b5b]">Request a Quote</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <form className="bg-white p-6 rounded-xl shadow-sm" onSubmit={handleMail}>
            <div className="grid gap-3">
              <input name="name" placeholder="Your name" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
              <input name="company" placeholder="Company" className="w-full border border-slate-200 rounded-md px-3 py-2" />
              <input name="email" type="email" placeholder="Email" className="w-full border border-slate-200 rounded-md px-3 py-2" required />
              <input name="usage" placeholder="Annual usage (kWh or therms)" className="w-full border border-slate-200 rounded-md px-3 py-2" />
              <textarea name="message" rows={4} placeholder="Additional details" className="w-full border border-slate-200 rounded-md px-3 py-2" />
              <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 rounded-md bg-green-600 text-white">Send via Email</button>
                <button type="reset" className="px-4 py-2 rounded-md border">Reset</button>
              </div>
            </div>
          </form>
          <div className="p-6 rounded-xl bg-white shadow-sm">
            <h4 className="font-semibold">Office</h4>
            <p className="text-sm text-slate-600 mt-2">
              1 Seneca Street, Floor 29<br />Buffalo, NY 14203
            </p>
            <div className="mt-4">
              <p className="text-sm font-medium">Hours</p>
              <p className="text-sm text-slate-600">Mon–Fri 9:00–17:00</p>
            </div>
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

      <footer className="mt-16 text-sm text-slate-500 text-center pb-10">
        © {new Date().getFullYear()} TruePower Consultants — All rights reserved.
      </footer>
    </main>
  );
}
