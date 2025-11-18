"use client";
import { AlertTriangle } from "lucide-react";

const VulvarGuideCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">  {/* ⭐ ADDED PADDING BOTTOM */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">

        {/* MAIN WRAPPER BOX */}
        <div
          className="rounded-2xl p-8 border transition-all duration-300 shadow-sm"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgb(255,197,211)",
          }}
        >
          {/* HEADER */}
          <div className="mb-6">
            <span
              className="font-semibold text-sm uppercase tracking-wide"
              style={{ color: "#FF4B8B" }}
            >
              Step 1
            </span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: "#FF4B8B" }}>
              Recognizing Symptoms
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p className="text-lg mb-8" style={{ color: "#7a2f4f" }}>
            Vulvar cancer most often affects the labia (skin folds around the vagina),
            but it can occur anywhere on the vulva.
          </p>

          {/* GRID OF SYMPTOMS */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Persistent vulvar itching (lasting more than a few weeks)",
              "A cut or sore that won't heal",
              "A lump or mass on the vulva",
              "Vulvar pain or tenderness",
              "Unusual bleeding from the vulva (not menstrual)",
              "Burning in the genital area that continues despite treatment",
              "Changes in a mole or birthmark on the vulva (size, colour, or texture)",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg active:bg-[#FFF5F8] active:shadow-lg"
                style={{ borderColor: "rgb(255,197,211)" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="h-5 w-5 mt-0.5 flex-shrink-0"
                  style={{ color: "#FF4B8B" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>

                <span className="text-[#7a2f4f]">{text}</span>
              </div>
            ))}
          </div>

          {/* WARNING BOX */}
          <div
            className="mt-8 p-6 rounded-xl"
            style={{ backgroundColor: "#FF4B8B" }}
          >
            <p className="text-white font-semibold text-lg">
              If you notice any of these symptoms, it's important to see your doctor promptly.
            </p>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-4 pb-6 flex justify-center"> {/* ⭐ EXTRA SPACE BELOW BUTTON */}
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
    </div>
  );
};

export default VulvarGuideCard4;
