import "../stylesheets/Skills.css";

const Skills = () => {
  // Replace with your actual skills
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React + Redux', 'Vue + Vuex', 'Angular', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SCSS', 'Bootstrap'],
    },
    {
      category: 'Tools',
      skills: ['Cursor', 'Figma','Git', 'Docker', 'CI/CD', 'Cypress', 'Jest', 'Firebase',],
    },
    {
      category: 'Backend',
      skills: ['PHP','Node.js', 'Ruby on Rails', 'Firestore', 'MySQL', 'Python', 'Phinx', 'JWT Auth'],
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
