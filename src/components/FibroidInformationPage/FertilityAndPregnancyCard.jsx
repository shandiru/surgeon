'use client'

export default function FertilityAndPregnancyCard() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-[#fff0f6] text-[#212529] flex flex-col gap-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🤰</span>
          <h2 className="font-bold text-2xl md:text-3xl text-[#d63384]">
            Fertility & Pregnancy
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Challenges */}
          <div className="bg-white rounded-xl p-6 border border-[#f783ac]/40 hover:bg-[#fff5f9] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200">
            <h4 className="font-semibold text-[#d63384] mb-3 text-lg">
              Potential Challenges
            </h4>
            <ul className="space-y-2 text-sm text-[#495057] leading-relaxed">
              <li>• Can sometimes make it harder to get pregnant</li>
              <li>• May slightly increase risk of miscarriage</li>
              <li>• May increase risk of preterm birth</li>
            </ul>
          </div>

          {/* Positive Outlook */}
          <div className="bg-white rounded-xl p-6 border border-[#f783ac]/40 hover:bg-[#fff5f9] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200">
            <h4 className="font-semibold text-[#d63384] mb-3 text-lg">
              Positive Outlook
            </h4>
            <ul className="space-y-2 text-sm text-[#495057] leading-relaxed">
              <li>• Most women with fibroids can still have healthy pregnancies</li>
              <li>• Extra monitoring during pregnancy available</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
