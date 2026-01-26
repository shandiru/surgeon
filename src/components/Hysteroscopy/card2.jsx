import React from "react";
import { Shield, Lightbulb, AlertCircle, User } from "lucide-react";

const HysteroscopyCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      <div
        data-slot="card"
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-black mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300"
      >
        {/* Card Header */}
        <div
          data-slot="card-header"
          className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
        >
          <div data-slot="card-title" className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span>When to Seek Help</span>
          </div>
        </div>

        <div data-slot="card-content" className="px-6 space-y-4">
          {/* Validating Feelings Section */}
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Important Signs
            </h4>
            <p className="text-sm leading-relaxed">
              If you experience any of the following symptoms, you should seek medical advice and
              possibly consider a hysteroscopy:
            </p>
            <ul className="space-y-2 mt-4">
              <li>• Persistent pelvic pain not related to menstruation</li>
              <li>• Abnormal bleeding that doesn’t stop</li>
              <li>• Difficulty getting pregnant or repeated miscarriages</li>
              <li>• Unusual changes in menstrual cycle</li>
              <li>• Unexplained pain during intercourse</li>
            </ul>
          </div>

          {/* Consultation with Your Doctor */}
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Consultation with Your Doctor
            </h4>
            <p className="text-sm leading-relaxed">
              Before scheduling a hysteroscopy, you will have a consultation with your doctor to
              discuss:
            </p>
            <ul className="space-y-2 mt-4">
              <li>• Your medical history and current symptoms</li>
              <li>• Potential need for the procedure based on your symptoms</li>
              <li>• Explanation of the procedure and any risks involved</li>
              <li>• Any alternative tests or treatments that may be appropriate</li>
            </ul>
          </div>

          {/* Additional Tips Section */}
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-accent-foreground" />
              Additional Tips
            </h4>
            <p className="text-sm">
              It's important to be fully prepared for your hysteroscopy to ensure a smooth process.
              You may need to:
            </p>
            <ul className="space-y-2 mt-4">
              <li>• Empty your bladder before the procedure</li>
              <li>• Follow any dietary or medication restrictions given by your doctor</li>
              <li>• Arrange for transportation home if sedation is required</li>
              <li>• Discuss any concerns with your healthcare provider beforehand</li>
            </ul>
          </div>
        </div>

        {/* Button to Learn About Preparation */}
        <div className="pt-4">
          <button
            onClick={() => {
              setShowCard(3); // move to Card 4
              setActiveButton(2); // index for Card 4
            }}
            className="items-center w-[90%] mx-5 md:mx-10 lg:mx-12 hover:bg-[#FF4B8B]/80  bg-[#FF4B8B] justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3"
          >
            Learn About Preparation
          </button>
        </div>
      </div>
    </div>
  );
};

export default HysteroscopyCard2;
