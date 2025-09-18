'use client'

export default function EmotionalWellbeingCard() {
  return (
    <section className="mb-16 px-4 md:px-6">
      <div className="bg-[#fff0f6] text-[#212529] flex flex-col gap-6 rounded-xl border border-l-4 border-[#f783ac] py-6 shadow-sm">
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[#d63384]"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <div className="font-semibold text-2xl text-[#d63384]">Emotional Wellbeing</div>
          </div>
          <div className="text-sm text-[#495057]">Fibroids can affect more than just your body:</div>
        </div>

        <div className="px-6 space-y-4">
          <div className="space-y-2 text-sm text-[#212529]">
            <p>• Tiredness or anaemia can lower energy</p>
            <p>• Pain and heavy bleeding can affect mood</p>
            <p>• Tummy swelling can impact confidence and body image</p>
          </div>

          <div className="bg-[#ffe3ec] border border-[#f8c4d9] rounded-lg p-4">
            <p className="text-[#d63384] font-medium">
              💖 It's okay to ask for emotional support or counselling — you're not alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
