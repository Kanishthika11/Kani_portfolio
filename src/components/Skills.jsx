import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [counters, setCounters] = useState({});

  const allSkills = [
    { name: "Python", icon: "fab fa-python fa-2x", color: "#3776AB", percentage: 95, category: "Programming" },
    { name: "HTML", icon: "fab fa-html5 fa-2x", color: "#E34F26", percentage: 98, category: "Frontend" },
    { name: "CSS", icon: "fab fa-css3-alt fa-2x", color: "#1572B6", percentage: 96, category: "Frontend" },
    { name: "JavaScript", icon: "fab fa-js-square fa-2x", color: "#F7DF1E", percentage: 90, category: "Frontend" },
    { name: "Java", icon: "fab fa-java fa-2x", color: "#007396", percentage: 88, category: "Programming" },
    { name: "C++", icon: "fab fa-cuttlefish fa-2x", color: "#00599C", percentage: 85, category: "Programming" },
    { name: "SQL", icon: "fas fa-database fa-2x", color: "#003B57", percentage: 85, category: "Backend" },
    { name: "C", icon: "fab fa-cuttlefish fa-2x", color: "#A8B9CC", percentage: 80, category: "Programming" },
    { name: "Haskell", icon: "fas fa-code fa-2x", color: "#5D4F85", percentage: 70, category: "Programming" }
  ];

  useEffect(() => {
    const animateCounters = () => {
      allSkills.forEach(skill => {
        let count = 0;
        const target = skill.percentage;
        const increment = target / 50;

        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [skill.name]: Math.floor(count) }));
        }, 20);
      });
    };

    const timer = setTimeout(animateCounters, 300);
    return () => clearTimeout(timer);
  }, []);

  const groupedSkills = {
    Frontend: allSkills.filter(skill => skill.category === 'Frontend'),
    Backend: allSkills.filter(skill => skill.category === 'Backend'),
    Programming: allSkills.filter(skill => skill.category === 'Programming'),
  };

  return (
    <div className="container-fluid section" id="Skills">
      <div className="container">
        <div className="row g-0">
          {/* Left Panel */}
          <div className="col-lg-3">
            <div className="skills-header custom-left-panel">
              <div className="text-start d-flex flex-column justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                <p className="text-white sub-title">Skills</p>
                <h1 className="display-6 text-white mb-0">My Expertise</h1>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-lg-9">
            <div className="skills-content h-100 pt-6 ps-6 pb-6">
              {Object.entries(groupedSkills).map(([group, skills], groupIndex) => (
                <div key={group}>
                  <h4 className={groupIndex > 0 ? 'mt-5 mb-4' : 'mb-4'}>{group}</h4>
                  <div className="row g-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="col-6 col-md-4 col-xl-3">
                        <div className="skills-item text-center rounded p-4 h-100 wow fadeInUp" data-wow-delay={`0.${index + 1}s`}>
                          <div className="text-primary mb-3">
                            <i className={skill.icon} style={{ color: skill.color }}></i>
                          </div>
                          <div className="counter-counting d-flex justify-content-center align-items-center mb-2">
                            <h5 className="fw-bold text-primary me-1 mb-0">{counters[skill.name] || 0}</h5>
                            <h6 className="fw-bold text-primary mb-0">%</h6>
                          </div>
                          <p className="mb-0 fw-semibold small">{skill.name}</p>
                          {/* No category shown inside the box */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
