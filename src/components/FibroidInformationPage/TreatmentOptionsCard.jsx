'use client'

export default function TreatmentOptionsCard() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="bg-[#fff0f6] text-[#212529] flex flex-col gap-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">
        
        {/* Card Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-3xl">💊</span>
            <h2 className="font-bold text-2xl md:text-3xl text-[#d63384]">Treatment Options</h2>
          </div>
          <p className="text-base text-[#495057]">
            Treatment depends on your symptoms and their severity:
          </p>
        </div>

        {/* Card Content */}
        <div className="space-y-10">
          {/* Medication Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#d63384]">Medication</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Anti-inflammatory medicines", desc: "Relieve pain" },
                { title: "Tranexamic acid", desc: "Reduces bleeding" },
                { title: "Hormonal treatments", desc: "Pill, coil, progesterone tablets – regulate periods" },
                { title: "GnRH analogues", desc: "Shrink fibroids (often used before surgery)" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-[#f8c4d9] rounded-xl p-5 bg-white hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <h4 className="font-semibold mb-2 text-[#d63384]">{item.title}</h4>
                  <p className="text-sm text-[#6c757d]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-[#f8c4d9]" />

          {/* Procedures Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#d63384]">Procedures & Surgery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Myomectomy", desc: "Removes fibroids while keeping the womb" },
                { title: "Hysterectomy", desc: "Removes the womb (only if symptoms are severe & no further pregnancies planned)" },
                { title: "Transcervical resection", desc: "Removes submucosal fibroids through the cervix" },
                { title: "Uterine artery embolisation (UAE)", desc: "Blocks blood supply to fibroids to shrink them" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-[#f8c4d9] rounded-xl p-5 bg-white hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <h4 className="font-semibold mb-2 text-[#d63384]">{item.title}</h4>
                  <p className="text-sm text-[#6c757d]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Advice Note */}
          <div className="bg-[#ffe3ec] border border-[#f8c4d9] rounded-xl p-5 text-center shadow-sm">
            <p className="text-[#d63384] font-medium">
              👩‍⚕️ Your doctor will help you choose the safest and most effective option
              based on your symptoms and fertility plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
