"use client";
import React from "react";
import { Target } from "lucide-react";

const OvarianCancerGuidecard5 = ({ setShowCard, setActiveButton }) => {
  const tests = [
    {
      number: "1",
      title: "CT scan",
      description: "Produces detailed images of the ovaries and shows abnormalities",
    },
    {
      number: "2",
      title: "X-ray",
      description: "Checks if cancer has spread to other areas of the body",
    },
    {
      number: "3",
      title: "Biopsy",
      description: "Tissue or cells are examined for cancer",
    },
    {
      number: "4",
      title: "Laparoscopy",
      description: "A small camera is inserted into the abdomen to directly examine the ovaries",
    },
  ];

  return (
    <div className="space-y-6 pb-10">
      {/* CARD CONTAINER */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 
        flex flex-col gap-8 rounded-2xl border border-[#FF4B8B]/10 shadow-sm p-8 
        animate-in slide-in-from-right-5 duration-300 bg-white"
      >
        {/* HEADER */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Target className="h-8 w-8" style={{ color: "#FF4B8B" }} />
            <h3 className="text-3xl font-bold" style={{ color: "#FF4B8B" }}>
              Diagnosis of Ovarian Cancer
            </h3>
          </div>

          <p className="text-lg" style={{ color: "#7a2f4f" }}>
            Several tests and scans can help identify ovarian cancer, including:
          </p>
        </div>

        {/* GRID OF TESTS */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {tests.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#333] flex flex-col gap-4 rounded-xl p-6 
              shadow-md transition duration-300 ease-in-out 
              hover:shadow-xl hover:-translate-y-2 active:scale-[0.98] cursor-pointer"
            >
              <div className="flex items-center gap-3 font-semibold text-[#FF4B8B]">
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#FF4B8B]/10 text-sm font-bold text-[#FF4B8B]">
                  {item.number}
                </span>
                {item.title}
              </div>
              <p className="text-black">{item.description}</p>
            </div>
          ))}
        </div>

        {/* WARNING BOX */}
        <div className="rounded-xl px-6 py-6 shadow-md bg-[#FF4B8B]/10">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center font-bold bg-white text-[#FF4B8B]">
              →
            </div>
            <p className="font-medium text-[#FF4B8B]">
              If ovarian cancer is suspected, these tests also help determine how far the cancer has
              spread.
            </p>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => {
              setShowCard(6);
              setActiveButton(5);
            }}
            className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 
            text-white rounded-md text-sm font-medium transition-all 
            h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%]"
          >
            Continue to Treatment Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default OvarianCancerGuidecard5;
