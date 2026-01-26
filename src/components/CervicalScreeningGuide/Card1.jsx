import React from "react";

const CervicalScreeningGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">

      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10
        flex flex-col gap-6 rounded-2xl border shadow-sm
        animate-in slide-in-from-right-5 duration-300 p-8 bg-white border-light-pink-2"
      >
        {/* ⭐ Layout updated: 
            - Mobile = 1 column
            - Tablet = 1 column
            - Desktop (lg) = 2 columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left space-y-6 px-2 sm:px-4 lg:px-8">

            <h2 className="text-3xl md:text-4xl font-bold text-primary-pink [text-wrap:balance]">
              Cervical Screening Overview
            </h2>

            <p className="text-lg leading-relaxed text-black [text-wrap:pretty]">
              Cervical screening — also called the <strong>smear test</strong> — checks 
              the health of cells in your cervix. It is designed to 
              <strong> prevent cervical cancer</strong> by identifying abnormal changes 
              early, before they become dangerous.
              <br /><br />
              The test is quick, simple, and one of the most effective ways 
              to protect your cervical health.
            </p>

            {/* Stat Box */}
            <div
              className="rounded-xl border p-6 shadow-md bg-light-pink-1 backdrop-blur-sm max-w-md mx-auto lg:mx-0 border-light-pink-2"
            >
              <div className="text-4xl font-extrabold mb-2 text-primary-pink">90%</div>
              <p className="text-base text-primary-pink leading-relaxed">
                Cervical screening can detect up to 90% of early cell changes.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="flex justify-center lg:justify-end px-2 sm:px-4 lg:px-8">
            <img
              src="/cervical-screening.png"
              alt="Cervical screening illustration"
              loading="lazy"
              className="w-full max-w-lg rounded-2xl shadow-xl
                transition duration-300 transform
                hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                active:scale-105 active:-translate-y-2 active:shadow-2xl"
            />
          </div>

        </div>

        {/* BUTTON */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(2);
              setActiveButton(1);
            }}
            className="inline-flex items-center justify-center bg-primary-pink
            hover:bg-primary-pink/80 text-white rounded-md text-sm font-medium
            transition-all h-10 px-4 w-[90%] md:w-[70%] lg:w-[40%]"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default CervicalScreeningGuideCard1;
