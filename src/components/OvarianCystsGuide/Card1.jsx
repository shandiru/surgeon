'use client';
import React from "react";
import { Lightbulb } from "lucide-react";

const OvarianCystsGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-12 pb-10">

      {/* ---------------------------------------------------
          HERO SECTION 
      --------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#FEE6EA] rounded-2xl">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

        <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF4B8B]/10 text-[#FF4B8B] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#FF4B8B" strokeWidth="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            Women’s Health Guide
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#FF4B8B] mb-6">
            Understanding Ovarian Cysts
          </h1>

          <p className="text-xl text-[#BB125B] max-w-2xl mx-auto mb-8 leading-relaxed">
            Your comprehensive guide to symptoms, types, and treatment options.
          </p>

          <button className="inline-flex items-center justify-center gap-2 px-6 h-10 rounded-md font-medium text-sm text-white bg-[#FF4B8B] hover:bg-[#e93a7d] transition-all shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M11 2v2" />
              <path d="M5 2v2" />
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
              <path d="M8 15a6 6 0 0 0 12 0v-3" />
              <circle cx="20" cy="10" r="2" />
            </svg>
            Start Learning
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------
          WHAT ARE OVARIAN CYSTS? (SECTION 2)
      --------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-6 py-6 mt-10">
        <div className="bg-[#FEE6EA] rounded-2xl shadow-xl max-w-6xl mx-auto">
          <div className="bg-[#FEE6EA] border-b border-[#FF4B8B]/20 rounded-t-2xl px-8 py-6">
            <div className="text-[#FF4B8B] font-bold text-3xl flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#FF4B8B" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              What Are Ovarian Cysts?
            </div>
          </div>

          <div className="p-10 space-y-8 text-[#BB125B]">
            <div className="grid md:grid-cols-2 gap-10">

              {/* Left Text */}
              <div className="space-y-5">
                <p className="text-lg leading-relaxed">
                  Ovarian cysts are fluid-filled sacs that form in or on the ovaries.
                  They are very common and usually form during ovulation.
                </p>

                <div className="space-y-4">
                  {[
                    "Most are harmless, painless, and go away on their own",
                    "Many women get at least one cyst every month without knowing",
                    "About 8% of premenopausal women develop larger cysts needing treatment",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#FF4B8B" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span className="text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Important Note */}
              <div className="bg-white rounded-xl p-8 border border-[#FF4B8B]/10 shadow-md">
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-[#FF4B8B] text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#FF4B8B" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Important Note
                </h4>
                <p className="text-base leading-relaxed text-[#BB125B]">
                  Ovarian cysts are less common after menopause — but if they occur,
                  they are more likely to be cancerous. Regular check-ups are important.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------
          REACT CARD (YOUR ORIGINAL COMPONENT STYLE)
      --------------------------------------------------- */}
      <section>
        <div
          className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-2xl border shadow-sm p-8 animate-in slide-in-from-right-5"
          style={{ backgroundColor: "#FFFFFF", borderColor: "rgb(255,197,211)" }}
        >
          {/* Overview Section */}
          <div className="space-y-6">

            <div
              className="p-4 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#FFF5F8", borderColor: "rgb(255,197,211)" }}
            >
              <p className="text-lg leading-relaxed" style={{ color: "#7a2f4f" }}>
                Ovarian cysts are fluid-filled sacs that develop on or inside an ovary.
                They are common and usually harmless. Understanding cysts helps with
                early detection and knowing when to seek medical care.
              </p>
            </div>

            {/* Quick Facts + Reminder */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Quick Facts */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2" style={{ color: "#FF4B8B" }}>
                  Quick Facts
                </h4>

                <ul className="space-y-2">
                  {[
                    "Most cysts form during ovulation and disappear naturally.",
                    "Many women have cysts every month without symptoms.",
                    "Larger cysts may cause bloating or pelvic pain.",
                    "After menopause, cysts need closer examination.",
                  ].map((item, index) => (
                    <li className="flex items-start gap-2" key={index}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#FF4B8B] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span style={{ color: "#7a2f4f" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reminder */}
              <div
                className="p-4 rounded-xl border"
                style={{ backgroundColor: "#FFF5F8", borderColor: "rgb(255,197,211)" }}
              >
                <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: "#FF4B8B" }}>
                  <Lightbulb className="text-xl text-[#FF4B8B]" />
                  Remember
                </h4>
                <p className="text-sm" style={{ color: "#7a2f4f" }}>
                  Pelvic pain, persistent bloating, irregular periods, or sharp sudden pain
                  should be checked by a doctor. Most cysts are harmless, but evaluation is
                  important.
                </p>
              </div>

            </div>

            {/* Continue Button */}
            <div className="pt-6 flex justify-center">
              <button
                onClick={() => {
                  setShowCard(2);
                  setActiveButton(1);
                }}
                className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md text-sm font-medium transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
              >
                Continue to Next Section
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default OvarianCystsGuideCard1;
