import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>{about}</p>
            <p>
              I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at a huge corporation and a start-up. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
          </div>

          <div className="about-img">
            <div className="img-wrapper">
              <img src="/assets/images/profile-avatar.png" alt="Profile" />
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .about-content {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 50px;
          align-items: center;
        }
        .about-text p {
          margin-bottom: 15px;
          color: #8892b0;
          font-size: 1.1rem;
        }
        .about-img {
          position: relative;
          max-width: 300px;
          margin: 0 auto;
        }
        .img-wrapper {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .img-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--accent-color);
          opacity: 0.3;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .img-wrapper:hover::after {
          opacity: 0;
        }
        .img-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          filter: grayscale(100%) contrast(1);
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .img-wrapper:hover img {
          filter: none;
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          .about-img {
            margin-top: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
