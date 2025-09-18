'use client'

export default function TreatmentOptionsCard() {
  return (
    <section className="mb-16 px-4 md:px-6">
      <div className="bg-[#fff0f6] text-[#212529] flex flex-col gap-6 rounded-xl border border-[#f783ac] py-6 shadow-sm">
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💊</span>
            <div className="font-semibold text-2xl text-[#d63384]">Treatment Options</div>
          </div>
          <div className="text-sm text-[#495057]">
            Treatment depends on your symptoms and their severity:
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-8">

          {/* Medication Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#d63384]">Medication</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-[#f8c4d9] rounded-lg p-4 bg-white">
                <h4 className="font-medium mb-2">Anti-inflammatory medicines</h4>
                <p className="text-sm text-[#6c757d]">Relieve pain</p>
              </div>
              <div className="border border-[#f8c4d9] rounded-lg p-4 bg-white">
                <h4 className="font-medium mb-2">Tranexamic acid</h4>
                <p className="text-sm text-[#6c757d]">Reduces bleeding</p>
              </div>
              <div className="border border-[#f8c4d9] rounded-lg p-4 bg-white">
                <h4 className="font-medium mb-2">Hormonal treatments</h4>
                <p className="text-sm text-[#6c757d]">
                  Pill, coil, progesterone tablets – regulate periods
                </p>
              </div>
              <div className="border border-[#f8c4d9] rounded-lg p-4 bg-white">
                <h4 className="font-medium mb-2">GnRH analogues</h4>
                <p className="text-sm text-[#6c757d]">
                  Shrink fibroids (often used before surgery)
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-[#f8c4d9]" />

          {/* Procedures Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#d63384]">Procedures &amp; Surgery</h3>
            <div className="space-y-4">
              <div className="border border-[#f8c4d9] rounded-lg p-4 bg-white">
                <h4 className="font-medium mb-2">Myomectomy</h4>
                <p className="text-sm text-[#6c757d]">Removes fibroids while keeping the womb</p>
              </div>
              <div className="border border-[#f8c4d9] rounded-lg p-4 bg-white">
                <h4 className="font-medium mb-2">Hysterectomy</h4>
                <p className="text-sm text-[#6c757d]">
                  Removes the womb (usually only if symptoms are severe and you don’t plan more pregnancies)
                </p>
              </div>
              <div className="border border-[#f8c4d9] rounded-lg p-4 bg-white">
                <h4 className="font-medium mb-2">Transcervical resection</h4>
                <p className="text-sm text-[#6c757d]">Removes submucosal fibroids through the cervix</p>
              </div>
              <div className="border border-[#f8c4d9] rounded-lg p-4 bg-white">
                <h4 className="font-medium mb-2">Uterine artery embolisation (UAE)</h4>
                <p className="text-sm text-[#6c757d]">Blocks blood supply to fibroids to shrink them</p>
              </div>
            </div>
          </div>

          {/* Doctor Advice Note */}
          <div className="bg-[#ffe3ec] border border-[#f8c4d9] rounded-lg p-4">
            <p className="text-[#d63384] font-medium">
              👩‍⚕️ Your doctor will help you choose the safest and most effective option based on your symptoms and fertility plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
