"use client";
import React from "react";
import { Lightbulb } from "lucide-react";

const OvarianCystsGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-12 pb-10">
      {/* ---------------------------------------------------
          WHAT ARE OVARIAN CYSTS? (SECTION 2)
      --------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-6 py-6 mt-10">
        <div className="bg-light-pink-1 rounded-2xl shadow-xl max-w-6xl mx-auto">
          <div className="bg-light-pink-1 border-b border-primary-pink/20 rounded-t-2xl px-8 py-6">
            <div className="text-primary-pink font-bold text-3xl flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FF4B8B"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              What Are Ovarian Cysts?
            </div>
          </div>

          <div className="p-10 space-y-8 text-black">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left Text */}
              <div className="space-y-5">
                <p className="text-lg leading-relaxed">
                  Ovarian cysts are fluid-filled sacs that form in or on the ovaries. They are very
                  common and usually form during ovulation.
                </p>

                <div className="space-y-4">
                  {[
                    "Most are harmless, painless, and go away on their own",
                    "Many women get at least one cyst every month without knowing",
                    "About 8% of premenopausal women develop larger cysts needing treatment",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FF4B8B"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span className="text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Important Note */}
              <div className="bg-white rounded-xl p-8 border border-primary-pink shadow-md">
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-primary-pink text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#FF4B8B"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Important Note
                </h4>
                <p className="text-base leading-relaxed text-black">
                  Ovarian cysts are less common after menopause — but if they occur, they are more
                  likely to be cancerous. Regular check-ups are important.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OvarianCystsGuideCard1;
