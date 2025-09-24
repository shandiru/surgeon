'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FiPhone } from 'react-icons/fi'

export default function MedicalAdviceSection() {
  const pink = '#FFC5D3'
  const deepPink = '#b03b66'

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-16 bg-white">
      <div
        className="text-center rounded-2xl max-w-4xl mx-auto px-6 py-12 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        data-aos="fade-up"
        style={{ border: `1px solid ${pink}` }}
      >
        {/* Title */}
        <h4 className="text-2xl font-bold mb-4" style={{ color: deepPink }}>
          Need Medical Advice?
        </h4>

        {/* Paragraph */}
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          This information is for educational purposes only. Always consult with
          qualified healthcare professionals for personalized medical advice
          and treatment options.
        </p>

        {/* CTA Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
          style={{ backgroundColor: pink , color: deepPink}}
        >
          <FiPhone className="w-5 h-5" />
          Contact Your Healthcare Provider
        </button>
      </div>
    </section>
  )
}
