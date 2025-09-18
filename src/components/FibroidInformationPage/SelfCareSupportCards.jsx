'use client'

export default function SelfCareSupportCards() {
  return (
    <section className="mb-16 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Self-Care Tips Card */}
        <div className="bg-[#fff0f6] text-[#212529] flex flex-col gap-6 rounded-xl border border-[#f783ac] py-6 shadow-sm">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🌿</span>
              <div className="leading-none font-semibold text-lg text-[#d63384]">Self-Care Tips</div>
            </div>
          </div>
          <div className="px-6 space-y-3 text-sm text-[#495057]">
            <p>• Track your periods, bleeding and pain</p>
            <p>• Eat iron-rich foods (leafy greens, beans, lean red meat) if anaemic</p>
            <p>• Stay active, manage stress, and rest when needed</p>
            <p>• Talk to your doctor about supplements if you are low in iron</p>
          </div>
        </div>

        {/* Support & Follow-Up Card */}
        <div className="bg-[#fff0f6] text-[#212529] flex flex-col gap-6 rounded-xl border border-[#f783ac] py-6 shadow-sm">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🗨️</span>
              <div className="leading-none font-semibold text-lg text-[#d63384]">Support &amp; Follow-Up</div>
            </div>
          </div>
          <div className="px-6 space-y-3 text-sm text-[#495057]">
            <p>• We'll support you with regular check-ups to monitor your fibroids</p>
            <p>• Your care plan can be adjusted as your needs change</p>
            <p>• You don't have to go through this alone</p>
          </div>
        </div>
      </div>
    </section>
  )
}
