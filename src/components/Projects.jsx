import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Some Things I've Built</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-header">
                <div className="folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="project-links">
                  {/* Assuming GitHub links might be added later or extracted if available */}
                  {/* <a href="#" aria-label="GitHub Link"><FaGithub /></a> */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External Link"><FaExternalLinkAlt /></a>
                </div>
              </div>

              <h3 className="project-title">
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>

              <div className="project-description">
                <p>A {project.category} project.</p>
              </div>

              <ul className="project-tech-list">
                {project.tech.split(', ').map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 15px;
          margin-top: 50px;
        }
        .project-card {
          background-color: var(--secondary-bg);
          padding: 2rem 1.75rem;
          border-radius: 4px;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          transform: translateY(-7px);
        }
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }
        .folder-icon {
          color: var(--accent-color);
          width: 40px;
          height: 40px;
        }
        .folder-icon svg {
          width: 100%;
          height: 100%;
        }
        .project-links {
          display: flex;
          align-items: center;
          gap: 20px;
          color: #a8b2d1;
        }
        .project-links a:hover {
          color: var(--accent-color);
        }
        .project-title {
          margin: 0 0 10px;
          color: #ccd6f6;
          font-size: 1.4rem;
        }
        .project-title a:hover {
          color: var(--accent-color);
        }
        .project-description {
          color: #a8b2d1;
          font-size: 17px;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: #8892b0;
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
};

export default Projects;
