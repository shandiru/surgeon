"use client";
import { AlertTriangle, Lightbulb } from "lucide-react";

const FibroidGuideCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      {" "}
      {/* ⭐ ADDED PADDING BOTTOM */}
      <div className="max-w-5xl mx-auto bg-white text-[#212529] flex flex-col gap-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-7 w-7 text-[#FF4B8B]" />
            <h2 className="font-bold text-2xl md:text-3xl text-[#FF4B8B]">Causes & Risk Factors</h2>
          </div>
          <p className="text-sm md:text-base text-black">
            The exact cause is unknown, but your risk may be higher if you:
          </p>
        </div>

        {/* Risk Factors Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {[
              "Have a family history of fibroids",
              "Are of African or Caribbean heritage",
              "Are overweight",
            ].map((item, i) => (
              <span
                key={i}
                className="block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98] bg-[#FF4B8B]/10 text-[#BB125B]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            {["Started your periods early", "Have hormonal imbalances"].map((item, i) => (
              <span
                key={i}
                className="block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98] bg-[#FF4B8B]/10 text-[#BB125B]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* NEXT BUTTON */}
      <div className="pt-4 pb-6 flex justify-center">
        {" "}
        {/* ⭐ EXTRA SPACE BELOW BUTTON */}
        <button
          onClick={() => {
            setShowCard(5);
            setActiveButton(4);
          }}
          className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md text-sm font-medium transition-all h-10 px-4"
        >
          Continue to Next Step
        </button>
      </div>
    </div>
  );
};

export default FibroidGuideCard4;
