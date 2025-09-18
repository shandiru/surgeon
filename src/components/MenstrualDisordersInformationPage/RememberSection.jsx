'use client';
import React from 'react';

export default function RememberSection() {
  return (
    <section className="text-center bg-[#FEE6EA] rounded-lg p-8 px-6 md:px-12">
      <h2 className="text-2xl font-bold mb-4 text-[#BB125B]">
        Remember: You Don't Have to Suffer in Silence
      </h2>
      <p className="text-lg text-[#BB125B] mb-6 max-w-2xl mx-auto leading-relaxed">
        Menstrual disorders are common and treatable. Getting assessed early can relieve symptoms and protect your fertility. We're here to support you and find the right treatment for you.
      </p>
      <button
        className="inline-flex items-center justify-center gap-2 px-6 h-10 rounded-md font-medium text-sm text-white bg-[#FF4B8B] hover:bg-[#e93a7d] transition-all shadow-sm"
      >
        Book an Appointment
      </button>
    </section>
  );
}
