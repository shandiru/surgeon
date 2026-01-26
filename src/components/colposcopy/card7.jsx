"use client";
import { Users, Heart, Star, PlusCircle } from "lucide-react";

const Colposcopycard7 = () => {
  return (
    <div className="space-y-6">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-black mx-auto mb-10 flex flex-col gap-6 rounded-xl border border-light-pink-2 py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 ">
          <div className="leading-none font-semibold flex items-center gap-2 text-primary-pink">
            <Users className="w-6 h-6 text-primary" />
            Emotional Wellbeing
          </div>
          <div className="text-muted-foreground text-sm">
            It's normal to feel nervous - you're not alone
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          {/* Your Feelings Matter */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary-pink">
            <h4 className="leading-none font-semibold flex items-center gap-2 text-primary-pink">
              <Heart className="w-5 h-5 inline-block" />
              Your Feelings Matter
            </h4>
            <p className="text-sm leading-relaxed">
              It's completely normal to feel nervous or worried before a colposcopy. Many people
              experience anxiety about medical procedures, and that's okay.
            </p>
          </div>

          {/* Ways to Feel More Comfortable */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary-pink">Ways to Feel More Comfortable</h4>
              <div className="space-y-2">
                {[
                  "Ask for a chaperone during the exam",
                  "Bring a friend or family member for support",
                  "Write down questions beforehand",
                  "Practice relaxation breathing",
                  "Talk to your nurse or doctor about worries",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <PlusCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0 text-primary-pink" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Remember */}
            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="leading-none font-semibold flex items-center gap-2 text-primary-pink">
                <Heart className="w-5 h-5 inline-block" />
                Remember
              </h4>
              <ul className="text-sm space-y-2">
                <li>• Colposcopy is safe, quick, and effective</li>
                <li>• It helps detect problems early</li>
                <li>• Regular screening protects your health</li>
                <li>• Your healthcare team is here to support you</li>
              </ul>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="bg-card p-4 rounded-lg border border-primary-pink">
            <h4 className="leading-none font-semibold flex items-center gap-2 text-primary-pink">
              <Star className="w-5 h-5 inline-block" />
              Final Thoughts
            </h4>
            <p className="text-sm leading-relaxed">
              If you've been referred for a colposcopy, try not to worry. This procedure is a
              positive step in taking care of your health. Your medical team will support you every
              step of the way, and you can always ask questions or express concerns.
            </p>
          </div>

          {/* Complete Guide Button */}
          <div className="pt-4">
            <button className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer">
              <Star className="w-4 h-4" /> {/* Added the Star icon */}
              Complete Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colposcopycard7;
