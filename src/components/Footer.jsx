import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { social } = portfolioData;

  return (
    <footer className="footer">
      <div className="social-links">
        <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a> */}
      </div>
      
      <div className="footer-credit">
        <a href="https://github.com/Kalynreddykiller18" target="_blank" rel="noopener noreferrer">
          Designed & Built by B Kalyan Reddy
        </a>
      </div>

      <style>{`
        .footer {
          padding: 20px 0;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
          display: none; /* Hidden on desktop as sidebars usually handle this, but good for mobile */
        }
        .footer-credit a {
          color: #8892b0;
        }
        .footer-credit a:hover {
          color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .social-links {
            display: flex;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
