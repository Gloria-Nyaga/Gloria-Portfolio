import React from 'react';
import TypewriterEffect from '../TypewriterEffect';
import './index.css';
import { FaDownload } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="text-section">
        <h1 className="heading">Hi, I'm Gloria Nyaga</h1>
        <h3>And I'm a <TypewriterEffect text="Software Developer" className="typewriter-effect" /></h3>

        <p className="description">
          I believe that the intersection of software development and UI/UX design inspires my passion to develop 
          seamless experiences that prioritize user needs. By blending technical expertise with my design skills, 
          my goal is to create engaging interfaces that enhance interaction and foster connection.
        </p>

        <div className="btn-box">
          <a href="#" className="btn-download">Download CV &nbsp;<FaDownload /></a>
          <a href="#" className="btn-hire">Hire Me</a>
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

      <div className="social-links">
        <a href="https://github.com/Gloria-Nyaga" className="github"><TbBrandGithubFilled /></a>
        <a href="https://www.linkedin.com/in/nyaga-gloria-683a292b2" className="linkedin"><FaLinkedinIn /></a>
        <a href="https://x.com/nyaga4gloria" className="twitter"><FaTwitter /></a>
        <a href="#" className="facebook"><FaFacebookF /></a>
      </div>
    </main>
  );
}

export default LandingPage;
