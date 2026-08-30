import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Manish <span className="logo-accent">B L</span></h2>
            <p>Full Stack Developer & Data Analyst</p>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Me</h3>
            <div className="contact-info">
              <a href="mailto:blmanish05@gmail.com"><FaEnvelope /> blmanish05@gmail.com</a>
              <a href="tel:+917708389144"><FaPhone /> +91 7708389144</a>
            </div>
          </div>
          
          <div className="footer-socials">
            <h3>Socials</h3>
            <div className="social-links">
              <a href="https://linkedin.com/in/manishbl" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/manishbl2006" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Designed & Built with <FaHeart className="heart-icon" /> by Manish B L
          </p>
          <p className="copyright">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
