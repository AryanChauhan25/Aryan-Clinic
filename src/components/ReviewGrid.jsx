import React from 'react'

function ReviewGrid({ testimonials }) {
  return (
    <section className="section reviews" id="reviews">
      <div className="section-heading">
        <p className="eyebrow">Testimonials</p>
        <h2>Patients remember clarity, comfort, and confidence.</h2>
      </div>
      <div className="review-grid">
        {testimonials.map((review) => (
          <article className="review-card" key={review.name}>
            <div className="stars">5.0 rating</div>
            <p>{review.text}</p>
            <strong>{review.name}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ReviewGrid
