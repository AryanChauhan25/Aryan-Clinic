import React from 'react'
import { siteInfo } from '../data/clinicData'
import { doctorImage } from '../assets'

function Hero({ onBook, onQuote }) {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Hair, skin, dental, and cosmetic care in Delhi</p>
        <h1>Complete aesthetic and clinical care under one roof.</h1>
        <p>
          Aryan Clinic brings together hair restoration, dermatology, dental care,
          laser procedures, and cosmetic treatments with personalized doctor-led plans.
        </p>
        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={onBook}>
            Book an appointment
          </button>
          <a className="secondary-button" href={siteInfo.whatsapp}>
            WhatsApp now
          </a>
        </div>
        <div className="hero-badges">
          <span>Doctor-led treatment plans</span>
          <span>Multi-speciality clinic care</span>
          <span>Transparent estimates</span>
        </div>
        <div className="hero-secondary-cta">
          <button type="button" onClick={onQuote}>
            Request treatment quote
          </button>
        </div>
      </div>
      <div className="hero-media" aria-label="Clinic consultation preview">
        <div className="smile-card">
          <span>Treatment Plan</span>
          <strong>30 min</strong>
          <small>Doctor consultation</small>
        </div>
        <div className="portrait-card">
          <img src={doctorImage} alt="Aryan Clinic doctors" />
        </div>
      </div>
    </section>
  )
}

export default Hero
