import React from 'react'
import { treatmentGroups } from '../data/clinicData'

function TreatmentGrid({ onBook }) {
  return (
    <section className="section" id="treatments">
      <div className="section-heading">
        <p className="eyebrow">Treatments</p>
        <h2>Four focused specialities, one coordinated clinic experience.</h2>
      </div>
      <div className="mega-grid">
        {treatmentGroups.map((group) => (
          <article className="treatment-card" key={group.title}>
            <div className="treatment-image-wrap">
              <img src={group.image} alt={group.title} className="treatment-image" />
            </div>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button type="button" onClick={onBook}>
              Consult for {group.title}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TreatmentGrid
