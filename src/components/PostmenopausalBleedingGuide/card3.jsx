'use client';
import React from "react";

const PostmenopausalBleedingGuideCard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">

      {/* OUTER CARD WRAPPER */}
      <div className="max-w-4xl mx-auto px-6 py-10 
                      rounded-2xl border border-primary-pink 
                      shadow-md bg-white">

        {/* HEADER */}
        <div className="px-6 text-center md:text-left mb-6">
          <h2 className="font-bold flex items-center justify-center md:justify-start gap-2 text-2xl text-primary-pink">
            Causes of Postmenopausal Bleeding
          </h2>

          <p className="text-sm text-[#6B7280] mt-2">
            Bleeding can range from light spotting or brown discharge to heavier, period-like bleeding.
          </p>
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-6">

            {/* SERIOUS CAUSES */}
            <div className="space-y-3 rounded-xl 
                            bg-gradient-to-br from-[#fff0f5] to-[#ffe6ed] 
                            p-5 shadow-sm">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-pink mb-2">
                Serious Causes
              </div>

              <ul className="space-y-2 text-sm text-[#374151] list-disc list-inside">
                <li>Endometrial (womb) cancer or uterine sarcoma</li>
                <li>Cervical or vaginal cancer</li>
              </ul>
            </div>

            {/* COMMON BENIGN CAUSES */}
            <div className="space-y-3 rounded-xl 
                            bg-gradient-to-br from-[#fef6f9] to-[#ffffff] 
                            p-5 shadow-sm">
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

        {/* NEXT BUTTON */}
        <div className="pt-10 flex justify-center">
          <button
            onClick={() => {
              setShowCard(4);
              setActiveButton(3);
            }}
            className="bg-primary-pink hover:bg-primary-pink/80 text-white 
                       w-[90%] md:w-[60%] lg:w-[40%] 
                       rounded-md h-10 text-sm font-medium shadow transition-all"
          >
            Continue to Next Section
          </button>
        </div>

      </div>
    </div>
  );
};

export default PostmenopausalBleedingGuideCard3;
