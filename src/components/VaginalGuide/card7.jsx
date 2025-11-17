'use client';
import { Users, Heart, Star, PlusCircle } from 'lucide-react';

const Vaginalcard7 = ({ setShowCard, setActiveButton }) => {
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
            <Users className="w-6 h-6 text-[#FF4B8B]" />
            Prevention & Early Detection
          </span>

          <p className="text-sm mt-1" style={{ color: "#7a2f4f" }}>
            Steps to reduce the risk of vaginal cancer and detect problems early.
          </p>
        </div>

        {/* Prevention Section */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Left Column */}
          <div>
            <h4
              className="font-semibold mb-3"
              style={{ color: "#FF4B8B" }}
            >
              Ways to Reduce Risk:
            </h4>

            <div className="space-y-3">
              {[
                "HPV vaccination",
                "Avoiding smoking",
                "Regular gynecological check-ups",
                "Early treatment of VAIN or cervical pre-cancers",
                "Practising safer sex to reduce HPV risk",
                "Monitoring abnormal bleeding or discharge",
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

          {/* Right Column */}
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
              Why It Matters
            </h4>

            <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
              Early detection improves treatment success and outcomes. 
              Regular check-ups and awareness of body changes help identify problems early.
            </p>
          </div>

        </div>

        {/* Final Thoughts */}
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
            Take Action
          </h4>

          <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
            Protect your health by staying proactive—get vaccinated, attend regular check-ups, 
            and report unusual symptoms early. These steps significantly lower vaginal cancer risk.
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
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Vaginalcard7;
