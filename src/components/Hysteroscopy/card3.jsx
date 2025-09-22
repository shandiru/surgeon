import React from 'react';
import { Shield, FileText, Heart } from 'lucide-react';

const HysteroscopyCard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
        <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            Preparing for Your Hysteroscopy
          </div>
          <div className="text-muted-foreground text-sm">
            Simple steps to prepare for your procedure
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-4 p-4 rounded-lg border bg-primary/5 border-primary/20">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground font-bold bg-primary">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <span>🧪</span> Pregnancy Test
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 bg-secondary text-secondary-foreground text-xs">
                    Important
                  </span>
                </h4>
                <p className="text-muted-foreground text-sm">
                  You may be asked to take a pregnancy test a week before.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 p-4 rounded-lg border bg-primary/5 border-primary/20">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground font-bold bg-primary">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <span>🛡️</span> Use Contraception
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 bg-secondary text-secondary-foreground text-xs">
                    Important
                  </span>
                </h4>
                <p className="text-muted-foreground text-sm">
                  Use contraception between the test and your procedure (it can't be done during pregnancy).
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 p-4 rounded-lg border bg-card">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground font-bold bg-muted-foreground">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <span>💊</span> Pre-treatment Medicine
                </h4>
                <p className="text-muted-foreground text-sm">
                  If you're having fibroids removed, you may be given medicine beforehand to shrink them.
                </p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-accent-foreground mb-2">📋 What to Expect</h4>
            <p className="text-sm">
              Your healthcare team will give you specific instructions based on your individual case. Don't hesitate to ask questions about preparation or the procedure itself.
            </p>
          </div>

          {/* Continue Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(4);       // move to Card 4
                setActiveButton(3);   // index for Card 4
              }}
              className="inline-flex items-center justify-center hover:bg-[#FF4B8B]/80 bg-[#FF4B8B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
            >
              Learn About the Procedure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HysteroscopyCard3;
