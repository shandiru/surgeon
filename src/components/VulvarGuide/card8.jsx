'use client';
import { Lightbulb, Star, CheckCircle2 } from 'lucide-react';

const VulvarGuidecard8 = ({ setShowCard, setActiveButton }) => {
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
            <Lightbulb className="w-6 h-6 text-[#FF4B8B]" />
            Key Takeaway
          </span>

          <p className="text-sm mt-1" style={{ color: "#7a2f4f" }}>
            The most important points to remember
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
          <h3
            className="font-semibold flex items-center gap-2 mb-2"
            style={{ color: "#FF4B8B" }}
          >
            <Star className="w-5 h-5 text-[#FF4B8B]" />
            What You Should Know
          </h3>

          <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
            Vulvar cancer is rare but serious. Early diagnosis leads to the best outcomes,
            which is why understanding symptoms and staying aware of changes is so important.
          </p>
        </div>

        {/* KEY POINTS LIST */}
        <div className="space-y-4">
          <h4
            className="font-semibold"
            style={{ color: "#FF4B8B" }}
          >
            Key Points to Remember
          </h4>

          <ul className="space-y-2 text-sm">
            {[
              "Early detection greatly improves treatment success",
              "Persistent itching, lumps, or skin changes should never be ignored",
              "Regular check-ups help spot changes early",
              "HPV protection reduces risk",
              "Awareness of your vulvar skin is the first step in prevention",
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

        {/* FINAL MESSAGE BOX */}
        <div
          className="p-4 rounded-xl border mt-6"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgb(255,197,211)",
          }}
        >
          <h4
            className="font-semibold flex items-center gap-2"
            style={{ color: "#FF4B8B" }}
          >
            <Star className="w-5 h-5 text-[#FF4B8B]" />
            Final Message
          </h4>

          <p className="text-sm leading-relaxed mt-1" style={{ color: "#7a2f4f" }}>
            Staying aware, getting regular check-ups, and seeking help early if something feels
            unusual can make a powerful difference in protecting your health.
          </p>
        </div>

        {/* COMPLETE GUIDE BUTTON */}
        <div className="pt-8 flex justify-center">
          <button
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all flex items-center justify-center gap-2"
          >
            <Star className="w-4 h-4" />
            Complete Guide
          </button>
        </div>

      </div>
    </div>
  );
};

export default VulvarGuidecard8;
