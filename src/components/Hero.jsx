import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { name, title, about } = portfolioData;

  return (
    <section className="hero container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="greeting">Hi, my name is</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="name">{name}.</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="title">{title}.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="description">{about}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a href="#projects" className="cta-btn">Check out my work!</a>
      </motion.div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-top: 0;
        }
        .greeting {
          color: var(--accent-color);
          font-family: var(--font-mono);
          font-size: 1rem;
          margin-bottom: 20px;
          display: block;
        }
        .name {
          font-size: clamp(40px, 8vw, 80px);
          font-weight: 600;
          color: #ccd6f6;
          line-height: 1.1;
        }
        .title {
          font-size: clamp(40px, 8vw, 80px);
          font-weight: 600;
          color: #8892b0;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .description {
          max-width: 540px;
          font-size: 1.1rem;
          color: #8892b0;
          margin-bottom: 50px;
        }
        .cta-btn {
          border: 1px solid var(--accent-color);
          color: var(--accent-color);
          padding: 1.25rem 1.75rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 1rem;
          background: transparent;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .cta-btn:hover {
          background: rgba(100, 255, 218, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Hero;
