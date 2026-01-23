import "../stylesheets/Contact.css";
import resumePDF from "../assets/Tyler-Funk-SE-Resume-2026.pdf";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always interested in new opportunities and collaborations.
            <br />
            Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:tyler.j.funk2@gmail.com" className="contact-link">
              Email
            </a>
            <a href="https://www.linkedin.com/in/tylerfunk/" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
            <a href="https://github.com/tfunk2" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="contact-link">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
