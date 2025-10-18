// app/page.jsx
"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-accent-100 text-slate-900 antialiased">
      {/* Header */}
      <header className="flex flex-col items-center space-y-3 py-6">
        <div className="flex items-center space-x-3">
          <img
            src="/bolt-logo.jpeg"
            alt="TruePower Bolt Logo"
            className="logo-glow w-12 h-12 object-contain rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-[#1f3b5b]">TruePower</h1>
            <p className="text-sm font-medium text-[#3b82f6] tracking-wide">
              CONSULTANTS
            </p>
          </div>
        </div>

        <nav className="space-x-6 text-[#1f3b5b] font-medium">
          <a
            href="#services"
            className="hover:text-[#3b82f6] transition"
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-[#3b82f6] transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-[#1f3b5b] text-white rounded-md hover:bg-[#3b82f6] transition"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-green-600 font-semibold">
            Your energy partner
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
            TruePower Consultants helps businesses secure the most competitive
            electricity and natural gas rates while simplifying energy strategy.
          </h2>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
        <form className="grid gap-3">
          <input
            name="name"
            placeholder="Your name"
            className="w-full border border-slate-200 rounded-md px-3 py-2"
            required
          />
          <input
            name="company"
            placeholder="Company"
            className="w-full border border-slate-200 rounded-md px-3 py-2"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border border-slate-200 rounded-md px-3 py-2"
            required
          />
          <input
            name="usage"
            placeholder="Annual usage (kWh or therms)"
            className="w-full border border-slate-200 rounded-md px-3 py-2"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Additional details"
            className="w-full border border-slate-200 rounded-md px-3 py-2"
          ></textarea>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
            >
              Send via Email
            </button>
            <button
              type="reset"
              className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
            >
              Reset
            </button>
          </div>
        </form>

        <div className="mt-10 p-6 rounded-xl bg-white shadow-sm">
          <h4 className="font-semibold text-navy-900">Office</h4>
          <p className="text-sm text-slate-600 mt-2">
            123 Market Street<br />Anytown, USA
          </p>

          <div className="mt-4">
            <p className="text-sm font-medium">Hours</p>
            <p className="text-sm text-slate-600">Mon–Fri: 9:00–17:00</p>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium">Follow</p>
            <div className="flex gap-3 mt-2">
              <a
                aria-label="LinkedIn"
                href="#"
                className="text-sm underline text-[#3b82f6]"
              >
                LinkedIn
              </a>
              <a
                aria-label="X"
                href="#"
                className="text-sm underline text-[#3b82f6]"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-slate-500 text-center pb-10">
        © {new Date().getFullYear()} TruePower Consultants – All rights reserved.
      </footer>
    </main>
  );
}
