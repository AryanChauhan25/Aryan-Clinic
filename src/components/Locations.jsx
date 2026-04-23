import React from 'react'
import { locations, siteInfo } from '../data/clinicData'

function Locations({ onBook }) {
  const displayPhone = siteInfo.phone.startsWith('+91')
    ? `+91 ${siteInfo.phone.slice(3)}`
    : siteInfo.phone

  return (
    <section className="locations" id="locations">
      <div>
        <p className="eyebrow">Clinic Locations</p>
        <h2>Visit Aryan Clinic in Delhi.</h2>
        <p>
          Add your real Aryan Clinic branches here when you are ready. This section supports
          multiple branches and quick contact actions like the reference website.
        </p>
      </div>
      <article>
        <h3>{locations[0].title}</h3>
        <p>{locations[0].text}</p>
        <a href={siteInfo.whatsapp}>WhatsApp</a>
        <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
      </article>
      <article>
        <h3>{locations[1].title}</h3>
        <p>{locations[1].text}</p>
        <a href={`tel:${siteInfo.phone}`}>{displayPhone}</a>
        <button type="button" onClick={onBook}>
          Book appointment
        </button>
      </article>
    </section>
  )
}

export default Locations
