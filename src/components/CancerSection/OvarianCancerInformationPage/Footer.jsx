'use client'

import React from 'react'

const Footer = () => {
  const pink = '#FFC5D3'

  return (
    <footer style={{ backgroundColor: pink }} className="mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-white">
          <p className="mb-2">
            This information is provided for educational purposes only.
          </p>
          <p className="text-sm">
            Always seek professional medical advice for health concerns.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
