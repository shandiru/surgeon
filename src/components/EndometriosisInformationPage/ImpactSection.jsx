// ImpactSection.jsx
import React from "react";

const ImpactSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#E91E63]">
            Impact on Fertility and Wellbeing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fertility Impact Card */}
            <div className="bg-white text-gray-800 flex flex-col gap-6 rounded-xl border border-[#E91E63] py-6 shadow-sm">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
                <div className="leading-none font-semibold flex items-center gap-2 text-[#E91E63]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Fertility Impact
                </div>
              </div>
              <div className="px-6">
                <p className="leading-relaxed text-sm">
                  Endometriosis can make it harder to get pregnant, but many women still conceive
                  naturally. Early diagnosis and treatment can help protect your fertility options.
                </p>
              </div>
            </div>

            {/* Emotional Wellbeing Card */}
            <div className="bg-white text-gray-800 flex flex-col gap-6 rounded-xl border border-[#E91E63] py-6 shadow-sm">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
                <div className="leading-none font-semibold flex items-center gap-2 text-[#E91E63]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  Emotional Wellbeing
                </div>
              </div>
              <div className="px-6">
                <p className="leading-relaxed text-sm">
                  Symptoms can affect your emotional health and quality of life. It's important to seek
                  support and early treatment for both physical and mental wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
