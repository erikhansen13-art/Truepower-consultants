import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-8">
        <div className="flex items-center space-x-4">
          {/* Glowing circular logo */}
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md">
            <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
            <Image
              src="/bolt-logo.jpeg"
              alt="TruePower logo"
              width={65}
              height={65}
              className="z-10"
            />
          </div>

          {/* Company name */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-none">
              TruePower
            </h1>
            <p className="text-lg tracking-widest text-gray-400 text-center">
              CONSULTANTS
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8 text-lg">
          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a
            href="#contact"
            className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-wrap items-center justify-between px-12 py-12">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Smarter Energy Solutions.
          </h2>
          <p className="text-gray-700 mb-8">
            Working with businesses to manage and reduce energy costs.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
              Get a Quote
            </button>
            <button className="border border-gray-400 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            <strong>Phone:</strong> 716-303-3014 ·{" "}
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@truepowerconsultants.com" className="text-blue-700 hover:underline">
              contact@truepowerconsultants.com
            </a>
          </p>
        </div>

        {/* Energy chart placeholder */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm w-[500px] h-[250px] flex items-center justify-center text-gray-400">
          Energy chart
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-16 px-12">
        <h3 className="text-2xl font-bold mb-8 text-gray-900">Our Services</h3>
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

      {/* About */}
      <section id="about" className="py-16 px-12">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">About TruePower</h3>
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

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16 px-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Request a Quote</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full p-3 border rounded-md" />
            <input type="text" placeholder="Company" className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
            <input type="text" placeholder="Annual usage (kWh or therms)" className="w-full p-3 border rounded-md" />
            <textarea placeholder="Additional details (locations, meters, etc.)" className="w-full p-3 border rounded-md h-24"></textarea>
            <div className="flex space-x-4">
              <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
                Send via Email
              </button>
              <button type="reset" className="border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-100 transition">
                Reset
              </button>
            </div>
          </form>

          {/* Office Info */}
          <div>
            <h4 className="font-semibold text-lg mb-2">Office</h4>
            <p>1 Seneca Street, Floor 29<br />Buffalo, NY 14203</p>
            <p className="mt-4">Mon–Fri 9:00–17:00</p>
            <p className="mt-4">
              <a href="#" className="text-blue-700 hover:underline">LinkedIn</a> · <a href="#" className="text-blue-700 hover:underline">X</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} TruePower Consultants. All rights reserved.
      </footer>

      {/* Glow animation styling */}
      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 10px 3px rgba(40, 120, 255, 0.6);
            background-color: rgba(255, 255, 255, 1);
          }
          50% {
            box-shadow: 0 0 25px 10px rgba(80, 160, 255, 0.9);
            background-color: rgba(240, 245, 255, 1);
          }
          100% {
            box-shadow: 0 0 10px 3px rgba(40, 120, 255, 0.6);
            background-color: rgba(255, 255, 255, 1);
          }
        }

        .animate-pulse-glow {
          animation: pulseGlow 2.8s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}

// Small service card component
function ServiceCard({ title, description }) {
  return (
    <div className="bg-white shadow-sm border rounded-lg p-6 hover:shadow-md transition">
      <h4 className="font-semibold mb-2 text-gray-900">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
