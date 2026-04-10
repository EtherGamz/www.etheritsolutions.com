import React, { useEffect } from 'react';
import { ChevronRight, Zap, Users, Trophy, Target, Cpu, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';

const LandingPage = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <div className="landing-page">
      {/* Fixed Header */}
      <header className="dark-header">
        <div className="header-content">
          <img 
            src="https://customer-assets.emergentagent.com/job_bfb61817-680c-4d02-bc52-432a00de53ee/artifacts/ujfvd9xc_ETHER%20GAMES_V2.png" 
            alt="Ether Games" 
            className="dark-logo"
          />
          <nav className="dark-nav">
            <a href="#about" className="dark-nav-link">About</a>
            <a href="#battlefront" className="dark-nav-link">Battlefront</a>
            <a href="#vision" className="dark-nav-link">Vision</a>
            <a href="#contact" className="dark-nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            AAA Mobile Warfare.<br />Built for the Next Billion Players.
          </h1>
          <p className="hero-subtitle">
            Ether Games is building high-quality hybrid-casual shooter experiences designed for accessibility, retention, and global scale.
          </p>
          <div className="hero-buttons">
            <Button className="btn-primary" onClick={() => document.getElementById('battlefront').scrollIntoView({ behavior: 'smooth' })}>
              Explore Battlefront
              <ChevronRight size={20} />
            </Button>
            <Button className="btn-secondary" onClick={() => document.getElementById('vision').scrollIntoView({ behavior: 'smooth' })}>
              Our Vision
            </Button>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section">
        <div className="section-container">
          <h2 className="section-title">Building High-Quality Mobile Experiences Since 2013</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <Trophy className="stat-icon" size={32} />
              <h3 className="stat-number">12+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-card">
              <Target className="stat-icon" size={32} />
              <h3 className="stat-number">25+</h3>
              <p className="stat-label">Games Launched</p>
            </div>
            <div className="stat-card">
              <Zap className="stat-icon" size={32} />
              <h3 className="stat-number">3</h3>
              <p className="stat-label">Global Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insight Section */}
      <section id="market" className="content-section insight-section">
        <div className="section-container">
          <h2 className="section-title">65% of Players Are Left Out of Shooter Games</h2>
          <div className="insight-grid">
            <div className="insight-card">
              <p className="insight-text">Complex controls</p>
            </div>
            <div className="insight-card">
              <p className="insight-text">Long sessions</p>
            </div>
            <div className="insight-card">
              <p className="insight-text">High device requirements</p>
            </div>
          </div>
          <p className="highlight-text">
            We design for the majority that traditional shooters ignore.
          </p>
        </div>
      </section>

      {/* Battlefront Product Section */}
      <section id="battlefront" className="content-section battlefront-section">
        <div className="section-container">
          <div className="battlefront-header">
            <h2 className="battlefront-title">Battlefront</h2>
            <p className="battlefront-tagline">
              A fast-paced, AAA-style mobile shooter delivering intense frontline combat in short, accessible sessions.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <Zap className="feature-icon" size={28} />
              <h3 className="feature-title">&lt;90 Second Gameplay</h3>
              <p className="feature-desc">Quick, intense combat loops designed for mobile-first play</p>
            </div>
            <div className="feature-card">
              <Target className="feature-icon" size={28} />
              <h3 className="feature-title">Physics-Driven Combat</h3>
              <p className="feature-desc">Realistic weapon mechanics and ballistics</p>
            </div>
            <div className="feature-card">
              <Cpu className="feature-icon" size={28} />
              <h3 className="feature-title">Destructible Environments</h3>
              <p className="feature-desc">Dynamic battlefields that react to combat</p>
            </div>
            <div className="feature-card">
              <Users className="feature-icon" size={28} />
              <h3 className="feature-title">Optimized Performance</h3>
              <p className="feature-desc">Runs smoothly on low-end devices</p>
            </div>
          </div>

          <div className="cta-center">
            <Button className="btn-primary" onClick={() => document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' })}>
              View Game
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Game Showcase */}
      <section id="showcase" className="showcase-section">
        <div className="showcase-overlay">
          <h2 className="showcase-text">Console-Level Experience. Mobile First.</h2>
        </div>
      </section>

      {/* Competitive Edge */}
      <section id="edge" className="content-section">
        <div className="section-container">
          <h2 className="section-title">Designed for Accessibility. Built for Scale.</h2>
          <div className="edge-grid">
            <div className="edge-card">
              <h3 className="edge-title">Short Sessions</h3>
              <p className="edge-desc">Perfect for on-the-go mobile gaming</p>
            </div>
            <div className="edge-card">
              <h3 className="edge-title">Instant Gameplay</h3>
              <p className="edge-desc">Jump into action within seconds</p>
            </div>
            <div className="edge-card">
              <h3 className="edge-title">Low Requirements</h3>
              <p className="edge-desc">Accessible to billions of players worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="content-section">
        <div className="section-container">
          <h2 className="section-title">Engine-Led Development</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <Rocket className="tech-icon" size={28} />
              <h3 className="tech-title">Faster Development</h3>
              <p className="tech-desc">Streamlined pipelines and workflows</p>
            </div>
            <div className="tech-card">
              <Cpu className="tech-icon" size={28} />
              <h3 className="tech-title">Shared Systems</h3>
              <p className="tech-desc">Reusable architecture across titles</p>
            </div>
            <div className="tech-card">
              <Target className="tech-icon" size={28} />
              <h3 className="tech-title">Scalable Architecture</h3>
              <p className="tech-desc">Built to support millions of players</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="content-section vision-section">
        <div className="section-container">
          <h2 className="section-title">Building the Future of Mobile Shooter Gaming</h2>
          <p className="vision-text">
            We're on a mission to democratize AAA gaming experiences for the next billion mobile players. 
            By combining cutting-edge technology with accessible design, we're creating shooters that deliver 
            console-quality combat without the barriers of traditional titles.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">Let's Build the Future of Mobile Shooters</h2>
          <div className="cta-buttons">
            <Button className="btn-primary">
              Partner With Us
              <ChevronRight size={20} />
            </Button>
            <Button className="btn-secondary">
              Contact Us
            </Button>
          </div>
          <div className="contact-emails">
            <a href="mailto:gokul@etheritsolutions.com" className="email-link">gokul@etheritsolutions.com</a>
            <span className="email-separator">|</span>
            <a href="mailto:sharath@etheritsolutions.com" className="email-link">sharath@etheritsolutions.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <img 
            src="https://customer-assets.emergentagent.com/job_bfb61817-680c-4d02-bc52-432a00de53ee/artifacts/ujfvd9xc_ETHER%20GAMES_V2.png" 
            alt="Ether Games" 
            className="footer-logo"
          />
          <p className="footer-text">© 2025 Ether Games Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
