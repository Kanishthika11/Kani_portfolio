import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Walking Stick",
      description: "           A Tinkercad-based Arduino simulation project designed to assist visually impaired individuals.This smart walking stick uses an ultrasonic sensor to detect nearby obstacles. When an object is within a certain distance, it triggers a buzzer and LED alert, helping the user navigate safely.",
      image: "/img/project-1.png",
      link: "https://www.tinkercad.com/things/g5Keimrv8Dw-w2m-smart-walking-stick/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard&sharecode=Uk_Yvlrfk4gtgytCx0TEUxap1g3Lc-kmFesyiQlCfJ4",
      linkText: "View Simulation"
    },
    {
      title: "GameHub- A Fun Game Portal for Kids",
      description: " GameHub is a colorful, user-friendly web application designed as part of a User Interface Design (UID) project, specifically created for young users. The interface uses bright visuals, large buttons, and minimal text to ensure a fun and accessible experience for children.",
      image: "/img/project-2.png",
      link: "https://kanishthika11.github.io/GameHub/",
      linkText: "Live Demo"
    }
  ];

  return (
    <div className="container-fluid section" id="Projects">
      <div className="container">
        <div className="row g-0">
          {/* Left panel */}
          <div className="col-lg-3">
            <div className="portfolio-header custom-left-panel">
              <div className="text-start d-flex flex-column justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                <p className="text-white sub-title">Projects</p>
                <h1 className="display-6 text-white mb-0">Projects Aligned with Curriculum</h1>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="col-lg-9">
            <div className="portfolio-content h-100 pt-6 ps-6 pb-6">
              {projects.map((project, index) => (
                <div key={index} className="portfolio-item py-5 border-bottom wow fadeInUp" data-wow-delay={`0.${index + 1}s`}>
                  <div className="row g-4 align-items-center">
                    <div className="col-xl-6">
                      <h2 className="display-6 mb-0">{project.title}</h2>
                      <p className="mb-4">{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary mt-2"
                      >
                        <i>{project.linkText}</i>
                      </a>
                    </div>

                    <div className="col-9 col-xl-4">
                      <div className="portfolio-img">
                        <div className="portfolio-img-inner">
                          <img
                            alt={project.title}
                            className="img-fluid"
                            src={project.image}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-3 col-xl-2">
                      <div className="view-img">
                        <a
                          className="btn btn-primary btn-lg-square"
                          href={project.image}
                          data-lightbox={`portfolio-${index + 1}`}
                        >
                          <i className="fas fa-plus"></i>
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

export default Projects;
