import React from 'react';
import { Stethoscope, CircleCheck } from 'lucide-react'; // Import Lucide icons

const PelvicPainInvestigation = () => {
  return (
    <div className="text-[#d60d64] bg-[#FF4B8B]/10 max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100">
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
        <div className="font-semibold flex items-center gap-3 text-2xl">
          <Stethoscope className="h-6 w-6 text-primary" />
          How Pelvic Pain Is Investigated
        </div>
      </div>
      <div className="px-6 space-y-4">
        <p className="text-foreground leading-relaxed">Your doctor may:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <CircleCheck className="h-5 w-5 text-secondary" />
              <span className="text-sm">Take a full medical history</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <CircleCheck className="h-5 w-5 text-secondary" />
              <span className="text-sm">Perform a pelvic examination</span>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-card-foreground">Possible Tests:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Blood or urine tests</li>
              <li>• Swabs for infections (STIs)</li>
              <li>• Ultrasound or MRI scan</li>
              <li>• Laparoscopy (keyhole surgery)</li>
            </ul>
          </div>
        </div>
        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-black italic">
            Finding the cause helps create the right treatment plan for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PelvicPainInvestigation;
