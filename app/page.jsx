"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 text-slate-900">
      {/* Header */}
      <header className="flex items-center justify-center py-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-4"
        >
          {/* Glowing Logo */}
          <motion.div
            className="relative flex items-center justify-center w-28 h-28 rounded-full bg-slate-900 shadow-lg"
            animate={{
              boxShadow: [
                "0 0 20px #001f3f",
                "0 0 40px #001f3f",
                "0 0 20px #001f3f",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/boltlogo.jpeg"
              alt="TruePower Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
          </motion.div>

          {/* Company Name */}
          <div className="flex flex-col items-start">
            <h1 className="text-5xl font-bold text-[#001f3f] leading-none tracking-tight">
              TruePower
            </h1>
            <h2 className="text-2xl font-semibold text-slate-500 mt-1 text-center">
              CONSULTANTS
            </h2>
          </div>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-semibold text-slate-900"
        >
          Smarter Energy Solutions.
        </motion.h2>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Working with businesses to manage and reduce energy costs.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white text-center">
        <h3 className="text-3xl font-semibold text-[#001f3f] mb-12">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          {[
            "Energy Procurement",
            "Renewable Energy Solutions",
            "Energy Risk Management",
            "Sustainability Consulting",
            "Utility Bill Auditing",
            "Bill Management",
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-slate-300 shadow-md bg-slate-50 hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="text-xl font-semibold text-[#001f3f] mb-2">
                {service}
              </h4>
              <p className="text-slate-600 text-sm">
                Expert strategy and solutions tailored to your business.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <Image
            src="/team.jpg"
            alt="Our Team"
            width={900}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-10 text-center bg-[#001f3f] text-white">
        <p className="text-lg font-semibold mb-2">TruePower Consultants</p>
        <p>1 Seneca Street, Floor 29 · Buffalo, NY 14203</p>
        <p className="mt-4 text-slate-300 text-sm">
          © {new Date().getFullYear()} TruePower Consultants. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
