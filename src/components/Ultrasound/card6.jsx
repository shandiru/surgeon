import React from 'react';
import { Heart, CircleCheck, FileText } from 'lucide-react';

const UltrasoundCard6 = () => {
  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            Emotional Wellbeing
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          
          {/* Validating Feelings Section */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary mb-2">💭 Your Feelings Are Valid</h4>
            <p className="text-sm leading-relaxed">
              It's completely normal to feel nervous about an intimate scan. Many people experience anxiety about medical procedures, especially those involving reproductive health.
            </p>
          </div>

          {/* Ways to Feel Comfortable */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Ways to Feel More Comfortable</h4>
              <div className="space-y-2">
                {[
                  "Ask for a chaperone during the scan",
                  "Our staff will explain everything clearly",
                  "We'll go at your pace",
                  "Ask questions anytime during the procedure",
                  "Request extra support if needed"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <Heart className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reminder Section */}
            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-3">💗 Remember</h4>
              <ul className="text-sm space-y-2">
                <li>• This is a routine and safe procedure</li>
                <li>• Designed to give you clarity and reassurance</li>
                <li>• Helps detect and diagnose common issues</li>
                <li>• Getting a clear picture is the first step to treatment</li>
                <li>• We're here to support you every step of the way</li>
              </ul>
            </div>
          </div>

          {/* Final Reassurance Section */}
          <div className="bg-card p-4 rounded-lg border">
            <h4 className="font-semibold mb-2">🌟 Final Reassurance</h4>
            <p className="text-sm leading-relaxed">
              A gynaecological ultrasound is <strong>safe, quick and painless</strong>. If you've been referred for an ultrasound, try not to worry — this procedure helps provide the information needed for your care and peace of mind.
            </p>
          </div>

          {/* Button Section */}
          <div className="pt-4">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 bg-[#FF4B8B] text-black whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
            >
              Complete Guide ✨
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UltrasoundCard6;
