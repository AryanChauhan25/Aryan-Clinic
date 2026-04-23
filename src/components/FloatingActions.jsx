import React from 'react'
import { siteInfo } from '../data/clinicData'

function FloatingActions({ onEmail, onBook }) {
  return (
    <>
      <div className="floating-actions" aria-label="Quick contact actions">
        <a className="float-whatsapp" href={siteInfo.whatsapp}>
          WhatsApp
        </a>
        <button className="float-email" type="button" onClick={onEmail}>
          Email
        </button>
      </div>
      <button className="sticky-quote" type="button" onClick={onBook}>
        Book An Appointment
      </button>
    </>
  )
}

export default FloatingActions
