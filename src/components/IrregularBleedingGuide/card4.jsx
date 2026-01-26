"use client";
import React from "react";

const IrregularBleedingGuideCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <section className="my-12 px-4">
      <main className="max-w-4xl mx-auto px-4 py-8 bg-white">
        {/* CARD WRAPPER */}
        <div className="bg-white text-[#333] flex flex-col gap-6 rounded-xl py-6 px-4 sm:px-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#ff97b3]/30">
          {/* HEADER */}
          <div className="grid auto-rows-min items-start gap-2 border-b border-[#ff97b3]/30 pb-4">
            <div className="leading-snug font-semibold flex items-center gap-2 text-primary-pink text-lg sm:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-pink flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              What to Track Before Your Appointment
            </div>

            <p className="text-sm sm:text-base text-[#666]">
              Bringing a few notes can really help your doctor understand your situation better.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid gap-4">
            {/* CARD ITEMS */}
            {[
              {
                title: "Dates and length of your periods",
                desc: "Keep a record of when periods start and end",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-primary-pink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M8 2v4M16 2v4M3 10h18"></path>
                  </svg>
                ),
              },
              {
                title: "How heavy the bleeding is",
                desc: "Note if bleeding is light, normal, or heavy",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-primary-pink"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                ),
              },
              {
                title: "Any pain or other symptoms",
                desc: "Document cramping, pain, or unusual symptoms",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-primary-pink"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                ),
              },
              {
                title: "Changes in lifestyle",
                desc: "Track stress, exercise, weight changes, medications",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-primary-pink"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#fff7f9] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="p-2 rounded-full bg-[#ff97b3]/10 flex-shrink-0">{item.icon}</div>

                <div>
                  <h4 className="font-semibold mb-1 text-primary-pink text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CONTINUE BUTTON */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(5);
                setActiveButton(4);
              }}
              className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md text-sm font-medium transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
            >
              Continue to Next Step
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default IrregularBleedingGuideCard4;
