import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Where I've Worked</h2>

        <div className="experience-container">
          <div className="tabs-list">
            {experience.map((job, index) => (
              <button
                key={index}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {job.company.split(' - ')[0]}
              </button>
            ))}
          </div>

          <div className="job-content">
            {experience.map((job, index) => (
              <div
                key={index}
                className={`job-panel ${activeTab === index ? 'active' : ''}`}
                hidden={activeTab !== index}
              >
                <h3 className="job-title">
                  {job.role} <span className="company">@ {job.company}</span>
                </h3>
                <p className="job-period">{job.period}</p>
                <div className="job-description">
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        .experience-container {
          display: flex;
          gap: 50px;
          margin-top: 50px;
        }
        .tabs-list {
          display: flex;
          flex-direction: column;
          position: relative;
          min-width: 200px;
          border-left: 2px solid var(--secondary-bg);
        }
        .tab-btn {
          background: transparent;
          border: none;
          text-align: left;
          padding: 15px 20px;
          color: #8892b0;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          border-left: 2px solid transparent;
          margin-left: -2px;
        }
        .tab-btn:hover, .tab-btn.active {
          color: var(--accent-color);
          background: rgba(17, 34, 64, 0.5);
        }
        .tab-btn.active {
          border-left: 2px solid var(--accent-color);
        }
        .job-content {
          flex: 1;
        }
        .job-title {
          font-size: 1.5rem;
          margin-bottom: 5px;
          color: var(--text-color);
        }
        .company {
          color: var(--accent-color);
        }
        .job-period {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: #8892b0;
          margin-bottom: 20px;
        }
        .job-description {
          color: #8892b0;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .experience-container {
            flex-direction: column;
          }
          .tabs-list {
            flex-direction: row;
            overflow-x: auto;
            border-left: none;
            border-bottom: 2px solid var(--secondary-bg);
            margin-bottom: 30px;
          }
          .tab-btn {
            border-left: none;
            border-bottom: 2px solid transparent;
            margin-left: 0;
            margin-bottom: -2px;
            min-width: 120px;
            text-align: center;
          }
          .tab-btn.active {
            border-left: none;
            border-bottom: 2px solid var(--accent-color);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
