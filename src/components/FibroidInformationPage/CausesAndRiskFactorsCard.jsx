'use client'

export default function CausesAndRiskFactorsCard() {
  return (
    <section className="mb-16 px-4 md:px-6">
      <div className="bg-[#fff0f6] text-[#212529] flex flex-col gap-6 rounded-xl border border-[#f783ac] py-6 shadow-sm">
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💡</span>
            <div className="font-semibold text-2xl text-[#d63384]">Causes & Risk Factors</div>
          </div>
          <div className="text-sm text-[#495057]">
            The exact cause is unknown, but risk may be higher if you:
          </div>
        </div>

        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="inline-block rounded-md border border-[#f783ac] px-3 py-1 text-xs font-medium text-[#d63384] bg-white">
                • Have a family history of fibroids
              </span>
              <span className="inline-block rounded-md border border-[#f783ac] px-3 py-1 text-xs font-medium text-[#d63384] bg-white">
                • Are of African or Caribbean heritage
              </span>
              <span className="inline-block rounded-md border border-[#f783ac] px-3 py-1 text-xs font-medium text-[#d63384] bg-white">
                • Are overweight
              </span>
            </div>

            <div className="space-y-2">
              <span className="inline-block rounded-md border border-[#f783ac] px-3 py-1 text-xs font-medium text-[#d63384] bg-white">
                • Started your periods early
              </span>
              <span className="inline-block rounded-md border border-[#f783ac] px-3 py-1 text-xs font-medium text-[#d63384] bg-white">
                • Have hormonal imbalances
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
