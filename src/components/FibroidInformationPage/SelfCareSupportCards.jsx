'use client'

import { Leaf, MessageCircle } from "lucide-react"

export default function SelfCareSupportCards() {
  const pink = "#FFC5D3"
  const deepPink = "#b03b66"

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Self-Care Tips Card */}
        <div className="bg-white text-[#212529] flex flex-col gap-6 rounded-2xl py-8 px-6 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 active:scale-[0.98]">
          <div className="flex items-center gap-3">
            <Leaf className="text-3xl" style={{ color: deepPink }} />
            <h3 className="font-bold text-xl md:text-2xl" style={{ color: deepPink }}>
              Self-Care Tips
            </h3>
          </div>

          <div className="space-y-3 text-sm md:text-base text-[#495057] leading-relaxed">
            <p>• Track your periods, bleeding and pain</p>
            <p>• Eat iron-rich foods (leafy greens, beans, lean red meat) if anaemic</p>
            <p>• Stay active, manage stress, and rest when needed</p>
            <p>• Talk to your doctor about supplements if you are low in iron</p>
          </div>
        </div>

        {/* Support & Follow-Up Card */}
        <div className="bg-white text-[#212529] flex flex-col gap-6 rounded-2xl py-8 px-6 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 active:scale-[0.98]">
          <div className="flex items-center gap-3">
            <MessageCircle className="text-3xl" style={{ color: deepPink }} />
            <h3 className="font-bold text-xl md:text-2xl" style={{ color: deepPink }}>
              Support & Follow-Up
            </h3>
          </div>

          <div className="space-y-3 text-sm md:text-base text-[#495057] leading-relaxed">
            <p>• We'll support you with regular check-ups to monitor your fibroids</p>
            <p>• Your care plan can be adjusted as your needs change</p>
            <p>• You don't have to go through this alone</p>
          </div>
        </div>

      </div>
    </section>
  )
}
