"use client";
import {
  Phone,
  AlertTriangle
} from "lucide-react";

const PelvicPainGuideCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">

        {/* MAIN WRAPPER */}
        <div
          className="rounded-2xl p-8 border transition-all duration-300 shadow-sm"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgb(255,197,211)",
          }}
        >
          

          {/* 🔥 WHEN TO SEE A DOCTOR */}
          <div className=" space-y-4">
            <h3 className="font-semibold text-lg text-primary-pink">
              When to See a Doctor
            </h3>

            <ul className="space-y-3 text-sm text-[#7a2f4f]">
              <p className="font-medium">Seek medical advice if you:</p>

              {[
                "Have sudden, severe pelvic pain",
                "Have fever, nausea, or vomiting with pelvic pain",
                "Notice unexpected vaginal bleeding or discharge",
                "Suspect an infection or STI",
                "Have a known condition and pain suddenly worsens"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-red-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* URGENT WARNING */}
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ borderColor: "rgb(255,197,211)" }}
            >
              <p className="font-semibold text-red-600">
                Always get urgent help for sudden severe pain, fainting, or heavy bleeding.
              </p>
            </div>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-4 pb-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(5);
              setActiveButton(4);
            }}
            className="bg-primary-pink hover:bg-primary-pink/80 text-white 
              w-[90%] md:w-[60%] lg:w-[40%] rounded-md text-sm font-medium 
              transition-all h-10 px-4"
          >
            Continue to Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default PelvicPainGuideCard4;
