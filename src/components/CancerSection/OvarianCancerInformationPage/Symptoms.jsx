'use client'

import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const symptoms = [
  'Persistent bloating',
  'Swollen tummy',
  'Pelvic or abdominal pain/discomfort',
  'Loss of appetite or feeling full after eating small amounts',
  'Frequent or urgent need to urinate',
  'Indigestion or nausea',
  'Changes in bowel habits',
  'Pain during sexual intercourse',
  'Back pain',
  'Extreme tiredness',
  'Unexplained weight loss',
]

export default function OvarianCancerSymptoms() {
  return (
    <section id="symptoms" className="py-12 px-4 md:px-6 lg:px-8">
      {/* Title and Intro */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaExclamationTriangle className="h-8 w-8 text-red-500" />
          <h3 className="text-3xl font-bold text-gray-900">Symptoms of Ovarian Cancer</h3>
        </div>
        <p className="text-gray-600 text-lg">
          Ovarian cancer can cause a variety of symptoms. Some of the most common include:
        </p>
      </div>

      {/* Symptoms Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {symptoms.map((symptom, index) => (
          <div
            key={index}
            className="bg-gray-50 text-gray-900 flex flex-col rounded-xl border shadow-sm border-teal-600"
          >
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" />
                <p className="font-medium">{symptom}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alert Note */}
      <div className="rounded-xl border border-red-400 bg-red-50 px-6 py-5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center mt-0.5">
            <span className="text-sm font-bold">!</span>
          </div>
          <p className="text-gray-800 font-medium">
            If you experience these symptoms, it's important to see your GP for further tests.
          </p>
        </div>
      </div>
    </section>
  )
}
