'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
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
  const deepPink = '#b03b66'

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section id="symptoms" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Title and Intro */}
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaExclamationTriangle className="h-8 w-8" style={{ color: pink }} />
            <h3 className="text-3xl font-bold text-[#b03b66]">Symptoms of Ovarian Cancer</h3>
          </div>
          <p className="text-[#7a2f4f] text-lg">
            Ovarian cancer can cause a variety of symptoms. Some of the most common include:
          </p>
        </div>

        {/* Symptoms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="bg-white text-[#b03b66] rounded-xl p-5 shadow-md cursor-pointer 
                         transition duration-300 ease-in-out 
                         hover:shadow-xl hover:-translate-y-2 active:scale-[0.98]"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: pink }} />
                <p className="font-medium">{symptom}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Alert Note */}
        <div
          className="rounded-xl px-6 py-5 shadow-md bg-[#FFC5D3] text-white"
          data-aos="fade-up"
        >
          <div className="flex items-start gap-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 font-bold"
              style={{ backgroundColor: '#fff', color: deepPink }}
            >
              !
            </div>
            <p className="font-medium">
              If you experience these symptoms, it&apos;s important to see your GP for further tests.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
