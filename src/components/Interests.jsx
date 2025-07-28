import React from 'react';

const Interests = () => {
  const interests = [
    {
      icon: '📊',
      title: 'Data Science',
      description:
        "Data Science combines statistical analysis, machine learning, and visualization to derive insights from data. I'm passionate about building models, dashboards, and tools to solve real-world challenges through informed decision-making.",
      delay: '0.1s',
    },
    {
      icon: '📱',
      title: 'App Development',
      description:
        "I enjoy crafting functional and engaging web and mobile applications. My focus is on responsive design, seamless user experience, and performance — from frontend styling to backend systems.",
      delay: '0.2s',
    },
    {
      icon: '🤖',
      title: 'Artificial Intelligence',
      description:
        "I explore AI techniques such as machine learning, NLP, and computer vision to create intelligent systems that support automation, improve efficiency, and expand what's possible with technology.",
      delay: '0.3s',
    },
  ];

  return (
    <div className="container-fluid section" id="Interests">
      <div className="container">
        <div className="row g-0">
          {/* Left Column */}
          <div className="col-lg-3">
            <div className="interest-header custom-left-panel">
              <div
                className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <p className="text-white sub-title">Professional Interests</p>
                <h1 className="display-6 text-white mb-0">Fields of Current Exploration</h1>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-9">
            <div className="interest-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4">
                {interests.map((interest, index) => (
                  <div className="col-12" key={index}>
                    <div
                      className="interest-item p-4 wow fadeInUp"
                      data-wow-delay={interest.delay}
                    >
                      <div className="row g-4 align-items-center">
                        <div className="col-xl-2 text-center">
                          <div style={{ fontSize: '2.25rem' }}>{interest.icon}</div>
                        </div>
                        <div className="col-xl-3">
                          <h4 className="mb-0">{interest.title}</h4>
                        </div>
                        <div className="col-xl-7">
                          <p className="mb-0" style={{ color: '#040f54' }}>
                            {interest.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> {/* row end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
