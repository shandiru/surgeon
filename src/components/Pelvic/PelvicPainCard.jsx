import React from 'react';
import { Info, CheckCircle } from 'lucide-react'; // Import Lucide icons

const PelvicPainCard = () => {
  return (
    <div className="text-[#FF4B8B] bg-[#FF4B8B]/10 max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-xl  py-6 shadow-sm hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100">
      {/* Card Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
        <div className="font-semibold flex items-center gap-3 text-2xl">
          <Info className="h-6 w-6 text-primary" />
          What Is Pelvic Pain?
        </div>
      </div>

      {/* Card Content */}
      <div className="px-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Pelvic pain is felt in the lower abdomen between the belly button and groin. It can come from the reproductive organs, bladder, bowel, muscles, or connective tissue.
            </p>
            <p className="text-foreground leading-relaxed">
              Pelvic pain is different from vaginal or vulval pain (which affects the external genitals).
            </p>
          </div>

          {/* Key Facts Section */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-card-foreground">Key Facts</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                Very common condition
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                Most causes are treatable
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                Can be acute or chronic
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PelvicPainCard;
