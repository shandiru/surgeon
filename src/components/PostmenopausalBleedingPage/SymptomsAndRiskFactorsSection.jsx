import React from 'react';

export default function SymptomsAndRiskFactorsSection() {
  return (
    <section className="mb-12 px-4">
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* Symptoms You Might Notice */}
        <div className="bg-white text-[#1F2937] flex flex-col gap-6 rounded-xl border border-[#FF4B8B] py-6 shadow-sm">
          <div className="grid auto-rows-min items-start gap-1.5 px-6 border-b pb-6">
            <div className="leading-none font-semibold flex items-center gap-2 text-xl sm:text-2xl">
              <span role="img" aria-label="thought bubble">💭</span>
              Symptoms You Might Notice
            </div>
          </div>
          <div className="px-6">
            <p className="mb-4 text-sm text-[#6B7280]">
              Many women with postmenopausal bleeding have no other symptoms, but other symptoms may include:
            </p>
            <ul className="space-y-2 text-sm list-disc pl-5">
              <li>Vaginal dryness</li>
              <li>Decreased libido</li>
              <li>Insomnia</li>
              <li>Stress incontinence</li>
              <li>More frequent urinary tract infections</li>
              <li>Weight gain</li>
            </ul>

            {/* Alert */}
            <div
              role="alert"
              className="relative w-full rounded-lg border border-[#FF4B8B] bg-[#FFE3EC] px-4 py-3 text-xs mt-4 text-[#6B7280]"
            >
              Hot flushes and other menopause symptoms often ease over time — but bleeding should never return.
            </div>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="bg-white text-[#1F2937] flex flex-col gap-6 rounded-xl border border-[#FF4B8B] py-6 shadow-sm">
          <div className="grid auto-rows-min items-start gap-1.5 px-6 border-b pb-6">
            <div className="leading-none font-semibold flex items-center gap-2 text-xl sm:text-2xl">
              <span role="img" aria-label="DNA">🧬</span>
              Risk Factors
            </div>
          </div>
          <div className="px-6">
            <p className="mb-4 text-sm text-[#6B7280]">
              Knowing your risk helps encourage early checks and peace of mind.
            </p>
            <ul className="space-y-2 text-sm list-disc pl-5">
              <li>Age over 55</li>
              <li>Family history of endometrial, ovarian or breast cancer</li>
              <li>Obesity</li>
              <li>Taking tamoxifen or hormone replacement therapy (HRT)</li>
              <li>Polycystic ovary syndrome (PCOS)</li>
              <li>Diabetes or high blood pressure</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
