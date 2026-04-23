import React from 'react'
import { siteInfo, locations } from '../data/clinicData'

function SocialIcon({ name }) {
  const paths = {
    instagram:
      'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.2A4.8 4.8 0 1 0 17.8 12 4.8 4.8 0 0 0 12 7.2Zm6.2-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1ZM12 9.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2Z',
    youtube:
      'M21.6 8.2a2.5 2.5 0 0 0-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26.6 26.6 0 0 0 2 12a26.6 26.6 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26.6 26.6 0 0 0 22 12a26.6 26.6 0 0 0-.4-3.8ZM10 14.2V9.8l4 2.2-4 2.2Z',
    twitter:
      'M22 6.1c-.8.4-1.6.6-2.5.7a4.3 4.3 0 0 0 1.9-2.4 8.6 8.6 0 0 1-2.7 1A4.3 4.3 0 0 0 11.4 8a12.2 12.2 0 0 1-8.8-4.5 4.3 4.3 0 0 0 1.3 5.7 4.2 4.2 0 0 1-2-.6v.1a4.3 4.3 0 0 0 3.4 4.2 4.3 4.3 0 0 1-1.9.1 4.3 4.3 0 0 0 4 3 8.7 8.7 0 0 1-5.4 1.9A8.8 8.8 0 0 1 2 17.4a12.3 12.3 0 0 0 6.7 2',
    facebook:
      'M14.5 8.3H16V6h-1.8c-2.3 0-3.8 1.4-3.8 3.8v1.8H8.8V14h1.6v6h2.4v-6h2l.5-2.4h-2.5V10c0-.9.4-1.7 1.7-1.7Z',
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}

function Footer() {
  const mapQuery = encodeURIComponent(locations[0].text)

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <section className="footer-brand">
            <p className="eyebrow">Aryan Clinic</p>
            <h2>Hair, skin, dental, and aesthetic care.</h2>
            <p>
              A modern multi-speciality clinic focused on clear consultation, thoughtful treatment
              planning, and patient-first care.
            </p>
            <p className="footer-copyright">Copyright 2026 Aryan Clinic</p>
          </section>

          <section className="footer-block">
            <h3>Contact</h3>
            <a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>
            <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
            <span>{locations[0].text}</span>
          </section>

          <section className="footer-block">
            <h3>Quick Links</h3>
            <a href="#treatments">Treatments</a>
            <a href="#technology">Technology</a>
            <a href="#doctors">Doctors</a>
            <a href="#reviews">Reviews</a>
          </section>

          <section className="footer-block">
            <h3>Follow</h3>
            <a href="#" aria-label="Instagram link placeholder">
              <SocialIcon name="instagram" />
              <span>Instagram</span>
            </a>
            <a href="#" aria-label="YouTube link placeholder">
              <SocialIcon name="youtube" />
              <span>YouTube</span>
            </a>
            <a href="#" aria-label="Twitter link placeholder">
              <SocialIcon name="twitter" />
              <span>Twitter</span>
            </a>
            <a href="#" aria-label="Facebook link placeholder">
              <SocialIcon name="facebook" />
              <span>Facebook</span>
            </a>
          </section>
        </div>

        <div className="footer-bottom">
          <div className="footer-map">
            <iframe
              title="Aryan Clinic location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="footer-meta">
            <h3>Visit Us</h3>
            <p>{locations[0].text}</p>
            <p>{locations[1].text}</p>
            <a href={`https://wa.me/${siteInfo.phone.replace('+', '')}`}>WhatsApp now</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
