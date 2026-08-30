import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTools } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    title: "Automated Breaking System (Hardware)",
    date: "Sep 2024 - Nov 2025",
    description: "Developed an Automated Braking System to automatically prevent reverse motion and improve vehicle safety. Designed a low-cost, purely mechanical braking solution that enhances control and reliability.",
    tags: ["Hardware", "Mechanical Design", "Safety Systems"],
    icon: <FaTools />
  },
  {
    title: "Crop Crew Care – Smart Agriculture Platform",
    date: "Jun 2025 – Nov 2025",
    description: "Developed a smart agriculture platform for crop monitoring, disease reporting, & farm management. Implemented recommendation features to support fertilizer selection & improve farming efficiency.",
    tags: ["React.js", "Node.js", "MongoDB", "Agriculture Tech"],
    icon: <FaExternalLinkAlt />
  },
  {
    title: "College Event Management System",
    date: "Sep 2024 – Nov 2024",
    description: "Built a responsive web application using HTML, CSS, and JavaScript for managing college events. Implemented online event registration with a user-friendly interface.",
    tags: ["HTML", "CSS", "JavaScript", "Web App"],
    icon: <FaExternalLinkAlt />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-content">
                <div className="project-header">
                  <div className="project-icon-wrapper">
                    {project.icon}
                  </div>
                  <span className="project-date">{project.date}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
