import React from 'react';
import Navbar from './Navbar';  

function Portfolio() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <h1>Welcome to My Portfolio</h1>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>This is the about section...</p>
      </section>
      <section id="skills">
        <h2>My Skills</h2>
        <p>This is the skills section...</p>
      </section>
      <section id="portfolio">
        <h2>My Works</h2>
        <p>This is the portfolio section...</p>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <p>This is the contact section...</p>
      </section>
    </div>
  );
}

export default Portfolio;