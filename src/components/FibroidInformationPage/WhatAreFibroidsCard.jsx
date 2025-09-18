'use client'

export default function WhatAreFibroidsCard() {
  return (
    <section className="mb-10 px-4 md:px-6">
      <div className="bg-[#fff0f6] text-[#212529] flex flex-col gap-6 rounded-xl border border-l-4 border-l-[#f783ac] py-6 shadow-sm">
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📌</span>
            <div className="font-semibold text-2xl text-[#e64980]">What Are Fibroids?</div>
          </div>
        </div>
        <div className="px-6 space-y-4">
          <p className="text-lg leading-relaxed">
            Fibroids are benign (non-cancerous) growths that develop in the walls of the womb (uterus)
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p>• Made of muscle and fibrous tissue</p>
              <p>• Can be single or multiple</p>
            </div>
            <div className="space-y-2">
              <p>• Can vary greatly in size</p>
              <p>• Common and treatable</p>
            </div>
          </div>
          <div className="bg-[#fff0f6] border border-[#f783ac] rounded-lg p-4 mt-4">
            <p className="text-[#d63384] font-medium">
              ✓ Fibroids are not cancer and rarely become cancerous.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
