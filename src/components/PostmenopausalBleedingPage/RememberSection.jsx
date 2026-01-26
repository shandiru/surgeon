import React from "react";
import { CalendarDays } from "lucide-react";

export default function RememberSection() {
  return (
    <section className="mb-12 px-4">
      <div className="text-[#1F2937] flex flex-col gap-6 rounded-2xl border border-primary-pink/20 bg-gradient-to-br from-[#FFF5F8] to-[#FFE9F0] py-8 px-6 sm:px-8 shadow-md max-w-4xl mx-auto">
        {/* Card Header */}
        <div className="border-b border-primary-pink/20 pb-6">
          <h2 className="font-bold flex items-center gap-3 text-primary-pink text-2xl">Remember</h2>
        </div>

        {/* Card Content */}
        <div className="grid md:grid-cols-2 gap-6 text-sm sm:text-base text-[#374151]">
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
        <div className="mt-8 text-center">
          <p className="text-base sm:text-lg font-medium text-black mb-5">
            If you notice postmenopausal bleeding, book an appointment right away.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-[#FF4B8B] hover:bg-[#e63a7b] active:scale-95 transition-transform text-white text-sm font-semibold px-7 h-11 rounded-lg shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF4B8B]"
          >
            <CalendarDays className="h-5 w-5" />
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
