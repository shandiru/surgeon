import React from 'react';
import { CalendarDays } from 'lucide-react';

export default function RememberSection() {
  return (
    <section className="mb-12 px-4">
      <div className="text-[#1F2937] flex flex-col gap-6 rounded-xl border border-[#FF4B8B]/20 bg-[#FFF1F5] py-6 shadow-sm max-w-4xl mx-auto">
        {/* Card Header */}
        <div className="grid items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2 text-[#FF4B8B] text-xl sm:text-2xl">
            <span className="text-2xl">💗</span>
            Remember
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-6 text-sm text-[#1F2937]">
            <div className="space-y-3">
              <p className="font-medium">✓ Any bleeding after menopause must be checked</p>
              <p className="font-medium">✓ Most causes are benign, but early diagnosis is vital</p>
            </div>
            <div className="space-y-3">
              <p className="font-medium">✓ Prompt medical assessment saves lives</p>
              <p className="font-medium">✓ Don't wait and worry alone</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-[#FF4B8B] mb-4">
              If you notice postmenopausal bleeding, book an appointment right away.
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-[#FF4B8B] hover:bg-[#ff5d96] text-white text-sm font-medium px-6 h-10 rounded-md transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF4B8B]"
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
