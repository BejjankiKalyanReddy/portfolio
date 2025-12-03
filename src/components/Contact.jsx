import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email } = portfolioData;

  return (
    <section id="contact" className="section container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="subtitle">What's Next?</p>
        <h2 className="title">Get In Touch</h2>
        <p className="description">
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a href={`mailto:${email}`} className="email-btn">
          Say Hello
        </a>
      </motion.div>

      <style>{`
        .text-center {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          padding: 100px 0;
        }
        .subtitle {
          color: var(--accent-color);
          font-family: var(--font-mono);
          margin-bottom: 20px;
        }
        .title {
          font-size: clamp(40px, 5vw, 60px);
          margin-bottom: 20px;
          color: #ccd6f6;
          font-weight: 600;
        }
        .description {
          color: #8892b0;
          font-size: 1.1rem;
          margin-bottom: 50px;
        }
        .email-btn {
          border: 1px solid var(--accent-color);
          color: var(--accent-color);
          padding: 1.25rem 1.75rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 1rem;
          background: transparent;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          display: inline-block;
        }
        .email-btn:hover {
          background: rgba(100, 255, 218, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Contact;
