import React from 'react'

const Spinner = ({ show }) => {
  if (!show) return null

  return (
    <div className="spinner-container show bg-white">
      <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner
