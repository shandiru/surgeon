import React from 'react';

export default function CausesOfBleedingSection() {
  return (
    <section className="mb-12 px-4">
      <div className="bg-white text-black flex flex-col gap-6 rounded-2xl shadow-md py-8 max-w-4xl mx-auto transition hover:shadow-lg">
        
        {/* Card Header */}
        <div className="px-6 text-center md:text-left">
          <h2 className="font-bold flex items-center justify-center md:justify-start gap-2 text-2xl text-primary-pink">
            Causes of Postmenopausal Bleeding
          </h2>
          <p className="text-sm text-[#6B7280] mt-2">
            Bleeding can range from light spotting or brown discharge to heavier, period-like bleeding.
          </p>
        </div>

        {/* Card Content */}
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Serious Causes */}
            <div className="space-y-3 rounded-xl bg-gradient-to-br from-[#fff0f5] to-[#ffe6ed] p-5 shadow-sm">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-pink mb-2">
                 Serious Causes
              </div>
              <ul className="space-y-2 text-sm text-[#374151] list-disc list-inside">
                <li>Endometrial (womb) cancer or uterine sarcoma</li>
                <li>Cervical or vaginal cancer</li>
              </ul>
            </div>

            {/* Common Benign Causes */}
            <div className="space-y-3 rounded-xl bg-gradient-to-br from-[#fef6f9] to-[#fff] p-5 shadow-sm">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-pink mb-2">
                 Common Benign Causes
              </div>
              <ul className="space-y-2 text-sm text-[#374151] list-disc list-inside">
                <li>Endometrial or vaginal atrophy</li>
                <li>Uterine fibroids or polyps</li>
                <li>Endometrial hyperplasia</li>
                <li>Infection of the womb lining</li>
                <li>Hormone therapy or tamoxifen</li>
                <li>Pelvic trauma</li>
                <li>Bleeding from urinary tract or rectum</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
