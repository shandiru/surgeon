"use client";
import { ShieldCheck, Heart, Star, PlusCircle } from "lucide-react";

const VaginalLumpsGuidecard7 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      
      {/* OUTER WRAPPER */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto rounded-2xl p-8 border shadow-sm animate-in slide-in-from-right-5 duration-300"
        style={{ backgroundColor: "#FFFFFF", borderColor: "rgb(255,197,211)" }}
      >
        
        {/* HEADER */}
        <div className="mb-6">
          <span
            className="font-semibold text-sm uppercase tracking-wide flex items-center gap-2"
            style={{ color: "#FF4B8B" }}
          >
            <ShieldCheck className="w-6 h-6 text-[#FF4B8B]" />
            Prevention & Early Management
          </span>

          <p className="text-sm mt-1" style={{ color: "#7a2f4f" }}>
            Helpful steps that reduce risk and catch problems early.
          </p>
        </div>

        {/* WHY IT MATTERS */}
        <div
          className="p-4 rounded-xl border mb-6"
          style={{ backgroundColor: "#FFF5F8", borderColor: "rgb(255,197,211)" }}
        >
          <h4
            className="font-semibold flex items-center gap-2 mb-2"
            style={{ color: "#FF4B8B" }}
          >
            <Heart className="w-5 h-5 text-[#FF4B8B]" />
            Why Prevention Helps
          </h4>
          <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
            Most vaginal lumps are harmless, but following simple prevention steps and
            paying attention to changes can help diagnose issues early — and prevent
            infections or irritation from worsening.
          </p>
        </div>

        {/* PREVENTION STRATEGIES */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* LEFT SIDE — Your Strategies */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: "#FF4B8B" }}>
              Helpful Strategies Include:
            </h4>

            <div className="space-y-3">
              {[
                "Wearing breathable, loose clothing",
                "Avoiding shaving irritation (use clean razors or trimming)",
                "Safe sex practices to reduce HPV and STI risks",
                "Good daily hygiene",
                "Staying hydrated",
                "Managing infections promptly",
                "Regular gynaecological check-ups",
                "HPV vaccination",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "#7a2f4f" }}
                >
                  <PlusCircle className="w-4 h-4 text-[#FF4B8B] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — Remember Box */}
          <div
            className="p-4 rounded-xl border"
            style={{ backgroundColor: "#FFF5F8", borderColor: "rgb(255,197,211)" }}
          >
            <h4
              className="font-semibold flex items-center gap-2 mb-2"
              style={{ color: "#FF4B8B" }}
            >
              <Heart className="w-5 h-5 text-[#FF4B8B]" />
              Remember
            </h4>

            <ul className="text-sm space-y-2" style={{ color: "#7a2f4f" }}>
              <li>• Monitoring changes helps catch issues early</li>
              <li>• Treat infections quickly to avoid complications</li>
              <li>• HPV vaccination lowers risk of HPV-related lumps</li>
              <li>• Seek medical advice if a lump persists or gets worse</li>
            </ul>
          </div>
        </div>

        {/* KEY TAKEAWAY */}
        <div
          className="p-4 rounded-xl border mt-6"
          style={{ backgroundColor: "#FFFFFF", borderColor: "rgb(255,197,211)" }}
        >
          <h4
            className="font-semibold flex items-center gap-2 mb-2"
            style={{ color: "#FF4B8B" }}
          >
            <Star className="w-5 h-5 text-[#FF4B8B]" />
            Key Takeaway
          </h4>

          <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
            Prevention is simple: keep the area clean, avoid irritation, stay aware
            of changes, and follow up on any symptoms that don’t settle. Early
            management leads to quicker treatment and peace of mind.
          </p>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => {
              setShowCard(8);
              setActiveButton(7);
            }}
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
          >
            Finish the Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default VaginalLumpsGuidecard7;
