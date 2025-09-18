'use client'

export default function SymptomsOfFibroidsCard() {
  return (
    <section className="mb-16 px-4 md:px-6">
      <div className="bg-[#fff0f6] text-[#212529] flex flex-col gap-6 rounded-xl border border-l-4 border-l-[#f783ac] py-6 shadow-sm">
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d63384"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
            <div className="font-semibold text-2xl text-[#d63384]">Symptoms of Fibroids</div>
          </div>
          <div className="text-[#495057] text-sm">
            Some people have no symptoms, but others may experience:
          </div>
        </div>

        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-[#d63384]">Physical Symptoms</h4>
              <ul className="space-y-2">
                <li>• Painful or heavy periods</li>
                <li>• Anaemia (from heavy bleeding)</li>
                <li>• Bleeding between periods or after sex</li>
                <li>• Pain or discomfort during sex</li>
                <li>• A swollen tummy (sometimes looking pregnant)</li>
                <li>• Abdominal or lower back pain</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-[#d63384]">Other Effects</h4>
              <ul className="space-y-2">
                <li>• Constant urge to pass urine</li>
                <li>• Constipation or bloating</li>
                <li>• Low mood or depression</li>
                <li>• Difficulty getting pregnant</li>
                <li>• Increased risk of miscarriage</li>
                <li>• Tiredness, dizziness, weakness, headaches</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#fff0f6] border border-[#f783ac] rounded-lg p-4 mt-6">
            <p className="text-[#d63384] font-medium">
              ⚠️ If left untreated, fibroids can grow and may cause complications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
