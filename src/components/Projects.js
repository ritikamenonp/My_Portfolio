import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMedkit, FaRocket, FaChartLine } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [ 
    {
      id: 1,
      title: "Supplier Risk Prediction & Demand Forecasting ",
      description: "An end-to-end analytics project focused on supplier performance monitoring and short-term demand forecasting using structured data pipelines and machine learning models.",
      technologies: ["Python", "pandas", "Prophet", "scikit-learn", "Streamlit"],
      features: [
        "End-to-end Python pipeline for supplier and demand data processing",
        "Rolling 3-month SOTD and DPPM feature engineering for performance tracking",
        "3-month demand forecasting using Prophet (MAPE ≈ 4.7%)",
        "Supplier risk probability prediction using Logistic Regression (≈97% accuracy)",
        "Interactive Streamlit dashboard with filtering, visualization, and export functionality"
      ],
      category: "Data Analytics & Machine Learning",
      icon: <FaChartLine />,
      github: "https://github.com/ritikamenonp/Supplier_Risk_Prediction",
      
    },
    {
      id: 2,
      title: "AI Powered Resume Builder",
      description: "An intelligent resume builder that uses advanced NLP models to auto-generate professional resumes from user inputs.",
      technologies: ["Node.js", "Express", "React.js", "Multer", "Hugging Face"],
      features: [
        "Integrated Google FLAN-T5-Base and Facebook BART-Large-CNN models",
        "NLP-driven text generation for professional content",
        "Seamless file handling with Multer",
        "Intelligent resume creation experience"
      ],
      category: "Full Stack Development",
      icon: <FaCode />,
      github: "https://github.com/ritikamenonp/Resume_Builder",
      
    },
    {
      id: 3,
      title: "Oral Lip and Tongue Cancer Prediction",
      description: "A CNN-based medical diagnosis system for early detection of oral, lip, and tongue cancer from lesion images.",
      technologies: ["Python", "TensorFlow", "CNN", "Data Mining"],
      features: [
        "CNN model for image-based cancer detection",
        "Image processing for lesion analysis",
        "Data Mining and association rule mining",
        "Enhanced early diagnosis capabilities",
        "Accessibility in low-resource settings"
      ],
      category: "Machine Learning & Healthcare",
      icon: <FaMedkit />,
      github: "https://github.com/ritikamenonp/Oral_Lip_And_Tongue_Cancer_Prediction",
      
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card card-hover" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link btn-hover"
                >
                  <FaGithub className="link-icon" />
                  GitHub
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
