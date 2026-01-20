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
          <span className="hero-name">Tyler Funk</span>
          <span className="hero-subtitle">Software Engineer</span>
        </h1>
        <p className="hero-description">
          
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
