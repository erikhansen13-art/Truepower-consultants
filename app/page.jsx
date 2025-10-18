<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>TruePower Consultants — Prototype</title>
  <style>
    :root{
      --navy:#0e2b41;
      --light-navy:#1f2f3d;
      --muted:#8f9aa3;
      --card-bg:#f4fbff;
      --soft:#f5fbfd;
      --accent:#eaf6ff;
      --consultants-gray:#b7c3cc;
      --white:#fff;
      --radius:10px;
    }
    *{box-sizing:border-box}
    body{
      font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      color:var(--navy);
      margin:0;
      background: #ffffff;
      line-height:1.45;
    }
    .container{max-width:1200px;margin:0 auto;padding:40px 28px}
    header{display:flex;align-items:center;justify-content:space-between;padding:24px 0}
    .brand{display:flex;align-items:center;gap:18px}
    /* logo circle with pulsing outline (outline pulses, circle interior remains white) */
    .logo-wrap{
      width:108px;height:108px;border-radius:999px;
      background:var(--white);
      display:flex;align-items:center;justify-content:center;
      position:relative;
      box-shadow: 0 10px 30px rgba(4,35,63,0.06);
    }
    /* pulsing outline */
    .logo-wrap::before{
      content:"";
      position:absolute;inset:0;border-radius:999px;
      /* outline ring */
      box-shadow: 0 0 0 6px rgba(228,243,255,0.9);
      animation: pulse 2s infinite;
      filter: blur(8px);
      pointer-events:none;
    }
    @keyframes pulse{
      0%{transform:scale(1);opacity:.9}
      50%{transform:scale(1.12);opacity:.45}
      100%{transform:scale(1);opacity:.9}
    }
    .logo-img{width:56px;height:56px;object-fit:contain;z-index:2}
    .brand-text{line-height:1}
    .truepower{font-weight:800;font-size:40px;color:var(--navy);margin:0}
    .consultants{font-weight:600;letter-spacing:2px;color:var(--consultants-gray);font-size:14px;margin-top:6px;text-align:center}
    nav{display:flex;gap:28px;align-items:center}
    nav a{color:var(--navy);text-decoration:none;padding:8px 14px}
    .contact-btn{background:var(--light-navy);color:white;padding:10px 16px;border-radius:10px}
    /* hero */
    .hero{display:grid;grid-template-columns:1fr 460px;gap:36px;align-items:center;padding:40px 0}
    .hero h1{font-size:48px;margin:0 0 14px 0;line-height:1.02;font-weight:800}
    .hero p.lead{margin:0 0 20px;color:#5f6b73;font-size:16px}
    .cta-row{display:flex;gap:14px;margin-bottom:16px}
    .btn-primary{background:var(--light-navy);color:white;padding:12px 18px;border-radius:8px;border:none}
    .btn-ghost{background:white;border:1px solid #e4eef5;padding:12px 18px;border-radius:8px}
    .meta{color:#6b7780;font-size:13px;margin-top:6px}
    /* energy chart placeholder */
    .chart{
      background:linear-gradient(180deg,var(--soft),#fff);
      border:1px solid #eef5f8;border-radius:8px;padding:22px;height:260px;
      display:flex;align-items:center;justify-content:center;color:#9fb1bc;font-size:16px;
      box-shadow: 0 6px 18px rgba(4,35,63,0.03);
    }

    /* services grid */
    .section{padding:40px 0}
    .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
    .svc{background:var(--card-bg);padding:20px;border-radius:12px;border:1px solid rgba(15,45,63,0.04)}
    .svc h4{margin:0 0 8px 0;font-size:16px;color:var(--navy)}
    .svc p{margin:0;color:#62727b;font-size:14px}

    /* About + Team row */
    .about-row{display:grid;grid-template-columns:1fr 360px;gap:28px;align-items:start;padding:40px 0;background:linear-gradient(90deg,#f8fdff 0%, #ffffff 100%);border-radius:6px;padding:40px}
    .team-box{background:#f6fbfd;border-radius:8px;padding:34px;text-align:center;color:#9fb1bc;height:160px;box-shadow: 0 6px 12px rgba(4,35,63,0.04)}
    .about h3{margin-top:0;color:var(--navy)}
    .about ul{padding-left:18px;color:#485a64}
    /* Request form + Office */
    .quote-row{display:grid;grid-template-columns:1fr 400px;gap:28px;padding:36px 0}
    .form-box{background:white;border-radius:10px;padding:22px;border:1px solid #eef4f6}
    .input{width:100%;padding:12px;border-radius:8px;border:1px solid #eef2f4;margin-bottom:12px}
    .btn-send{background:#0e6a37;color:white;padding:12px 20px;border-radius:8px;border:none}

    /* responsive */
    @media (max-width:1000px){
      .hero{grid-template-columns:1fr;gap:24px}
      .services-grid{grid-template-columns:repeat(2,1fr)}
      .about-row{grid-template-columns:1fr}
      .quote-row{grid-template-columns:1fr}
      .brand .truepower{font-size:36px}
    }
    @media (max-width:600px){
      header{padding:18px}
      .logo-wrap{width:88px;height:88px}
      .truepower{font-size:30px}
      .hero h1{font-size:36px}
      .services-grid{grid-template-columns:1fr}
    }

    /* little subtle decoration dot to match screenshot */
    .dot{width:14px;height:14px;background:#bfc7cc;border-radius:50%;position:absolute;right:50%;transform:translateX(30%);top:230px;opacity:.45}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="logo-wrap" aria-hidden="true">
          <!-- put your image 'bolt-logo.jpeg' in same folder -->
          <img class="logo-img" src="bolt-logo.jpeg" alt="TruePower bolt logo">
        </div>
        <div class="brand-text">
          <div style="display:flex;flex-direction:column;align-items:flex-start;">
            <h2 class="truepower">TruePower</h2>
            <!-- centered CONSULTANTS under TruePower -->
            <div style="width:100%;display:flex;align-items:center;"><div class="consultants" style="margin-left:0;">CONSULTANTS</div></div>
          </div>
        </div>
      </div>

      <nav>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a class="contact-btn" href="#contact">Contact</a>
      </nav>
    </header>

    <!-- HERO -->
    <section class="hero" role="region" aria-label="Hero">
      <div>
        <h1>Smarter Energy Solutions.</h1>
        <p class="lead">Working with businesses to manage and reduce energy costs.</p>

        <div class="cta-row">
          <button class="btn-primary">Get a Quote</button>
          <button class="btn-ghost">Learn More</button>
        </div>

        <div class="meta">
          <strong>Phone:</strong> 716-303-3014 &nbsp; · &nbsp;
          <strong>Email:</strong> <a href="mailto:contact@truepowerconsultants.com">contact@truepowerconsultants.com</a>
        </div>
      </div>

      <div>
        <div class="chart" aria-hidden="true">Energy chart</div>
      </div>
    </section>

    <div class="dot" aria-hidden="true"></div>

    <!-- SERVICES -->
    <section id="services" class="section">
      <h3 style="font-size:22px;margin:0 0 18px 0;color:var(--navy)">Our Services</h3>
      <div class="services-grid" style="margin-top:18px">
        <div class="svc">
          <h4>Energy Procurement</h4>
          <p>We negotiate competitive electricity and gas supply contracts tailored to your usage profile.</p>
        </div>
        <div class="svc">
          <h4>Market Intelligence</h4>
          <p>Access insights on wholesale market trends, regulatory changes, and renewal timing.</p>
        </div>
        <div class="svc">
          <h4>Risk Management</h4>
          <p>Mitigate price volatility with strategic purchasing aligned with your goals.</p>
        </div>
        <div class="svc">
          <h4>Community Solar</h4>
          <p>Reduce utility costs and support local renewable energy projects.</p>
        </div>
        <div class="svc">
          <h4>Demand Response</h4>
          <p>Earn incentives for reducing load during peak events — we manage enrollment and participation.</p>
        </div>
        <div class="svc">
          <h4>Bill Management</h4>
          <p>Streamline invoice tracking, cost analysis, and billing error recovery.</p>
        </div>
      </div>
    </section>

    <!-- ABOUT + TEAM -->
    <section id="about" class="about-row" aria-label="About TruePower">
      <div class="about">
        <h3>About TruePower</h3>
        <p style="color:#5f6b73;max-width:680px">
          TruePower Consultants is an independent energy advisory firm specializing in commercial and industrial energy solutions. We bring transparency, competitive pricing, and expert negotiation to every client we serve.
        </p>
        <ul>
          <li>100% independent — no hidden supplier incentives</li>
          <li>Experienced consultants with nationwide reach</li>
          <li>Decades of expertise in deregulated energy markets</li>
        </ul>
      </div>

      <div>
        <div class="team-box">Team</div>
      </div>
    </section>

    <!-- REQUEST A QUOTE -->
    <section class="quote-row" aria-label="Request a Quote">
      <div class="form-box">
        <h3 style="margin-top:0;color:var(--navy)">Request a Quote</h3>
        <p style="color:#6b7780;margin-top:0">Let us find the best energy rates for your business. Fill out the form below to get started.</p>
        <form onsubmit="alert('This is a demo: integrate with your mail server or API');return false;">
          <input class="input" placeholder="Your name" />
          <input class="input" placeholder="Company" />
          <input class="input" placeholder="Email" />
          <input class="input" placeholder="Annual usage (kWh or therms)" />
          <textarea class="input" placeholder="Additional details (locations, meters, etc.)" style="height:110px"></textarea>
          <div style="display:flex;gap:10px">
            <button class="btn-send" type="submit">Send via Email</button>
            <button type="reset" style="background:#fff;border:1px solid #e5eef6;padding:10px 14px;border-radius:8px">Reset</button>
          </div>
        </form>
      </div>

      <div class="form-box" style="display:flex;flex-direction:column;justify-content:center">
        <h4 style="margin:0 0 12px 0">Office</h4>
        <div style="color:#4c5b63">1 Seneca Street, Floor 29<br>Buffalo, NY 14203</div>
        <div style="margin-top:14px"><strong>Hours</strong><div style="color:#4c5b63">Mon–Fri 9:00–17:00</div></div>
        <div style="margin-top:12px"><strong>Follow</strong><div><a href="#" style="color:var(--light-navy)">LinkedIn</a></div></div>
      </div>
    </section>

    <footer style="padding:48px 0 120px 0;text-align:center;color:#a7b3b8">
      &copy; <span id="year"></span> TruePower Consultants
    </footer>
  </div>

  <script>
    // set year
    document.getElementById('year').textContent = new Date().getFullYear();
    // small enhancement: allow tuning logo ring size if user wants (not required)
  </script>
</body>
</html>
