import React, { useState } from "react";
import { FaCode, FaDatabase, FaFigma, FaMobileAlt, FaLaptopCode, FaGithub, FaTable, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiReact, SiPython, SiDjango } from "react-icons/si";
import './index.css'; 

const skills = [
  { title: "Frontend Development", icon: <SiReact className="skill-icon" />, description: "Building responsive UIs with React, HTML, CSS, and JavaScript." },
  { title: "Backend Development", icon: <FaLaptopCode className="skill-icon" />, description: "Developing APIs with Node.js, Django, and Express.js." },
  { title: "Design Tools (Figma)", description: "UI/UX design using Figma and Adobe Illustrator.", icon: <FaFigma size={64} className="skill-icon text-pink-600" /> },
  { title: "Mobile Development", icon: <FaMobileAlt className="skill-icon" />, description: "Creating cross-platform mobile apps with React Native." },
  { title: "JavaScript", icon: <SiJavascript className="skill-icon" />, description: "Proficient in modern JavaScript (ES6+), including async programming." },
  { title: 'CSS', description: 'Styling beautiful web pages', icon: <FaCss3Alt className="skill-icon" /> },
  { title: 'GitHub', description: 'Hosting and collaborating on projects.', icon: <FaGithub className="skill-icon" /> },
  { title: 'Tableau', description: 'Visualizing data for insights and storytelling.', icon: <FaTable className="skill-icon" /> },
  { title: 'Visual Studio', description: 'Integrated development environment for coding.', icon: <FaCode className="skill-icon" /> },
  { title: "Python Programming", icon: <SiPython className="skill-icon" />, description: "Developing automation scripts and web applications with Python." },
  { title: "Database Management", icon: <FaDatabase className="skill-icon" />, description: "Working with relational (MySQL, PostgreSQL) and NoSQL databases." },
  { title: "Django Framework", icon: <SiDjango className="skill-icon" />, description: "Building full-stack applications using Django and Django REST Framework." },
];

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const skillsPerPage = 6; // Two rows of three columns each

  const handleNextPage = () => {
    if ((currentPage + 1) * skillsPerPage < skills.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedSkills = skills.slice(currentPage * skillsPerPage, (currentPage + 1) * skillsPerPage);

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-description">
          I have a diverse skillset of various programming languages, Frameworks and looking forward to learn more.
        </p>

        <div className="skills-grid">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon-container">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="pagination-button" onClick={handlePrevPage} disabled={currentPage === 0}>
            Previous
          </button>
          <button className="pagination-button" onClick={handleNextPage} disabled={(currentPage + 1) * skillsPerPage >= skills.length}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
