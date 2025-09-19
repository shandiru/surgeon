import React from 'react';
import { Heart, CircleCheck } from 'lucide-react';

const Hysteroscopycard5 = () => {
  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Header Section */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            Recovery After a Hysteroscopy
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 space-y-4">
          {/* What's Normal Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-3 text-primary">What's Normal</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CircleCheck className="w-4 h-4 text-primary" />
                  <span>Mild cramps (like period pain)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CircleCheck className="w-4 h-4 text-primary" />
                  <span>Spotting or light bleeding for a few days</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CircleCheck className="w-4 h-4 text-primary" />
                  <span>Return to normal activities the next day</span>
                </div>
              </div>
            </div>

            {/* Self-Care Tips Section */}
            <div>
              <h4 className="font-semibold mb-3 text-accent">Self-Care Tips</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">!</span>
                  </div>
                  <span>You can eat and drink as normal</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">!</span>
                  </div>
                  <span>Take rest if you had general anaesthetic</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">!</span>
                  </div>
                  <span>Avoid sex for about a week (until bleeding stops)</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">!</span>
                  </div>
                  <span>Use painkillers if needed for cramps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Discussion Section */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary mb-2">📋 Results Discussion</h4>
            <p className="text-sm">
              Your doctor will discuss your results and next steps before you leave. Make sure to ask any questions you have about your findings or follow-up care.
            </p>
          </div>

          {/* Recovery Timeline Section */}
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-accent-foreground mb-2">⏰ Recovery Timeline</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Day 1:</strong> Most people return to normal activities</li>
              <li>• <strong>2-3 days:</strong> If you had general anaesthetic, you may want extra rest</li>
              <li>• <strong>1 week:</strong> Avoid sex until bleeding stops to lower infection risk</li>
            </ul>
          </div>

          {/* Continue Button */}
          <div className="pt-4">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
            >
              When to Seek Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hysteroscopycard5;
