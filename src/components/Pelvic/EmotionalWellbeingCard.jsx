import React from 'react';
import { Brain } from 'lucide-react'; // Import the Brain icon from lucide-react

const EmotionalWellbeingCard = () => {
  return (
    <div className="text-[#d60d64] bg-[#FF4B8B]/10 max-w-5xl mx-auto mb-10 d flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
        <div className="font-semibold flex items-center gap-3 text-2xl">
          <Brain className="h-6 w-6 text-primary" />
          Emotional Wellbeing
        </div>
      </div>
      <div className="px-6 space-y-4">
        <p className="text-foreground leading-relaxed">
          Chronic pelvic pain can affect mood, energy, and relationships. It's common to feel frustrated, anxious, or low.
        </p>
        <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
          <p className="text-foreground">
            Talking to your doctor or asking for emotional support or counselling can help.
            <strong className="text-secondary">
              {' '}
              You don't have to "just live with it" — help is available.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmotionalWellbeingCard;
