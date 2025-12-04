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
              {/* Browser Header */}
              <div className="browser-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
                <div className="address-bar"></div>
              </div>

              <div className="project-content">
                {/* Project Image/Preview */}
                <div className="project-image-container">
                    {/* Fallback to folder icon if no image, but for now assuming images or placeholders */}
                    {project.image ? (
                        <img src={project.image} alt={project.title} className="project-image" />
                    ) : (
                        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#112240'}}>
                             <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder" style={{width: '40px', height: '40px', color: '#64ffda'}}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                    )}
                </div>

                <div className="project-header">
                  <div className="project-links" style={{marginLeft: 'auto'}}>
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
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        
        /* Browser Mockup Card */
        .project-card {
          background-color: var(--secondary-bg);
          border-radius: 8px;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
          border: 1px solid #233554;
        }
        
        .project-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
        }
        
        /* Browser Header */
        .browser-header {
          background: #0a192f;
          padding: 12px 15px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #233554;
          gap: 8px;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        
        .dot.red { background-color: #ff5f56; }
        .dot.yellow { background-color: #ffbd2e; }
        .dot.green { background-color: #27c93f; }
        
        /* Address Bar (Optional visual) */
        .address-bar {
          background: rgba(255, 255, 255, 0.05);
          height: 20px;
          border-radius: 4px;
          flex-grow: 1;
          margin-left: 10px;
        }

        .project-content {
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-image-container {
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-radius: 4px;
          margin-bottom: 20px;
          border: 1px solid #233554;
          position: relative;
          background: #0a192f;
        }
        
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.5s ease;
          filter: grayscale(100%) contrast(1) brightness(0.8);
        }
        
        .project-card:hover .project-image {
          transform: scale(1.05);
          filter: none;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .folder-icon {
          color: var(--accent-color);
          width: 40px;
          height: 40px;
          display: none; /* Hiding folder icon as we have images now */
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
          font-size: 15px;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #8892b0;
          margin-top: auto;
        }
        .project-tech-list li {
            background: rgba(100, 255, 218, 0.1);
            padding: 4px 8px;
            border-radius: 4px;
            color: var(--accent-color);
        }
      `}</style>
    </section>
  );
};

export default Projects;
