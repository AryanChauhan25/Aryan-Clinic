import React from 'react'

function StatsStrip({ highlights }) {
  return (
    <section className="stats-strip">
      {highlights.map(([value, label]) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  )
}

export default StatsStrip
