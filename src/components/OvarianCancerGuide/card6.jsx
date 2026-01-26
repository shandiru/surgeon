"use client";
import React from "react";
import { HeartPulse } from "lucide-react";

const OvarianCancerGuidecard6 = ({ setShowCard, setActiveButton }) => {
  const treatments = [
    {
      title: "Surgery + Chemotherapy",
      description: "Often used together as first-line treatment",
    },
    {
      title: "Targeted Therapies",
      description: "PARP inhibitors, Angiogenesis inhibitors, MEK inhibitors",
    },
    {
      title: "Intraperitoneal Chemotherapy",
      description: "Delivering chemotherapy directly into the abdominal cavity",
    },
    {
      title: "Radiation Therapy",
      description: "Especially for isolated recurrences in the pelvic area",
    },
    {
      title: "Clinical Trials",
      description: "Access to new and emerging treatments",
    },
    {
      title: "Complementary Therapies",
      description: "Supportive care to improve wellbeing",
    },
  ];

  return (
    <div className="space-y-6 pb-14">
      {/* CARD CONTAINER */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 
        flex flex-col gap-10 rounded-2xl border border-primary-pink/10 p-8 shadow-sm
        animate-in slide-in-from-right-5 duration-300 bg-white"
      >
        {/* HEADER */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-1">
            <HeartPulse className="h-8 w-8 text-primary-pink" />
            <h3 className="text-3xl font-bold text-primary-pink">Treatment of Ovarian Cancer</h3>
          </div>

          <p className="text-lg text-black">
            Treatment depends on the type of ovarian cancer, your overall health, and fertility
            considerations.
          </p>

          <p className="font-semibold text-lg text-primary-pink">
            The main goal is to remove the cancer whenever possible.
          </p>
        </div>

        {/* GRID OF TREATMENTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 
              hover:shadow-xl hover:-translate-y-2 active:scale-[0.98] cursor-pointer"
            >
              <h4 className="font-semibold text-lg mb-2" style={{ color: "rgb(255,75,139)" }}>
                {item.title}
              </h4>
              <p className="text-black">{item.description}</p>
            </div>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => {
              setShowCard(7);
              setActiveButton(6);
            }}
            className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 
            text-white rounded-md text-sm font-medium transition-all 
            h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%]"
          >
            Continue to Prevention & Early Detection
          </button>
        </div>
      </div>
    </div>
  );
};

export default OvarianCancerGuidecard6;
