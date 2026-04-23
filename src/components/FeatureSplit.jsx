import React from 'react'
import { featureImage } from '../assets'

function FeatureSplit({ onQuote }) {
  return (
    <section className="feature-split">
      <img src={featureImage} alt="Modern clinic treatment room" />
      <div>
        <p className="eyebrow">Consultation first</p>
        <h2>Understand your options before you commit.</h2>
        <p>
          From hair fall and acne to dental care and cosmetic procedures, patients get a
          structured diagnosis, estimated timelines, and transparent next steps before treatment begins.
        </p>
        <button className="primary-button" type="button" onClick={onQuote}>
          Request treatment quote
        </button>
      </div>
    </section>
  )
}

export default FeatureSplit
