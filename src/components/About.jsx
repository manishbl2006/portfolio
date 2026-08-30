import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text glass card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Objective</h3>
            <p>
              Aspiring Full Stack Developer and Data Analyst with a strong interest in web development 
              and data analytics. Skilled in front-end and back-end technologies and currently learning 
              Power BI, SQL, and data analytics concepts. Looking for opportunities to apply my skills 
              in real-world projects.
            </p>
            <div className="location">
              <FaMapMarkerAlt className="location-icon" /> 
              <span>Erode, Tamil Nadu</span>
            </div>
          </motion.div>

          <motion.div 
            className="education-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3><FaGraduationCap className="edu-icon" /> Education</h3>
            
            <div className="edu-card card">
              <div className="edu-header">
                <h4>Kongu Engineering College, Erode</h4>
                <span className="edu-year">2024 – 2028</span>
              </div>
              <p className="edu-degree">B.Tech in Artificial Intelligence and Data Science</p>
              <div className="edu-score">CGPA: <span>7.84</span></div>
            </div>

            <div className="edu-card card">
              <div className="edu-header">
                <h4>Bharathi Vidya Bhavan School, Erode</h4>
                <span className="edu-year">2022 – 2024</span>
              </div>
              <p className="edu-degree">Higher Secondary Certificate (HSC)</p>
              <div className="edu-score">Percentage: <span>78.5%</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
