// app/page.jsx
"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <header className="bg-[#1f3b5b] text-white p-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">TruePower Consultants</h1>
          <div className="space-x-6 font-medium">
            <a href="#services" className="hover:text-[#3b82f6] transition">Services</a>
            <a href="#about" className="hover:text-[#3b82f6] transition">About</a>
            <a
              href="#contact"
              className="px-4 py-2 bg-[#3b82f6] text-white rounded-md hover:bg-[#2563eb] transition"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-b from-[#1f3b5b] to-[#3b82f6] text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Empowering Energy Solutions
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          TruePower Consultants specializes in renewable energy consulting, helping clients save costs and achieve sustainability goals.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-[#1f3b5b] font-semibold rounded-md hover:bg-gray-200 transition"
        >
          Get a Consultation
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10 text-[#1f3b5b]">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold mb-3">Energy Auditing</h4>
            <p>
              Comprehensive assessments to identify inefficiencies and cost-saving opportunities.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold mb-3">Renewable Integration</h4>
            <p>
              Expert consulting on solar, wind, and sustainable energy systems for businesses.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold mb-3">Project Management</h4>
            <p>
              End-to-end oversight ensuring your energy initiatives are on time and on budget.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 text-center px-4">
        <h3 className="text-3xl font-bold mb-6 text-[#1f3b5b]">About Us</h3>
        <p className="max-w-3xl mx-auto text-lg">
          With years of experience in the energy sector, TruePower Consultants brings expertise and innovation to every project. 
          We’re dedicated to delivering measurable value and sustainable solutions that drive results.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-4xl mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-6 text-[#1f3b5b]">Contact Us</h3>
        <p className="mb-4">
          Ready to optimize your energy strategy? Let’s connect and make your vision a reality.
        </p>
        <a
          href="mailto:info@truepowerconsultants.com"
          className="px-6 py-3 bg-[#1f3b5b] text-white rounded-md hover:bg-[#3b82f6] transition"
        >
          info@truepowerconsultants.com
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f3b5b] text-white py-6 text-center">
        <p>© {new Date().getFullYear()} TruePower Consultants. All rights reserved.</p>
      </footer>
    </main>
  );
}
