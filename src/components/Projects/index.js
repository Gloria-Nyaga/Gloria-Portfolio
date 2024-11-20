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
      imageUrl: '/images/shawazi.png'
    },
    {
      title: 'Informational Website',
      description: ' Shawazi informational website, is your go-to resource for project details, operational insights, and team introductions. Here, you can explore how Shawazi works and meet the talented individuals behind the initiative.',
      techStack: ['NextJS'],
      repoLink: 'https://magezi-informational-c594.vercel.app/',
      imageUrl: '/images/shawazi-info.png'
    },
    {
      title: 'Musica',
      description: 'Musica is a dynamic music application that leverages API integration to seamlessly fetch and display songs from various music sources. It enhances the user experience by providing real-time access to a vast library of music through an intuitive front-end interface. ',
      techStack: ['HTML', 'CSS', 'Javascript'],
      repoLink: 'https://musica-website-app.vercel.app/',
      imageUrl: 'images/musica.png'
    },

    {
      title: 'Kipepeo',
      description: 'Kipepeo is a Haute Couture fashion brand inspired by the elegance and transformative beauty of butterflies. The website showcases exquisite, handcrafted designs while spotlighting premium clothing collections. ',
      techStack: ['Figma', 'Adobe Illustrator'],
      repoLink: 'https://www.figma.com/design/h6brtyRmfNwvbW84k8Y6vB/Kipepeo-Fashion?node-id=0-1&t=E1c7612Vu7TR5tyA-1',
      imageUrl: '/images/kipepeo.png'
    },

    {
      title: 'Mkulima',
      description: 'Mkulima is a sample design interface for co-operative agents and farmers to manage farmer profiles, process loan applications, monitor repayments, and provide support services. ',
      techStack: ['Figma', 'Adobe Illustrator'],
      repoLink: 'https://www.figma.com/design/EUUV64BzyeWKSxjpG3I4xV/Mkulima-Wireframes-Design?node-id=43-24&t=56IXlMQy4WhH2F8f-1',
      imageUrl: '/images/mkulima.png'
    },

    {
      title: 'MamaMind',
      description: 'MamaMind is a mobile application designed to support mothers suffering from postpartum depression (PPD). The app is used by Community Health Promoters (CHPs) to provide personalized care for mothers, helping them enhance their mental and physical well-being through visits, mental health tracking, and access to comprehensive care guides. ',
      techStack: ['Kotlin', 'Mobile Development'],
      repoLink: 'https://appetize.io/app/b_tpnkfxzpxct3u6lrdijfusob2u',
      imageUrl: '/images/mamamind.png'
    },

    {
      title: 'Wezesha',
      description: 'This is a Mobile Application designed to support farmers by ensuring transparency in accessing loans, thereby empowering them to enhance milk productivity and overall dairy farming efficiency. ',
      techStack: ['Kotlin', 'Mobile Development'],
      repoLink: 'https://appetize.io/app/b_xwgukpnzqehusvpscgzwydgzki',
      imageUrl: 'images/wezesha.png'
    },

    {
      title: 'Dishhub',
      description: 'This is an Android app that helps users generate recipes based on the ingredients they have in their pantry. It also includes a shopping list feature for users to add items they need to purchase. ',
      techStack: ['Kotlin', 'Mobile Development'],
      repoLink: 'https://appetize.io/app/b_tgmcbpmyaylrsldtoruqw5yr3m',
      imageUrl: 'images/dishhub.png'
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