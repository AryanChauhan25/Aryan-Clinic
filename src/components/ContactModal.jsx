import React from 'react'
import { siteInfo } from '../data/clinicData'

function ContactModal({ type, onClose }) {
  const isEmail = type === 'email'

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-panel">
        <button className="icon-button close-button" type="button" onClick={onClose} aria-label="Close">
          x
        </button>
        <p className="eyebrow">{isEmail ? 'Email Us' : 'Book Appointment'}</p>
        <h2 id="modal-title">{isEmail ? 'Send your treatment query' : 'Get a quick consultation'}</h2>
        <p>
          Share a few details and our clinic coordinator will help you with the right doctor,
          treatment estimate, and appointment slot.
        </p>
        <form className="modal-form">
          <input type="text" placeholder="Full name" />
          <input type="tel" placeholder="Phone number" />
          <input type="email" placeholder="Email address" />
          <select defaultValue="">
            <option value="" disabled>
              Select treatment
            </option>
            <option>Hair treatment</option>
            <option>Skin treatment</option>
            <option>Dental care</option>
            <option>Cosmetic treatment</option>
          </select>
          <textarea rows="4" placeholder="Tell us what you need help with" />
          <button type="submit">{isEmail ? 'Send enquiry' : 'Request appointment'}</button>
        </form>
        <a href={`mailto:${siteInfo.email}`} className="modal-email-link">
          {siteInfo.email}
        </a>
      </div>
    </div>
  )
}

export default ContactModal
