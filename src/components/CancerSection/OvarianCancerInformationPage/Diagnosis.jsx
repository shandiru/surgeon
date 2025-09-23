'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'  // Import AOS styles
import { FaStethoscope } from 'react-icons/fa'

const tests = [
  {
    id: 1,
    title: 'CT scan',
    description: 'Produces detailed images of the ovaries and shows abnormalities',
  },
  {
    id: 2,
    title: 'X-ray',
    description: 'Checks if cancer has spread to other areas of the body',
  },
  {
    id: 3,
    title: 'Biopsy',
    description: 'Tissue or cells are examined for cancer',
  },
  {
    id: 4,
    title: 'Laparoscopy',
    description:
      'A small camera is inserted into the abdomen to directly examine the ovaries',
  },
]

export default function OvarianCancerDiagnosis() {
  const pink = '#FFC5D3'

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    })
  }, [])

  return (
    <section id="diagnosis" className="py-12 bg-[#FFE6EA]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-8" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaStethoscope className="h-8 w-8" />
            <h3 className="text-3xl font-bold text-gray-900">Diagnosis of Ovarian Cancer</h3>
          </div>
          <p className="text-gray-700 text-lg">
            Several tests and scans can help identify ovarian cancer, including:
          </p>
        </div>

        {/* Diagnostic Tests */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white text-gray-800 flex flex-col gap-4 rounded-xl border py-6 shadow-sm transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd]"
              style={{ borderColor: pink }}
              data-aos="fade-up" // Animation for each test
            >
              <div className="px-6">
                <div className="flex items-center gap-2 font-semibold" style={{ color: pink }}>
                  <span
                    className="w-8 h-8 flex items-center justify-center rounded-full border text-sm text-gray-800"
                    style={{ borderColor: pink }}
                  >
                    {test.id}
                  </span>
                  {test.title}
                </div>
              </div>
              <div className="px-6">
                <p className="text-gray-600">{test.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div
          className="rounded-xl px-6 py-6 shadow-sm"
          style={{ border: `1px solid ${pink}`, backgroundColor: pink }}
          data-aos="fade-up" // Animation for summary box
        >
          <div className="flex items-start gap-3">
            <div
              className="w-6 h-6 text-white rounded-full flex items-center justify-center mt-0.5"
              style={{ backgroundColor: '#fff', color: pink, border: `1px solid ${pink}` }}
            >
              <span className="text-sm font-bold">→</span>
            </div>
            <p className="text-white font-medium">
              If ovarian cancer is suspected, these tests also help determine how far the cancer has spread.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
