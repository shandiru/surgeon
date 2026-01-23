"use client";
import React from "react";

const CervicalScreeningGuidecard7 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-14">
      {/* CARD CONTAINER */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 
        flex flex-col gap-10 rounded-2xl border py-10 px-8 shadow-sm 
        animate-in slide-in-from-right-5 duration-300 bg-white"
        style={{ borderColor: "#FFC5D3" }}
      >
        {/* HEADER */}
        <div className="text-center">
          <h2 className="font-extrabold text-3xl mb-2 text-primary-pink">
            Remember
          </h2>
          <p className="text-lg text-black">
            Smear tests are simple steps that protect your future.
          </p>
        </div>

        {/* GRID BOXES */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* BOX 1 */}
          <div
            className="bg-[#FFF5F8] p-6 rounded-xl shadow-sm border transition 
            hover:shadow-lg hover:-translate-y-2 active:scale-[0.98]"
            style={{ borderColor: "#ff97b3" }}
          >
            <div
              className="flex items-center justify-center w-16 h-16 mx-auto 
              rounded-full bg-[#ff97b3] mb-3 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <p className="font-semibold text-lg text-primary-pink">Quick</p>
          </div>

          {/* BOX 2 */}
          <div
            className="bg-[#FFF5F8] p-6 rounded-xl shadow-sm border transition 
            hover:shadow-lg hover:-translate-y-2 active:scale-[0.98]"
            style={{ borderColor: "#ff97b3" }}
          >
            <div
              className="flex items-center justify-center w-16 h-16 mx-auto 
              rounded-full bg-[#ff97b3] mb-3 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
            </div>
            <p className="font-semibold text-lg text-primary-pink">Simple</p>
          </div>

          {/* BOX 3 */}
          <div
            className="bg-[#FFF5F8] p-6 rounded-xl shadow-sm border transition 
            hover:shadow-lg hover:-translate-y-2 active:scale-[0.98]"
            style={{ borderColor: "#ff97b3" }}
          >
            <div
              className="flex items-center justify-center w-16 h-16 mx-auto 
              rounded-full bg-[#ff97b3] mb-3 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
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
            <p className="font-semibold text-lg text-primary-pink">Life-saving</p>
          </div>
        </div>

        {/* FINAL STATEMENT */}
        <div className="text-center">
          <p className="text-2xl font-bold text-primary-pink">
            Don't miss your screening — it could save your life.
          </p>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => {
            setShowCard(8);
            setActiveButton(7);
          }}
         className="inline-flex items-center justify-center bg-primary-pink 
                hover:bg-primary-pink/80 text-white rounded-md text-sm font-medium 
                transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%]"
        >
          Continue to Final Summary
        </button>
      </div>
    </div>
  );
};

export default CervicalScreeningGuidecard7;
