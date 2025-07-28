import React, { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`btn btn-primary btn-lg-square back-to-top ${isVisible ? 'd-block' : 'd-none'}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        right: '30px',
        bottom: '30px',
        zIndex: 99,
        transition: '0.5s'
      }}
    >
      <i className="fa fa-arrow-up"></i>
    </button>
  )
}

export default BackToTop
