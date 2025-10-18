<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TruePower Consultants</title>
  <style>
    body {
      font-family: 'Inter', Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: #1a1a1a;
      line-height: 1.6;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 4rem;
      background-color: white;
    }

    /* Pulsing glowing circle */
    .logo-container {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .logo-circle {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: radial-gradient(circle, #1e3a8a 20%, #60a5fa 80%);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: pulseGlow 3s infinite ease-in-out;
      box-shadow: 0 0 25px rgba(96, 165, 250, 0.6);
    }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(96, 165, 250, 0.6); transform: scale(1); }
      50% { box-shadow: 0 0 40px rgba(96, 165, 250, 0.9); transform: scale(1.05); }
    }

    .logo-circle img {
      width: 55%;
      height: auto;
    }

    .logo-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .logo-text h1 {
      font-size: 3rem;
      margin: 0;
      color: #0f172a;
    }

    .logo-text h2 {
      font-size: 1.8rem;
      letter-spacing: 0.3rem;
      color: #64748b;
      text-align: center;
      margin-top: 0.2rem;
    }

    nav a {
      margin-left: 2rem;
      text-decoration: none;
      color: #0f172a;
      font-weight: 500;
      transition: color 0.2s;
    }

    nav a:hover {
      color: #1d4ed8;
    }

    nav .contact-btn {
      background-color: #0f172a;
      color: white;
      padding: 0.6rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
    }

    .hero {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 3rem 4rem;
      gap: 2rem;
    }

    .hero-content {
      max-width: 50%;
    }

    .hero-content h2 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      color: #0f172a;
    }

    .hero-content p {
      font-size: 1.2rem;
      color: #334155;
      margin-bottom: 1.5rem;
    }

    .hero-buttons button {
      margin-right: 1rem;
      padding: 0.8rem 1.6rem;
      font-size: 1rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .hero-buttons .primary {
      background-color: #0f172a;
      color: white;
    }

    .hero-buttons .primary:hover {
      background-color: #1e3a8a;
    }

    .hero-buttons .secondary {
      background-color: white;
      color: #0f172a;
      border: 2px solid #0f172a;
    }

    .hero-buttons .secondary:hover {
      background-color: #f8fafc;
    }

    .hero-chart {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      width: 40%;
      height: 200px;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #94a3b8;
      font-weight: 500;
    }

    .services {
      padding: 3rem 4rem;
      background-color: #f9fafb;
    }

    .services h3 {
      font-size: 1.8rem;
      color: #0f172a;
      margin-bottom: 1.5rem;
    }

    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
    }

    .service-card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    }

    .service-card h4 {
      margin: 0 0 0.5rem;
      color: #0f172a;
    }

    .service-card p {
      color: #475569;
      font-size: 0.95rem;
    }

    .about, .quote {
      padding: 3rem 4rem;
    }

    .about h3 {
      font-size: 1.8rem;
      color: #0f172a;
      margin-bottom: 1rem;
    }

    .quote {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;
    }

    .quote form {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      background-color: #f8fafc;
      padding: 1.5rem;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
    }

    .quote form input, .quote form textarea {
      padding: 0.8rem;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      font-size: 1rem;
    }

    .quote-buttons {
      display: flex;
      gap: 1rem;
    }

    .quote-buttons button {
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
    }

    .quote-buttons .send {
      background-color: #16a34a;
      color: white;
    }

    .quote-buttons .reset {
      background-color: #e2e8f0;
      color: #0f172a;
    }

    .office {
      flex: 0.5;
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 1.5rem;
      border-radius: 10px;
    }

    .office h4 {
      margin-top: 0;
      color: #0f172a;
    }
  </style>
</head>

<body>
  <header>
    <div class="logo-container">
      <div class="logo-circle">
        <img src="bolt-logo.jpeg" alt="TruePower Logo" />
      </div>
      <div class="logo-text">
        <h1>TruePower</h1>
        <h2>CONSULTANTS</h2>
      </div>
    </div>

    <nav>
      <a href="#">Services</a>
      <a href="#">About</a>
      <a href="#" class="contact-btn">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h2>Smarter Energy Solutions.</h2>
      <p>Working with businesses to manage and reduce energy costs.</p>
      <div class="hero-buttons">
        <button class="primary">Get a Quote</button>
        <button class="secondary">Learn More</button>
      </div>
      <p><strong>Phone:</strong> 716-303-3014 &nbsp; | &nbsp;
         <strong>Email:</strong> contact@truepowerconsultants.com</p>
    </div>

    <div class="hero-chart">Energy chart</div>
  </section>

  <section class="services">
    <h3>Our Services</h3>
    <div class="service-grid">
      <div class="service-card">
        <h4>Energy Procurement</h4>
        <p>We negotiate competitive electricity and gas supply contracts tailored to your usage profile.</p>
      </div>
      <div class="service-card">
        <h4>Market Intelligence</h4>
        <p>Access insights on wholesale market trends, regulatory changes, and renewal timing.</p>
      </div>
      <div class="service-card">
        <h4>Risk Management</h4>
        <p>Mitigate price volatility with strategic purchasing aligned with your goals.</p>
      </div>
      <div class="service-card">
        <h4>Community Solar</h4>
        <p>Reduce utility costs and support local renewable energy projects.</p>
      </div>
      <div class="service-card">
        <h4>Demand Response</h4>
        <p>Earn incentives for reducing load during peak events — we manage enrollment and participation.</p>
      </div>
      <div class="service-card">
        <h4>Bill Management</h4>
        <p>Streamline invoice tracking, cost analysis, and billing error recovery.</p>
      </div>
    </div>
  </section>

  <section class="about">
    <h3>About TruePower</h3>
    <p>
      TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial energy solutions.
      We bring transparency, competitive pricing, and expert negotiation to every client we serve.
    </p>
    <ul>
      <li>100% independent — no hidden supplier incentives</li>
      <li>Experienced consultants with nationwide reach</li>
      <li>Decades of expertise in deregulated energy markets</li>
    </ul>
  </section>

  <section class="quote">
    <form>
      <h3>Request a Quote</h3>
      <input type="text" placeholder="Your name" required />
      <input type="text" placeholder="Company" required />
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="Annual usage (kWh or therms)" />
      <textarea rows="4" placeholder="Additional details (locations, meters, etc.)"></textarea>
      <div class="quote-buttons">
        <button type="submit" class="send">Send via Email</button>
        <button type="reset" class="reset">Reset</button>
      </div>
    </form>

    <div class="office">
      <h4>Office</h4>
      <p>1 Seneca Street, Floor 29<br>Buffalo, NY 14203</p>
      <p><strong>Hours:</strong><br>Mon–Fri 9:00–17:00</p>
      <p><strong>Follow</strong><br><a href="#">LinkedIn</a></p>
    </div>
  </section>
</body>
</html>
