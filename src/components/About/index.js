import React from 'react';
import './index.css';

function About() {
  return (
    <div className="about-section">
      <div className="image">
        <img 
          src="/images/image.png" 
          alt="Gloria Nyaga" 
          className="profile"
        />
        <div className="gradient-overlay"></div>
      </div>

      <div className="text">
        <h1 className="heading">About Me</h1>
        <p className="description">
        I am an entry-level Software Developer passionate about technology and collaboration. 
        I have experience in front-end and back-end development, as well as UI/UX design. 
        Utilizing technologies like JavaScript, ReactJS, Next.js, Django REST Framework, 
        and Python, I create user-friendly web applications that prioritize performance and 
        intuitive experiences. 
        </p>

        <p>
        My experience includes designing responsive interfaces, building 
        scalable APIs, and developing mobile apps, with a focus on providing user friendly interfaces. 
        I like connecting with professionals to exchange ideas and learn from one another, as I
        continually seek on making a positive impact.


        </p>
        <div className="btn-box">
          <a href="#">Contact Me</a> 

        </div>
      </div>
    </div>
  );
}

export default About;