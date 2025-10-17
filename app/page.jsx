export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          {/* Glowing Logo */}
          <div className="glow-logo">
            <img
              src="/bolt-logo.png"
              alt="TruePower Lightning Logo"
              style={{ width: '60px', height: '60px' }}
            />
          </div>

          {/* Company Name */}
          <h1>TruePower Consultants</h1>
          <p>Your trusted energy consulting partner.</p>
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2>About TruePower</h2>
        <p>
          TruePower Consultants is an experienced team of energy professionals 
          dedicated to helping businesses navigate the complexities of energy markets 
          with clarity and confidence.
        </p>
      </section>

      {/* Services Section */}
      <section>
        <h2>Our Services</h2>
        <p>We provide customized consulting across key areas:</p>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', color: '#475569' }}>
          <li>⚡ Energy Procurement & Risk Management</li>
          <li>💡 Renewable Energy Strategy</li>
          <li>📊 Market Analytics & Forecasting</li>
          <li>🏢 Sustainability Planning</li>
        </ul>
      </section>

      {/* Team Section */}
      <section>
        <h2>Meet Our Team</h2>
        <p>
          Our consultants bring years of expertise across wholesale markets, 
          regulatory frameworks, and corporate sustainability strategies.
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <h2>Contact Us</h2>
        <p>Ready to power your business with confidence?</p>
        <p><strong>Email:</strong> info@truepowerconsultants.com</p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} TruePower Consultants. All rights reserved.</p>
      </footer>
    </main>
  );
}
