import React from 'react'
import { technologies } from '../data/clinicData'

function TechnologyGrid() {
  return (
    <section className="section technology" id="technology">
      <div className="section-heading">
        <p className="eyebrow">Technology</p>
        <h2>Modern tools for precise, comfortable treatment.</h2>
      </div>
      <div className="technology-grid">
        {technologies.map((item) => (
          <article key={item.label}>
            <img src={item.image} alt={item.label} />
            <h3>{item.label}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechnologyGrid
