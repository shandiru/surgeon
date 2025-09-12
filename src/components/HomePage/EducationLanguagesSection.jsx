'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function EducationLanguagesSection() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.edu-card', { opacity: 1 })
      gsap.set('.lang-card', { opacity: 1 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: 'power3.out', duration: 0.8 },
      })

      tl.from('.section-title', { y: 40, opacity: 0 })
        .from('.edu-card', { y: 50, opacity: 0, stagger: 0.2 }, '-=0.3')
        .from('.lang-card', { scale: 0.9, opacity: 0, y: 30 }, '-=0.2')
    }, root)

    return () => ctx.revert()
  }, [])

  const education = [
    {
      title: 'MD, Biological Sciences',
      place: 'Lancaster University',
      years: '2010 - 2012',
    },
    {
      title: 'MRCOG',
      place: 'Royal College of Obstetricians and Gynaecologists',
      years: '2006 - 2015',
    },
    {
      title: 'MD',
      place: 'The Maharaja Sayjirao University of Baroda, India',
      years: '1999 - 2002',
    },
    {
      title: 'MBBS',
      place: 'The Maharaja Sayjirao University of Baroda, India',
      years: '1993 - 1999',
    },
  ]

  return (
    <section ref={root} id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Education & Qualifications */}
          <div className="flex flex-col">
            <h2 className="section-title text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              Education & Qualifications
            </h2>

            <div className="space-y-6 flex-1">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="edu-card opacity-100 bg-white p-6 rounded-lg shadow-sm text-center lg:text-left transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,197,211,0.9)] hover:scale-[1.02]"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-[#ff97b3] font-medium">{item.place}</p>
                  <p className="text-gray-500 text-sm">{item.years}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Spoken */}
          <div className="lang-card opacity-100 bg-white rounded-xl shadow-sm p-8 flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_30px_2px_rgba(255,197,211,0.8)]">
            <div className="text-center pb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#ff97b3] mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <div className="font-semibold text-2xl text-gray-900">
                Languages Spoken
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex flex-wrap justify-center gap-4">
                {['English', 'Hindi'].map((lang, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center justify-center rounded-md font-medium text-lg px-6 py-2 transition-all duration-300 hover:text-[#ff97b3] hover:shadow-[0_0_15px_1px_rgba(255,197,211,0.8)] hover:scale-105"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 mt-6 text-center">
                Fluent communication in multiple languages to better serve
                diverse patient populations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
