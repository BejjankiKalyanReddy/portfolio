import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          &lt;Kalyan /&gt;
        </a>

        <div className="desktop-menu">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="nav-link">
              <span className="nav-number">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" className="resume-btn">
            Resume
          </a>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween' }}
          >
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="/resume.pdf" target="_blank" className="resume-btn-mobile">
              Resume
            </a>
          </motion.div>
        )}
      </div>


    </nav>
  );
};

export default Navbar;
