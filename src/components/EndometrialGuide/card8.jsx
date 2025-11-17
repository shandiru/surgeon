'use client';
import { Lightbulb, Star, CheckCircle2 } from 'lucide-react';
import React from 'react';

const EndometrialCard8 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">

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
            <Lightbulb className="w-6 h-6 text-[#FF4B8B]" />
            Key Takeaway
          </span>
          <p className="text-sm mt-1" style={{ color: "#7a2f4f" }}>
            The most important points to remember about endometrial cancer
          </p>
        </div>

        {/* Highlight Box */}
        <div
          className="p-5 rounded-xl border mb-6"
          style={{
            backgroundColor: "#FFF5F8",
            borderColor: "rgb(255,197,211)",
          }}
        >
          <h3
            className="font-semibold flex items-center gap-2 mb-2"
            style={{ color: "#FF4B8B" }}
          >
            <Star className="w-5 h-5 text-[#FF4B8B]" />
            What You Should Know
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
            Endometrial cancer is often detected early because it causes clear warning signs, especially postmenopausal bleeding. Early diagnosis leads to excellent outcomes, and lifestyle factors like weight management play a significant role in reducing risk.
          </p>
        </div>

        {/* Key Points List */}
        <div className="space-y-4">
          <h4 className="font-semibold" style={{ color: "#FF4B8B" }}>
            Key Points to Remember
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Postmenopausal bleeding should never be ignored",
              "Early detection significantly improves treatment success",
              "Maintaining a healthy weight reduces risk",
              "Managing PCOS and hormonal balance is important",
              "Regular gynecological check-ups help catch changes early"
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2"
                style={{ color: "#7a2f4f" }}
              >
                <CheckCircle2 className="w-4 h-4 text-[#FF4B8B] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Final Message Box */}
        <div
          className="p-4 rounded-xl border mt-6"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgb(255,197,211)",
          }}
        >
          <h4 className="font-semibold flex items-center gap-2" style={{ color: "#FF4B8B" }}>
            <Star className="w-5 h-5 text-[#FF4B8B]" />
            Final Message
          </h4>
          <p className="text-sm leading-relaxed mt-1" style={{ color: "#7a2f4f" }}>
            Staying aware of warning signs, attending regular check-ups, and seeking medical evaluation promptly if anything feels unusual can make a significant difference in protecting your health.
          </p>
        </div>

        {/* Complete Guide Button */}
        <div className="pt-8 flex justify-center">
          <button
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all flex items-center justify-center gap-2"
            onClick={() => {
              setShowCard(1); // or wherever the guide starts
              setActiveButton(0);
            }}
          >
            <Star className="w-4 h-4" />
            Complete Guide
          </button>
        </div>

      </div>
    </div>
  );
};

export default EndometrialCard8;
