'use client';
import React from 'react';
import { Users, Heart, Leaf, FileText } from 'lucide-react';

export default function SupportSelfCare() {
  return (
    <section className="mb-16 px-6 md:px-12">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <Users className="h-7 w-7 text-[#FF4B8B]" />
        <h2 className="text-3xl font-bold text-[#BB125B]">Support &amp; Self-Care</h2>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Self-Care Tips Card */}
        <div className="bg-[#FEE6EA] text-[#BB125B] flex flex-col gap-4 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all active:scale-[0.98]">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Leaf className="h-5 w-5 text-[#BB125B]" />
            Self-Care Tips
          </h3>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#BB125B]" />
              Track your periods and symptoms
            </li>
            <li className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-[#BB125B]" />
              Rest during heavy or painful days
            </li>
            <li className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-[#BB125B]" />
              Stay hydrated and include iron-rich foods
            </li>
            <li className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#BB125B]" />
              Talk to your doctor early if something feels "off"
            </li>
          </ul>
        </div>

        {/* Emotional Support Card */}
        <div className="bg-[#FEE6EA] text-[#BB125B] flex flex-col gap-4 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all active:scale-[0.98]">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Heart className="h-5 w-5 text-[#BB125B]" />
            Emotional Support
          </h3>
          <p className="text-sm leading-relaxed">
            Severe symptoms can affect mood, energy, confidence and relationships. 
            It's okay to ask for emotional support or counselling.
          </p>
          <p className="font-medium text-[#FF4B8B]">
            You don't have to "just put up with it"
          </p>
        </div>
      </div>
    </section>
  );
}
