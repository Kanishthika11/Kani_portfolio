import React from 'react';

const About = () => {
  return (
    <div className="container-fluid section" id="About">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-lg-3">
            <div className="about-header custom-left-panel">
              <div className="text-start d-flex flex-column justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                <p className="text-white sub-title">About Me</p>
                <h1 className="display-6 text-white mb-0">AI-Driven Full Stack Technologist</h1>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="about-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-5">
                <div className="col-xl-5">
                  <div className="about-img bg-light p-4 wow fadeInUp rounded" data-wow-delay="0.1s">
                    <img 
                      alt="Programming" 
                      className="img-fluid w-100 rounded" 
                      src="/img/programming.jpeg" 
                    />
                    <div className="sosial-icon mt-4 d-flex justify-content-center gap-3">
                      <a 
                        className="btn btn-primary btn-sm-square" 
                        href="https://github.com/Kanishthika11"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github text-white"></i>
                      </a>
                      <a 
                        className="btn btn-primary btn-sm-square" 
                        href="https://www.linkedin.com/in/kanishthika-k-a9aba7300/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in text-white"></i>
                      </a>
                      <a 
                        className="btn btn-primary btn-sm-square" 
                        href="mailto:kkanishthika1@gmail.com"
                      >
                        <i className="fas fa-envelope text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 wow fadeInUp" data-wow-delay="0.3s">
                  <h4 className="mb-4 text-primary">Hi, I'm Kanishthika</h4>
                  <p className="mb-4 fs-5 text-muted lh-lg">
                    I am a third-year Computer Science Engineering student with a strong interest in developing robust and scalable web applications. My current focus is on mastering the MERN stack while exploring the integration of artificial intelligence into full-stack solutions. I am highly motivated to stay at the forefront of emerging technologies and continually work on enhancing my skills to deliver innovative and impactful digital experiences.
                  </p>
                  <div className="col-6 wow fadeInUp" data-wow-delay="0.4s">
                    <a 
                      className="btn btn-primary py-2 px-4" 
                      href="/files/Kani-resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-download me-2"></i>
                      <i>Download My Resume</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default About;
