// app/page.jsx
"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <section className="text-center mt-12">
        <div className="flex justify-center mb-8">
          {/* Logo in glowing circle */}
          <div className="w-40 h-40 rounded-full bg-white shadow-[0_0_40px_#3b82f6] flex items-center justify-center">
            <Image
              src="/logo.png" // 👈 replace with your actual logo filename in public/
              alt="TruePower Consultants Logo"
              width={130}
              height={130}
              className="rounded-full"
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-[#1f3b5b] mb-3">
          TruePower Consultants
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Empowering your home and business with modern energy solutions —
          solar, battery, and EV technology designed for sustainability and
          efficiency.
        </p>

        {/* Navigation Buttons */}
        <nav className="mt-8 flex justify-center gap-6">
          <a
            href="#services"
            className="border-2 border-[#1f3b5b] text-[#1f3b5b] px-5 py-2 rounded-md font-medium hover:bg-[#1f3b5b] hover:text-white transition"
          >
            Services
          </a>
          <a
            href="#about"
            className="border-2 border-[#1f3b5b] text-[#1f3b5b] px-5 py-2 rounded-md font-medium hover:bg-[#1f3b5b] hover:text-white transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="border-2 border-[#1f3b5b] text-[#1f3b5b] px-5 py-2 rounded-md font-medium hover:bg-[#1f3b5b] hover:text-white transition"
          >
            Contact
          </a>
        </nav>
      </section>

      {/* Services Section */}
      <section id="services" className="mt-20 text-center max-w-3xl">
        <h2 className="text-3xl font-semibold text-[#1f3b5b] mb-6">Our Services</h2>
        <ul className="space-y-4 text-slate-700">
          <li>☀️ Residential & Commercial Solar Installation</li>
          <li>🔋 Battery Storage Systems</li>
          <li>🚗 EV Charger Installation</li>
          <li>🏠 Energy Efficiency Consulting</li>
          <li>📊 Power Usage Monitoring & Optimization</li>
        </ul>
      </section>

      {/* Energy Chart Image */}
      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-[#1f3b5b] mb-4 text-center">
          Real Energy Savings in Action
        </h3>
        <div className="flex justify-center">
          <Image
            src="/energy-chart.png" // 👈 replace with your chart image filename in public/
            alt="Energy Chart"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-20 max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-[#1f3b5b] mb-4">About Us</h2>
        <p className="text-slate-600 leading-relaxed">
          At TruePower Consultants, we believe in harnessing renewable energy to
          create a cleaner and smarter future. With over a decade of experience
          in solar and energy optimization, our mission is to deliver custom
          energy solutions that save money and protect the planet.
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mt-20 bg-slate-100 w-full py-10 text-center"
      >
        <h2 className="text-3xl font-semibold text-[#1f3b5b] mb-6">Contact Us</h2>
        <p className="text-slate-600 mb-3">Email: info@truepowerconsultants.com</p>
        <p className="text-slate-600">Phone: (800) 555-0123</p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-slate-500 text-sm text-center pb-8">
        © {new Date().getFullYear()} TruePower Consultants. All rights reserved.
      </footer>
    </main>
  );
}
