import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const contactIcons = [
    {
      id: 1,
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:ritikamenon6902@gmail.com",
      isExternal: false
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ritikamenonp/",
      isExternal: true
    },
    {
      id: 3,
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/ritikamenonp",
      isExternal: true
    }
  ];

  const handleQuickMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const mailtoLink = `mailto:ritikamenon6902@gmail.com?subject=Quick Message from Portfolio&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
      setSuccessMessage('Opening your email client...');
      setMessage('');
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        
        <p className="contact-intro" data-aos="fade-up">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="contact-main-grid">
          {/* Left Column - Contact Icons */}
          <div className="contact-icons-row" data-aos="fade-right">
            {contactIcons.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="contact-icon-box"
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Right Column - Quick Message */}
          <div className="quick-message-section" data-aos="fade-left">
            <h3>Send me a quick message</h3>
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
            <form className="quick-message-form" onSubmit={handleQuickMessage}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                rows="4"
                required
              />
              <button type="submit" className="send-btn">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
  
    </section>
  );
};

export default Contact;
