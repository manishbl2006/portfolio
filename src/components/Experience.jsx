import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Achievements
        </motion.h2>
        
        <div className="experience-grid">
          
          {/* Training Column */}
          <motion.div 
            className="experience-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="column-title"><FaBriefcase className="column-icon" /> Inplant Training</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <h4>Web Development</h4>
                  <p className="timeline-subtitle">CodeBind, Coimbatore</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <h4>Full Stack Development</h4>
                  <p className="timeline-subtitle">VK Softwares, Namakkal</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div 
            className="experience-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="column-title"><FaCertificate className="column-icon" /> Certifications</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <h4>Global Certification in Deep Learning</h4>
                  <p className="timeline-subtitle">HCL</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <h4>Advanced C Programming</h4>
                  <p className="timeline-subtitle">Certification</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <h4>Mobile App Development using Flutter</h4>
                  <p className="timeline-subtitle">Certification</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div 
            className="experience-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="column-title"><FaTrophy className="column-icon" /> Achievements</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <h4>First Prize – KALLIKARETES-25</h4>
                  <p className="timeline-subtitle">KPR Engineering College</p>
                  <p className="timeline-desc">Business pitch (project).</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <h4>Edison Award</h4>
                  <p className="timeline-subtitle">Kongu Engineering College</p>
                  <p className="timeline-desc">Awarded for Automated Breaking System.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <h4>Smart India Hackathon</h4>
                  <p className="timeline-subtitle">Intercollege SIH</p>
                  <p className="timeline-desc">Participated and Selected. Uploaded solution for statement of government of Punjab.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
