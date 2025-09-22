'use client'

export default function RememberCard() {
  return (
    <section className="py-12 px-4 md:px-6">
      <div
        data-slot="card"
        className="bg-gradient-to-r from-[#fff0f6] to-[#fff5f9] text-[#212529] flex flex-col gap-6 rounded-2xl border border-[#f8c4d9] py-10 px-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
         
          <h2 className="font-bold text-3xl text-[#d63384]">Remember</h2>
        </div>

        {/* Key points */}
        <div className="grid md:grid-cols-2 gap-6 text-base text-[#495057] leading-relaxed">
          <div className="space-y-2">
            <p>✓ Fibroids are common and treatable</p>
            <p>✓ They are not cancerous</p>
          </div>
          <div className="space-y-2">
            <p>✓ Getting assessed early can prevent complications</p>
            <p>✓ Early assessment can protect your fertility</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#f8c4d9] my-2" />

        {/* Call-to-action */}
        <div className="text-center">
          <p className="text-lg font-medium text-[#d63384] mb-6">
            If you have symptoms of fibroids, book an appointment — we're here to help.
          </p>
          <button
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-[#d63384] hover:bg-[#c22573] transition-all h-12 rounded-md px-8 shadow-lg hover:shadow-xl active:scale-[0.97]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22" height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  )
}
