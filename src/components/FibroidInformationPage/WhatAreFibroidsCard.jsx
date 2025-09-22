'use client'

export default function WhatAreFibroidsCard() {
  return (
    <section className="py-16 px-6 bg-[#fff5f9]">
      <div className="max-w-4xl mx-auto bg-white text-[#212529] flex flex-col gap-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#f8c6d8]">
        
        {/* Header */}
        <div className="px-8 pt-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📌</span>
            <h2 className="font-bold text-3xl text-[#d63384]">What Are Fibroids?</h2>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            Fibroids are benign (non-cancerous) growths that develop in the walls of the womb (uterus).
          </p>

          {/* Two-column grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-gray-700">• Made of muscle and fibrous tissue</p>
              <p className="text-gray-700">• Can be single or multiple</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700">• Can vary greatly in size</p>
              <p className="text-gray-700">• Common and treatable</p>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="bg-[#fff0f6] border border-[#f783ac] rounded-lg p-5">
            <p className="text-[#d63384] font-semibold text-base">
              ✓ Fibroids are not cancer and rarely become cancerous.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
