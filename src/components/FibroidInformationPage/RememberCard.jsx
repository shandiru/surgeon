'use client'

export default function RememberCard() {
  return (
    <section className="mb-16 px-4 md:px-6">
      <div
        data-slot="card"
        className="bg-gradient-to-r from-[#fff0f6] to-[#fff5f9] text-[#212529] flex flex-col gap-6 rounded-xl border border-[#f783ac] py-6 shadow-sm"
      >
        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💖</span>
            <div data-slot="card-title" className="font-semibold text-2xl text-[#d63384]">
              Remember
            </div>
          </div>
        </div>

        {/* Content */}
        <div data-slot="card-content" className="px-6 space-y-4">
          {/* Key points */}
          <div className="grid md:grid-cols-2 gap-4 text-sm text-[#495057]">
            <div className="space-y-2">
              <p>✓ Fibroids are common and treatable</p>
              <p>✓ They are not cancerous</p>
            </div>
            <div className="space-y-2">
              <p>✓ Getting assessed early can prevent complications</p>
              <p>✓ Early assessment can protect your fertility</p>
            </div>
          </div>

          {/* Call-to-action */}
          <div className="text-center pt-4">
            <p className="text-lg font-medium text-[#d63384] mb-4">
              If you have symptoms of fibroids, book an appointment — we're here to help.
            </p>
            <button
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-[#d63384] hover:bg-[#c22573] transition-all h-10 rounded-md px-6 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
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
      </div>
    </section>
  )
}
