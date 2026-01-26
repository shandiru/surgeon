'use client'

import { Pill, User } from "lucide-react"

export default function TreatmentOptionsCard() {
  return (
    <section className="py-16 px-4 md:px-50 bg-white">
      <div className="bg-white text-black flex flex-col gap-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">

        {/* Card Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Pill className="text-3xl text-primary-pink" />
            <h2 className="font-bold text-2xl md:text-3xl text-primary-pink">
              Treatment Options
            </h2>
          </div>
          <p className="text-base text-black">
            Treatment depends on your symptoms and their severity:
          </p>
        </div>

        {/* Card Content */}
        <div className="space-y-10">
          {/* Medication Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary-pink">
              Medication
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Anti-inflammatory medicines", desc: "Relieve pain" },
                { title: "Tranexamic acid", desc: "Reduces bleeding" },
                { title: "Hormonal treatments", desc: "Pill, coil, progesterone tablets – regulate periods" },
                { title: "GnRH analogues", desc: "Shrink fibroids (often used before surgery)" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <h4 className="font-semibold mb-2 text-primary-pink">
                    {item.title}
                  </h4>
                  <p className="text-sm text-black">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-light-pink-2" />

          {/* Procedures Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary-pink">
              Procedures & Surgery
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Myomectomy", desc: "Removes fibroids while keeping the womb" },
                { title: "Hysterectomy", desc: "Removes the womb (only if symptoms are severe & no further pregnancies planned)" },
                { title: "Transcervical resection", desc: "Removes submucosal fibroids through the cervix" },
                { title: "Uterine artery embolisation (UAE)", desc: "Blocks blood supply to fibroids to shrink them" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <h4 className="font-semibold mb-2 text-primary-pink">
                    {item.title}
                  </h4>
                  <p className="text-sm text-black">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Advice Note */}
          <div className="rounded-xl p-5 text-center shadow-md bg-light-pink-2">
            <p className="font-medium flex items-center gap-2 justify-center text-primary-pink">
              <User className="text-2xl" />
              Your doctor will help you choose the safest and most effective option
              based on your symptoms and fertility plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
