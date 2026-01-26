"use client";
import React from "react";

const PostmenopausalBleedingGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-12 pb-10">
      {/* ---------------------------------------------------
          WHAT IS POSTMENOPAUSAL BLEEDING?
      --------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-6 py-6 mt-10">
        <div className="bg-white rounded-2xl shadow-xl max-w-3xl mx-auto border border-primary-pink/20">
          {/* HEADER */}
          <div className="border-b border-primary-pink/20 rounded-t-2xl px-6 py-6">
            <div className="flex items-center gap-2 text-2xl font-bold text-primary-pink">
              What Is Postmenopausal Bleeding?
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-6 py-8 space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-[#374151]">
              Postmenopausal bleeding is any bleeding from the vagina after menopause.
            </p>

            <div className="bg-[#FEE6EA] p-5 rounded-xl shadow-sm border border-primary-pink">
              <p className="font-semibold mb-3 text-primary-pink text-lg">Key Facts:</p>

              <ul className="space-y-2 text-sm sm:text-base text-[#374151] list-disc list-inside">
                <li>Menopause is confirmed once you have had no period for 12 months</li>
                <li>
                  Any vaginal bleeding after this time is not normal and should always be checked
                </li>
                <li>
                  Most causes are harmless, but sometimes bleeding can be a sign of cancer or other
                  serious conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostmenopausalBleedingGuideCard1;
