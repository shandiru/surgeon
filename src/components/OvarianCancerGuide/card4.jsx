"use client";
import React from "react";
import { AlertTriangle } from "lucide-react";

const OvarianCancerGuideCard4 = ({ setShowCard, setActiveButton }) => {
  const symptoms = [
    "Persistent bloating",
    "Swollen tummy",
    "Pelvic or abdominal pain/discomfort",
    "Loss of appetite or feeling full after eating small amounts",
    "Frequent or urgent need to urinate",
    "Indigestion or nausea",
    "Changes in bowel habits",
    "Pain during sexual intercourse",
    "Back pain",
    "Extreme tiredness",
    "Unexplained weight loss",
  ];

  return (
    <div className="space-y-6 pb-10">
      {/* CARD CONTAINER */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 
        flex flex-col gap-8 rounded-2xl border border-primary-pink shadow-sm p-8 
        animate-in slide-in-from-right-5 duration-300 bg-white"
      >
        {/* HEADER */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="h-8 w-8 text-primary-pink" />
            <h3 className="text-3xl font-bold text-primary-pink">Symptoms of Ovarian Cancer</h3>
          </div>

          <p className="text-lg text-black">
            Ovarian cancer can cause a variety of symptoms. Some of the most common include:
          </p>
        </div>

        {/* GRID OF SYMPTOMS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((item, index) => (
            <div
              key={index}
              className="bg-white text-primary-pink rounded-xl p-5 shadow-md 
              cursor-pointer transition duration-300 ease-in-out
              hover:shadow-xl hover:-translate-y-2 active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full flex-shrink-0 bg-primary-pink/30" />
                <p className="font-medium">{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WARNING BOX */}
        <div className="rounded-xl px-6 py-5 shadow-md bg-light-pink-1">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 font-bold bg-white text-primary-pink">
              !
            </div>
            <p className="font-medium text-primary-pink">
              If you experience these symptoms, it's important to see your GP for further tests.
            </p>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => {
              setShowCard(5);
              setActiveButton(4);
            }}
            className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 
            text-white rounded-md text-sm font-medium transition-all 
            h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%]"
          >
            Continue to Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default OvarianCancerGuideCard4;
