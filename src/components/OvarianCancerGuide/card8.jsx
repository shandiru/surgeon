'use client';
import { Lightbulb, Star, CheckCircle2 } from 'lucide-react';

const OvarianCancerGuidecard8 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">

      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">

        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-primary" />
            Key Takeaway
          </div>
          <p className="text-muted-foreground text-sm">
            The most important points to remember
          </p>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-5">

          {/* Highlight Section */}
          <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
            <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
              <Star className="w-5 h-5" />
              What You Should Know
            </h3>

            <p className="text-sm leading-relaxed">
              Ovarian cancer is often called a “silent” cancer because symptoms can be subtle 
              and mistaken for common digestive issues. Early detection dramatically improves 
              treatment success, which is why awareness of symptoms is so essential.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Key Points to Remember</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Persistent bloating, pelvic pain, or feeling full quickly should not be ignored",
                "Ovarian cancer symptoms are often vague—tracking changes over time is important",
                "Family history and genetic factors (BRCA1/BRCA2) significantly increase risk",
                "There is no reliable screening test, so symptom awareness is essential",
                "Early medical evaluation leads to better outcomes"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Final Section */}
          <div className="bg-card border p-4 rounded-lg">
            <h4 className="font-semibold flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Final Message
            </h4>
            <p className="text-sm leading-relaxed mt-1">
              Ovarian cancer can be difficult to detect early, but knowing the symptoms, understanding 
              your risk factors, and seeking medical advice if something feels unusual are powerful 
              steps in protecting your health.
            </p>
          </div>

          {/* ⭐ COMPLETE GUIDE BUTTON ONLY */}
          <div className="pt-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center hover:bg-[#FF4B8B]/80 bg-[#FF4B8B] 
              gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full text-white"
            >
              <Star className="w-4 h-4" />
              Complete Guide
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OvarianCancerGuidecard8;
