'use client';
import { ShieldCheck, Heart, Star, PlusCircle } from 'lucide-react';

const VulvarGuidecard7 = ({ setShowCard, setActiveButton }) => {
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
            <ShieldCheck className="w-6 h-6 text-[#FF4B8B]" />
            Prevention & Early Detection
          </span>

          <p className="text-sm mt-1" style={{ color: "#7a2f4f" }}>
            Simple steps that can greatly reduce your risk.
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
          <h4
            className="font-semibold flex items-center gap-2 mb-2"
            style={{ color: "#FF4B8B" }}
          >
            <Heart className="w-5 h-5 text-[#FF4B8B]" />
            Why Prevention Matters
          </h4>
          <p style={{ color: "#7a2f4f" }} className="text-sm leading-relaxed">
            While vulvar cancer is uncommon, early awareness and simple preventive steps can significantly
            reduce risk and help detect changes before they become serious.
          </p>
        </div>

        {/* Prevention Steps + Reminder */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* ---- Left Column ---- */}
          <div>
            <h4
              className="font-semibold mb-3"
              style={{ color: "#FF4B8B" }}
            >
              You Can Reduce Risk By:
            </h4>

            <div className="space-y-3">
              {[
                "Getting the HPV vaccine",
                "Not smoking",
                "Regular gynecological check-ups",
                "Early treatment of vulvar skin conditions",
                "Being aware of any changes to vulvar skin",
                "Practicing safer sex",
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

          {/* ---- Right Column Reminder ---- */}
          <div
            className="p-4 rounded-xl border"
            style={{
              backgroundColor: "#FFF5F8",
              borderColor: "rgb(255,197,211)",
            }}
          >
            <h4
              className="font-semibold flex items-center gap-2 mb-2"
              style={{ color: "#FF4B8B" }}
            >
              <Heart className="w-5 h-5 text-[#FF4B8B]" />
              Remember
            </h4>

            <ul className="text-sm space-y-2" style={{ color: "#7a2f4f" }}>
              <li>• Early detection makes treatment more effective</li>
              <li>• Regular check-ups help catch changes early</li>
              <li>• HPV protection greatly reduces risk</li>
              <li>• Any long-lasting vulvar change should be reviewed</li>
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
          <h4
            className="font-semibold flex items-center gap-2 mb-2"
            style={{ color: "#FF4B8B" }}
          >
            <Star className="w-5 h-5 text-[#FF4B8B]" />
            Key Takeaway
          </h4>

          <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
            Prevention is powerful. By staying aware of changes, attending check-ups, and protecting yourself
            from HPV, you take strong steps toward maintaining vulvar health and detecting issues early.
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

export default VulvarGuidecard7;
