'use client'

export default function CausesAndRiskFactorsCard() {
  return (
    <section className="py-16 px-4 md:px-6 bg-[#fff5f9]">
      <div className="max-w-4xl mx-auto bg-white text-[#212529] flex flex-col gap-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">💡</span>
            <h2 className="font-bold text-2xl md:text-3xl text-[#d63384]">
              Causes & Risk Factors
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#495057]">
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
                className="block rounded-lg border border-[#f783ac]/40 px-4 py-2 text-sm font-medium text-[#d63384] bg-[#fff0f6] hover:bg-[#fdd6e6] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 shadow-sm"
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
                className="block rounded-lg border border-[#f783ac]/40 px-4 py-2 text-sm font-medium text-[#d63384] bg-[#fff0f6] hover:bg-[#fdd6e6] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 shadow-sm"
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
