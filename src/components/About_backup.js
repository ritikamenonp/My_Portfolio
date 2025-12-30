import React from 'react';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p className="about-intro">
              I am a passionate Computer Science postgraduate with a strong drive to build, learn, and innovate. With a solid foundation in core computer science and programming, I enjoy solving real-world problems through technology and continuously exploring emerging tools to create impactful solutions.
            </p>
        
            <div className="achievements" data-aos="zoom-in">
              <h3><FaTrophy className="achievement-icon" /> Achievements</h3>
              <div className="achievement-badge">
                <FaMedal className="badge-icon" />
                <span>E. Balagurusamy Gold Medal Awardee</span>
              </div>
              <div className="achievement-badge">
                <FaStar className="badge-icon" />
                <span> CS Department Topper (2021-2024)</span>
              </div>
              <div className="achievement-badge">
                <FaMedal className="badge-icon" />
                <span>NCC C Certificate Holder</span>
              </div>
              
            </div>
          </div>
          
          <div className="about-details" data-aos="fade-left">
            <div className="detail-card card-hover">
              <h3>📚 Education</h3>
              <div className="education-item">
                <h4>MSc in Computer Science</h4>
                <p><strong>PSGR Krishnammal College for Women, Coimbatore</strong></p>
                <p>Jul 2024 – Present | Current CGPA: <strong>8.7</strong></p>
                
              </div>
              
              <div className="education-item">
                <h4>Bachelor of Computer Application</h4>
                <p><strong>Sri Ramakrishna College of Arts & Science for Women, Coimbatore</strong></p>
                <p>Sept 2021 – May 2024 | CGPA: <strong>8.9</strong></p>
              </div>
            </div>
            
            <div className="detail-card card-hover">
              <h3>💼 Experience</h3>
              <div className="experience-item">
                <h4>CIRCOR Flow Technologies, Coimbatore</h4>
                <p><strong>Internship</strong> | Dec 2025 – Present</p>
                <ul>
                  <li>Building interactive Power BI dashboards for Supplier On-Time Delivery (SOTD) and global sourcing insights using Power BI, Power Query, and DAX.</li>
                  <li>Automating shipping order generation on PO release using Excel VBA, reducing manual effort and improving efficiency.</li>
                </ul>
              </div>

              <div className="experience-item">
                <h4>VConnect Media, Coimbatore</h4>
                <p><strong>Internship</strong> | Jul 2023 – Oct 2023</p>
                <ul>
                  <li>Created engaging visual designs and video content using Adobe Photoshop and Premiere Pro.</li>
                  <li>Consistently delivered high-quality creatives, earning an ‘A’ grade for all assignments.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        
        <div className="skills-section" data-aos="fade-up">
          <h3>🛠️ Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category" data-aos="flip-left" data-aos-delay="100">
              <h4>Programming Languages</h4>
              <div className="skills-list">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
              </div>
            </div>
            
            <div className="skill-category" data-aos="flip-left" data-aos-delay="200">
              <h4>Web Development</h4>
              <div className="skills-list">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Node.js</span>
              </div>
            </div>
            
            <div className="skill-category" data-aos="flip-left" data-aos-delay="300">
              <h4>Databases</h4>
              <div className="skills-list">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            
            <div className="skill-category" data-aos="flip-left" data-aos-delay="400">
              <h4>Data Visualization</h4>
              <div className="skills-list">
                <span className="skill-tag">Power BI</span>
                <span className="skill-tag">Tableau</span>
              </div>
            </div>
            
            <div className="skill-category" data-aos="flip-left" data-aos-delay="500">
              <h4>Cloud & OS</h4>
              <div className="skills-list">
                <span className="skill-tag">Basic AWS</span>
                <span className="skill-tag">Ubuntu</span>
              </div>
            </div>
            
            <div className="skill-category" data-aos="flip-left" data-aos-delay="600">
              <h4>Automation Tools</h4>
              <div className="skills-list">
                <span className="skill-tag">RPA</span>
                <span className="skill-tag">Jupyter Notebook</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Adobe Photoshop</span>
                <span className="skill-tag">Premiere Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

