"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
        <div className="flex items-center space-x-5">
          {/* Logo with subtle pulsing glow */}
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg">
            <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
            <Image
              src="/lightning-logo.jpeg"
              alt="TruePower logo"
              width={48}
              height={48}
              className="z-10"
            />
          </div>
          <div className="leading-tight">
            <h1 className="text-5xl font-bold text-[#0b2343]">TruePower</h1>
            <p className="text-center text-lg text-gray-400 tracking-widest mt-1">
              CONSULTANTS
            </p>
          </div>
        </div>

        <nav className="flex space-x-8 text-lg font-medium">
          <a href="#services" className="hover:text-[#0b2343] transition">
            Services
          </a>
          <a href="#about" className="hover:text-[#0b2343] transition">
            About
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-[#0b2343] text-white rounded-lg hover:bg-gray-700 transition"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-10 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-[#0b2343] leading-tight mb-3">
            Smarter Energy Solutions.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Working with businesses to manage and reduce energy costs.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-[#0b2343] text-white rounded-lg hover:bg-gray-700 transition">
              Get a Quote
            </button>
            <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Phone:</strong> 716-303-3014 ·{" "}
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@truepowerconsultants.com"
              className="text-[#0b2343] hover:underline"
            >
              contact@truepowerconsultants.com
            </a>
          </p>
        </div>

        <div className="mt-10 md:mt-0 md:ml-16 w-full md:w-[440px] h-[240px] flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50">
          <Image
            src="/energy-chart.jpg"
            alt="Energy chart"
            width={440}
            height={240}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-10 py-20 bg-gray-50">
        <h3 className="text-2xl font-semibold text-[#0b2343] mb-10">
          Our Services
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Energy Procurement",
              desc: "We negotiate competitive electricity and gas supply contracts tailored to your usage profile.",
            },
            {
              title: "Market Intelligence",
              desc: "Access insights on wholesale market trends, regulatory changes, and renewal timing.",
            },
            {
              title: "Risk Management",
              desc: "Mitigate price volatility with strategic purchasing aligned with your goals.",
            },
            {
              title: "Community Solar",
              desc: "Reduce utility costs and support local renewable energy projects.",
            },
            {
              title: "Demand Response",
              desc: "Earn incentives for reducing load during peak events — we manage enrollment and participation.",
            },
            {
              title: "Bill Management",
              desc: "Streamline invoice tracking, cost analysis, and billing error recovery.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#0b2343] mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-20 bg-white">
        <h3 className="text-2xl font-semibold text-[#0b2343] mb-6">
          About TruePower
        </h3>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              TruePower Consultants is an independent energy advisory firm
              specializing in commercial and industrial energy solutions. We
              bring transparency, competitive pricing, and expert negotiation to
              every client we serve.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>100% independent — no hidden supplier incentives</li>
              <li>Experienced consultants with nationwide reach</li>
              <li>Decades of expertise in deregulated energy markets</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg flex items-center justify-center h-[250px] bg-gray-50">
            <Image
              src="/team-photo.jpg"
              alt="TruePower Team"
              width={400}
              height={250}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact / Quote Section */}
      <section id="contact" className="px-10 py-20 bg-gray-50">
        <h3 className="text-2xl font-semibold text-[#0b2343] mb-6">
          Request a Quote
        </h3>
        <p className="text-gray-600 mb-8">
          Let us find the best energy rates for your business. Fill out the form
          below to get started.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            <input
              type="text"
              placeholder="Annual usage (kWh or therms)"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            <textarea
              placeholder="Additional details (locations, meters, etc.)"
              rows="3"
              className="w-full border border-gray-300 rounded-lg p-3"
            ></textarea>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Send via Email
              </button>
              <button
                type="reset"
                className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
              >
                Reset
              </button>
            </div>
          </form>

          <div>
            <h4 className="font-semibold text-[#0b2343] mb-2">Office</h4>
            <p className="text-gray-600 mb-4">
              1 Seneca Street, Floor 29
              <br />
              Buffalo, NY 14203
            </p>
            <h4 className="font-semibold text-[#0b2343] mb-2">Hours</h4>
            <p className="text-gray-600 mb-4">Mon–Fri 9:00–17:00</p>
            <h4 className="font-semibold text-[#0b2343] mb-2">Follow</h4>
            <a
              href="#"
              className="text-[#0b2343] hover:underline text-sm font-medium"
            >
              LinkedIn ✕
            </a>
          </div>
        </div>
      </section>

      {/* Glow Animation */}
      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 8px 2px rgba(40, 100, 200, 0.5);
          }
          50% {
            box-shadow: 0 0 20px 6px rgba(40, 100, 220, 0.7);
          }
          100% {
            box-shadow: 0 0 8px 2px rgba(40, 100, 200, 0.5);
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2.8s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}
