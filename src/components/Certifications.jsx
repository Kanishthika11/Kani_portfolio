import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Foundations in Data Science",
      organization: "IIT Madras",
      icon: "fas fa-university fa-3x text-primary",
      date: "December-2024",
      description: "Computational Thinking, Programming in Python, Statistics and Mathematics for Data Science.",
      certificateUrl: "/files/iitm_foundation.pdf"
    },
    {
      title: "Springboard-Certified",
      organization: "Infosys",
      icon: "fas fa-laptop-code fa-3x text-info",
      date: "June 2025",
      description: "Artificial Intelligence",
      certificateUrl: "/files/ai_infosys.pdf"
    }
  ];

  return (
    <div className="container-fluid section" id="Certifications">
      <div className="container">
        <div className="row g-0">
          {/* Left panel */}
          <div className="col-lg-3">
            <div className="service-header custom-left-panel">
              <div className="text-start d-flex flex-column justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                <p className="text-white sub-title">Certifications</p>
                <h1 className="display-6 text-white mb-0">My Credentials</h1>
              </div>
            </div>
          </div>

          {/* Right cards */}
          <div className="col-lg-9">
            <div className="row g-4 pt-6 ps-6 pb-6">
              {certifications.map((cert, index) => (
                <div key={index} className="col-md-6">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      {/* Front */}
                      <div className="flip-card-front d-flex flex-column align-items-center justify-content-center p-4">
                        <div className="icon mb-3">
                          <i className={cert.icon}></i>
                        </div>
                        <h5 className="text-center">{cert.title}</h5>
                        <h4 style={{ color: 'rgb(2, 21, 65)' }}>{cert.organization}</h4>
                      </div>

                      {/* Back */}
                      <div className="flip-card-back p-4 d-flex flex-column justify-content-center text-center">
                        <h5 style={{ color: 'white' }}>{cert.date}</h5>
                        <p>{cert.description}</p>
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-light mt-2 fw-semibold"
                        >
                          <i className="fas fa-eye me-2"></i>
                          View Certificate
                        </a>
                      </div>
                    </div>
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

export default Certifications;
