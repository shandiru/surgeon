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
  const pink = '#FFC5D3'

  return (
    <section id="symptoms" className="py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Title and Intro */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaExclamationTriangle className="h-8 w-8" style={{ color: pink }} />
            <h3 className="text-3xl font-bold text-gray-900">Symptoms of Ovarian Cancer</h3>
          </div>
          <p className="text-gray-700 text-lg">
            Ovarian cancer can cause a variety of symptoms. Some of the most common include:
          </p>
        </div>

        {/* Symptoms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 flex flex-col rounded-xl border shadow-sm"
              style={{ borderColor: pink }}
            >
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: pink }} />
                  <p className="font-medium">{symptom}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alert Note */}
        <div
          className="rounded-xl px-6 py-5 shadow-sm"
          style={{ border: `1px solid ${pink}`, backgroundColor: pink }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-6 h-6 text-white rounded-full flex items-center justify-center mt-0.5"
              style={{ backgroundColor: '#fff', color: pink, border: `1px solid ${pink}` }}
            >
              <span className="text-sm font-bold">!</span>
            </div>
            <p className="text-white font-medium">
              If you experience these symptoms, it's important to see your GP for further tests.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
