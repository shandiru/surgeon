"use client";
import React from "react";

const CervicalScreeningGuideCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      {/* CARD CONTAINER */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10
        flex flex-col gap-8 rounded-2xl border shadow-sm p-8
        animate-in slide-in-from-right-5 duration-300 bg-white border-light-pink-2"
      >
        {/* ⭐ Layout Updated:
            - Mobile = 1 column
            - Tablet = 1 column
            - Desktop (lg) = 2 columns */}
        <section className="py-10 bg-white rounded-xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT BOX */}
              <div
                className="bg-white text-primary-pink rounded-2xl shadow-md p-8
                transition duration-300 ease-in-out
                hover:scale-105 hover:-translate-y-2 hover:shadow-xl
                active:scale-[0.98] active:shadow-lg cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-pink shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Getting Ready
                  </h2>
                </div>

                <ul className="space-y-4 text-black leading-relaxed">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-pink mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    Book your test mid-cycle (about a week after your period)
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-pink mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    Avoid spermicides, lubricants, pessaries or vaginal creams
                    for a few days before
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-pink mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    Don't have the test during your period
                  </li>
                </ul>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center lg:justify-end transition duration-300 ease-in-out 
                            hover:scale-105 active:scale-[0.97] cursor-pointer">
                <img
                  alt="Smear test preparation illustration"
                  className="w-full max-w-md rounded-2xl shadow-xl border-4 border-white
                           transition duration-300 transform
                           hover:shadow-2xl"
                  loading="lazy"
                  src="/smear-test-prep.png"
                />
              </div>

            </div>
          </div>
        </section>

        {/* NEXT BUTTON */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => {
              setShowCard(5);
              setActiveButton(4);
            }}
            className="inline-flex items-center justify-center bg-primary-pink
            hover:bg-primary-pink/80 text-white rounded-md text-sm font-medium
            transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%]"
          >
            Continue to Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default CervicalScreeningGuideCard4;
