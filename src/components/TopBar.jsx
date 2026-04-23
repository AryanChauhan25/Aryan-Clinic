import React from 'react'

function TopBar({ phone, onOpenEmail }) {
  const displayPhone = phone.startsWith('+91') ? `+91 ${phone.slice(3)}` : phone

  return (
    <div className="top-strip">
      <span>Free e-consultation available</span>
      <a href={`tel:${phone}`}>Call {displayPhone}</a>
      <button type="button" onClick={onOpenEmail}>
        Get a quote
      </button>
    </div>
  )
}

export default TopBar
