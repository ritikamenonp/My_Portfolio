import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-container">
          <div className="logo">
            <h2>Ritika Menon P</h2>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <button onClick={() => scrollToSection('home')} className="nav-link">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="nav-link">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="nav-link">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="nav-link">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
