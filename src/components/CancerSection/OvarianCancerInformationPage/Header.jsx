'use client'

import React from 'react'

export default function OvarianCancerHeader() {
  return (
    <section style={{ backgroundColor: '#FFC5D3' }} className="py-12">
      <div className="container mx-auto text-center md:text-left flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className='text-center md:text-left md:mr-12 mb-8 md:mb-0 max-w-2xl mx-auto'>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ovarian Cancer Information
          </h2>
          <p className="text-xl max-w-3xl mx-auto md:mx-0 leading-relaxed text-white/90">
            Understanding the symptoms, diagnosis, and treatment options for ovarian cancer.
            Early detection and proper medical care are crucial for the best outcomes.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/Ovarian.png" // Replace with the actual image URL
            alt="Ovarian Cancer Awareness"
            className="mx-auto rounded-md shadow-lg"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }} // Make sure the image is responsive
          />
        </div>
      </div>
    </section>
  )
}
