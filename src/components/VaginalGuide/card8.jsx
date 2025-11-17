'use client';
import { Lightbulb, Star, CheckCircle2 } from 'lucide-react';

const Vulvarcard8 = ({ setShowCard, setActiveButton }) => {
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
            Important points to remember about Vaginal Cancer
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
              Vaginal cancer is rare but can be serious. Early detection through regular gynecological exams and awareness of symptoms—such as abnormal bleeding, unusual discharge, or pelvic pain—greatly improves treatment outcomes.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Key Points to Remember</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Early detection significantly improves treatment success",
                "Report unusual bleeding, discharge, or pelvic pain promptly",
                "Regular gynecological check-ups help detect changes early",
                "HPV vaccination can reduce the risk of vaginal cancer",
                "Being aware of vaginal health is crucial for prevention"
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
              Staying alert to changes, attending regular check-ups, and seeking medical help early if symptoms appear are key steps to protect your vaginal health and improve outcomes in case of vaginal cancer.
            </p>
          </div>

          {/* Finish Button */}
          <div className="pt-4">
            <button className="inline-flex items-center justify-center hover:bg-[#FF4B8B]/80 bg-[#FF4B8B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-9 px-4 py-2 w-full">
              <Star className="w-4 h-4" /> {/* Added the Star icon */}
              Complete Guide
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Vulvarcard8;
