import React from "react";

export default function SymptomsAndRiskFactorsSection() {
  return (
    <section className="mb-12 px-4">
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Symptoms You Might Notice */}
        <div className="bg-white text-black flex flex-col gap-6 rounded-2xl shadow-md py-6 hover:shadow-lg transition">
          <div className="px-6 border-b border-light-pink-1 pb-5">
            <h2 className="font-bold flex items-center gap-2 text-xl sm:text-2xl text-primary-pink">
              Symptoms You Might Notice
            </h2>
          </div>
          <div className="px-6">
            <p className="mb-4 text-sm text-black">
              Many women with postmenopausal bleeding have no other symptoms, but other symptoms may
              include:
            </p>
            <ul className="space-y-2 text-sm list-disc pl-5 text-black">
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
              className="mt-6 rounded-lg bg-light-pink-2 px-4 py-3 text-xs text-black font-medium shadow-sm"
            >
              Hot flushes and other menopause symptoms often ease over time — but bleeding should
              never return.
            </div>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="bg-white text-black flex flex-col gap-6 rounded-2xl shadow-md py-6 hover:shadow-lg transition">
          <div className="px-6 border-b border-light-pink-1 pb-5">
            <h2 className="font-bold flex items-center gap-2 text-xl sm:text-2xl text-primary-pink">
              Risk Factors
            </h2>
          </div>
          <div className="px-6">
            <p className="mb-4 text-sm text-black">
              Knowing your risk helps encourage early checks and peace of mind.
            </p>
            <ul className="space-y-2 text-sm list-disc pl-5 text-black">
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
