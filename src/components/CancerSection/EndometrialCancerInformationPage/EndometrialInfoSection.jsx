'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'  
import { FiPhone } from 'react-icons/fi'

export default function EndometrialInfoSection() {
  const pink = '#FFC5D3'      // main pink
  const deepPink = '#b03b66'  // brand text color
  const pinkHover = '#f5a9bd' // hover shade
  const pinkActive = '#e191af' // active shade

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-12 bg-[#FFE6EA]" data-aos="fade-up">
      <div className="container px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Content Section */}
        <div className="flex-1 text-center md:text-left" data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-4" style={{ color: deepPink }}>
            Endometrial Cancer Information
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto md:mx-0 mb-8">
            Early detection and understanding are key to successful treatment. Learn about
            symptoms, diagnosis, and treatment options for endometrial cancer.
          </p>

          <button
            className="inline-flex items-center justify-center gap-2 text-base font-semibold px-6 py-3 rounded-md shadow-md 
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md"
            style={{
              backgroundColor: pink,
              color: '#ffffff',       // ✅ white text so it's always visible
              color: deepPink,
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = pinkHover)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = pink)}
            onMouseDown={(e) => (e.currentTarget.style.backgroundColor = pinkActive)}
            onMouseUp={(e) => (e.currentTarget.style.backgroundColor = pinkHover)}
          >
            <FiPhone className="h-5 w-5" />
            Speak with a Healthcare Provider
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-right">
          <img
            src="/Endometrial.png"
            alt="Endometrial Cancer Awareness"
            className="w-full max-w-md rounded-xl shadow-lg 
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
