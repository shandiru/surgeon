import React from 'react';

export default function CausesOfBleedingSection() {
  return (
    <section className="mb-12 px-4">
      <div className="bg-white text-[#1F2937] flex flex-col gap-6 rounded-xl border border-[#FF4B8B] py-6 shadow-sm max-w-4xl mx-auto">
        
        {/* Card Header */}
        <div className="grid auto-rows-min items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2 text-xl sm:text-2xl">
            <span role="img" aria-label="lightbulb">💡</span>
            Causes of Postmenopausal Bleeding
          </div>
          <div className="text-sm text-[#6B7280]">
            Bleeding can range from light spotting or brown discharge to heavier, period-like bleeding.
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Serious Causes */}
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-md bg-[#FF4B8B] text-white text-xs font-medium w-full justify-start p-3">
                Serious Causes
              </div>
              <ul className="space-y-2 text-sm pl-4">
                <li>• Endometrial (womb) cancer or uterine sarcoma</li>
                <li>• Cervical or vaginal cancer</li>
              </ul>
            </div>

            {/* Common Benign Causes */}
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-md bg-[#FFE3EC] text-[#1F2937] text-xs font-medium w-full justify-start p-3">
                Common Benign Causes
              </div>
              <ul className="space-y-2 text-sm pl-4">
                <li>• Endometrial or vaginal atrophy</li>
                <li>• Uterine fibroids or polyps</li>
                <li>• Endometrial hyperplasia</li>
                <li>• Infection of the womb lining</li>
                <li>• Hormone therapy or tamoxifen</li>
                <li>• Pelvic trauma</li>
                <li>• Bleeding from urinary tract or rectum</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
