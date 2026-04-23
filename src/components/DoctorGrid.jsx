import React from 'react'
import { doctors } from '../data/clinicData'

function DoctorGrid() {
  return (
    <section className="section doctors" id="doctors">
      <div className="section-heading">
        <p className="eyebrow">Team</p>
        <h2>Specialists across hair, skin, dental, and cosmetic care.</h2>
      </div>
      <div className="doctor-grid">
        {doctors.map(([name, specialty]) => (
          <article className="doctor-card" key={name}>
            <div>{name.split(' ')[1][0]}</div>
            <h3>{name}</h3>
            <p>{specialty}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default DoctorGrid
