"use client";
import React from 'react';
import {
  HeartPulse,
  Syringe,
  Cross,
  Atom,
  ActivitySquare,
  TestTube2,
  Leaf
} from "lucide-react";

const OvarianCancerGuidecard6 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">

        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-primary" />
            Step 3 — Treatment Options
          </div>
          <p className="text-muted-foreground text-sm">
            Treatment depends on the stage, type of ovarian cancer, overall health, and fertility considerations.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 space-y-6">

          {/* Surgery + Chemotherapy */}
          <div>
            <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
              <Cross className="w-5 h-5 text-primary" />
              1. Surgery + Chemotherapy
            </h4>

            <div className="space-y-4">

              {/* Surgery */}
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 
                hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] 
                hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-primary mb-1">Surgery (Primary Treatment)</p>
                <p className="text-sm">
                  The main goal is to remove as much cancer as possible — often includes removing the ovaries, fallopian tubes, uterus,
                  and any visible tumour deposits.
                </p>
              </div>

              {/* Chemotherapy */}
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 
                hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] 
                hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-primary mb-1">Chemotherapy</p>
                <p className="text-sm">
                  Usually given after surgery to destroy any remaining cancer cells. Often involves drugs like carboplatin and paclitaxel.
                </p>
              </div>
            </div>
          </div>

          {/* Targeted Therapies */}
          <div>
            <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
              <Atom className="w-5 h-5 text-accent" />
              2. Targeted Therapies
            </h4>

            <div className="space-y-4">

              {/* PARP Inhibitors */}
              <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] 
                hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-accent-foreground mb-1">PARP Inhibitors</p>
                <p className="text-sm">
                  Effective for BRCA-mutated or HRD-positive ovarian cancer. Helps prevent cancer cells from repairing themselves.
                </p>
              </div>

              {/* Angiogenesis inhibitors */}
              <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] 
                hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-accent-foreground mb-1">Angiogenesis Inhibitors</p>
                <p className="text-sm">
                  Blocks the blood supply that tumours need to grow (e.g., bevacizumab).
                </p>
              </div>

              {/* MEK inhibitors */}
              <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] 
                hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-accent-foreground mb-1">MEK Inhibitors</p>
                <p className="text-sm">
                  Helpful for certain rare subtypes such as low-grade serous ovarian cancer.
                </p>
              </div>
            </div>
          </div>

          {/* Intraperitoneal Chemotherapy */}
          <div>
            <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
              <Syringe className="w-5 h-5 text-primary" />
              3. Intraperitoneal Chemotherapy
            </h4>
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 
              hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 
              transition-all duration-300">
              <p className="text-sm">
                Delivers chemotherapy directly into the abdominal cavity, targeting cancer cells close to the tumour site.
              </p>
            </div>
          </div>

          {/* Radiation Therapy */}
          <div>
            <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
              <ActivitySquare className="w-5 h-5 text-accent" />
              4. Radiation Therapy
            </h4>
            <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] hover:shadow-lg
              hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
              <p className="text-sm">
                Not commonly used as a first-line treatment but may help with isolated recurrences,
                especially in the pelvic area.
              </p>
            </div>
          </div>

          {/* Clinical Trials */}
          <div>
            <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
              <TestTube2 className="w-5 h-5 text-primary" />
              5. Clinical Trials
            </h4>
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 
              hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 
              transition-all duration-300">
              <p className="text-sm">
                Provides access to promising new drugs and treatment combinations not yet widely available.
              </p>
            </div>
          </div>

          {/* Complementary Therapies */}
          <div>
            <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
              <Leaf className="w-5 h-5 text-accent" />
              6. Complementary Therapies
            </h4>
            <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] hover:shadow-lg
              hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
              <p className="text-sm">
                Supportive options such as nutrition guidance, counselling, relaxation therapies, and exercise programs 
                help improve wellbeing during and after treatment.
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(7);
                setActiveButton(6);
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full text-white"
            >
              Continue to Prevention & Early Detection
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OvarianCancerGuidecard6;
