'use client'

import { Lightbulb } from "lucide-react"

export default function CausesAndRiskFactorsCard() {
  const pink = "#FFC5D3"
  const deepPink = "#b03b66"

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-white text-[#212529] flex flex-col gap-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">

        {/* Header */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-7 w-7" style={{ color: deepPink }} />
            <h2 className="font-bold text-2xl md:text-3xl" style={{ color: deepPink }}>
              Causes & Risk Factors
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-600">
            The exact cause is unknown, but your risk may be higher if you:
          </p>
        </div>

        {/* Risk Factors Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {[
              'Have a family history of fibroids',
              'Are of African or Caribbean heritage',
              'Are overweight',
            ].map((item, i) => (
              <span
                key={i}
                className="block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98]"
                style={{
                  backgroundColor: pink,
                  color: deepPink,
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            {[
              'Started your periods early',
              'Have hormonal imbalances',
            ].map((item, i) => (
              <span
                key={i}
                className="block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98]"
                style={{
                  backgroundColor: pink,
                  color: deepPink,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
