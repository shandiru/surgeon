'use client';
import React from 'react';

const IrregularBleedingGuideCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <section className="my-12 px-4">
      <main className="max-w-4xl mx-auto px-4 py-8 bg-white">
        
        {/* MAIN CARD */}
        <div className="bg-[#FFF1F5] text-[#4B0D26] flex flex-col gap-6 rounded-xl py-8 shadow-md hover:shadow-lg transition-all duration-300">

          {/* HEADER */}
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 pb-6 border-b border-[#FFB3C9]/40">
            <div className="leading-none font-semibold flex items-center gap-2 text-[#FF4B8B] text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#FF4B8B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              Common Causes
            </div>

            <p className="text-sm text-[#804659]">
              Irregular vaginal bleeding can be linked to several conditions. In most cases, the cause is not serious, but it's important to get checked.
            </p>
          </div>

          {/* CONTENT LIST */}
          <div className="px-6">
            <div className="grid gap-4">

              {/* Card Item Component */}
              {[
                { tag: "common", title: "Fibroids", desc: "Non-cancerous growths in the uterus" },
                { tag: "common", title: "Endometriosis", desc: "Tissue similar to uterine lining grows outside uterus" },
                { tag: "common", title: "PCOS", desc: "Polycystic Ovary Syndrome affects hormone levels" },
                { tag: "common", title: "Hormonal imbalances", desc: "Changes in estrogen and progesterone levels" },
                { tag: "normal", title: "Puberty or menopause", desc: "Natural life stage transitions" },
                { tag: "normal", title: "Pregnancy", desc: "Early pregnancy can cause irregular bleeding" },
                { tag: "lifestyle", title: "Excessive exercise", desc: "Intense physical activity can affect cycles" },
                { tag: "serious", title: "PID", desc: "Pelvic inflammatory disease requires treatment" },
                { tag: "serious", title: "Tumours or growths", desc: "Abnormal growths need medical evaluation" },
              ].map((cause, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span
                    className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium text-[#FF4B8B] bg-[#FFE0EB] w-fit whitespace-nowrap shrink-0"
                  >
                    {cause.tag}
                  </span>

                  <div className="flex-1">
                    <h4 className="font-semibold text-[#FF4B8B]">{cause.title}</h4>
                    <p className="text-sm text-[#804659] mt-1">{cause.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* CONTINUE BUTTON */}
          <div className="pt-6 flex justify-center px-6">
            <button
              onClick={() => {
                setShowCard(3);
                setActiveButton(2);
              }}
              className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 
              rounded-md text-sm font-medium transition-all h-10 px-4 
              w-[90%] md:w-[60%] lg:w-[40%] text-white"
            >
              Continue to Next Section
            </button>
          </div>

        </div>
      </main>
    </section>
  );
};

export default IrregularBleedingGuideCard2;
