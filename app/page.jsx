"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 bg-white text-gray-900">
        {/* Glowing logo + name */}
        <div className="flex items-center mb-10">
          <div className="w-28 h-28 rounded-full flex items-center justify-center bg-white shadow-lg border-4 border-blue-800">
            <img
              src="/lightning-logo.jpeg"
              alt="TruePower Logo"
              className="w-16 h-16 drop-shadow-[0_0_15px_rgba(30,64,175,0.8)] animate-pulse"
            />
          </div>
          <div className="ml-5 text-left">
            <h1 className="text-4xl font-extrabold text-blue-900 leading-tight">
              TruePower
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 -mt-1">
              Consultants
            </h2>
          </div>
        </div>

        {/* Main tagline */}
        <h3 className="text-5xl md:text-6xl font-bold text-blue-900 mb-3 leading-snug">
          Smarter Energy Solutions.
        </h3>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
          Reducing costs, increasing efficiency, and empowering sustainable choices.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 bg-gray-100 text-center w-full">
        <h3 className="text-3xl font-bold text-blue-900 mb-12">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Energy Procurement", desc: "Customized plans to reduce your energy costs." },
            { title: "Energy Auditing", desc: "Identify inefficiencies and optimize consumption." },
            { title: "Solar Solutions", desc: "Smart renewable options for long-term savings." },
            { title: "Demand Response", desc: "Maximize savings during peak usage times." },
            { title: "Sustainability Consulting", desc: "Achieve green certifications and ESG goals." },
            { title: "Bill Management", desc: "Streamlined management to track and control energy expenses." },
          ].map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <h4 className="text-2xl font-semibold text-blue-900 mb-3">{service.title}</h4>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-6 bg-white text-center w-full">
        <h3 className="text-3xl font-bold text-blue-900 mb-10">Our Team</h3>
        <img
          src="https://images.unsplash.com/photo-1590608897129-79da98d1596d?auto=format&fit=crop&w=1600&q=80"
          alt="Team Meeting"
          className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
        />
      </section>

      {/* CONTACT SECTION */}
      <footer className="py-10 bg-blue-900 text-white text-center w-full">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p>1 Seneca Street, Floor 29<br />Buffalo, NY 14203</p>
        <p className="mt-2">info@truepowerconsultants.com | (555) 123-4567</p>
        <p className="text-sm text-gray-300 mt-6">
          © {new Date().getFullYear()} TruePower Consultants. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
