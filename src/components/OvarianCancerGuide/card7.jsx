'use client';
import { ShieldCheck, Heart, Star, PlusCircle } from 'lucide-react';

const OvarianCancerGuidecard7 = () => {
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
            Simple steps that can greatly reduce your risk
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
              While vulvar cancer is uncommon, early awareness and simple preventive steps can 
              significantly reduce risk and help detect changes before they become serious.
            </p>
          </div>

          {/* Prevention Steps */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">You Can Reduce Risk By:</h4>
              <div className="space-y-2">
                {[
                  'Getting the HPV vaccine',
                  'Not smoking',
                  'Regular gynecological check-ups',
                  'Early treatment of vulvar skin conditions',
                  'Being aware of any changes to vulvar skin',
                  'Practicing safer sex',
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
                <li>• Early detection makes treatment more effective</li>
                <li>• Regular check-ups help catch changes early</li>
                <li>• HPV protection greatly reduces risk</li>
                <li>• Any long-lasting vulvar change should be reviewed</li>
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
              Prevention is powerful. By staying aware of changes, attending check-ups, 
              and protecting yourself from HPV, you take strong steps toward maintaining 
              vulvar health and detecting issues early.
            </p>
          </div>
           
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
          {/* Complete Guide Button */}
          <div className="pt-4">
            <button className="inline-flex items-center justify-center hover:bg-[#FF4B8B]/80 bg-[#FF4B8B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-9 px-4 py-2 w-full">
              <Star className="w-4 h-4" />
              Complete Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OvarianCancerGuidecard7;
