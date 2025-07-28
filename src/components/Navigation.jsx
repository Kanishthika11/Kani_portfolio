import React, { useEffect, useState } from 'react';

const navItems = [
  { href: '#Home', icon: 'fa fa-home', text: 'Home' },
  { href: '#About', icon: 'far fa-address-card', text: 'About' },
  { href: '#Education', icon: 'fas fa-graduation-cap', text: 'Education' },
  { href: '#Interests', icon: 'fas fa-lightbulb', text: 'Interests' },
  { href: '#Skills', icon: 'fas fa-tools', text: 'Skills' },
  { href: '#Certifications', icon: 'fas fa-certificate', text: 'Certifications' },
  { href: '#Projects', icon: 'fas fa-laptop-code', text: 'Projects' },
  { href: '#case', icon: 'fas fa-book-open', text: 'Case Studies' },
  { href: '#Contact', icon: 'fas fa-paper-plane', text: "Let’s Connect" }
];

const Navigation = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(navItems[0].href);

  useEffect(() => {
    const handleScroll = () => {
      let current = navItems[0].href;
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = item.href;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClose) onClose(); // Close mobile nav if applicable
  };

  return (
    <div className={`container-fluid nav-section border-0 ${isOpen ? 'open' : ''}`}>
      <nav className="navbar navbar-light" aria-label="Section Navigation">
        <div className="navbar-nav flex-column">
          {navItems.map(({ href, icon, text }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={href}
                className={`nav-item nav-link ${isActive ? 'active active-section' : ''}`}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className={icon}></span> {text}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
