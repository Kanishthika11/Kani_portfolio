import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('')

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = formData

    if (!name || !email || !subject || !message) {
      setAlertMessage("Please fill in all fields.")
      setAlertType("danger")
      return
    }

    setAlertMessage("Thank you, your message has been sent!")
    setAlertType("success")

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="container-fluid section" id="Contact">
      <div className="container">
        <div className="row g-0">
          {/* Left Header */}
          <div className="col-lg-3">
            <div className="contact-header custom-left-panel">

              <div className="text-start">
                <p className="text-white sub-title mb-2">Contact Me</p>
                <h1 className="display-6 text-white mb-0">Open to Opportunities</h1>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-9">
            <div className="contact-content h-100 pt-5 ps-5 pb-5">
              <div className="bg-light p-4">
                <div className="row g-5">
                  {/* Mail Info */}
                  <div className="col-12 col-md-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="btn-xl-square bg-primary text-white me-3 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Mail ME</h5>
                        <p className="mb-0">kkanishthika1@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="col-12 col-md-7">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              className="form-control border-0"
                              id="name"
                              type="text"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                            <label htmlFor="name">Your Name</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              className="form-control border-0"
                              id="email"
                              type="email"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                            <label htmlFor="email">Your Email</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              className="form-control border-0"
                              id="subject"
                              type="text"
                              placeholder="Subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                            />
                            <label htmlFor="subject">Subject</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              className="form-control border-0"
                              id="message"
                              placeholder="Leave a message here"
                              style={{ height: '120px' }}
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                            />
                            <label htmlFor="message">Message</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100 py-3" type="submit">
                            Send Message
                          </button>
                        </div>
                        <div className="col-12">
                          <div className="text-center mt-3">
                            {alertMessage && (
                              <span className={`text-${alertType}`}>
                                {alertMessage}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* Google Map */}
                  <div className="col-12">
                    <div className="rounded mt-4">
                      <h4>Current Location</h4>
                      <iframe
                        className="rounded w-100"
                        height="400"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.786940950966!2d76.89577677480688!3d10.9037904892528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85c95d3e828eb%3A0x2785cb4510629029!2sAmrita%20Vishwa%20Vidyapeetham%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1752090388808!5m2!1sen!2sin"
                        title="Amrita Vishwa Vidyapeetham Location"
                      ></iframe>
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

export default Contact
