import React, { useEffect, useState } from 'react';
import { ChevronRight, Zap, Users, Trophy, Target, Cpu, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    // Navbar scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll-based fade-in for sections
      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          section.classList.add('is-visible');
        }
      });
    };

    // Parallax effect (desktop only)
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;
        setMousePosition({ x: -x, y: -y });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Fixed Header */}
      <header className={`dark-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <img 
            src="https://customer-assets.emergentagent.com/job_bfb61817-680c-4d02-bc52-432a00de53ee/artifacts/ujfvd9xc_ETHER%20GAMES_V2.png" 
            alt="Ether Games" 
            className="dark-logo"
          />
          <nav className="dark-nav">
            <a href="#about" className="dark-nav-link">About</a>
            <a href="#team" className="dark-nav-link">Team</a>
            <a href="#battlefront" className="dark-nav-link">Battlefront</a>
            <a href="#vision" className="dark-nav-link">Vision</a>
            <a href="#contact" className="dark-nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div 
          className="hero-background hero-bg-animate"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/r26wmegh_Environment%202.png')`,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div className="hero-content">
          <h1 className="hero-title hero-title-animate">
            Modern Warfare — Reimagined for Mobile
          </h1>
          <p className="hero-subtitle hero-subtitle-animate">
            Ether Games is building high-quality hybrid-casual shooter experiences designed for accessibility, retention, and global scale.
          </p>
          <div className="hero-buttons hero-buttons-animate">
            <Button className="btn-primary btn-hover-effect" onClick={() => document.getElementById('battlefront').scrollIntoView({ behavior: 'smooth' })}>
              Explore Battlefront
              <ChevronRight size={20} />
            </Button>
            <Button className="btn-secondary btn-hover-effect-secondary" onClick={() => document.getElementById('vision').scrollIntoView({ behavior: 'smooth' })}>
              Our Vision
            </Button>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section fade-in-section">
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

      {/* Team Section */}
      <section id="team" className="content-section team-section fade-in-section">
        <div className="section-container">
          <h2 className="section-title">Meet the Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/v9tk3eti_Gokul.jpeg" 
                  alt="Gokul Elayidath"
                  className="team-image"
                />
              </div>
              <h3 className="team-name">Gokul Elayidath</h3>
              <p className="team-role">CEO</p>
            </div>
            <div className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/e1mrmr4j_Sharath.jpeg" 
                  alt="Sharath Mohan"
                  className="team-image"
                />
              </div>
              <h3 className="team-name">Sharath Mohan</h3>
              <p className="team-role">COO</p>
            </div>
            <div className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/hdgjcvc9_Vishnu.png" 
                  alt="Vishnu"
                  className="team-image"
                />
              </div>
              <h3 className="team-name">Vishnu</h3>
              <p className="team-role">Unity Programmer</p>
            </div>
            <div className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/ppyv8gca_Abhay.jpeg" 
                  alt="Abhay"
                  className="team-image"
                />
              </div>
              <h3 className="team-name">Abhay</h3>
              <p className="team-role">Technical Artist / Generalist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insight Section */}
      <section id="market" className="content-section insight-section fade-in-section">
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
      <section id="battlefront" className="content-section battlefront-section fade-in-section">
        <div 
          className="battlefront-background"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/a3m1t7kp_Environment%201.png')`
          }}
        ></div>
        <div className="battlefront-overlay"></div>
        <div className="section-container battlefront-content">
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
            <Button className="btn-primary" onClick={() => document.getElementById('gameplay').scrollIntoView({ behavior: 'smooth' })}>
              View Gameplay
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Gameplay Preview Section */}
      <section id="gameplay" className="content-section gameplay-section">
        <div className="section-container">
          <h2 className="section-title">Experience Battlefront in Action</h2>
          <p className="gameplay-subtitle">Intense mobile combat with AAA-quality graphics and physics</p>
          <div className="gameplay-grid">
            <div className="gameplay-item">
              <img 
                src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/m8rcwh9h_BF%20-%20Gameplay.gif" 
                alt="Battlefront Gameplay 1"
                className="gameplay-gif"
              />
            </div>
            <div className="gameplay-item">
              <img 
                src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/dyjww2tj_BF%20Gameplay%203.gif" 
                alt="Battlefront Gameplay 2"
                className="gameplay-gif"
              />
            </div>
            <div className="gameplay-item">
              <img 
                src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/x3l9awc4_BF%20-%20Gameplay%204.gif" 
                alt="Battlefront Gameplay 3"
                className="gameplay-gif"
              />
            </div>
            <div className="gameplay-item">
              <img 
                src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/zvepr56h_BF%20Gameplay.gif" 
                alt="Battlefront Gameplay 4"
                className="gameplay-gif"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Game Showcase */}
      <section id="showcase" className="showcase-section">
        <div 
          className="showcase-background"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/vwp4ux4e_Environment%203.png')`
          }}
        ></div>
        <div className="showcase-overlay">
          <h2 className="showcase-text">Console-Level Experience. Mobile First.</h2>
        </div>
      </section>

      {/* Game Environments Gallery */}
      <section id="gallery" className="content-section gallery-section">
        <div className="section-container">
          <h2 className="section-title">Battlefront Environments</h2>
          <p className="gallery-subtitle">AAA-quality destructible environments optimized for mobile</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/a3m1t7kp_Environment%201.png" 
                alt="Battlefront Environment 1"
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/r26wmegh_Environment%202.png" 
                alt="Battlefront Environment 2"
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/vwp4ux4e_Environment%203.png" 
                alt="Battlefront Environment 3"
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/pzf1k3rt_Environment%204.png" 
                alt="Battlefront Environment 4"
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://customer-assets.emergentagent.com/job_ether-cinematic/artifacts/n0s9gzce_Environment%205.png" 
                alt="Battlefront Environment 5"
                className="gallery-image"
              />
            </div>
          </div>
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
