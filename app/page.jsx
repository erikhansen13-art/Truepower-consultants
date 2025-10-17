export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col items-center space-y-4">
          <div className="glow-logo">
            <img
              src="/bolt-logo.png"
              alt="TruePower Lightning Logo"
              className="w-16 h-16"
            />
          </div>
          <h1 className="text-4xl font-bold text-blue-800">TruePower Consultants</h1>
          <p className="text-lg text-gray-600">Your trusted energy consulting partner.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-2xl mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">About TruePower</h2>
        <p className="text-gray-700 leading-relaxed">
          TruePower Consultants is an experienced team of energy professionals
          dedicated to helping businesses navigate the complexities of energy markets
          with clarity and confidence.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-2xl mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Services</h2>
        <ul className="space-y-2 text-gray-700">
          <li>⚡ Energy Procurement & Risk Management</li>
          <li>💡 Renewable Energy Strategy</li>
          <li>📊 Market Analytics & Forecasting</li>
          <li>🌱 Sustainability Planning</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="max-w-2xl mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Meet Our Team</h2>
        <p className="text-gray-700 leading-relaxed">
          Our consultants bring years of expertise across wholesale markets,
          regulatory frameworks, and corporate sustainability strategies.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-2xl mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact Us</h2>
        <p className="text-gray-700">Ready to power your business with confidence?</p>
        <p className="text-gray-700 mt-2">
          <strong>Email:</strong> info@truepowerconsultants.com
        </p>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm mt-12 border-t border-gray-200 pt-6">
        <p>© {new Date().getFullYear()} TruePower Consultants. All rights reserved.</p>
      </footer>
    </main>
  );
}
