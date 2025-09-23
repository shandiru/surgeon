'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'  // Import AOS styles
import { FiPhone } from 'react-icons/fi'

export default function MedicalAdviceSection() {
  const pink = '#FFC5D3'
  const pinkHover = '#e6b0c0' // slightly darker for hover

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    })
  }, [])

  return (
    <section
      className="bg-[#FFE6EA]"
      
    >
      <div className="text-center rounded-lg max-w-5xl mx-auto px-4 py-12 md:px-6 lg:px-8 shadow-sm bg-[#FFE6EA]" data-aos="fade-up">
      <h4 className="text-2xl font-bold text-gray-900 mb-4">Need Medical Advice?</h4>
      <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
        This information is for educational purposes only. Always consult with qualified healthcare
        professionals for personalized medical advice and treatment options.
      </p>
      <button
        className="inline-flex items-center justify-center gap-2 text-white font-medium text-sm px-6 py-2 rounded-md transition-all"
        style={{
          backgroundColor: pink,
        }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = pinkHover)}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = pink)}
      >
        <FiPhone className="w-4 h-4" />
        Contact Your Healthcare Provider
      </button>
      </div>
    </section>
  )
}
