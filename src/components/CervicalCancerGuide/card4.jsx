"use client";
import { AlertTriangle } from "lucide-react";

const CervicalCancerGuideCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">

        {/* MAIN WRAPPER BOX */}
        <div
          className="rounded-2xl p-8 border transition-all duration-300 shadow-sm bg-white border-light-pink-2"
        >
          {/* HEADER */}
          <div className="mb-6">
            <span
              className="font-semibold text-sm uppercase tracking-wide text-primary-pink"
            >
              Step 1
            </span>
            <h2 className="text-3xl font-bold mt-2 text-primary-pink">
              Symptoms of Cervical Cancer
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p className="text-lg mb-8 text-black">
            Cervical cancer often develops without early warning signs.  
            That’s why regular screenings are essential.
          </p>

          {/* GRID OF SYMPTOMS */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Pelvic pain",
              "Pain or bleeding during or after sex",
              "Unusual vaginal discharge",
              "Bleeding between periods",
              "Bleeding after menopause",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border transition-all duration-300 hover:bg-light-pink-1 hover:shadow-lg active:bg-light-pink-1 active:shadow-lg border-light-pink-2"
              >
                <div
                  className="w-2 h-2 bg-primary-pink rounded-full mt-2 flex-shrink-0"
                ></div>

                <span className="text-black text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* WARNING BOX */}
          <div
            className="mt-8 p-6 rounded-xl bg-primary-pink"
          >
            <p className="text-white font-semibold text-lg">
              If you notice any of these symptoms, contact your doctor promptly.
            </p>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-4 pb-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(5);
              setActiveButton(4);
            }}
            className="bg-primary-pink hover:bg-primary-pink/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md text-sm font-medium transition-all h-10 px-4"
          >
            Continue to Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default CervicalCancerGuideCard4;
