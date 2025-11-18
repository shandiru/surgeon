"use client";
import React from "react";

const CervicalScreeningGuidecard5 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      {/* CARD CONTAINER */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 
        flex flex-col gap-8 rounded-2xl border shadow-sm p-8 
        animate-in slide-in-from-right-5 duration-300"
        style={{
          borderColor: "rgb(255,197,211)",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* NEW CONTENT YOU PROVIDED */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div
              data-slot="card"
              className="bg-white text-[#FF4B8B] flex flex-col gap-8 rounded-2xl p-8 shadow-md border border-gray-200
                     transition duration-300 hover:shadow-[0_10px_30px_rgba(255,197,211,0.45)] hover:-translate-y-2 
                     active:scale-[0.98]"
            >
              {/* HEADER */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFC5D3] shadow-md">
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
              <div className="bg-[#FFF5F8] border border-gray-200 text-[#FF4B8B] p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-[#ff97b3] mb-1">
                  Takes just 5 minutes
                </p>
                <p className="text-gray-700 text-sm">
                  The entire procedure is quick and straightforward
                </p>
              </div>

              {/* STEPS */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#FFC5D3] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow">
                    1
                  </div>
                  <p className="text-gray-700">
                    A small speculum gently opens the vagina
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#FFC5D3] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow">
                    2
                  </div>
                  <p className="text-gray-700">
                    A soft brush collects cells from your cervix
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#FFC5D3] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow">
                    3
                  </div>
                  <p className="text-gray-700">
                    Your sample is sent to a lab for testing
                  </p>
                </div>
              </div>

              {/* BOX 2 */}
              <div className="bg-[#FFF5F8] border border-gray-200 text-[#FF4B8B] p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-[#ff97b3] mb-1">
                  We use Dual Testing:
                </p>
                <p className="text-gray-700 text-sm">
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
           className="inline-flex items-center justify-center bg-[#FF4B8B] 
                hover:bg-[#FF4B8B]/80 text-white rounded-md text-sm font-medium 
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
