'use client';
import { Users, Heart, Star, PlusCircle } from 'lucide-react';

const Vaginalcard7 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">

        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            Prevention & Early Detection
          </div>
          <div className="text-muted-foreground text-sm">
            Steps to reduce risk and catch problems early
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">

          {/* Prevention Tips */}
          <div className="grid md:grid-cols-2 gap-4">

            <div className="space-y-3">
              <h4 className="font-semibold">Ways to Reduce Risk</h4>
              <div className="space-y-2 text-sm">
                {[
                  'HPV vaccination',
                  'Avoiding smoking',
                  'Regular gynaecological check-ups',
                  'Early treatment of VAIN or cervical pre-cancers',
                  'Practising safer sex to reduce HPV risk',
                  'Monitoring any abnormal bleeding or discharge'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <PlusCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="leading-none font-semibold flex items-center gap-2">
                <Heart className="w-5 h-5 inline-block" />
                Why It Matters
              </h4>
              <p className="text-sm leading-relaxed">
                Early detection of vaginal cancer improves treatment success and overall outcomes. Regular check-ups and awareness of changes in your body are key to prevention.
              </p>
            </div>

          </div>

          {/* Final Thoughts */}
          <div className="bg-card p-4 rounded-lg border">
            <h4 className="leading-none font-semibold flex items-center gap-2">
              <Star className="w-5 h-5 inline-block" />
              Take Action
            </h4>
            <p className="text-sm leading-relaxed">
              Protect your health by getting vaccinated, attending regular check-ups, and addressing any unusual symptoms early. Your proactive care can make a real difference in prevention and early treatment of vaginal cancer.
            </p>
          </div>

          {/* Complete Guide Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(8);       // move to next card
                setActiveButton(7);   // index for this card
              }}
              className="inline-flex items-center justify-center hover:bg-[#FF4B8B]/80 bg-[#FF4B8B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 w-full">
              <Star className="w-4 h-4" />
              Learn More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Vaginalcard7;
