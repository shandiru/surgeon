'use client';
import React from "react";

const CervicalScreeningGuideCard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        {/* Outer Container with Your Old Border */}
        <div
          className="max-w-5xl mx-auto rounded-2xl p-10 shadow-md border mb-10
          transition duration-300 hover:shadow-[0_8px_30px_rgba(255,151,179,0.35)]
          hover:-translate-y-1"
          style={{ borderColor: "rgb(255,197,211)", backgroundColor: "#FFFFFF" }}
        >

          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ff97b3] shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF4B8B]">
              Who Doesn’t Usually Need a Smear Test?
            </h2>
          </div>

          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Under 25 */}
            <div
              className="bg-white rounded-2xl border p-6 shadow-sm 
              transition duration-300 hover:shadow-[0_8px_30px_rgba(255,151,179,0.35)]
              hover:border-[#ff97b3] hover:-translate-y-2 active:scale-[0.98]"
              style={{ borderColor: "rgb(255,197,211)" }}
            >
              <h3 className="text-xl font-semibold text-[#FF4B8B] mb-4">Under 25</h3>

              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li>• Cervical changes are common and usually harmless</li>
                <li>• Early treatment can affect future fertility</li>
              </ul>

              <p className="text-sm text-gray-600 mt-4">
                <strong className="text-[#ff97b3]">Note:</strong>  
                See a doctor if you have unusual bleeding or bleeding after sex.
              </p>
            </div>

            {/* Over 65 */}
            <div
              className="bg-white rounded-2xl border p-6 shadow-sm 
              transition duration-300 hover:shadow-[0_8px_30px_rgba(255,151,179,0.35)]
              hover:border-[#ff97b3] hover:-translate-y-2 active:scale-[0.98]"
              style={{ borderColor: "rgb(255,197,211)" }}
            >
              <h3 className="text-xl font-semibold text-[#FF4B8B] mb-4">Over 65</h3>

              <p className="text-gray-700 leading-relaxed">
                If you've had 3 normal tests in a row, no further smears are usually needed.
              </p>
            </div>

          </div>

          {/* Continue Button (your exact button style) */}
          <div className="pt-10 flex justify-center">
            <button
              onClick={() => {
                setShowCard(4);
                setActiveButton(3);
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
    </section>
  );
};

export default CervicalScreeningGuideCard3;
