"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-white to-gray-100 text-center">
        <motion.div
          className="relative flex items-center justify-center mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {/* Glowing circle around logo */}
          <div className="absolute w-36 h-36 rounded-full bg-blue-500 opacity-30 blur-xl animate-pulse"></div>
          <Image
            src="/bolt-logo.jpeg"
            alt="TruePower Logo"
            width={120}
            height={120}
            className="relative z-10"
          />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4">
          TruePower Consultants
        </h1>
        <h2 className="text-3xl md:text-4xl text-blue-800 font-semibold mt-2">
          Smarter Energy Solutions.
        </h2>
      </header>

      {/* Services Section */}
      <section className="w-full max-w-6xl px-6 py-16 text-center">
        <h3 className="text-3xl font-bold text-blue-900 mb-10">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Energy Audits",
            "Solar Solutions",
            "Battery Storage",
            "Efficiency Upgrades",
            "Consulting & Strategy",
            "Bill Management",
          ].map((service, index) => (
            <div
              key={index}
              className="border-2 border-blue-600 bg-white shadow-md rounded-xl p-8 hover:shadow-lg hover:border-blue-800 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-blue-900">{service}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Energy Chart Image Section */}
      <section className="w-full bg-white py-16 flex justify-center">
        <Image
          src="https://cdn.pixabay.com/photo/2017/01/10/19/05/energy-1976552_1280.jpg"
          alt="Energy Chart"
          width={800}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </section>

      {/* Our Team Section */}
      <section className="w-full bg-gray-100 py-16 flex flex-col items-center text-center">
        <h3 className="text-3xl font-bold text-blue-900 mb-10">Our Team</h3>
        <Image
          src="https://cdn.pixabay.com/photo/2016/11/19/14/00/team-1837306_1280.jpg"
          alt="Our Team"
          width={800}
          height={400}
          className="rounded-xl shadow-lg mb-8 object-cover"
        />
        <p className="text-lg text-gray-700">
          1 Seneca Street, Floor 29 <br /> Buffalo, NY 14203
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-blue-900 text-white text-center mt-10">
        <p>© {new Date().getFullYear()} TruePower Consultants. All rights reserved.</p>
      </footer>
    </main>
  );
}
