<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TruePower Consultants</title>
  <style>
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      color: #1a1a1a;
      background-color: #fff;
      line-height: 1.6;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 8%;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .logo {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,123,255,0.3) 0%, rgba(0,123,255,0) 70%);
      display: flex;
      justify-content: center;
      align-items: center;
      animation: pulse 3s infinite ease-in-out;
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.08); opacity: 0.85; }
      100% { transform: scale(1); opacity: 1; }
    }

    .logo img {
      width: 50px;
      height: 50px;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
      line-height: 1;
    }

    .brand-text h1 {
      font-size: 1.9rem;
      margin: 0;
      font-weight: 700;
    }

    .brand-text span {
      font-size: 1rem;
      letter-spacing: 0.25em;
      text-align: center;
      display: block;
      margin-top: 0.3rem;
      color: #6c757d;
    }

    nav ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    nav a {
      text-decoration: none;
      color: #1a1a1a;
      font-weight: 500;
    }

    .contact-btn {
      background-color: #0d1b2a;
      color: white;
      padding: 0.6rem 1.4rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
    }

    main {
      padding: 4rem 8%;
    }

    .hero {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .hero-text {
      flex: 1;
      min-width: 320px;
    }

    .hero-text h2 {
      font-size: 2.8rem;
      margin-bottom: 1rem;
      font-weight: 800;
    }

    .hero-text p {
      font-size: 1.15rem;
      color: #555;
      margin-bottom: 2rem;
    }

    .hero-buttons a {
      display: inline-block;
      margin-right: 1rem;
      padding: 0.7rem 1.4rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
    }

    .hero-buttons .quote {
      background-color: #0d1b2a;
      color: white;
    }

    .hero-buttons .learn {
      border: 1px solid #ccc;
      color: #0d1b2a;
    }

    .chart {
      flex: 1;
      min-width: 300px;
      height: 200px;
      background-color: #f8fbfe;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #99a1aa;
      font-size: 1rem;
      border: 1px solid #e4e7eb;
    }

    .services {
      margin-top: 4rem;
    }

    .services h3 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      font-weight: 700;
    }

    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .service-card {
      background-color: #f8fbfe;
      padding: 1.5rem;
      border
