'use client';
import { Users, Heart, Star, PlusCircle } from 'lucide-react';

const MenstrualDisordersCard7 = ({ setShowCard, setActiveButton }) => {
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
            <Users className="w-6 h-6 text-primary-pink" />
            Prevention & Early Management
          </span>

          <p className="text-sm mt-1" style={{ color: "#7a2f4f" }}>
            Simple steps to help manage and reduce the impact of menstrual disorders.
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
              Helpful Ways to Manage:
            </h4>

            <div className="space-y-3">
              {[
                "Track menstrual cycles and symptoms regularly",
                "Maintain a healthy weight",
                "Reduce stress and practice relaxation techniques",
                "Follow a balanced diet and exercise consistently",
                "Attend regular medical check-ups",
                "Manage underlying conditions early (e.g., thyroid, PCOS)",
                "Use hormonal contraception when recommended by a doctor",
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
              <Heart className="w-5 h-5 text-primary-pink" />
              Why It Matters
            </h4>

            <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
              While not all menstrual disorders can be prevented, understanding your cycle helps
              detect changes early. Early management leads to better control, reduced discomfort,
              and quicker treatment when needed.
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
            <Star className="w-5 h-5 text-primary-pink" />
            Take Action
          </h4>

          <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
            Paying attention to what’s normal for your cycle helps you notice changes earlier. 
            Staying proactive with lifestyle habits, check-ups, and early treatment leads to 
            healthier long-term menstrual health.
          </p>
        </div>

        {/* Next Button */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => {
              setShowCard(8);
              setActiveButton(7);
            }}
            className="bg-primary-pink hover:bg-primary-pink/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
          >
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default MenstrualDisordersCard7;
