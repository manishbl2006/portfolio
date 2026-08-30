import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">MANISH <span className="logo-accent">B L</span></h1>
          <h2 className="hero-role">Full Stack Developer & Data Analyst</h2>
          <p className="hero-description">
            I'm an aspiring developer with a strong interest in building modern web applications 
            and analyzing data to drive insights. Skilled in front-end and back-end technologies, 
            and currently exploring Power BI and data analytics.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <FaArrowRight style={{ marginLeft: '8px' }}/>
            </a>
            <a href="./resume.pdf" className="btn btn-outline" download="Manish_B_L_Resume.pdf">
              Download Resume <FaFileDownload style={{ marginLeft: '8px' }}/>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="blob-shape">
             <div className="profile-image-wrapper">
               <img src="./profile.jpg" alt="Manish B L" className="profile-image" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
