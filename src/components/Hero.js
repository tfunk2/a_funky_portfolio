import "../stylesheets/Hero.css";

const Hero = () => {
  const handleScrollClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">Your Name</span>
          <span className="hero-subtitle">Creative Title or Tagline</span>
        </h1>
        <p className="hero-description">
          Short description about what you do, your specialty, or what makes you unique.
        </p>
        <a href="#about" onClick={handleScrollClick} className="cta-button">
          Explore My Work
        </a>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
