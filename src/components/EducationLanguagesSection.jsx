'use client'

import React from 'react'

export default function EducationLanguagesSection() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education & Qualifications */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Education & Qualifications</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#c3eefa]">
                <h3 className="text-lg font-semibold text-gray-900">MD, Biological Sciences</h3>
                <p className="text-[#5a9bb8] font-medium">Lancaster University</p>
                <p className="text-gray-500 text-sm">2010 - 2012</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#c3eefa]">
                <h3 className="text-lg font-semibold text-gray-900">MRCOG</h3>
                <p className="text-[#5a9bb8] font-medium">Royal College of Obstetricians and Gynaecologists</p>
                <p className="text-gray-500 text-sm">2006 - 2015</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#c3eefa]">
                <h3 className="text-lg font-semibold text-gray-900">MD</h3>
                <p className="text-[#5a9bb8] font-medium">The Maharaja Sayjirao University of Baroda, India</p>
                <p className="text-gray-500 text-sm">1999 - 2002</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#c3eefa]">
                <h3 className="text-lg font-semibold text-gray-900">MBBS</h3>
                <p className="text-[#5a9bb8] font-medium">The Maharaja Sayjirao University of Baroda, India</p>
                <p className="text-gray-500 text-sm">1993 - 1999</p>
              </div>
            </div>
          </div>

          {/* Languages Spoken */}
          <div className="bg-white text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-8">
            <div className="grid auto-rows-min items-start gap-1.5 px-6 text-center pb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#5a9bb8] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <div className="font-semibold text-2xl">Languages Spoken</div>
            </div>
            <div className="px-6 text-center">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap text-lg px-6 py-2 mr-4">
                  English
                </span>
                <span className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap text-lg px-6 py-2">
                  Hindi
                </span>
              </div>
              <p className="text-gray-600 mt-6">
                Fluent communication in multiple languages to better serve diverse patient populations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
