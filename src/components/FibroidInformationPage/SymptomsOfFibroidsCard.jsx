'use client'

import { AlertCircle } from "lucide-react"

export default function SymptomsOfFibroidsCard() {
  return (
    <section className="py-16 px-6 bg-[#fff5f9]">
      <div className="max-w-5xl mx-auto bg-white text-[#212529] flex flex-col gap-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-[#f8c6d8]">

        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d63384"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
            <h2 className="font-bold text-3xl text-[#d63384]">Symptoms of Fibroids</h2>
          </div>
          <p className="text-gray-600 text-base">
            Some people have no symptoms, but others may experience:
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Physical Symptoms */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#d63384] text-lg">Physical Symptoms</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Painful or heavy periods</li>
              <li>• Anaemia (from heavy bleeding)</li>
              <li>• Bleeding between periods or after sex</li>
              <li>• Pain or discomfort during sex</li>
              <li>• A swollen tummy (sometimes looking pregnant)</li>
              <li>• Abdominal or lower back pain</li>
            </ul>
          </div>

          {/* Right - Other Effects */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#d63384] text-lg">Other Effects</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Constant urge to pass urine</li>
              <li>• Constipation or bloating</li>
              <li>• Low mood or depression</li>
              <li>• Difficulty getting pregnant</li>
              <li>• Increased risk of miscarriage</li>
              <li>• Tiredness, dizziness, weakness, headaches</li>
            </ul>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-to-r from-[#fff0f6] to-[#ffe6ef] border border-[#f783ac]/50 rounded-lg p-5 shadow-sm">
          <p className="text-[#d63384] font-medium text-base flex items-center gap-2">
            <AlertCircle className="text-xl" />
            If left untreated, fibroids can grow and may cause complications.
          </p>
        </div>
      </div>
    </section>
  )
}
