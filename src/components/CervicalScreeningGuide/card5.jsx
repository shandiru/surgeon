"use client";
import React from "react";

const CervicalScreeningGuidecard5 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      {/* CARD CONTAINER */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10
        flex flex-col gap-8 rounded-2xl border shadow-sm p-8
        animate-in slide-in-from-right-5 duration-300 border-light-pink-2 bg-white"
      >
        {/* NEW CONTENT YOU PROVIDED */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div
              data-slot="card"
              className="bg-white text-primary-pink flex flex-col gap-8 rounded-2xl p-8 shadow-md border border-light-pink-2
                     transition duration-300 hover:shadow-xl hover:-translate-y-2
                     active:scale-[0.98]"
            >
              {/* HEADER */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-pink-2 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M11 2v2"></path>
                    <path d="M5 2v2"></path>
                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                    <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                    <circle cx="20" cy="10" r="2"></circle>
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  What Happens During the Test
                </h2>
              </div>

              {/* BOX 1 */}
              <div className="bg-light-pink-1 border border-light-pink-2 text-primary-pink p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-primary-pink mb-1">
                  Takes just 5 minutes
                </p>
                <p className="text-black text-sm">
                  The entire procedure is quick and straightforward
                </p>
              </div>

              {/* STEPS */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-pink text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow">
                    1
                  </div>
                  <p className="text-black">
                    A small speculum gently opens the vagina
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary-pink text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow">
                    2
                  </div>
                  <p className="text-black">
                    A soft brush collects cells from your cervix
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary-pink text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow">
                    3
                  </div>
                  <p className="text-black">
                    Your sample is sent to a lab for testing
                  </p>
                </div>
              </div>

              {/* BOX 2 */}
              <div className="bg-light-pink-1 border border-light-pink-2 text-primary-pink p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-primary-pink mb-1">
                  We use Dual Testing:
                </p>
                <p className="text-black text-sm">
                  Checking for high-risk HPV and abnormal cells (for women over
                  25)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEXT BUTTON */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => {
              setShowCard(6);
              setActiveButton(5);
            }}
           className="inline-flex items-center justify-center bg-primary-pink
                hover:bg-primary-pink/80 text-white rounded-md text-sm font-medium
                transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%]"
          >
            Continue to Treatment Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default CervicalScreeningGuidecard5;
