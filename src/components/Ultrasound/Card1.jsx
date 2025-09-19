import React from 'react';
import { Monitor, Zap, FileText, CircleCheck } from 'lucide-react';

const UltrasoundCard1 = () => {
  return (
    <div className="UltrasoundCard1">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Monitor className="w-6 h-6 text-primary" />
            What Is a Gynaecological Ultrasound?
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          {/* How it works */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <p className="text-lg leading-relaxed">
              A gynaecological (pelvic) ultrasound is a <strong>safe and painless</strong> way to examine the uterus, ovaries, fallopian tubes and other pelvic organs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* How It Works */}
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                How It Works
              </h4>
              <ul className="space-y-2">
                {[
                  "Uses sound waves to create real-time images",
                  "No radiation involved - completely safe",
                  "Shows organs in real-time motion",
                  "One of the most effective diagnostic tools"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CircleCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Can See */}
            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                What We Can See
              </h4>
              <ul className="text-sm space-y-1">
                {[
                  "Uterus size and shape",
                  "Ovaries and follicles",
                  "Fallopian tubes",
                  "Endometrial lining thickness",
                  "Any abnormalities or cysts"
                ].map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learn Why It's Done Button */}
          <div className="pt-4">
            <button
              data-slot="button"
              className="inline-flex items-center bg-[#FF4B8B] text-black justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
            >
              Learn Why It's Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltrasoundCard1;
