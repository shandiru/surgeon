"use client";
import { ShieldCheck, Heart, Star, PlusCircle } from "lucide-react";
import React from "react";

const EndometrialCard7 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      {/* Outer Card */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto rounded-2xl p-8 border shadow-sm animate-in slide-in-from-right-5 duration-300"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgb(255,197,211)",
        }}
      >
        {/* Header */}
        <div className="mb-6">
          <span
            className="font-semibold text-sm uppercase tracking-wide flex items-center gap-2"
            style={{ color: "#FF4B8B" }}
          >
            <ShieldCheck className="w-6 h-6 text-primary-pink" />
            Prevention & Early Detection
          </span>

          <p className="text-sm mt-1" style={{ color: "#7a2f4f" }}>
            Simple steps that can greatly reduce your risk of endometrial cancer.
          </p>
        </div>

        {/* Why Prevention Matters */}
        <div
          className="p-4 rounded-xl border mb-6"
          style={{
            borderColor: "rgb(255,197,211)",
            backgroundColor: "#FFF5F8",
          }}
        >
          <h4 className="font-semibold flex items-center gap-2 mb-2" style={{ color: "#FF4B8B" }}>
            <Heart className="w-5 h-5 text-primary-pink" />
            Why Prevention Matters
          </h4>
          <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
            Early detection greatly improves treatment success. Maintaining a healthy lifestyle,
            awareness of warning signs, and regular check-ups can lower risk.
          </p>
        </div>

        {/* Prevention Steps + Reminder */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Steps */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: "#FF4B8B" }}>
              You Can Reduce Risk By:
            </h4>
            <div className="space-y-3">
              {[
                "Maintain a healthy weight",
                "Use combined hormonal contraceptives when appropriate",
                "Manage PCOS and insulin resistance",
                "Prompt evaluation for abnormal bleeding",
                "Consider genetic testing for strong family history / Lynch syndrome",
                "Balanced hormone therapy (estrogen + progesterone) if HRT",
                "Be aware of postmenopausal bleeding",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "#7a2f4f" }}
                >
                  <PlusCircle className="w-4 h-4 text-primary-pink mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Reminder */}
          <div
            className="p-4 rounded-xl border"
            style={{
              backgroundColor: "#FFF5F8",
              borderColor: "rgb(255,197,211)",
            }}
          >
            <h4 className="font-semibold flex items-center gap-2 mb-2" style={{ color: "#FF4B8B" }}>
              <Heart className="w-5 h-5 text-primary-pink" />
              Remember
            </h4>
            <ul className="text-sm space-y-2" style={{ color: "#7a2f4f" }}>
              <li>• Early detection improves treatment outcomes</li>
              <li>• Regular gynecological check-ups help catch changes early</li>
              <li>• Awareness of abnormal uterine bleeding is crucial</li>
              <li>• Maintaining a healthy lifestyle reduces risk factors</li>
            </ul>
          </div>
        </div>

        {/* Key Takeaway */}
        <div
          className="p-4 rounded-xl border mt-6"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgb(255,197,211)",
          }}
        >
          <h4 className="font-semibold flex items-center gap-2 mb-2" style={{ color: "#FF4B8B" }}>
            <Star className="w-5 h-5 text-primary-pink" />
            Key Takeaway
          </h4>
          <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
            Prevention and vigilance are powerful tools. Monitoring changes, attending regular
            check-ups, and managing risk factors significantly improve early detection and long-term
            health outcomes.
          </p>
        </div>

        {/* Next Button */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => {
              setShowCard(8);
              setActiveButton(7);
            }}
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndometrialCard7;
