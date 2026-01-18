import "../stylesheets/Skills.css";

const Skills = () => {
  // Replace with your actual skills
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Database Design', 'API Development'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'Docker', 'CI/CD', 'Testing'],
    },
    {
      category: 'Design',
      skills: ['UI/UX', 'Figma', 'Prototyping', 'User Research'],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.category}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
