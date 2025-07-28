import React from 'react';

const Header = () => {
  return (
    <div className="container-fluid" id="Home">
      <div className="container">
        <div className="row g-0" style={{ minHeight: '100vh' }}>
          <div className="col-12 col-lg-3">
            <div className="portfolio-header custom-left-panel">
              <div 
                className="text-start d-flex flex-column justify-content-center wow fadeInUp" 
                data-wow-delay="0.3s"
              >
                <p className="text-white sub-title">Portfolio</p>
                <h1 className="display-6 text-white mb-0 text-center">KANISHTHIKA</h1>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-9">
            <div className="header-img d-flex h-100 pt-6 ps-6 pb-6">
              <div className="row g-5 align-items-center w-100">
                <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div 
                    className="bg-light p-4" 
                    style={{ borderRadius: '68% 32% 100% 0% / 0% 75% 25% 100%' }}
                  >
                    <img 
                      alt="Kanishthika" 
                      className="img-fluid w-100" 
                      src="/img/header1-img.jpg"
                      style={{ borderRadius: '68% 32% 100% 0% / 0% 75% 25% 100%' }}
                    />
                  </div>
                </div>

                <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.3s">
                  <h1 className="display-6 mb-4 text-primary">
                    AI-Minded Full Stack Aspirant
                  </h1>
                  <div className="d-flex flex-column gap-3 mt-4">
                    <div className="d-flex align-items-center">
                      <a 
                        className="btn btn-primary btn-sm-square me-3" 
                        href="https://github.com/Kanishthika11" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github text-white"></i>
                      </a>
                      <p className="text-dark mb-0">GitHub Profile</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <a 
                        className="btn btn-primary btn-sm-square me-3" 
                        href="https://www.linkedin.com/in/kanishthika-k-a9aba7300/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in text-white"></i>
                      </a>
                      <p className="text-dark mb-0">LinkedIn Profile</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <a 
                        className="btn btn-primary btn-sm-square me-3" 
                        href="mailto:kkanishthika1@gmail.com"
                      >
                        <i className="fas fa-envelope text-white"></i>
                      </a>
                      <p className="text-dark mb-0">kkanishthika1@gmail.com</p>
                    </div>
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

export default Header;
