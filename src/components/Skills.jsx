import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((item, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div 
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 50px;
        }
        .category-title {
          color: var(--text-color);
          margin-bottom: 20px;
          font-size: 1.2rem;
          border-bottom: 2px solid var(--secondary-bg);
          padding-bottom: 10px;
        }
        .skill-item {
          margin-bottom: 20px;
        }
        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: #8892b0;
        }
        .skill-bar-bg {
          width: 100%;
          height: 8px;
          background: var(--secondary-bg);
          border-radius: 4px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          background: var(--accent-color);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Skills;
