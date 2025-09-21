import React from 'react';
import { Camera, Zap, Clock } from 'lucide-react';

const Hysteroscopycard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Header Section */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Camera className="w-6 h-6 text-primary" />
            What Happens During a Hysteroscopy
          </div>
          <div className="text-muted-foreground text-sm">
            Step-by-step walkthrough of the procedure
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Timing Card */}
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Timing
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Usually done as outpatient or day-case</li>
                <li>• You go home the same day</li>
                <li>• 5–10 minutes for diagnosis</li>
                <li>• Up to 30 minutes if treatment is done</li>
              </ul>
            </div>

            {/* Anaesthetic Options */}
            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Anaesthetic Options
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Often done without anaesthetic</li>
                <li>• Local anaesthetic (numbs the area)</li>
                <li>• General anaesthetic (if you prefer to be asleep)</li>
              </ul>
            </div>
          </div>

          {/* Procedure Steps */}
          <div className="space-y-4">
            <h4 className="font-semibold">The Procedure Steps</h4>

            {/* Step 1 */}
            <div className="flex gap-4 p-4 bg-card rounded-lg border">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <span>🛏️</span> Positioning
                </h4>
                <p className="text-muted-foreground text-sm">You lie on a couch with your legs supported</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 p-4 bg-card rounded-lg border">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <span>🔧</span> Speculum Use
                </h4>
                <p className="text-muted-foreground text-sm">A speculum may be used to gently hold the vagina open</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 p-4 bg-card rounded-lg border">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <span>📹</span> Hysteroscope Insertion
                </h4>
                <p className="text-muted-foreground text-sm">The hysteroscope is passed into the womb through the vagina and cervix</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 p-4 bg-card rounded-lg border">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <span>💧</span> Fluid Expansion
                </h4>
                <p className="text-muted-foreground text-sm">Fluid is gently pumped in to expand the womb and improve visibility</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 p-4 bg-card rounded-lg border">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">5</div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <span>🔍</span> Examination &amp; Treatment
                </h4>
                <p className="text-muted-foreground text-sm">A camera sends pictures to a monitor so your doctor can see and treat any abnormalities</p>
              </div>
            </div>
          </div>

          {/* What You'll Feel */}
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-accent-foreground mb-2">💭 What You'll Feel</h4>
            <p className="text-sm">You may feel cramping similar to period pain, but it should not be painful. The procedure is generally well-tolerated by most people.</p>
          </div>

          {/* Continue Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(5);       // move to Card 4
                setActiveButton(4);   // index for Card 4
              }}
              className="inline-flex items-center justify-center bg-[#FF4B8B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
            >
              Learn About Recovery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hysteroscopycard4;
