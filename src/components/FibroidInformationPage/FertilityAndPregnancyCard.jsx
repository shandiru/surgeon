'use client'

export default function FertilityAndPregnancyCard() {
  return (
    <section className="mb-16 px-4 md:px-6">
      <div className="bg-[#fff0f6] text-[#212529] flex flex-col gap-6 rounded-xl border border-l-4 border-[#f783ac] py-6 shadow-sm">
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🤰</span>
            <div className="font-semibold text-2xl text-[#d63384]">Fertility & Pregnancy</div>
          </div>
        </div>

        <div className="px-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#d63384] mb-2">Potential Challenges</h4>
              <ul className="space-y-1 text-sm text-[#212529]">
                <li>• Can sometimes make it harder to get pregnant</li>
                <li>• May slightly increase risk of miscarriage</li>
                <li>• May increase risk of preterm birth</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#d63384] mb-2">Positive Outlook</h4>
              <ul className="space-y-1 text-sm text-[#212529]">
                <li>• Most women with fibroids can still have healthy pregnancies</li>
                <li>• Extra monitoring during pregnancy available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
