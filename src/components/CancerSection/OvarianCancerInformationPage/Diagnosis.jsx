'use client'

import React from 'react'
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
  return (
    <section id="diagnosis" className="py-12 px-4 md:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaStethoscope className="h-8 w-8 text-teal-600" />
          <h3 className="text-3xl font-bold text-gray-900">Diagnosis of Ovarian Cancer</h3>
        </div>
        <p className="text-gray-600 text-lg">
          Several tests and scans can help identify ovarian cancer, including:
        </p>
      </div>

      {/* Diagnostic Tests */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {tests.map((test) => (
          <div
            key={test.id}
            className="bg-white text-gray-800 flex flex-col gap-4 rounded-xl border py-6 shadow-sm"
          >
            <div className="px-6">
              <div className="flex items-center gap-2 font-semibold text-teal-600">
                <span className="w-8 h-8 flex items-center justify-center rounded-full border text-sm text-gray-800">
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
      <div className="rounded-xl border border-teal-600 bg-teal-50 px-6 py-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center mt-0.5">
            <span className="text-sm font-bold">→</span>
          </div>
          <p className="text-gray-800 font-medium">
            If ovarian cancer is suspected, these tests also help determine how far the cancer has spread.
          </p>
        </div>
      </div>
    </section>
  )
}
