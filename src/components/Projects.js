import "../stylesheets/Projects.css";
import skwordleScreenshot from "../images/Skwordle-Screenshot.png";
import trkkScreenshot from "../images/TRKK-Screenshot.png";
import rouletteTrackerScreenshot from "../images/RouletteTrackerScreenshot.png";

const Projects = () => {
  // Placeholder project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Skwordle',
      description: 'An addictive word-guessing game designed for endless play. Built with Vue, TypeScript, and Firebase.',
      image: skwordleScreenshot, // Add image path here
      link: 'https://skwordle.web.app/', // Add project link here
      favicon: '', // Add favicon path here
    },
    {
      id: 2,
      title: "The Real Kate's Kitchen",
      description: "A digitalized version of my Mom's recipe book. Built with React, JavaScript, and Firebase.",
      image: trkkScreenshot, // Add image path here
      link: 'https://therealkateskitchen.web.app/', // Add project link here
      favicon: '', // Add favicon path here
    },
    {
      id: 3,
      title: 'Roulette Tracker',
      description: 'A roulette display board with live statistics, like what you might see in a casino. Built with Vue, TypeScript, and Firebase.',
      image: rouletteTrackerScreenshot, // Add image path here
      link: 'https://roulettetracker.web.app/', // Add project link here
      favicon: '', // Add favicon path here
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'Brief description of your project and what it does.',
      image: '', // Add image path here
      link: '#', // Add project link here
      favicon: '', // Add favicon path here
    },
    {
      id: 5,
      title: 'Project Five',
      description: 'Brief description of your project and what it does.',
      image: '', // Add image path here
      link: '#', // Add project link here
      favicon: '', // Add favicon path here
    },
    {
      id: 6,
      title: 'Project Six',
      description: 'Brief description of your project and what it does.',
      image: '', // Add image path here
      link: '#', // Add project link here
      favicon: '', // Add favicon path here
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="image-placeholder">
                      <span>Project Image</span>
                    </div>
                  )}
                </div>
                <div className="project-overlay">
                  <div className="project-title-row">
                    <h3 className="project-title">{project.title}</h3>
                    {project.favicon ? (
                      <img src={project.favicon} alt={`${project.title} favicon`} className="project-favicon" />
                    ) : (
                      <div className="project-favicon-placeholder"></div>
                    )}
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
