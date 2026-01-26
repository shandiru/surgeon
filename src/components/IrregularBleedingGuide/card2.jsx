"use client";
import React from "react";

const IrregularBleedingGuideCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <section className="my-12 px-4">
      <main className="max-w-4xl mx-auto px-4 py-8 bg-white">
        {/* MAIN CARD */}
        <div className="bg-light-pink-1 text-black flex flex-col gap-6 rounded-xl py-8 shadow-md hover:shadow-lg transition-all duration-300">
          {/* HEADER */}
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 pb-6 border-b border-primary-pink">
            <div className="leading-none font-semibold flex items-center gap-2 text-primary-pink text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-pink"
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

            <p className="text-sm text-black">
              Irregular vaginal bleeding can be linked to several conditions. In most cases, the
              cause is not serious, but it's important to get checked.
            </p>
          </div>

          {/* CONTENT LIST */}
          <div className="px-6">
            <div className="grid gap-4">
              {/* Card Item Component */}
              {[
                { tag: "common", title: "Fibroids", desc: "Non-cancerous growths in the uterus" },
                {
                  tag: "common",
                  title: "Endometriosis",
                  desc: "Tissue similar to uterine lining grows outside uterus",
                },
                {
                  tag: "common",
                  title: "PCOS",
                  desc: "Polycystic Ovary Syndrome affects hormone levels",
                },
                {
                  tag: "common",
                  title: "Hormonal imbalances",
                  desc: "Changes in estrogen and progesterone levels",
                },
                {
                  tag: "normal",
                  title: "Puberty or menopause",
                  desc: "Natural life stage transitions",
                },
                {
                  tag: "normal",
                  title: "Pregnancy",
                  desc: "Early pregnancy can cause irregular bleeding",
                },
                {
                  tag: "lifestyle",
                  title: "Excessive exercise",
                  desc: "Intense physical activity can affect cycles",
                },
                {
                  tag: "serious",
                  title: "PID",
                  desc: "Pelvic inflammatory disease requires treatment",
                },
                {
                  tag: "serious",
                  title: "Tumours or growths",
                  desc: "Abnormal growths need medical evaluation",
                },
              ].map((cause, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium text-primary-pink bg-light-pink-1 w-fit whitespace-nowrap shrink-0">
                    {cause.tag}
                  </span>

                  <div className="flex-1">
                    <h4 className="font-semibold text-primary-pink">{cause.title}</h4>
                    <p className="text-sm text-black mt-1">{cause.desc}</p>
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
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
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
