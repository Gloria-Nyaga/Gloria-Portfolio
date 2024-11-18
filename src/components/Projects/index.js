import React from 'react';
import './index.css';

const ProjectCard = ({ title, description, techStack, repoLink, imageUrl }) => {
  return (
    
    <div className="project-card">
        
      <div className="project-image-container">
        <img 
          src={imageUrl || 'https://via.placeholder.com/350x200'} 
          alt={title} 
          className="project-image" 
        />
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="tech-stack-container">
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-item">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a href={repoLink} className="view-project-btn">
        View Project
      </a>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: 'Shawazi',
      description: 'This is a role based Progressive Web Application that aims to ensure transparency during the land acquistion process between the land buyer and the land seller.',
      techStack: ['NextJS', 'Django', 'Python'],
      repoLink: 'https://shawazi-magezi.vercel.app/',
      imageUrl: 'images/shawazi.png'
    },
    {
      title: 'Informational Website',
      description: ' Shawazi informational website, is your go-to resource for project details, operational insights, and team introductions. Here, you can explore how Shawazi works and meet the talented individuals behind the initiative.',
      techStack: ['NextJS'],
      repoLink: 'https://magezi-informational-c594.vercel.app/',
      imageUrl: 'images/shawazi-info.png'
    },
    {
      title: 'Musica',
      description: 'Musica is a dynamic music application that leverages API integration to seamlessly fetch and display songs from various music sources. It enhances the user experience by providing real-time access to a vast library of music through an intuitive front-end interface. ',
      techStack: ['HTML', 'CSS', 'Javascript'],
      repoLink: 'https://musica-website-app.vercel.app/',
      imageUrl: 'images/musica.png'
    },
  ];

  return (
    <section className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-description">
          Get to view some of the projects I have been working on.
        </p>
      </div>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            repoLink={project.repoLink}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;