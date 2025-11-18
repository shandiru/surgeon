import React from "react";

const CervicalScreeningGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">

      {/* Card Container — OLD STYLE RESTORED */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 
        flex flex-col gap-6 rounded-2xl border shadow-sm 
        animate-in slide-in-from-right-5 duration-300 p-8"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgb(255,197,211)", // ⭐ OLD BORDER STYLE
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE — OVERVIEW CONTENT */}
          <div className="text-center md:text-left space-y-6 px-4 md:px-8">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF4B8B] [text-wrap:balance]">
              Cervical Screening Overview
            </h2>

            {/* Overview Paragraph */}
            <p className="text-lg leading-relaxed text-[#7a2f4f] [text-wrap:pretty]">
              Cervical screening — also called the <strong>smear test</strong> — checks 
              the health of cells in your cervix. It is designed to 
              <strong> prevent cervical cancer</strong> by identifying abnormal changes 
              early, before they become dangerous.
              <br /><br />
              The test is quick, simple, and one of the most effective ways 
              to protect your cervical health.
            </p>

            {/* Stat Box — OLD BORDER STYLE APPLIED */}
            <div
              className="rounded-xl border p-6 shadow-md bg-[#FFF5F8] bg-white/70 backdrop-blur-sm max-w-md"
              style={{
                borderColor: "rgb(255,197,211)", // ⭐ OLD BORDER
              }}
            >
              <div className="text-4xl font-extrabold mb-2 text-[#FF4B8B]">90%</div>
              <p className="text-base text-[#FF4B8B]/90 leading-relaxed">
                Cervical screening can detect up to 90% of early cell changes.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="flex justify-center md:justify-end px-4 md:px-8">
            <img
              src="/cervical-screening.png"
              alt="Cervical screening illustration"
              loading="lazy"
              className="w-full max-w-lg rounded-2xl shadow-xl
                transition duration-300 transform
                hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,75,139,0.5)]
                active:scale-105 active:-translate-y-2 active:shadow-[0_10px_40px_rgba(255,75,139,0.5)]"
            />
          </div>

        </div>

        {/* BUTTON — Your ORIGINAL STYLE */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(2);
              setActiveButton(1);
            }}
            className="inline-flex items-center justify-center bg-[#FF4B8B] 
            hover:bg-[#FF4B8B]/80 text-white rounded-md text-sm font-medium 
            transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%]"
          >
            Continue to Next Section
          </button>
        </div>

      </div>
    </div>
  );
};

export default CervicalScreeningGuideCard1;
