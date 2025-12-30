import React from 'react';
import { FaGithub, FaEnvelope, FaFileDownload, FaEye, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content" data-aos="fade-up">
          <div className="home-text" data-aos="fade-right">
            <h1 className="home-title">
              Hello World! I'm <span className="highlight">Ritika Menon P</span>
            </h1>
            <h2 className="home-subtitle">Junior Software Developer</h2>
            
            <div className="home-actions">
              <a 
                href="https://github.com/ritikamenonp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="home-action-item"
              >
                <div className="action-icon github-icon">
                  <FaGithub />
                </div>
                <span>View My Work</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/ritikamenonp/" 
                target="_blank"
                rel="noopener noreferrer"
                className="home-action-item"
              >
                <div className="action-icon linkedin-icon">
                  <FaLinkedin />
                </div>
                <span>LinkedIn</span>
              </a>

              <a 
                href="mailto:ritikamenon6902@gmail.com"
                className="home-action-item"
              >
                <div className="action-icon email-icon">
                  <FaEnvelope />
                </div>
                <span>Email Me</span>
              </a>

              <a 
                href="/Ritika_Menon_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="home-action-item"
              >
                <div className="action-icon view-icon">
                  <FaEye />
                </div>
                <span>View my Resume</span>
              </a>

              <a 
                href="/Ritika_Menon_Resume.pdf" 
                download="Ritika_Menon_Resume.pdf"
                className="home-action-item"
              >
                <div className="action-icon download-icon">
                  <FaFileDownload />
                </div>
                <span>Download my Resume</span>
              </a>
              
            </div>
          </div>
          <div className="home-image" data-aos="fade-left">
            <div className="profile-placeholder bounce-animation">
              <div className="profile-icon">RM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
