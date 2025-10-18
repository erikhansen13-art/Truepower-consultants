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
      background-color: #ffffff;
      color: #0b1520;
      line-height: 1.6;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px 80px;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .logo-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: white;
      border: 3px solid rgba(33, 150, 243, 0.5);
      box-shadow: 0 0 25px rgba(33, 150, 243, 0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      animation: pulseGlow 3s infinite ease-in-out;
    }

    @keyframes pulseGlow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(33, 150, 243, 0.4);
        border-color: rgba(33, 150, 243, 0.5);
      }
      50% {
        box-shadow: 0 0 45px rgba(33, 150, 243, 0.8);
        border-color: rgba(33, 150, 243, 0.9);
      }
    }

    .logo-circle img {
      width: 55px;
      height: 55px;
    }

    .logo-text h1 {
      font-size: 2.3rem;
      margin: 0;
      color: #0b1520;
    }

    .logo-text p {
      font-size: 1.05rem;
      letter-spacing: 0.25em;
      color: #3b4b5a;
      text-align: center;
      margin-top: 5px;
    }

    nav {
      display: flex;
      gap: 30px;
    }

    nav a {
      text-decoration: none;
      color: #0b1520;
      font-weight: 500;
    }

    nav a:hover {
      color: #2196f3;
    }

    .contact-button {
      background-color: #0b2035;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      text-decoration: none;
    }

    .hero {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px 80px;
    }

    .hero-text {
      max-width: 550px;
    }

    .hero-text h2 {
      font-size: 2.5rem;
      color: #0b1520;
      font-weight: 800;
    }

    .hero-text p {
      font-size: 1.2rem;
      color: #5a6878;
    }

    .hero-buttons {
      display: flex;
      gap: 15px;
      margin-top: 20px;
    }

    .hero-buttons a {
      text-decoration: none;
      padding: 12px 22px;
      border-radius: 6px;
      font-weight: 600;
    }

    .get-quote {
      background-color: #0b2035;
      color: white;
    }

    .learn-more {
      background-color: white;
      border: 1px solid #cfd8dc;
      color: #0b1520;
    }

    .energy-chart {
      width: 400px;
      height: 220px;
      background-color: #f5f9fc;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #90a4ae;
      font-size: 1.1rem;
      border: 1px solid #e0e0e0;
    }

    .services {
      background-color: #f9fbfc;
      padding: 60px 80px;
    }

    .services h3 {
      font-size: 1.6rem;
      color: #0b1520;
      margin-bottom: 20px;
    }

    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .service-box {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      border: 1px solid #e0e0e0;
    }

    .service-box h4 {
      margin: 0 0 10px;
      font-size: 1.1rem;
      color: #0b1520;
    }

    .service-box p {
      color: #5a6878;
      font-size: 0.95rem;
    }

    .about {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 60px 80px;
    }

    .about-text {
      flex: 2;
      margin-right: 40px;
    }

    .about h3 {
      font-size: 1.6rem;
      color: #0b1520;
      margin-bottom: 10px;
    }

    .team-box {
      width: 300px;
      height: 220px;
      background-color: #f5f9fc;
      border-radius: 10px;
      border: 1px solid #e0e0e0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #90a4ae;
      font-size: 1.1rem;
    }

    .quote-section {
      background-color: #f9fbfc;
      padding: 60px 80px;
      display: flex;
      justify-content: space-between;
    }

    form {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    input, textarea {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1rem;
    }

    button {
      padding: 10px;
      border: none;
      border-radius: 6px;
      background-color: #2e7d32;
      color: white;
      font-weight: 600;
      cursor: pointer;
    }

    button:hover {
      background-color: #1b5e20;
    }

    .office {
      flex: 1;
      margin-left: 60px;
    }

    .office p {
      margin: 4px 0;
    }
  </style>
</head>
<body>

  <header>
    <div class="logo-container">
      <div class="logo-circle">
        <img src="bolt-logo.jpeg" alt="TruePower Logo">
      </div>
      <div class="logo-text">
        <h1>TruePower</h1>
        <p>CONSULTANTS</p>
      </div>
    </div>

    <nav>
      <a href="#">Services</a>
      <a href="#">About</a>
      <a class="contact-button" href="#">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-text">
      <h2>Smarter Energy Solutions.</h2>
      <p>Working with businesses to manage and reduce energy costs.</p>
      <div class="hero-buttons">
        <a class="get-quote" href="#">Get a Quote</a>
        <a class="learn-more" href="#">Learn More</a>
      </div>
      <p style="margin-top: 20px; color: #5a6878;">
        <strong>Phone:</strong> 716-303-3014 &nbsp; 
        <strong>Email:</strong> contact@truepowerconsultants.com
      </p>
    </div>
    <div class="energy-chart">Energy chart</div>
  </section>

  <section class="services">
    <h3>Our Services</h3>
    <div class="service-grid">
      <div class="service-box">
        <h4>Energy Procurement</h4>
        <p>We negotiate competitive electricity and gas supply contracts tailored to your usage profile.</p>
      </div>
      <div class="service-box">
        <h4>Market Intelligence</h4>
        <p>Access insights on wholesale market trends, regulatory changes, and renewal timing.</p>
      </div>
      <div class="service-box">
        <h4>Risk Management</h4>
        <p>Mitigate price volatility with strategic purchasing aligned with your goals.</p>
      </div>
      <div class="service-box">
        <h4>Community Solar</h4>
        <p>Reduce utility costs and support local renewable energy projects.</p>
      </div>
      <div class="service-box">
        <h4>Demand Response</h4>
        <p>Earn incentives for reducing load during peak events — we manage enrollment and participation.</p>
      </div>
      <div class="service-box">
        <h4>Bill Management</h4>
        <p>Streamline invoice tracking, cost analysis, and billing error recovery.</p>
      </div>
    </div>
  </section>

  <section class="about">
    <div class="about-text">
      <h3>About TruePower</h3>
      <p>TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial energy solutions. We bring transparency, competitive pricing, and expert negotiation to every client we serve.</p>
      <ul>
        <li>100% independent — no hidden supplier incentives</li>
        <li>Experienced consultants with nationwide reach</li>
        <li>Decades of expertise in deregulated energy markets</li>
      </ul>
    </div>
    <div class="team-box">Team</div>
  </section>

  <section class="quote-section">
    <form>
      <h3>Request a Quote</h3>
      <input type="text" placeholder="Your name">
      <input type="text" placeholder="Company">
      <input type="email" placeholder="Email">
      <input type="text" placeholder="Annual usage (kWh or therms)">
      <textarea rows="3" placeholder="Additional details (locations, meters, etc.)"></textarea>
      <div style="display:flex; gap:10px;">
        <button type="submit">Send via Email</button>
        <button type="reset" style="background:#fff; color:#0b1520; border:1px solid #ccc;">Reset</button>
      </div>
    </form>

    <div class="office">
      <h3>Office</h3>
      <p>1 Seneca Street, Floor 29<br>Buffalo, NY 14203</p>
      <p><strong>Hours:</strong><br>Mon–Fri 9:00–17:00</p>
      <p><strong>Follow</strong><br><a href="#">LinkedIn</a></p>
    </div>
  </section>

</body>
</html>
