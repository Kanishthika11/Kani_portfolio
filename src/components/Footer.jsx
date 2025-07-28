import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid footer custom-left-panel">
      <div className="container">
        <div className="row g-0">
          <div className="col-12">
            <div className="footer-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4 align-items-center">
                <div className="col-12 text-center">
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <h5 className="mb-2 text-white">K Kanishthika</h5>
                    <p className="mb-3 text-white">
                      Aspiring Developer | Data Science Enthusiast | AI Explorer
                    </p>

                    <div className="d-flex justify-content-center mb-3">
                      <a
                        className="btn btn-outline-light btn-social mx-2"
                        href="https://github.com/Kanishthika11"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        className="btn btn-outline-light btn-social mx-2"
                        href="https://www.linkedin.com/in/kanishthika-k-a9aba7300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        className="btn btn-outline-light btn-social mx-2"
                        href="mailto:kkanishthika1@gmail.com"
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
