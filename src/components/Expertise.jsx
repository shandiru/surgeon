'use client'

import React from 'react'

export default function SpecialtiesSection() {
  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
          <p className="text-xl text-gray-600">
            Specialized procedures and treatments in women's health
          </p>
        </div>

        {/* Primary Specialty Badge */}
        <div className="bg-[#c3eefa]/10 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
       <span
  data-slot="badge"
  className="
    inline-flex items-center justify-center
    mx-auto rounded-md font-medium
    bg-[#c3eefa] text-gray-900
    px-4 py-2
    text-sm sm:text-base
    max-w-full text-center
    whitespace-normal break-words leading-snug
  "
>
  Primary Specialty: Obstetrics &amp; Gynaecology
</span>

      </div>



          {/* Specialties Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Card 1 */}
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round" 
                  className="lucide lucide-stethoscope h-8 w-8 text-[#5a9bb8]">
                  <path d="M11 2v2"></path>
                  <path d="M5 2v2"></path>
                  <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                  <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                  <circle cx="20" cy="10" r="2"></circle>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Laparoscopic Hysterectomy</h3>
              <p className="text-gray-600 text-xs">Minimally invasive surgical removal of the uterus</p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round" 
                  className="lucide lucide-users h-8 w-8 text-[#5a9bb8]">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Fibroids</h3>
              <p className="text-gray-600 text-xs">Treatment of uterine fibroids and related symptoms</p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round" 
                  className="lucide lucide-award h-8 w-8 text-[#5a9bb8]">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Ovarian Cyst</h3>
              <p className="text-gray-600 text-xs">Diagnosis and treatment of ovarian cysts</p>
            </div>

            {/* Card 4 */}
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round" 
                  className="lucide lucide-stethoscope h-8 w-8 text-[#5a9bb8]">
                  <path d="M11 2v2"></path>
                  <path d="M5 2v2"></path>
                  <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                  <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                  <circle cx="20" cy="10" r="2"></circle>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Ovarian Cancer</h3>
              <p className="text-gray-600 text-xs">Specialized oncological care and treatment</p>
            </div>

            {/* Card 5 */}
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round" 
                  className="lucide lucide-users h-8 w-8 text-[#5a9bb8]">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Colposcopy</h3>
              <p className="text-gray-600 text-xs">Cervical screening and diagnostic procedures</p>
            </div>

            {/* Card 6 */}
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round" 
                  className="lucide lucide-award h-8 w-8 text-[#5a9bb8]">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Endometrial Cancer</h3>
              <p className="text-gray-600 text-xs">Comprehensive treatment of uterine cancer</p>
            </div>
          </div>
        </div>

        {/* Surgical Expertise & Cancer Care */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6">
            <div className="font-semibold text-xl text-[#5a9bb8]">Surgical Expertise</div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round" 
                    className="lucide lucide-circle-check-big h-5 w-5 text-[#5a9bb8] mt-0.5">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Laparoscopic Hysterectomy</span>
                    <p className="text-sm text-gray-600">
                      Advanced minimally invasive techniques for faster recovery
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round" 
                    className="lucide lucide-circle-check-big h-5 w-5 text-[#5a9bb8] mt-0.5">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Fibroid Treatment</span>
                    <p className="text-sm text-gray-600">
                      Comprehensive management including surgical and non-surgical options
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round" 
                    className="lucide lucide-circle-check-big h-5 w-5 text-[#5a9bb8] mt-0.5">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Ovarian Procedures</span>
                    <p className="text-sm text-gray-600">
                      Expert treatment of ovarian cysts and related conditions
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6">
            <div className="font-semibold text-xl text-[#5a9bb8]">Cancer Care</div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round" 
                    className="lucide lucide-circle-check-big h-5 w-5 text-[#5a9bb8] mt-0.5">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Ovarian Cancer</span>
                    <p className="text-sm text-gray-600">
                      Specialized oncological treatment and multidisciplinary care
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round" 
                    className="lucide lucide-circle-check-big h-5 w-5 text-[#5a9bb8] mt-0.5">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Endometrial Cancer</span>
                    <p className="text-sm text-gray-600">
                      Comprehensive diagnosis and treatment of uterine cancers
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round" 
                    className="lucide lucide-circle-check-big h-5 w-5 text-[#5a9bb8] mt-0.5">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <div>
                    <span className="font-semibold">Colposcopy</span>
                    <p className="text-sm text-gray-600">
                      Advanced cervical screening and early detection procedures
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
