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
            <motion.div 
              className="code-card"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="code-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
              </div>
              <div className="code-content">
                <span className="code-line">
                  <span className="keyword">const</span> <span className="property">developer</span> <span className="punctuation">=</span> <span className="punctuation">{`{`}</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;<span className="property">name</span><span className="punctuation">:</span> <span className="string">"{portfolioData.name}"</span><span className="punctuation">,</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;<span className="property">role</span><span className="punctuation">:</span> <span className="string">"{portfolioData.title}"</span><span className="punctuation">,</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;<span className="property">skills</span><span className="punctuation">:</span> <span className="punctuation">[</span>
                </span>
                {portfolioData.skills[0].items.slice(0, 3).map((skill, index) => (
                  <span className="code-line" key={index}>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"{skill.name}"</span><span className="punctuation">,</span>
                  </span>
                ))}
                <span className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"..."</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;<span className="punctuation">]</span><span className="punctuation">,</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;<span className="property">hardWorker</span><span className="punctuation">:</span> <span className="keyword">true</span><span className="punctuation">,</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;<span className="property">quickLearner</span><span className="punctuation">:</span> <span className="keyword">true</span><span className="punctuation">,</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;<span className="property">problemSolver</span><span className="punctuation">:</span> <span className="keyword">true</span><span className="punctuation">,</span>
                </span>
                 <span className="code-line">
                  &nbsp;&nbsp;<span className="property">hireable</span><span className="punctuation">:</span> <span className="keyword">function</span><span className="punctuation">()</span> <span className="punctuation">{`{`}</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="punctuation">(</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span><span className="punctuation">.</span><span className="property">hardWorker</span> <span className="punctuation">&&</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span><span className="punctuation">.</span><span className="property">problemSolver</span> <span className="punctuation">&&</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span><span className="punctuation">.</span><span className="property">skills</span><span className="punctuation">.</span><span className="property">length</span> <span className="punctuation"> &gt;= </span> <span className="number">5</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="punctuation">)</span><span className="punctuation">;</span>
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;<span className="punctuation">{`}`}</span>
                </span>
                <span className="code-line">
                  <span className="punctuation">{`}`}</span><span className="punctuation">;</span>
                </span>
              </div>
            </motion.div>
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
          max-width: 400px;
          margin: 0 auto;
        }
        
        /* Code Card Styles */
        .code-card {
          background: rgba(2, 12, 27, 0.8);
          border-radius: 8px;
          border: 1px solid #233554;
          box-shadow: 0 20px 50px -15px rgba(2, 12, 27, 0.7);
          overflow: hidden;
          font-family: 'Fira Code', monospace;
          font-size: 14px;
          line-height: 1.5;
          transition: transform 0.2s ease;
        }
        
        .code-header {
          background: #0a192f;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #233554;
        }
        
        .window-controls {
          display: flex;
          gap: 8px;
        }
        
        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .close { background-color: #ff5f56; }
        .minimize { background-color: #ffbd2e; }
        .maximize { background-color: #27c93f; }
        
        .code-content {
          padding: 20px;
          color: #a8b2d1;
        }
        
        .code-line {
          display: block;
          margin-bottom: 4px;
        }
        
        .keyword { color: #c678dd; } /* purple */
        .property { color: #e06c75; } /* red */
        .string { color: #98c379; } /* green */
        .number { color: #d19a66; } /* orange */
        .punctuation { color: #a8b2d1; } /* white-ish */
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          .about-img {
            margin-top: 50px;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
