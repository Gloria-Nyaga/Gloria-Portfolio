import React, { useState, useEffect } from 'react';
import { FaDownload, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import './index.css';

const Homepage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Frontend Developer",
    "UX/UI Designer",
    "Backend Developer",
    "FullStack Developer",
    "Mobile Developer",
  ];

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex];
    const updateText = () => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          timeout = setTimeout(updateText, 100); 
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 1500); 
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
          timeout = setTimeout(updateText, 50);
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    timeout = setTimeout(updateText, 100);

    return () => clearTimeout(timeout);
  }, [roleIndex, displayText, isDeleting, roles]);

  return (
    <main className="landing-page">
      <div className="text-section">
        <h1 className="heading">Hi, I'm Gloria Nyaga</h1>
        
        <div className="typewriter-container">
          <h3>I am a <span style={{ color: '#E4960E' }}>{displayText}</span></h3>
        </div>

        <p className="description">
          I believe that the intersection of software development and UI/UX design inspires my passion to develop 
          seamless experiences that prioritize user needs. By blending technical expertise with my design skills, 
          my goal is to create engaging interfaces that enhance interaction and foster connection.
        </p>

        <div className="btn-box">
          <a href="#" className="btn-download">
            Download CV <FaDownload />
          </a>
          <a href="#" className="btn-hire">
            Hire Me
          </a>
        </div>


        <div className="social-links">
          <a href="https://github.com/Gloria-Nyaga" target="_blank" rel="noopener noreferrer">
            <TbBrandGithubFilled />
          </a>
          <a href="https://www.linkedin.com/in/nyaga-gloria-683a292b2" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://x.com/nyaga4gloria" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="image-section">
        <img 
          src="/images/gloria.png" 
          alt="Gloria Nyaga" 
          className="profile-image"
        />
        <div className="gradient-overlay"></div>
      </div>
    </main>
  );
};

export default Homepage;