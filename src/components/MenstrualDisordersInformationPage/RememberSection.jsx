'use client';
import React from 'react';

export default function RememberSection() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="text-center bg-gradient-to-r from-[#FEE6EA] to-[#fff5f9] rounded-2xl p-10 shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-3xl font-bold mb-4 text-[#FF4B8B]">
          Remember: You Don't Have to Suffer in Silence
        </h2>

        <p className="text-lg text-[#5C2A3B] mb-8 max-w-2xl mx-auto leading-relaxed">
          Menstrual disorders are common and treatable. Getting assessed early can
          relieve symptoms and protect your fertility. We're here to support you and
          help you find the right treatment.
        </p>

        <button
          className="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-lg font-semibold text-base text-white bg-[#FF4B8B] hover:bg-[#e93a7d] transition-all shadow-md hover:shadow-xl"
        >
          Book an Appointment
        </button>
      </div>
    </section>
  );
}
