'use client';
import { ShieldCheck, Heart, Star, PlusCircle } from 'lucide-react';
import React from 'react';

const EndometrialCard7 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">

        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" />
            Prevention & Early Detection
          </div>
          <div className="text-muted-foreground text-sm">
            Simple steps to reduce risk and catch endometrial cancer early
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">

          {/* Prevention Overview */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h4 className="leading-none font-semibold flex items-center gap-2">
              <Heart className="w-5 h-5 inline-block" />
              Why Prevention Matters
            </h4>
            <p className="text-sm leading-relaxed">
              Early detection of endometrial cancer greatly improves treatment success. 
              Maintaining a healthy lifestyle and being aware of warning signs can lower risk.
            </p>
          </div>

          {/* Prevention Steps */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Ways to Reduce Risk</h4>
              <div className="space-y-2">
                {[
                  'Maintain a healthy weight',
                  'Use combined hormonal contraceptives when appropriate',
                  'Manage PCOS and insulin resistance',
                  'Seek prompt evaluation for abnormal bleeding',
                  'Consider genetic testing if there is a strong family history or Lynch syndrome',
                  'Balanced hormone therapy (estrogen + progesterone) for HRT users',
                  'Be aware of postmenopausal bleeding'
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-2 text-sm"
                  >
                    <PlusCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reminder */}
            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="leading-none font-semibold flex items-center gap-2">
                <Heart className="w-5 h-5 inline-block" />
                Remember
              </h4>
              <ul className="text-sm space-y-2">
                <li>• Early detection improves treatment outcomes</li>
                <li>• Regular gynecological check-ups help catch changes early</li>
                <li>• Awareness of abnormal uterine bleeding is crucial</li>
                <li>• Maintaining a healthy lifestyle reduces risk factors</li>
              </ul>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="bg-card p-4 rounded-lg border">
            <h4 className="leading-none font-semibold flex items-center gap-2">
              <Star className="w-5 h-5 inline-block" />
              Key Takeaway
            </h4>
            <p className="text-sm leading-relaxed">
              Prevention and vigilance are powerful tools. Monitoring changes, attending regular check-ups, and managing risk factors significantly improve early detection and long-term health outcomes.
            </p>
          </div>

          {/* Continue Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(8);
                setActiveButton(7);
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full text-white"
            >
              Continue to Next Section
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EndometrialCard7;
