import React from 'react'

function Header({ onBook }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Aryan Clinic home">
        <span>Aryan</span>
        <small>Clinic</small>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#treatments">Treatments</a>
        <a href="#technology">Technology</a>
        <a href="#doctors">Doctors</a>
        <a href="#reviews">Reviews</a>
        <a href="#locations">Locations</a>
      </nav>
      <button className="header-cta" type="button" onClick={onBook}>
        Book Visit
      </button>
    </header>
  )
}

export default Header
