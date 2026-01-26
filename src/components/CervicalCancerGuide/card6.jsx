"use client";
import React from "react";
import { Heart, Radiation, Pill, Scissors, Sparkle, ClipboardList } from "lucide-react";

const CervicalCancerGuidecard6 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto rounded-2xl p-8 border shadow-sm animate-in slide-in-from-right-5 duration-300 bg-white border-light-pink-2"
      >
        {/* Header */}
        <div className="mb-6">
          <span
            className="font-semibold text-sm uppercase tracking-wide flex items-center gap-2 text-primary-pink"
          >
            <Heart className="w-6 h-6 text-primary-pink" />
            Step 3
          </span>

          <h2 className="text-3xl font-bold mt-2 text-primary-pink">
            How is Cervical Cancer Treated?
          </h2>

          <p className="text-lg mt-4 text-black">
            Treatment depends on the type, stage, and spread of the cancer — as well as
            your overall health and personal needs.
          </p>
        </div>

        {/* ================= WE CONSIDER BOX ================= */}
        <div
          className="p-4 rounded-lg border bg-light-pink-1 border-light-pink-2"
        >
          <h3 className="font-semibold mb-2 text-black">We consider:</h3>

          <div className="grid md:grid-cols-2 gap-2 text-sm text-black">
            {[
              "Type and stage of cancer",
              "Size and location of cancer cells",
              "Whether the cancer has spread",
              "Your overall health and personal needs",
            ].map((item, index) => (
              <div className="flex items-center gap-2" key={index}>
                <div className="w-1.5 h-1.5 bg-primary-pink rounded-full" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm font-medium mt-3 text-primary-pink">
            Our goal is to treat the cancer while tailoring care to you.
          </p>
        </div>

        {/* ================= SECTION 1: SURGERY ================= */}
        <div className="mt-10">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2" className="text-primary-pink">
            <Scissors className="w-5 h-5 text-primary-pink" />
            1. Surgery (Often the First Step)
          </h3>

          <div className="grid gap-4">
            {[
              { title: "Cryosurgery", desc: "– freezing tissue to kill cancer cells" },
              { title: "Cone biopsy (conization)", desc: "– removes a cone-shaped section of cervical tissue" },
              { title: "LEEP (Loop Electrosurgical Excision Procedure)", desc: "– removes tissue using a thin heated wire loop" },
              { title: "Hysterectomy", desc: "– removes the uterus and cervix; minimally invasive methods are common" },
              { title: "Total pelvic exenteration", desc: "– rare, for advanced cases; involves removal of reproductive organs" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-4 bg-white rounded-lg border transition-all duration-300 hover:bg-light-pink-1 hover:border-light-pink-2 hover:shadow-lg border-light-pink-2"
              >
                <div className="w-2 h-2 bg-primary-pink rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-primary-pink">{item.title}</h4>
                  <p className="text-sm text-black mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: COMBINATION TREATMENTS ================= */}
        <div className="mt-10">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-primary-pink">
            <Radiation className="w-5 h-5 text-primary-pink" />
            2. Combination Treatments
          </h3>

          <p className="text-black mb-4">
            In some cases, surgery may be combined with:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Radiation */}
            <div
              className="flex gap-3 p-4 bg-white rounded-lg border transition-all duration-300 hover:bg-light-pink-1 hover:border-light-pink-2 hover:shadow-lg border-light-pink-2"
            >
              <div className="w-2 h-2 bg-primary-pink rounded-full mt-2" />
              <div>
                <h4 className="font-medium text-primary-pink">Radiation therapy</h4>
                <p className="text-sm text-black mt-1">
                  – high-energy rays to destroy cancer cells
                </p>
              </div>
            </div>

            {/* Chemotherapy */}
            <div
              className="flex gap-3 p-4 bg-white rounded-lg border transition-all duration-300 hover:bg-light-pink-1 hover:border-light-pink-2 hover:shadow-lg border-light-pink-2"
            >
              <div className="w-2 h-2 bg-primary-pink rounded-full mt-2" />
              <div>
                <h4 className="font-medium text-primary-pink">Chemotherapy</h4>
                <p className="text-sm text-black mt-1">
                  – drugs that kill or slow the growth of cancer cells
                </p>
              </div>
            </div>

            {/* Immunotherapy / Targeted */}
            <div
              className="flex gap-3 p-4 bg-white rounded-lg border transition-all duration-300 hover:bg-light-pink-1 hover:border-light-pink-2 hover:shadow-lg border-light-pink-2"
            >
              <div className="w-2 h-2 bg-primary-pink rounded-full mt-2" />
              <div>
                <h4 className="font-medium text-primary-pink">Targeted or Immunotherapy</h4>
                <p className="text-sm text-black mt-1">
                  – used in select cases to boost treatment effectiveness
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 3: RECOVERY ================= */}
        <div className="mt-10">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-primary-pink">
            <Heart className="w-5 h-5 text-primary-pink" />
            3. Recovery & Support
          </h3>

          <div className="space-y-4">
            <div
              className="p-4 bg-white rounded-lg border transition-all duration-300 hover:bg-light-pink-1 hover:border-light-pink-2 hover:shadow-lg border-light-pink-2"
            >
              <h4 className="font-medium text-primary-pink mb-2">Enhanced Recovery Programs</h4>
              <p className="text-sm text-black">
                Special recovery plans help patients heal faster after surgery.
              </p>
            </div>

            <div
              className="p-4 bg-white rounded-lg border transition-all duration-300 hover:bg-light-pink-1 hover:border-light-pink-2 hover:shadow-lg border-light-pink-2"
            >
              <h4 className="font-medium text-primary-pink mb-2">Multi-specialty Approach</h4>
              <p className="text-sm text-black">
                Oncologists, surgeons, and other specialists work together to design the best care plan.
              </p>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => {
              setShowCard(7);
              setActiveButton(6);
            }}
            className="bg-primary-pink hover:bg-primary-pink/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default CervicalCancerGuidecard6;
