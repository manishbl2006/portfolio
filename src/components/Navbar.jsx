import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled glass' : ''}`}>
      <div className="nav-container container">
        <a href="#home" className="nav-logo">
          Manish <span className="logo-accent">B L</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="nav-socials">
            <a href="https://linkedin.com/in/manishbl" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/manishbl2006" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.nav 
          className="mobile-nav glass"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-socials">
            <a href="https://linkedin.com/in/manishbl" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/manishbl2006" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
