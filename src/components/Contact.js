import "../stylesheets/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always interested in new opportunities and collaborations.
            Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">
              Email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
            <a href="#" className="contact-link">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
