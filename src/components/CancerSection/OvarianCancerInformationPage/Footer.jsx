'use client'

import React from 'react'

const Footer = () => {
  const pink = '#FFC5D3'
  const deepPink = '#b03b66'

  return (
    <footer className="bg-white border-t" style={{ borderColor: pink }}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="mb-2 text-gray-700">
            This information is provided for educational purposes only.
          </p>
          <p className="text-sm font-medium" style={{ color: deepPink }}>
            Always seek professional medical advice for health concerns.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
