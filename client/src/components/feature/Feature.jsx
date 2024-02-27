import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className="nagadb__features-cointainer__feature">
      <div className="nagadb__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="nagadb__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature