"use client";
import { Lightbulb, Star, CheckCircle2 } from "lucide-react";

const MenstrualDisordersCard8 = () => {
  return (
    <div className="space-y-6 pb-10 px-3">
      {/* MAIN CARD */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto rounded-2xl p-8 border shadow-sm animate-in slide-in-from-right-5 duration-300"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgb(255,197,211)",
        }}
      >
        {/* HEADER */}
        <div className="mb-6">
          <span
            className="font-semibold text-sm uppercase tracking-wide flex items-center gap-2"
            style={{ color: "#FF4B8B" }}
          >
            <Lightbulb className="w-6 h-6 text-primary-pink" />
            Key Takeaway
          </span>

          <p className="text-sm mt-1" style={{ color: "#7a2f4f" }}>
            Important points to remember about menstrual disorders.
          </p>
        </div>

        {/* HIGHLIGHT BOX */}
        <div
          className="p-5 rounded-xl border mb-6"
          style={{
            backgroundColor: "#FFF5F8",
            borderColor: "rgb(255,197,211)",
          }}
        >
          <h3 className="font-semibold flex items-center gap-2 mb-2" style={{ color: "#FF4B8B" }}>
            <Star className="w-5 h-5 text-primary-pink" />
            What You Should Know
          </h3>

          <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
            Menstrual disorders are common and often manageable. They can include heavy bleeding,
            severe pain, irregular cycles, or missed periods. Identifying symptoms early and seeking
            medical support helps prevent complications and ensures proper treatment.
          </p>
        </div>

        {/* KEY POINTS LIST */}
        <div className="space-y-4">
          <h4 className="font-semibold" style={{ color: "#FF4B8B" }}>
            Key Points to Remember
          </h4>

          <ul className="space-y-2 text-sm">
            {[
              "Menstrual disorders vary widely from heavy bleeding to absent periods",
              "Early identification of symptoms ensures more effective treatment",
              "Tracking your cycle helps detect changes sooner",
              "Seek medical help if your period suddenly becomes irregular or painful",
              "Most menstrual disorders are manageable with proper care",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2" style={{ color: "#7a2f4f" }}>
                <CheckCircle2 className="w-4 h-4 text-primary-pink mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FINAL MESSAGE */}
        <div
          className="p-4 rounded-xl border mt-6"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgb(255,197,211)",
          }}
        >
          <h4 className="font-semibold flex items-center gap-2" style={{ color: "#FF4B8B" }}>
            <Star className="w-5 h-5 text-primary-pink" />
            Final Message
          </h4>

          <p className="text-sm leading-relaxed mt-1" style={{ color: "#7a2f4f" }}>
            Staying aware of your menstrual cycle and seeking medical advice when something feels
            unusual is key to early intervention. Most menstrual issues are treatable—early support
            leads to better long-term health and comfort.
          </p>
        </div>

        {/* COMPLETE GUIDE BUTTON */}
        <div className="pt-8 flex justify-center">
          <button className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all flex items-center justify-center gap-2">
            <Star className="w-4 h-4" />
            Complete Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenstrualDisordersCard8;
