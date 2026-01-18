import "../stylesheets/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} Tyler Funk
        </p>
      </div>
    </footer>
  );
};

export default Footer;
