import "../stylesheets/About.css";
import profileImage from "../images/portfolio-headshot.png";
const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I made the switch to software engineering when my wife heard an ad on the radio,
              which was one of the most rewarding decisions of my life. Since then, I've 
              been on a mission to grow, learn, and create through my adventures in tech.
            </p>
            <p>
              I'm a Flatiron School alum with a background in full stack development and four years 
              of experience at Visible Network Labs. My work focused on building intuitive, user-centered 
              products and collaborating closely with design and product teams to bring ideas to life. 
            </p>
            <p>
              I'm a fast learner and thrive on picking up new technologies. Recently, I've been incorporating 
              AI tools like Cursor into my development process to speed up workflows and explore creative solutions. 
              I take pride in being both a strong individual contributor and an excellent collaborator, and I put 
              real effort into fostering a fun, supportive work culture.
            </p>
            <p>
              Outside of code, I'm an outdoors enthusiast and golf lover, and I enjoy camping in unique 
              places with my wife. Each year, we design a puzzle box with an escape room twist for our 
              friends and family. It's a tradition that scratches my creative itch, and keeps my problem-solving sharp.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              {/* Replace this placeholder with your image */}
              <img src={profileImage} alt="Tyler Funk" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
