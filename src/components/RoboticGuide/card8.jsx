"use client";
import { Lightbulb, Star, CheckCircle2 } from "lucide-react";

const Vaginalcard8 = () => {
  return (
    <div className="space-y-6 pb-10">
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
            Important points to remember about Vaginal Cancer
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
            Vaginal cancer is rare but can be serious. Early detection through regular gynecological
            exams and awareness of symptoms—such as abnormal bleeding, unusual discharge, or pelvic
            pain—greatly improves treatment outcomes.
          </p>
        </div>

        {/* KEY POINTS LIST */}
        <div className="space-y-4">
          <h4 className="font-semibold" style={{ color: "#FF4B8B" }}>
            Key Points to Remember
          </h4>

          <ul className="space-y-2 text-sm">
            {[
              "Early detection significantly improves treatment success",
              "Report unusual bleeding, discharge, or pelvic pain promptly",
              "Regular gynecological check-ups help detect changes early",
              "HPV vaccination can reduce the risk of vaginal cancer",
              "Awareness of vaginal health is important for prevention",
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
            Staying alert to changes, attending regular check-ups, and seeking medical advice early
            if symptoms occur are key steps to protect your vaginal health and improve treatment
            outcomes.
          </p>
        </div>

        {/* COMPLETE GUIDE BUTTON */}
        <div className="pt-8 flex justify-center">
          <button className="bg-primary-pink hover:bg-primary-pink/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all flex items-center justify-center gap-2">
            <Star className="w-4 h-4" />
            Complete Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vaginalcard8;
