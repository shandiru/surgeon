'use client'

import React from 'react'
import { FaHeart } from 'react-icons/fa'

const treatments = [
  {
    title: 'Surgery + Chemotherapy',
    description: 'Often used together as first-line treatment',
  },
  {
    title: 'Targeted Therapies',
    description: 'PARP inhibitors, Angiogenesis inhibitors, MEK inhibitors',
  },
  {
    title: 'Intraperitoneal Chemotherapy',
    description: 'Delivering chemotherapy directly into the abdominal cavity',
  },
  {
    title: 'Radiation Therapy',
    description: 'Especially for isolated recurrences in the pelvic area',
  },
  {
    title: 'Clinical Trials',
    description: 'Access to new and emerging treatments',
  },
  {
    title: 'Complementary Therapies',
    description: 'Supportive care to improve wellbeing',
  },
]

export default function OvarianCancerTreatment() {
  return (
    <section id="treatment" className="py-12 px-4 md:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaHeart className="h-8 w-8 text-red-500" />
          <h3 className="text-3xl font-bold text-gray-900">Treatment of Ovarian Cancer</h3>
        </div>
        <p className="text-gray-600 text-lg">
          Treatment depends on the type of ovarian cancer, your overall health, and fertility considerations.
        </p>
        <p className="text-gray-800 font-semibold text-lg mt-4">
          The main goal is to remove the cancer whenever possible.
        </p>
      </div>

      {/* Treatments Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h4 className="text-teal-700 font-semibold text-lg mb-2">{item.title}</h4>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
