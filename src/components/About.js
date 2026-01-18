import "../stylesheets/About.css";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Add your personal introduction here. Describe who you are, what you do,
              and what drives you. This is where you can share your story, background,
              and professional journey.
            </p>
            <p>
              Continue with more details about your experience, interests, or anything
              else that helps visitors understand you better.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              {/* Replace this placeholder with your image */}
              <span>Your Photo Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
