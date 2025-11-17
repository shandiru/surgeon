'use client';
import React from 'react';
import { Heart, Flame, Droplet, Shield, Sparkles } from 'lucide-react';

const EndometrialCard6 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">

        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            Step 4 — Treatment Options for Endometrial Cancer
          </div>
          <p className="text-muted-foreground text-sm">
            Treatment depends on cancer stage, tumor size, and type. Your oncologist will recommend a personalized plan.
          </p>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-6">

          {/* Surgery Section */}
          <div>
            <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
              1. Surgery (Primary Treatment)
            </h4>

            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-primary mb-1">Hysterectomy</p>
                <p className="text-sm">
                  Surgical removal of the uterus is the main treatment for most cases. Ovaries and fallopian tubes may also be removed depending on risk factors.
                </p>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-primary mb-1">Lymph Node Assessment</p>
                <p className="text-sm">
                  Nearby lymph nodes may be removed to check if cancer has spread, helping determine staging and prognosis.
                </p>
              </div>
            </div>
          </div>

          {/* Other Treatments */}
          <div>
            <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
              2. Additional or Adjuvant Treatments
            </h4>

            <div className="space-y-4">
              <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-accent-foreground mb-1">Radiation Therapy</p>
                <p className="text-sm">
                  Uses high-energy rays to destroy remaining cancer cells after surgery or to treat advanced disease.
                </p>
              </div>

              <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-accent-foreground mb-1">Chemotherapy</p>
                <p className="text-sm">
                  Anti-cancer drugs may be used for advanced, recurrent, or aggressive endometrial cancer.
                </p>
              </div>

              <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-accent-foreground mb-1">Hormone Therapy</p>
                <p className="text-sm">
                  Medications that block or reduce estrogen may be used in certain cases, especially hormone-sensitive tumors.
                </p>
              </div>

              <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-accent-foreground mb-1">Combination Therapy</p>
                <p className="text-sm">
                  A tailored mix of surgery, radiation, chemotherapy, and hormone therapy may be used to optimize outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Key Point Box */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF4B8B]" />
              Key Point
            </h4>
            <p className="text-sm">
              Every treatment plan is personalized based on tumor characteristics, stage, and patient health to achieve the best outcome and recovery.
            </p>
          </div>

          {/* Continue Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(7);
                setActiveButton(6);
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full"
            >
              Continue to Next Section
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EndometrialCard6;
