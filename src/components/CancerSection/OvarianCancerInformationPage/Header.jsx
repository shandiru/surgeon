'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'  // Import AOS styles

export default function OvarianCancerHeader() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    })
  }, [])

  return (
    <section className="py-12 bg-[#FFE6EA]">
      <div className="container text-center md:text-left flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div 
          className="text-center md:text-left md:mr-25 mb-8 md:mb-0 max-w-2xl mx-auto" 
          data-aos="fade-up" // Apply fade-up animation
        >
          <h2 className="text-4xl font-bold mb-4 text-[#b03b66]">
            Ovarian Cancer Information
          </h2>
          <p className="text-xl max-w-3xl mx-auto md:mx-0 leading-relaxed text-[#b03b66]/90">
            Understanding the symptoms, diagnosis, and treatment options for ovarian cancer.
            Early detection and proper medical care are crucial for the best outcomes.
          </p>
        </div>

        {/* Image Section */}
        <div 
          className="flex justify-center" 
          data-aos="fade-left" // Apply fade-left animation
        >
          <img
            src="/Ovarian.png" // Replace with the actual image URL
            alt="Ovarian Cancer Awareness"
            className="rounded-md shadow-lg"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }} // Make sure the image is responsive
          />
        </div>
      </div>
    </section>
  )
}
