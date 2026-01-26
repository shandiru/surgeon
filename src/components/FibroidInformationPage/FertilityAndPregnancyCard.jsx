'use client'

import { Heart } from "lucide-react"

export default function FertilityAndPregnancyCard() {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-white text-black flex flex-col gap-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-3xl text-primary-pink" />
          <h2 className="font-bold text-2xl md:text-3xl text-primary-pink">
            Fertility & Pregnancy
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Challenges */}
          <div className="rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 bg-light-pink-2">
            <h4 className="font-semibold mb-3 text-lg text-primary-pink">
              Potential Challenges
            </h4>
            <ul className="space-y-2 text-sm text-black leading-relaxed">
              <li>• Can sometimes make it harder to get pregnant</li>
              <li>• May slightly increase risk of miscarriage</li>
              <li>• May increase risk of preterm birth</li>
            </ul>
          </div>

          {/* Positive Outlook */}
          <div className="rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 bg-light-pink-2">
            <h4 className="font-semibold mb-3 text-lg text-primary-pink">
              Positive Outlook
            </h4>
            <ul className="space-y-2 text-sm text-black leading-relaxed">
              <li>• Most women with fibroids can still have healthy pregnancies</li>
              <li>• Extra monitoring during pregnancy available</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
