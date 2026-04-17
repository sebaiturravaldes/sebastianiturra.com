import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>© {year} Nunca es tarde <span className="heart">❤</span></p>
    </footer>
  )
} 
