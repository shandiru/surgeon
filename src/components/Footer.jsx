'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#FF94B8] text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-3 gap-8 text-sm md:text-base">
          
          {/* Left Column */}
          <div>
            <h2 className="text-lg font-bold mb-3">Mr Ketankumar Gajjar</h2>
            <p className="text-white/90">
              Consultant Gynaecological Oncologist with 26 years of experience providing exceptional care in women's health and cancer treatment.
            </p>

            {/* Contact Icons */}
            <div className="flex gap-3 mt-4">
              {/* Email */}
              <a 
                href="mailto:info@example.com" 
                className="bg-white p-2 rounded-md hover:bg-pink-50 transition"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#b0184d]"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" stroke="none" />
                  <path d="M4 4l8 8 8-8M4 20h16V4H4v16z" />
                </svg>
              </a>

              {/* Phone */}
              <a 
                href="tel:+441234567890" 
                className="bg-white p-2 rounded-md hover:bg-pink-50 transition"
                aria-label="Phone"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-[#b0184d]" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                    19.79 19.79 0 0 1-8.63-3.07
                    19.5 19.5 0 0 1-6-6 
                    19.79 19.79 0 0 1-3.07-8.63 
                    2 2 0 0 1 2-2.18h3
                    a2 2 0 0 1 2 1.72c.17.95.45 1.87.7 2.81
                    a2 2 0 0 1-.45 2.11L8.09 9.91
                    a16 16 0 0 0 6 6l1.27-1.27
                    a2 2 0 0 1 2.11-.45c.94.25 1.86.53 2.81.7
                    A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>

              {/* Location */}
              <a 
                href="https://www.google.com/maps?q=Nottingham+University+Hospital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-md hover:bg-pink-50 transition"
                aria-label="Location"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-[#b0184d]" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-6-5.373-6-10
                           a6 6 0 1 1 12 0
                           c0 4.627-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h2 className="text-lg font-bold mb-3">Quick Links</h2>
            <ul className="text-white/90 space-y-1">
              {["About","Experience","Specialties","Education","Contact"].map((link,i)=>(
                <li key={i}>
                  <a href={`#${link.toLowerCase()}`} className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-lg font-bold mb-3">Locations</h2>
            <ul className="text-white/90 space-y-1">
              <li>Nottingham University Hospital</li>
              <li>Park Hospital</li>
              <li>Spire Nottingham Hospital</li>
              <li className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-white" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-6-5.373-6-10
                           a6 6 0 1 1 12 0
                           c0 4.627-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                Nottingham, UK
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/40 mt-10 pt-6 text-center text-sm text-white/80">
          <p>© 2025 Mr Ketankumar Gajjar – Consultant Gynaecological Oncologist. All rights reserved.</p>
          <p className="mt-1">Professional medical services | GMC Registered</p>
          <p className="mt-3 text-white/70">
            Powered by{" "}
            <a 
              href="https://www.ansely.co.uk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Anlsey
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
