import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaChartBar
} from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiC } from 'react-icons/si';
import { BsFileEarmarkExcel } from 'react-icons/bs';
import './Skills.css';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava color="#f89820" /> },
      { name: "C", icon: <SiC color="#a8b9cc" /> },
      { name: "Python", icon: <FaPython color="#3776ab" /> },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 color="#e34f26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572b6" /> },
      { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
      { name: "React.js", icon: <FaReact color="#61dafb" /> },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "PHP", icon: <FaPhp color="#777bb4" /> },
    ]
  },
  {
    title: "Database & Data Visualization",
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
      { name: "SQL", icon: <SiMysql color="#4479a1" /> },
      { name: "Power BI", icon: <FaChartBar color="#f2c811" /> },
      { name: "Excel", icon: <BsFileEarmarkExcel color="#217346" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="skill-category card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
