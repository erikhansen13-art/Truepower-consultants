import React from 'react';
import Image from 'next/image';
import boltLogo from '../public/bolt-logo.jpeg'; // Ensure this file is in /public

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 shadow-sm">
        <div className="flex items-center space-x-6">
          {/* Glowing Circle Logo */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-32 h-32 rounded-full border-4 border-blue-400 animate-rotateGlow"></div>
            <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full relative z-10">
              <Image
                src={boltLogo}
                alt="Bolt Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-blue-900">TruePower</h1>
            <p className="text-gray-400 tracking-widest text-xl">CONSULTANTS</p>
          </div>
        </div>

        <nav className="flex space-x-10 text-lg font-medium">
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex justify-between items-center px-10 py-16">
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Smarter Energy Solutions.</h2>
          <p className="text-gray-600 text-lg mb-6">
            Working with businesses to manage and reduce energy costs.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get a Quote
            </button>
            <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
          <p className="text-gray-700 text-sm mt-4">
            <strong>Phone:</strong> 716-303-3014 · 
            <strong> Email:</strong> contact@truepowerconsultants.com
          </p>
        </div>

        {/* Energy Chart Placeholder */}
        <div className="w-[420px] h-[250px] bg-blue-50 rounded-lg shadow-inner flex items-center justify-center text-gray-400">
          Energy chart
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-blue-50 py-16 px-10">
        <h3 className="text-2xl font-bold text-blue-900 mb-8">Our Services</h3>
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: 'Energy Procurement', desc: 'We negotiate competitive electricity and gas supply contracts tailored to your usage profile.' },
            { title: 'Market Intelligence', desc: 'Access insights on wholesale market trends, regulatory changes, and renewal timing.' },
            { title: 'Risk Management', desc: 'Mitigate price volatility with strategic purchasing aligned with your goals.' },
            { title: 'Community Solar', desc: 'Reduce utility costs and support local renewable energy projects.' },
            { title: 'Demand Response', desc: 'Earn incentives for reducing load during peak events — we manage enrollment and participation.' },
            { title: 'Bill Management', desc: 'Streamline invoice tracking, cost analysis, and billing error recovery.' }
          ].map((service, index) => (
            <div key={index} className="bg-white shadow-sm p-6 rounded-lg hover:shadow-md transition">
              <h4 className="font-bold text-blue-900 mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-10">
        <div className="flex justify-between items-start">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">About TruePower</h3>
            <p className="text-gray-600 mb-4">
              TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial energy solutions.
              We bring transparency, competitive pricing, and expert negotiation to every client we serve.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>100% independent — no hidden supplier incentives</li>
              <li>Experienced consultants with nationwide reach</li>
              <li>Decades of expertise in deregulated energy markets</li>
            </ul>
          </div>

          {/* Team Box */}
          <div className="w-[250px] h-[250px] bg-blue-50 rounded-lg shadow-inner flex items-center justify-center text-gray-400 text-lg font-medium">
            Team
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="contact" className="bg-blue-50 py-16 px-10">
        <h3 className="text-2xl font-bold text-blue-900 mb-8">Request a Quote</h3>
        <div className="grid grid-cols-2 gap-10">
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full border border-gray-300 rounded-lg p-3" />
            <input type="text" placeholder="Company" className="w-full border border-gray-300 rounded-lg p-3" />
            <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg p-3" />
            <input type="text" placeholder="Annual usage (kWh or therms)" className="w-full border border-gray-300 rounded-lg p-3" />
            <textarea placeholder="Additional details (locations, meters, etc.)" className="w-full border border-gray-300 rounded-lg p-3 h-28"></textarea>
            <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Submit
            </button>
          </form>

          <div>
            <h4 className="font-bold text-blue-900 mb-2">Office</h4>
            <p>1 Seneca Street, Floor 29<br />Buffalo, NY 14203</p>
            <p className="mt-2">Hours<br />Mon–Fri 9:00–17:00</p>
            <p className="mt-4">Follow<br /><a href="#" className="text-blue-600 hover:underline">LinkedIn</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t">
        © {new Date().getFullYear()} TruePower Consultants. All rights reserved.
      </footer>

      {/* Glow Animation Styles */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 8px 2px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 25px 10px rgba(59, 130, 246, 0.7); }
        }

        @keyframes rotateGlow {
          0% { transform: rotate(0deg); box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.5); }
          50% { transform: rotate(180deg); box-shadow: 0 0 30px 10px rgba(59, 130, 246, 0.8); }
          100% { transform: rotate(360deg); box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.5); }
        }

        .animate-rotateGlow {
          animation: rotateGlow 6s infinite linear, pulseGlow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
