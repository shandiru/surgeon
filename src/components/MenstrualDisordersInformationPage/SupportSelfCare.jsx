'use client';
import React from 'react';
import { Users } from 'lucide-react'; // Make sure to have lucide-react installed

export default function SupportSelfCare() {
  return (
    <section className="mb-16 px-6 md:px-12">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <Users className="h-6 w-6 text-[#FF4B8B]" />
        <h2 className="text-2xl font-bold text-[#BB125B]">Support &amp; Self-Care</h2>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Self-Care Tips Card */}
        <div className="bg-[#FEE6EA] text-[#BB125B] flex flex-col gap-6 rounded-xl border border-[#FF4B8B40] py-6 shadow-sm">
          <div className="px-6">
            <div className="leading-none font-semibold text-[#BB125B]">Self-Care Tips</div>
          </div>
          <div className="px-6">
            <ul className="space-y-2 text-sm">
              <li>📝 Track your periods and symptoms</li>
              <li>😴 Rest during heavy or painful days</li>
              <li>💧 Stay hydrated and include iron-rich foods</li>
              <li>🩺 Talk to your doctor early if something feels "off"</li>
            </ul>
          </div>
        </div>

        {/* Emotional Support Card */}
        <div className="bg-[#FEE6EA] text-[#BB125B] flex flex-col gap-6 rounded-xl border border-[#FF4B8B40] py-6 shadow-sm">
          <div className="px-6">
            <div className="leading-none font-semibold text-[#BB125B]">Emotional Support</div>
          </div>
          <div className="px-6 text-sm">
            <p className="mb-4 text-[#BB125B]">
              Severe symptoms can affect mood, energy, confidence and relationships. It's okay to ask for emotional support or counselling.
            </p>
            <p className="font-medium text-[#FF4B8B]">You don't have to "just put up with it"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
