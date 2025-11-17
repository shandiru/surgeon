'use client';
import { Lightbulb, Star, CheckCircle2 } from 'lucide-react';

const VulvarGuidecard8 = ({ setShowCard, setActiveButton }) => {
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
              Vulvar cancer is rare but serious. Early diagnosis leads to the best outcomes,
              which is why understanding symptoms and staying aware of changes is so important.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Key Points to Remember</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Early detection greatly improves treatment success",
                "Persistent itching, lumps, or skin changes should never be ignored",
                "Regular check-ups help spot changes early",
                "HPV protection reduces risk",
                "Awareness of your vulvar skin is the first step in prevention"
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
              Staying aware, getting regular check-ups, and seeking help early if something
              feels unusual can make a powerful difference in protecting your health.
            </p>
          </div>

          {/* ⭐ COMPLETE GUIDE BUTTON ONLY */}
          <div className="pt-4">
            <button
              className="inline-flex items-center justify-center hover:bg-[#FF4B8B]/80 bg-[#FF4B8B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full text-white"
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

export default VulvarGuidecard8;
