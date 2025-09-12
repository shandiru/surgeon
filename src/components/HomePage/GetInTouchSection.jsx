'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouchSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(['.contact-heading', '.contact-subtext', '.contact-card'], {
        opacity: 0,
        y: 40,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top 80%',
          once: true,
        },
        defaults: { duration: 0.8, ease: 'power3.out' },
      });

      tl.to('.contact-heading', { opacity: 1, y: 0 })
        .to('.contact-subtext', { opacity: 1, y: 0 }, '-=0.5')
        .to('.contact-card', { opacity: 1, y: 0, stagger: 0.2 }, '-=0.3');
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-20 bg-[#FFF0F4]" ref={root}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="contact-heading text-4xl font-bold text-[#FFC5D3] mb-4">
            Get in Touch
          </h2>
          <p className="contact-subtext text-xl text-gray-700">
            Schedule your consultation today
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="contact-card bg-white flex flex-col gap-6 rounded-xl shadow-sm p-6 text-center transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,197,211,0.5)] hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FFF0F4]">
              <svg className="h-8 w-8 text-[#FFC5D3]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Nottingham University Hospital</h3>
            <p className="text-gray-600 text-sm mb-4">NHS Trust Appointments</p>
            <button className="inline-flex items-center justify-center rounded-md border text-sm font-medium transition-all w-full px-4 py-2 bg-transparent text-[#FFC5D3] border-[#FFC5D3] hover:bg-[#FFE3EC]">
              NHS Referral Required
            </button>
          </div>

          {/* Card 2 */}
          <div className="contact-card bg-white flex flex-col gap-6 rounded-xl shadow-sm p-6 text-center transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,197,211,0.5)] hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FFF0F4]">
              <svg className="h-8 w-8 text-[#FFC5D3]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Park Hospital</h3>
            <p className="text-gray-600 text-sm mb-4">Private Consultations</p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all w-full px-4 py-2 bg-[#FFC5D3] hover:bg-[#f9b8cb] text-white">
              Book Private Appointment
            </button>
          </div>

          {/* Card 3 */}
          <div className="contact-card bg-white flex flex-col gap-6 rounded-xl shadow-sm p-6 text-center transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,197,211,0.5)] hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FFF0F4]">
              <svg className="h-8 w-8 text-[#FFC5D3]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Spire Nottingham Hospital</h3>
            <p className="text-gray-600 text-sm mb-4">Private Practice</p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all w-full px-4 py-2 bg-[#FFC5D3] hover:bg-[#f9b8cb] text-white">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
