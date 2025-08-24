'use client'

import React from 'react'
import { FaPhone } from 'react-icons/fa'

export default function MedicalAdviceSection() {
  return (
    <section className="text-center bg-gray-50 rounded-lg px-4 py-12 md:px-6 lg:px-8">
      <h4 className="text-2xl font-bold text-gray-900 mb-4">Need Medical Advice?</h4>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        This information is for educational purposes only. Always consult with qualified healthcare
        professionals for personalized medical advice and treatment options.
      </p>
      <button className="inline-flex items-center justify-center gap-2 text-white bg-orange-500 hover:bg-orange-600 font-medium text-sm px-6 py-2 rounded-md transition-all">
        <FaPhone className="w-4 h-4" />
        Contact Your Healthcare Provider
      </button>
    </section>
  )
}
