import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
      period: "2023-2027",
      degree: "B-TECH in Computer Science Engineering",
      details: "CGPA: 8.44 (upto 5th Semester)"
    },
    {
      institution: "Adithya International School, Coimbatore",
      period: "2022-2023",
      degree: "AISSCE - Class 12",
      details: "Stream/Subject: Mathematics, Physics, Chemistry, Computer Science, English<br>Percentage: 90.0%"
    },
    {
      institution: "Little Angels English Higher Secondary School, Karur",
      period: "2020-2021",
      degree: "ICSE - Class 10",
      details: "Percentage: 91.6%"
    }
  ];

  return (
    <div className="container-fluid section" id="Education">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-3">
            <div className="education-header custom-left-panel">
              <div
                className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <p className="text-white sub-title">Education</p>
                <h1 className="display-6 text-white mb-0">
                  My education qualification
                </h1>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="education-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4">
                {educationData.map((edu, index) => (
                  <div key={index} className="col-12">
                    <div
                      className="education-item rounded p-4 h-100 wow fadeInUp"
                      data-wow-delay={`${0.1 + index * 0.2}s`}
                    >
                      <div className="d-flex align-items-center mb-3">
                        <p className="fs-5 mb-0 me-4">
                          <strong>{edu.institution}</strong>
                        </p>
                        <div>
                          <span className="fa fa-calendar me-1"></span>
                          {edu.period}
                        </div>
                      </div>
                      <h5 className="mb-3">{edu.degree}</h5>
                      <p
                        className="mb-0"
                        dangerouslySetInnerHTML={{ __html: edu.details }}
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
