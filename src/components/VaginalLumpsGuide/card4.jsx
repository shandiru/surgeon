"use client";
import { AlertTriangle } from "lucide-react";

const VaginalLumpsGuideCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">

        {/* MAIN BOX */}
        <div
          className="rounded-2xl p-8 border shadow-sm"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgb(255,197,211)",
          }}
        >
          {/* HEADER */}
          <h2 className="text-3xl font-bold flex items-center gap-2 mb-4" style={{ color: "#FF4B8B" }}>
            <AlertTriangle className="w-7 h-7 text-[#FF4B8B]" />
            When to See Your Doctor
          </h2>

          <p className="text-lg mb-6" style={{ color: "#7a2f4f" }}>
            Contact your doctor promptly if you notice any of the following:
          </p>

          {/* BULLET POINTS */}
          <div className="space-y-4">
            {[
              "A new lump that does not disappear after 2–3 weeks",
              "Painful or tender lump",
              "A lump that grows in size",
              "The lump feels unusually hard or firm",
              "Pus, bleeding, or signs of infection",
              "Unusual or foul-smelling vaginal discharge",
              "Fever, chills, or feeling unwell",
              "Symptoms suggesting a sexually transmitted infection (STI)",
              "A lump after shaving or waxing that does not improve",
              "Any lump that worries you or feels different"
            ].map((symptom, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg border bg-white hover:bg-[#FFF5F8] hover:shadow-md transition"
                style={{ borderColor: "rgb(255,197,211)" }}
              >
                <span
                  className="mt-1 w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#FF4B8B" }}
                ></span>

                <span className="text-[#7a2f4f] text-sm leading-relaxed">
                  {symptom}
                </span>
              </div>
            ))}
          </div>

          {/* IMPORTANT BOX */}
          <div
            className="mt-8 p-6 rounded-xl"
            style={{ backgroundColor: "#FF4B8B" }}
          >
            <p className="text-white font-semibold text-lg">
              Seek medical attention if symptoms persist, worsen, or cause pain.
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
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md text-sm font-medium h-10 px-4 transition-all"
          >
            Continue to Next Step
          </button>
        </div>

      </div>
    </div>
  );
};

export default VaginalLumpsGuideCard4;
