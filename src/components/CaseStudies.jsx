import React, { useState } from 'react'

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const caseStudies = [
    {
      title: "Polygon Triangulation and Art Gallery Surveillance",
      image: "/img/daa (1).png",
      description: "This project tackled the Art Gallery Problem using polygon triangulation and graph algorithms to determine the minimum number of cameras needed to monitor an entire gallery. The implementation included monotone partitioning, triangulation, and vertex coloring to optimize placement, demonstrating practical applications in security and computational geometry.",
      downloadLink: "/files/Blue Professional Business Project Presentation .pptx",
      buttonText: "Download PPTX",
      icon: "fas fa-file-powerpoint me-2"
    },
    {
      title: "BOOM Processor Architecture using RISC-V",
      image: "/img/coa.png",
      description: "This case study explores the architecture of the Berkeley Out-of-Order Machine (BOOM), an advanced processor core based on the RISC-V ISA. It analyzes the features of out-of-order execution, register renaming, pipelining, and cache hierarchies. The focus is on understanding BOOM’s performance advantages over traditional in-order cores like Rocket through architectural insights and functional decomposition.",
      downloadLink: "/files/Business.pptx",
      buttonText: "Download PPTX",
      icon: "fas fa-file-powerpoint me-2"
    },
    {
      title: "Statistical Modeling and Inference",
      image: "/img/stat.png",
      description: "This activity highlights the Statistics 2 course from IIT Madras, covering key topics like probability, estimation, hypothesis testing, and regression. It emphasizes applied learning through assignments and real-world data analysis to build strong statistical reasoning skills.",
      downloadLink: "https://sites.google.com/ds.study.iitm.ac.in/kkanishthika/home?authuser=0",
      buttonText: "View Site",
      icon: "fas fa-external-link-alt me-2",
      isExternal: true
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentCase = caseStudies[currentSlide]

  return (
    <div className="container-fluid section" id="case">
      <div className="container">
        <div className="row g-0">
          {/* Left Panel */}
          <div className="col-lg-3">
            <div className="testimonial-header custom-left-panel">
              <div className="text-start d-flex flex-column justify-content-center h-100">
                <p className="text-white sub-title">Case Studies</p>
                <h1 className="display-6 text-white mb-0">Study highlights</h1>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-lg-9 d-flex justify-content-center align-items-center">
            <div
              className="position-relative bg-light p-4 h-100 d-flex flex-column justify-content-between shadow-sm rounded"
              style={{ minHeight: '600px', width: '100%' }}
            >
              {/* Arrows */}
              <button
                className="position-absolute start-0 top-50 translate-middle-y btn btn-outline-primary"
                onClick={prevSlide}
              >
                <i className="bi bi-arrow-left"></i>
              </button>
              <button
                className="position-absolute end-0 top-50 translate-middle-y btn btn-outline-primary"
                onClick={nextSlide}
              >
                <i className="bi bi-arrow-right"></i>
              </button>

              {/* Slide Content */}
              <div className="testimonial-item">
               <div className="row gy-2 gx-2 mb-2">

                  <div className="col-sm-6">
                    <div className="d-flex justify-content-sm-end">
                      <div
                        className="testimonial-inner-img border border-primary border-3 me-4"
                        style={{ width: '100px', height: '100px' }}
                      >
                        <img
                          src={currentCase.image}
                          className="img-fluid"
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          alt={currentCase.title}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <h5 className="mb-2" style={{ whiteSpace: 'pre-line' }}>
                        {currentCase.title.replace(/\s(and|using)\s/g, '\n$1 ')}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="text-sm-center">
                  <p>{currentCase.description}</p>
                  {currentCase.isExternal ? (
                    <a
                      href={currentCase.downloadLink}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={currentCase.icon}></i>
                      {currentCase.buttonText}
                    </a>
                  ) : (
                    <a
                      href={currentCase.downloadLink}
                      className="btn btn-outline-primary btn-sm"
                      download
                    >
                      <i className={currentCase.icon}></i>
                      {currentCase.buttonText}
                    </a>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="d-flex justify-content-center mt-4 gap-2 flex-wrap">
                {caseStudies.map((study, index) => (
                  <img
                    key={index}
                    src={study.image}
                    alt={`Case Study ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className="img-fluid"
                    style={{
                      width: index === currentSlide ? '70px' : '50px',
                      height: index === currentSlide ? '70px' : '50px',
                      border: index === currentSlide ? '3px solid var(--bs-primary)' : '2px solid #fff',
                      objectFit: 'cover',
                      transition: '0.3s ease',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
