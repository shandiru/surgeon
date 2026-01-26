"use client";
import React from "react";

const Endometriosiscard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-pink">
            Impact on Fertility and Wellbeing
          </h2>
          <p className="text-black mt-3 max-w-2xl mx-auto">
            Endometriosis can affect different aspects of life. Understanding its impact helps in
            finding the right treatment and support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Fertility Impact */}
          <div
            className="bg-white text-gray-800 rounded-2xl p-8 shadow-lg transition duration-300 
          hover:shadow-[0_0_25px_rgba(176,59,102,0.4)] hover:-translate-y-2 active:scale-[0.98]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF4B8B]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-pink"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-pink">Fertility Impact</h3>
            </div>
            <p className="text-black leading-relaxed">
              Endometriosis can make it harder to get pregnant, but many women still conceive
              naturally. Early diagnosis and treatment can help protect your fertility options.
            </p>
          </div>

          {/* Emotional Wellbeing */}
          <div
            className="bg-white text-gray-800 rounded-2xl p-8 shadow-lg transition duration-300 
          hover:shadow-[0_0_25px_rgba(176,59,102,0.4)] hover:-translate-y-2 active:scale-[0.98]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF4B8B]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-pink"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-pink">Emotional Wellbeing</h3>
            </div>
            <p className="text-black leading-relaxed">
              Symptoms can affect your emotional health and quality of life. It&apos;s important to
              seek support and early treatment for both physical and mental wellbeing.
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="pt-6 flex justify-center">
        <button
          onClick={() => {
            setShowCard(4);
            setActiveButton(3);
          }}
          className="inline-flex items-center justify-center gap-2 bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md text-sm font-medium h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
        >
          Learn About Screening
        </button>
      </div>
    </div>
  );
};

export default Endometriosiscard3;
