import React from 'react';
import { Stethoscope, Zap, FileText, CircleCheck } from 'lucide-react';

const UltrasoundCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="UltrasoundCard2">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-primary" />
            Why You Might Need an Ultrasound
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          {/* Common Symptoms */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Common Symptoms</h4>
              <div className="space-y-3">
                {[
                  "Pelvic pain",
                  "Abnormal vaginal bleeding",
                  "Fertility issues",
                  "Menstrual problems"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-card rounded-lg border">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What It Can Help With */}
            <div>
              <h4 className="font-semibold mb-3 text-accent">What It Can Help With</h4>
              <div className="space-y-2">
                {[
                  "Check for abnormalities",
                  "Investigate pelvic pain",
                  "Assess fertility issues",
                  "Monitor early pregnancy",
                  "Measure endometrium",
                  "Detect miscarriage causes"
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">{item}</span>
                    <span
                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs bg-secondary text-secondary-foreground"
                    >
                      {index % 3 === 0
                        ? "Screening"
                        : index % 3 === 1
                          ? "Diagnosis"
                          : "Treatment"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">💡 Important Note</h4>
            <p className="text-sm">
              If the womb lining is thicker than expected, you may be offered a hysteroscopy and biopsy to investigate further. This is a precautionary measure to ensure your health.
            </p>
          </div>

          {/* Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(3);
                setActiveButton(2);
              }}
              className="inline-flex items-center bg-[#FF4B8B] text-black justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
            >
              Learn About Types of Ultrasound
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltrasoundCard2;
