'use client'

export default function TypesOfFibroidsCard() {
  return (
    <section className="mb-16 px-4 md:px-6">
      <div className="bg-[#fff0f6] text-[#212529] flex flex-col gap-6 rounded-xl border border-[#f783ac] py-6 shadow-sm">
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧬</span>
            <div className="font-semibold text-2xl text-[#d63384]">Types of Fibroids</div>
          </div>
          <div className="text-sm text-[#495057]">
            It's possible to have more than one type at the same time:
          </div>
        </div>

        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border border-[#f783ac] rounded-lg p-4 bg-white">
                <h4 className="font-semibold text-[#d63384] mb-2">Submucosal fibroids</h4>
                <p className="text-sm text-[#495057]">
                  Grow under the lining of the womb (may grow on a stalk)
                </p>
              </div>
              <div className="border border-[#f783ac] rounded-lg p-4 bg-white">
                <h4 className="font-semibold text-[#d63384] mb-2">Intramural fibroids</h4>
                <p className="text-sm text-[#495057]">
                  Grow within the wall of the womb (most common)
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-[#f783ac] rounded-lg p-4 bg-white">
                <h4 className="font-semibold text-[#d63384] mb-2">Subserosal fibroids</h4>
                <p className="text-sm text-[#495057]">
                  Grow on the outside wall of the womb (can press on nearby organs if large)
                </p>
              </div>
              <div className="border border-[#f783ac] rounded-lg p-4 bg-white">
                <h4 className="font-semibold text-[#d63384] mb-2">Pedunculated fibroids</h4>
                <p className="text-sm text-[#495057]">
                  Grow on a stalk, either inside or outside the womb
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
