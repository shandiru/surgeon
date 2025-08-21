'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0c1221] text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-3 gap-8 text-sm md:text-base">
          
          {/* Left Column: Name & Description */}
          <div>
            <h2 className="text-lg font-bold mb-3">Mr Ketankumar Gajjar</h2>
            <p className="text-gray-300">
              Consultant Gynaecological Oncologist with 26 years of experience providing exceptional care in women's health and cancer treatment.
            </p>
            <div className="flex gap-3 mt-4">
              
              {/* Email */}
              <a 
                href="mailto:info@example.com" 
                className="bg-[#1d2539] p-2 rounded-md hover:bg-[#2a3350] transition"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-white" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" stroke="none" />
                  <path d="M4 4l8 8 8-8" />
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke="currentColor" />
                </svg>
              </a>

              {/* Phone */}
              <a 
                href="tel:+441234567890" 
                className="bg-[#1d2539] p-2 rounded-md hover:bg-[#2a3350] transition"
                aria-label="Call"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-white" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.08 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.17.95.45 1.87.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.94.25 1.86.53 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>

              {/* Location */}
              <a 
                href="https://www.google.com/maps?q=Nottingham+University+Hospital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1d2539] p-2 rounded-md hover:bg-[#2a3350] transition"
                aria-label="Location"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-white" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-6-5.373-6-10a6 6 0 1 1 12 0c0 4.627-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-3">Quick Links</h2>
            <ul className="text-gray-300 space-y-1">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#specialties" className="hover:underline">Specialties</a></li>
              <li><a href="#education" className="hover:underline">Education</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Right Column: Locations */}
          <div>
            <h2 className="text-lg font-bold mb-3">Locations</h2>
            <ul className="text-gray-300 space-y-1">
              <li>Nottingham University Hospital</li>
              <li>Park Hospital</li>
              <li>Spire Nottingham Hospital</li>
              <li className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-white" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-6-5.373-6-10a6 6 0 1 1 12 0c0 4.627-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                Nottingham, UK
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>© 2024 Mr Ketankumar Gajjar – Consultant Gynaecological Oncologist. All rights reserved.</p>
          <p className="mt-1">Professional medical services | GMC Registered</p>
        </div>
      </div>
    </footer>
  )
}
