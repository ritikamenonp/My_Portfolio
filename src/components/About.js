import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaBriefcase, FaJava, FaChartBar } from 'react-icons/fa';
import { 
  SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiMysql, SiMongodb, SiTableau, SiAmazonwebservices, SiUbuntu,
  SiGit, SiAdobephotoshop, SiAdobepremierepro, SiJupyter
} from 'react-icons/si';
import { VscRobot } from 'react-icons/vsc';
import './About.css';

const About = () => {
  const techStack = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava />, color: "#ED8B00" },
        { name: "Python", icon: <SiPython />, color: "#3776AB" }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" }
      ]
    },
    {
      category: "Data Visualization",
      skills: [
        { name: "Power BI", icon: <FaChartBar />, color: "#F2C811" },
        { name: "Tableau", icon: <SiTableau />, color: "#E97627" }
      ]
    },
    
    {
      category: "Tools & Software",
      skills: [
        { name: "RPA", icon: <VscRobot />, color: "#0066FF" },
        { name: "Jupyter", icon: <SiJupyter />, color: "#F37626" },
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
        { name: "Premiere Pro", icon: <SiAdobepremierepro />, color: "#9999FF" }
      ]
    }
  ];

  const experiences = [
    {
      company: "CIRCOR Flow Technologies",
      location: "Coimbatore, India",
      role: "Data/Business Analyst Intern",
      period: "Dec 2024 – Present",
      tasks: [
        "Building interactive Power BI dashboards for Supplier On-Time Delivery (SOTD) and global sourcing insights using Power BI, Power Query, and DAX.",
        "Automating shipping order generation on PO release using Excel VBA, reducing manual effort and improving efficiency."
      ]
    },
    {
      company: "VConnect Media",
      location: "Coimbatore, India",
      role: "Photoshop Intern",
      period: "Jul 2023 – Oct 2023",
      tasks: [
        "Created engaging visual designs and video content using Adobe Photoshop and Premiere Pro.",
        "Consistently delivered high-quality creatives, earning an 'A' grade for all assignments."
      ]
    }
  ];

  const achievements = [
    {
      title: "E. Balagurusamy Gold Medal",
      description: "Awarded for academic excellence in Computer Science",
      icon: <FaMedal />
    },
    {
      title: "CS Department Topper",
      description: "Ranked first in the Computer Science department (2021-2024 Batch)",
      icon: <FaTrophy />
    },
    {
      title: "NCC C Certificate Holder",
      description: "Completed NCC training with C Certification",
      icon: <FaAward />
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        
        {/* Main Two Column Layout */}
        <div className="about-main-grid">
          {/* Left Column - About Me & Achievements */}
          <div className="about-left-column" data-aos="fade-right">
            <div className="about-intro-section">
              <p className="about-intro">
                I'm a passionate Computer Science postgraduate with a strong drive to build, learn, and innovate. With a solid foundation in core computer science and programming, I enjoy solving real-world problems through technology and continuously exploring emerging tools to create impactful solutions.
              </p>
            </div>

            {/* Achievements Section */}
            <div className="achievements-section">
              <h3 className="sub-section-title">
                <FaTrophy className="title-icon" /> Achievements
              </h3>
              <div className="achievements-list">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="achievement-card"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="achievement-icon-wrapper">
                      {achievement.icon}
                    </div>
                    <div className="achievement-content">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="about-right-column" data-aos="fade-left">
            <div className="tech-stack-section">
              <h3 className="sub-section-title">🛠️ My Tech Stack</h3>
              <div className="tech-stack-grid">
                {techStack.map((category, catIndex) => (
                  <div key={catIndex} className="tech-category">
                    <h4 className="category-title">{category.category}</h4>
                    <div className="skills-row">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex} 
                          className="skill-card"
                        >
                          <div className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                          </div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Section - Full Width */}
        <div className="experience-section" data-aos="fade-up">
          <h3 className="sub-section-title">
            <FaBriefcase className="title-icon" /> My Professional Experiences
          </h3>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="experience-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="experience-header">
                  <h4>{exp.company}</h4>
                  <span className="experience-location">{exp.location}</span>
                </div>
                <div className="experience-meta">
                  <span className="experience-role">{exp.role}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <ul className="experience-tasks">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
