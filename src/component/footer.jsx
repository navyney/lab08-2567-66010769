import React from 'react'

export default function Footer({year, name, id}) {
  return (
    <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © {year} {name} {id}
        </p>
      </div>
  )
}
