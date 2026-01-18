import "../stylesheets/Projects.css";

const Projects = () => {
  // Placeholder project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Brief description of your project and what it does.',
      image: '', // Add image path here
      link: '#', // Add project link here
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Brief description of your project and what it does.',
      image: '', // Add image path here
      link: '#', // Add project link here
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Brief description of your project and what it does.',
      image: '', // Add image path here
      link: '#', // Add project link here
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'Brief description of your project and what it does.',
      image: '', // Add image path here
      link: '#', // Add project link here
    },
    {
      id: 5,
      title: 'Project Five',
      description: 'Brief description of your project and what it does.',
      image: '', // Add image path here
      link: '#', // Add project link here
    },
    {
      id: 6,
      title: 'Project Six',
      description: 'Brief description of your project and what it does.',
      image: '', // Add image path here
      link: '#', // Add project link here
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <a href={project.link} className="project-link">
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
                  <h3 className="project-title">{project.title}</h3>
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
